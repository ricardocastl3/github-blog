import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";
import { appConfig } from "../@variables/default";

export interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  public_repos: number;
}

export interface IPost {
  id: string;
  number: number;
  body: string;
  title: string;
  created_at: string;
  comments: number;
}

interface UserContextProps {
  user: IUser;
  posts: IPost[];
  searchIssues: (query: string) => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<IUser>({
    avatar_url: "",
    bio: "",
    followers: 0,
    name: "",
    public_repos: 0,
  });
  const [posts, setPosts] = useState([]);

  async function getIssues() {
    try {
      const response = await api.get(appConfig.default_repo);
      setPosts(response.data);
    } catch {
      return console.log("Alguma coisa aconteceu....");
    }
  }

  async function fetchUser() {
    try {
      const response = await api.get(appConfig.userdetails);
      setUser(response.data);
    } catch {
      return console.log("Alguma coisa aconteceu....");
    }
  }

  async function searchIssues(query: string) {
    try{
      const response = await api.get(`https://api.github.com/search/issues`, {
        params: {
          q: `${query} repo:ricardocastl3/github-blog`,
        },
      });
  
      setPosts(response.data.items);
    }catch{
      console.log("Postagem não encontrada!")
    }
  }

  useEffect(() => {
    fetchUser()
    getIssues()
  }, []);

  return (
    <UserContext.Provider value={{ user, posts, searchIssues }}>
      {children}
    </UserContext.Provider>
  );
}
