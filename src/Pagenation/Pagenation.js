import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PagenationBtn from "./PagenationBtn";

const Pagenation = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h1>Welcome Pagenation</h1>
      </header>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}.{title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
      <footer>
        <PagenationBtn
          limit={limit}
          total={posts.length}
          setPage={setPage}
          page={page}
        />
      </footer>
    </Layout>
  );
};

export default Pagenation;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
