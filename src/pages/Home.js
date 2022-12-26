import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/profiles/velopert">킹밍중</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">홍길동</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지않는</Link>
        </li>
        <li>
          <Link to="/articles">게시글 보러 가기</Link>
        </li>
      </ul>

      <Link to="/about">ABOUT</Link>
    </>
  );
};

export default Home;
