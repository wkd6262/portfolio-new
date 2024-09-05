import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store"; // RootState 타입 임포트
import DarkMode from "../../redux/theme/DarkMode";

const IntroBox = styled.div<{ color: string }>`
  width: 100%;
  background-color: ${({ color }) => color}; // Redux에서 가져온 색상 적용
  height: 100vh;
  position: sticky;
  z-index: 1;
  top: 0;
  transition: 0.5s;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TxtBox = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 0;
  margin-top: 10vw;
`;

const Title = styled.h1`
  position: relative;
  top: 2vw;
`;

const SubTitle = styled(motion.p)<{ color: string }>`
  font-size: 3vw;
  font-weight: bold;
  color: ${({ color }) => color}; // Redux에서 가져온 색상 적용
`;

const CircleBox = styled(motion.div)`
  background-color: #fff;
  width: 45vw;
  height: 95vh;
  border-radius: 100vw;
  margin: 0 auto;
`;

const StyledLetter = styled(motion.h1)<{ color: string }>`
  display: inline-block;
  font-size: 11vw;
  -webkit-text-stroke: 2px ${({ color }) => color}; // Redux에서 가져온 색상 적용
  color: transparent;
  font-weight: 900;
`;

const containerVariant: Variants = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1 },
  },
  hidden: {
    opacity: 0,
  },
};

const letterVariant: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
};

const CheckBox = styled(motion.div)`
  width: 40vw;
  position: absolute;
  bottom: 3vw;
  display: flex;
  justify-content: space-around;
`;

const CheckBox2 = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Check = styled(motion.div)<{ color: string }>`
  transition: 0.3s;
  width: 2.5vw;
  height: 2.5vw;
  border: 2px solid ${({ color }) => color}; // Redux에서 가져온 색상 적용
  border-radius: 50vw;
  margin-right: 2vw;
  cursor: pointer;
  &:hover {
    background-color: ${({ color }) => color}; // Redux에서 가져온 색상 적용
    border: none;
  }
`;

const CheckText = styled(motion.p)<{ color: string }>`
  font-size: 1.25rem;
  color: ${({ color }) => color}; // Redux에서 가져온 색상 적용
`;

const Intro = () => {
  const color = useSelector((state: RootState) => state.theme.color); // Redux에서 색상 가져오기
  const text = "Front-End";

  return (
    <IntroBox color={color}>
      <Flex>
        <CircleBox
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 1,
            delay: 0.3,
            ease: [0.3, 0.71, 0.2, 1.01],
          }}
        />
        <TxtBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.3, 0.71, 0.2, 1.01],
          }}
        >
          <Title>
            {" "}
            <motion.h1
              whileInView="visible"
              initial="hidden"
              variants={containerVariant}
            >
              {Array.from(text).map((letter, index) => (
                <StyledLetter
                  key={index}
                  variants={letterVariant}
                  color={color}
                >
                  {letter === " " ? "\u00A0" : letter}
                </StyledLetter>
              ))}
            </motion.h1>
          </Title>
          <SubTitle
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 1,
              delay: 0.3,
              ease: [0.3, 0.71, 0.2, 1.01],
            }}
            color={color}
          >
            프론트엔드 개발자 장원준입니다.
          </SubTitle>
        </TxtBox>
        <CheckBox
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 1,
            delay: 2,
            ease: [0.3, 0.71, 0.2, 1.01],
          }}
        >
          <CheckBox2>
            <DarkMode />

            {/* <Check color={color}></Check> */}
            <CheckText color={color}>어둡게</CheckText>
          </CheckBox2>
          <CheckBox2>
            <Check color={color} />
            <CheckText color={color}>간단하게</CheckText>
          </CheckBox2>
        </CheckBox>
      </Flex>
    </IntroBox>
  );
};

export default Intro;
