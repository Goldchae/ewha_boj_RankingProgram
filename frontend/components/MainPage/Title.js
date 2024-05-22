import styled from "styled-components";
import React, { useEffect, useState } from "react";

const TitleSectionContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 61%;
  padding: 20px;
  box-sizing: border-box;
  transition: visibility 0s, opacity 0.5s linear;
`;

const LeftText = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial";
`;

const CenterText = styled.div`
  font-size: 7rem;
  font-weight: 200;
  text-align: center;
  flex-grow: 1;
  font-family: "Times New Roman", Times, serif;
`;

const RightText = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial",
    sans-serif;
`;

const Title = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TitleSectionContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <LeftText>이화여자대학교 백준 랭킹 사이트 : 뀨업</LeftText>
      <CenterText>EWHA! LET’S GO UP!</CenterText>
      <RightText>모든 이화 PS러들을 환영합니다!</RightText>
    </TitleSectionContainer>
  );
};

export default Title;
