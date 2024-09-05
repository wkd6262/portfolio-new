import { motion, useScroll } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store/store";

const Styled = styled(motion.div)<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.25vw;
  z-index: 9999;
  background-color: ${({ color }) => color};
  transform-origin: left;
`;

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scrollColor = useSelector((state: RootState) => state.theme.scroll); // Redux에서 스크롤 색상 가져오기
  return <Styled style={{ scaleX: scrollYProgress }} color={scrollColor} />;
}
