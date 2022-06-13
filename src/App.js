import "./App.css";
import {
  Routes,
  Route,
  // Link,
  NavLink,
  Outlet,
  // useMatch,
  // useResolvedPath
} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Post from "./routes/post";
import NoMatch from "./routes/nomatch";
import PostIndex from "./routes/postindex";

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact message="Hello Contact" />}
          />
        </Route>
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<Post />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

const Layout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Outlet />
    </div>
  );
};

// function CustomLink({ children, to, ...props }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <div>
//       <Link style={{ color: match ? "blue" : "none" }} to={to} {...props}>
//         {children}
//       </Link>
//     </div>
//   );
// }
