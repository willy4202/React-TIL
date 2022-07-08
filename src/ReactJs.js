import React from "react";
import styled from "styled-components";

const ReactJs = () => {
  return <Layout>Welcome ReactJs</Layout>;
};

export default ReactJs;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
