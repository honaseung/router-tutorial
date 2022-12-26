import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigater = useNavigate();

  const goBack = () => {
    navigater(-1);
  };

  const goArticles = () => {
    navigater("/articles", { replace: true });
  };

  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 보러 가기</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
