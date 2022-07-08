import React from "react";
import styled from "styled-components";

const Redux = () => {
  return (
    <Layout>
      <header>
        <h1>Welcome Redux</h1>
      </header>
      <article>
        <h2>사용 이유</h2>
        <div>
          리액트에서 상태관리를 위해 useState를 사용하는데, 이때 해당 스테이트는
          컴포넌트에 종속되게 됩니다. redux는 컴포넌트에 종속되지 않고 외부에서
          상태 관리를 할 수 있게 도와줍니다. root에서 store라는 곳에서 state를
          저장합니다. 모든 컴포넌트는 store를 바라보고 state와 setState를 함께
          전달받습니다.
        </div>
        <h2>장점</h2>
        <div>
          props drilling 탈출, 더 이상은 자식의 자식으로 props를 던질 필요가
          없습니다. 프롭스를 계속 던져주면, 디버깅하기도 어렵고, 뎁스가 깊어질
          수록 코드가 복잡해집니다. state를 사용하지 않음에도 중간 다리 역할을
          위해 props를 받던 컴포넌트는 더 이상 상관없는 props를 받지 않아도
          됩니다.
        </div>
        <h2>원리</h2>
        <div>
          리덕스는 flux 패턴을 따릅니다. 컴포넌트에서 dispatch라는 함수를 통해
          action이 발동하고 reducer에 정의된 로직에 따라 store의 state를
          변화시키는 방식입니다.
          <br />
          <br />
          contextAPI와 useReucer를 사용해서 만든 인증 로직이 생각나네요
        </div>
        <h2>react 패키지 설치</h2>
        <div>
          redux-devtools-extension은 크롬 확장 프로그램에서 redux dev tools를
          통해 설치 할 수 있고, redux의 데이터 흐름을 알아보기 쉽게 하기 위해
          사용합니다. redux-logger는 redux를 통해 바뀔 이전 state, dispatch
          실행으로 인해 바뀐 state가 콘솔에 찍혀 디버깅 쉽게 해주는
          라이브러리입니다.
        </div>
      </article>
    </Layout>
  );
};

export default Redux;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
