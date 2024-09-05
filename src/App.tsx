import "./assets/reset/reset.scss";
import "./assets/font/font.css";
import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";
import Scroll from "./components/framer-motion/Scroll";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";

function App() {
  const GlobalStyle = createGlobalStyle<{ color: string }>`
    /* 전체 스크롤바 디자인 */
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: #fefefe;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ color }) => color};
      border-radius: 6px;
      border: 3px solid #fefefe;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #9eb3fe;
    }
  `;
  const color = useSelector((state: RootState) => state.theme.color); // Redux에서 색상 가져오기

  return (
    <>
      <Scroll />
      <GlobalStyle color={color} />
      <Intro />
      <Main />
    </>
  );
}

export default App;
