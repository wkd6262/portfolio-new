import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store"; // AppDispatch 타입 임포트
import { setColor, setScroll } from "../theme/themeSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

const DarkMode = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentColor = useSelector((state: RootState) => state.theme.color); // 현재 색상 가져오기
  const scrollColor = useSelector((state: RootState) => state.theme.scroll); // 현재 색상 가져오기
  const isDarkMode = currentColor === "#232323" && scrollColor === "#232323"; // 다크모드 여부 확인
  const [isDark, setIsDark] = useState<boolean>(isDarkMode); // 다크모드 초기 상태 설정

  const Check = styled(motion.div)<{ checked: boolean; color: string }>`
    transition: 0.3s;
    width: 2.5vw;
    height: 2.5vw;
    border: 2px solid ${({ color }) => color}; // Redux에서 가져온 색상 적용
    border-radius: 50vw;
    margin-right: 2vw;
    background-color: ${({ checked, color }) =>
      checked ? color : "transparent"}; // 다크모드일 때 색상 채우기
    cursor: pointer;
    &:hover {
      background-color: ${({ color }) => color}; // Redux에서 가져온 색상 적용
      border: none;
    }
  `;

  const handleDark = () => {
    if (isDark) {
      dispatch(setColor("#3f68fe")); // 밝은 색으로 변경
      dispatch(setScroll("#9eb3fe")); // 밝은 색으로 변경
    } else {
      dispatch(setColor("#232323")); // 어두운 색으로 변경
      dispatch(setScroll("#434343")); // 어두운 색으로 변경
    }
    setIsDark(!isDark); // 상태 반전
  };

  return (
    <Check
      color={currentColor}
      onClick={handleDark}
      checked={isDark} // 다크모드 상태에 따라 체크 상태 결정
    />
  );
};

export default DarkMode;
