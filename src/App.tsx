import "./assets/reset/reset.scss";
import "./assets/font/font.css";
import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";
import Scroll from "./components/framer-motion/Scroll";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    /* 전체 스크롤바 디자인 */
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: #fefefe;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #3f68fe;
      border-radius: 6px;
      border: 3px solid #fefefe;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #9eb3fe;
    }
  `;

  return (
    <>
      <Scroll />
      <GlobalStyle />
      <Intro />
      <Main />
    </>
  );
}

export default App;
