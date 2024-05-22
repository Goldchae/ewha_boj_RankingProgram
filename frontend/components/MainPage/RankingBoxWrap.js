import styled from "styled-components";
import RankingBox from "./RankingBox";
import React, { useEffect, useState } from "react";

const RankingBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  transition: visibility 0s, opacity 0.5s linear;
`;

const RankingBoxWrap = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RankingBoxContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <RankingBox title="현재 백준 단체 랭킹 순위" rankingNum="122위" />
      <RankingBox title="121위 : LG CNS와의 차이" rankingNum="N문제" />
    </RankingBoxContainer>
  );
};

export default RankingBoxWrap;
