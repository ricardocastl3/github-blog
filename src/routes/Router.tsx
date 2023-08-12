import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Posts } from "../pages/Posts";
import { ReadPost } from "../pages/ReadPost";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts">
          <Route path="/posts" element={<Posts />} />
          <Route path=":postId" element={<ReadPost />} />
        </Route>
      </Route>
    </Routes>
  );
}
