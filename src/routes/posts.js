import { Outlet } from "react-router-dom";
import PostIndex from './postindex';

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      {/* <PostIndex /> */}
      <Outlet />
    </div>
  );
}

export default Posts;