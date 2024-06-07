import styled from "styled-components";
import React, { useEffect, useState } from "react";

const TitleSectionContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 61%;
  padding: 20px;
  box-sizing: border-box;
`;
const CenterText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  flex-grow: 1;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial";
  color: #156827;
`;

const Title = ({ sentence }) => {
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
      <CenterText>{sentence}</CenterText>
    </TitleSectionContainer>
  );
};

export default Title;
