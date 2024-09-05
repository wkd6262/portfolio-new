import styled from "styled-components";

const Main = () => {
  const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fefefe;
    position: sticky;
    z-index: 2;
    top: 0;
  `;
  return (
    <Main>
      <h1>메인입니다.</h1>
    </Main>
  );
};

export default Main;
