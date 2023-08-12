import { useContextSelector } from "use-context-selector";
import { SideAvatar, SidebarContainer } from "./styles";
import { PiUserBold, PiFolderDuotone } from "react-icons/pi";
import { UserContext } from "../../contexts/UserContext";

export function Sidebar() {
  const user = useContextSelector(UserContext, (context) => context.user);

  return (
    <SidebarContainer>
      <div>
        <SideAvatar>
          <img src={user.avatar_url} />
          <div>
            <strong>{user.name}</strong>
            <h2>FullStack Developer</h2>
          </div>
        </SideAvatar>
        <div>
          <small>
            🔵 Com experiência de +6 anos no desenvolvimento de softwares, sou
            desenvolvedor FullStack, e como outras paixões tenho o
            desenvolvimento de jogos, modelos de machine learning, inteligência
            artificial e aplicações móveis, sempre pensando em novas formas de
            impactar o usuário fornecendo uma experiência única, acessível e
            completa.
          </small>
          <section>
            <label>
              <PiUserBold />
              <span>{user.followers}</span>
              followers
            </label>
            <label>
              <PiFolderDuotone />
              <span>{user.public_repos}</span>
              repositories
            </label>
          </section>
        </div>
      </div>
      <div></div>
    </SidebarContainer>
  );
}
