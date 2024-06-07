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

const TodayProblemWrap = ({ rawData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 데이터가 유효한지 확인
  if (!rawData) {
    return <div>No data available</div>;
  }

  // 데이터 구조 바꾸는 코드
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };
  const chunkedData = chunkArray(rawData.todayPSList, 5);
  const todayProblems = chunkedData.reduce((acc, chunk, index) => {
    const title = index === 0 ? "골드" : index === 1 ? "실버" : "브론즈";
    acc.push({ title, problems: chunk });
    return acc;
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
        {todayProblems.map((problemSet, index) => (
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
