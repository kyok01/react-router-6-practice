import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Outlet />
    </div>
  );
}

export default Posts;