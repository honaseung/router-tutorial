import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`/articles/${id}`}
        >
          게시글 {id}
        </NavLink>
      </li>
    </>
  );
};

export default Articles;
