import styled from "styled-components";
import TodayProblem from "./TodayProblem";
import React, { useEffect, useState } from "react";

const WrapContainer = styled.div`
  padding: 20px 40px 40px 40px;
  margin: 30px;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: green;
  text-align: center;
`;

const TodayProblemWrap = ({ problems }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={isVisible ? "slide-up" : ""}
      style={{
        marginTop: "30px",
        width: "40%",
        alignItems: "center",

        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "visibility 0s, opacity 0.5s linear",
      }}
    >
      <Title>- 오늘의 문제 -</Title>
      <WrapContainer>
        {problems.map((problemSet, index) => (
          <TodayProblem
            key={index}
            title={problemSet.title}
            problems={problemSet.problems}
          />
        ))}
      </WrapContainer>
    </div>
  );
};

export default TodayProblemWrap;
