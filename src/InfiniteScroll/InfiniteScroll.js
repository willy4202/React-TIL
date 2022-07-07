import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const API_KEY = "8f315c9787c0d2e3bdb126d07e5b94ac";
const GET_IMAGE = "http://image.tmdb.org/t/p/w500";

const InfiniteScroll = () => {
  const [movies, setMovies] = useState([]);
  const observerRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [movies]);

  const intersectionObserver = (entires, intersection) => {
    entires.forEach((entry) => {
      if (entry.isIntersecting) {
        intersection.unobserve(entry.target);
        getData();
        console.log("Loaded new items");
      }
    });
  };

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=2`
    );
    const data = await response.json();
    setMovies((prev) => [...prev, ...data.results]);
  };

  // console.log(movies);

  /*  무한스크롤 구현 시도 - 1 
      let options = {
        root: document.querySelector("#scrollArea"),
        // 타겟 요소의 가시성을 확인할 때 사용되는 루트 요소입니다. 이것은 타겟 요소보다 상위 요소, 즉 요소의 조상 요소이어야 합니다.
        // 설정하지 않거나 root 값을 null 로 주었을 때 기본 값으로 브라우저 뷰포트가 설정됩니다.
        rootMargin: "0px",
        // margin 을 주어 루트 요소의 범위를 확장할 수 있습니다. 즉 확장된 영역 안에 타겟 요소가 들어가면 가시성에 변화가 생깁니다.
        // CSS 의 margin 과 유사하게 top, right, bottom, left 의 margin 정도롤 각각 설정할 수 있습니다.
        // 기본 값은 0이며 따로 설정 시 단위를 꼭 입력해야합니다.
        threshold: 0.5,
        //콜백이 실행될 타겟 요소의 가시성 퍼센티지를 나타내는 단일 숫자 및 숫자 배열이 들어갈 수 있습니다.
        // 즉, 요소의 top, bottom 이 노출된 순간만 콜백을 실행할 수 있는 것이 아니라 어느정도 타겟 요소가 보여졌는 지에 따라서도 콜백을 호출할 수 있습니다.
        // 예를 들어 요소가 50%만큼 보여졌을 때 탐지하고 싶다면 단일 숫자 값 0.5 를 설정하면 됩니다.
        // 은 25% 단위로 가시성이 변경될 때마다 콜백이 실행되게 하고 싶다면 [0, 0.25, 0.5, 0.75, 1] 을 설정하면 됩니다.
        // 지금은 스크롤을 하면서 불러올것이기 때문에 0.5정도로 설정해두겠습니다.
      };

      //  console.log(options);
      let observer = new IntersectionObserver(callback, options);

      let target = document.querySelector("#listItem");
      observer.observe(target);

      let callback = (entries, observer) => {
        entries.foreEach((entry) => {
          if (entry.intersectionRatio <= 0) return;
        });
      };
  */

  return (
    <Layout>
      <header>
        <h1>welcome InfiniteScroll</h1>
      </header>

      <aside>
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
      </aside>
      <aside>
        <h2>기술 선택 이유</h2>
        <h3>- IntersectionObserver API</h3>
        <ul>
          <li>
            인터섹션 api는 디바운스, 쓰로틀을 사용하지 않아도 되고, reflow현상이
            발견되지 않기 때문에 해당 api를 사용해서 구현합니다.
          </li>
          <li>
            Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위
            document 의 viewport 사이의 intersection 내의 변화를 비동기적으로
            관찰하는 방법입니다.
          </li>
          <li>
            Intersection Observer API 는 루트 요소와 타겟 요소의 교차점을
            관찰합니다. 그리고 타겟 요소가 루트 요소와 교차하는지 아닌지를
            구별하는 기능을 제공하고 있습니다. scroll 이벤트와 다르게 교차 시
            비동기적으로 실행되며 가시성 구분 시 reflow 를 발생시키지 않습니다.
            여러모로 성능상 유리합니다.
          </li>
          <li>
            무한 스크롤은 페이지 하단 영역까지 스크롤될 경우 다른 컨텐츠를
            새롭게 로딩해 페이지에 추가되는 방식입니다. 스크롤 액션 하나로 많은
            양의 컨텐츠를 보여줄 수 있어 사용자 이탈을 막을 수 있는 장점이
            있습니다.
          </li>
        </ul>
      </aside>
      <h1>InfiniteScroll Example</h1>
      <MovieLayout>
        {movies.length !== 0 &&
          movies.map(({ id, poster_path, original_title, overview }, index) => {
            return (
              <Post key={index} ref={boxRef}>
                <Image src={`${GET_IMAGE}${poster_path}`} alt="영화포스터" />
                <h4>{original_title}</h4>
                <Overview>{overview}</Overview>
              </Post>
            );
          })}
      </MovieLayout>
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

const MovieLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  grid-gap: 30px;
`;

const Post = styled.article`
  width: 300px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 420px;
`;

const Overview = styled.div`
  font-size: 14px;
  color: gray;
`;
