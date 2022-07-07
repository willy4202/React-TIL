import React from "react";
import styled from "styled-components";

const InfiniteScroll = () => {
  fetch(
    " http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=0460926fdea8bad48e2a5e8c8baf33a0&itemPerPage=100"
  )
    .then((res) => res.json())
    .then((item) => console.log(item));

  return (
    <Layout>
      <header>
        <h1>welcome InfiniteScroll</h1>
      </header>

      <article>
        <h2>무한 스크롤의 장점</h2>
        무한 스크롤은 사용자가 페이지 하단에 도달했을 때, 콘텐츠가 계속 로드되는
        사용자 경험(UX) 방식입니다. 한 페이지 아래로 스크롤 하면 끝없이 새로운
        화면을 보여주게 되고 이로 인해 많은 양의 콘텐츠를 스크롤 해서 볼 수
        있습니다.
        <ul>
          <li>무한 스크롤의 장점 사용자 참여 및 콘텐츠 탐색이 쉽습니다.</li>
          <li>
            무한 스크롤이 클릭하는 것보다 더 나은 사용자 경험을 제공합니다.
            <ol>
              → 다음 콘텐츠를 보기 위한 추가 클릭이 필요없고 페이지 로드 시간이
              짧습니다.
            </ol>
          </li>
          <li>
            터치스크린(모바일)일때 더 유용하게 적용됩니다.
            <ol>
              → 화면이 작을수록 스크롤은 길어지기에 모바일 환경에서 콘텐츠를
              보여주기 직관적인 형식 입니다.
            </ol>
          </li>
        </ul>
        <h2>무한 스크롤의 단점</h2>
        <ul>
          <li>페이지 성능이 느려집니다.</li>
          <li>특정 항목 검색 및 원래 위치로 되돌아오기 힘듭니다.</li>
          <li>스크롤 막대가 실제 데이터양을 반영하지 못합니다. </li>
          <li>푸터를 찾기 어려워집니다.</li>
        </ul>
      </article>
      <main>
        <h2>기술 선택 이유</h2>
        <h3>- IntersectionObserver API</h3>
        <div>
          인터섹션 api는 디바운스, 쓰로틀을 사용하지 않아도 되고, reflow현상이
          발견되지 않기 때문에 해당 api를 사용해서 구현합니다.
        </div>
      </main>
    </Layout>
  );
};

export default InfiniteScroll;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
