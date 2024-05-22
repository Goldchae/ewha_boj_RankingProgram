import styled from "styled-components";

const BoxContainer = styled.div`
  width: 350px;
  height: 170px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05); /* 반투명 검정색 배경 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  margin: 20px;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: black;
  top: ${(props) => (props.position === "top" ? "0" : "auto")};
  bottom: ${(props) => (props.position === "bottom" ? "0" : "auto")};
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => (props.position === "top" ? "-4px" : "auto")};
  bottom: ${(props) => (props.position === "bottom" ? "-4px" : "auto")};
  left: -4px;
`;

const CircleRight = styled(Circle)`
  left: auto;
  right: -4px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: left;
`;

const RankingNum = styled.div`
  font-size: 4rem;
  font-weight: 400;
  text-align: left;
`;

const RankingBox = ({ title, rankingNum }) => {
  return (
    <BoxContainer>
      <Line position="top">
        <Circle position="top" />
        <CircleRight position="top" />
      </Line>
      <div style={{ margin: "12px 10px 12px 18px" }}>
        <Title>{title}</Title>
        <RankingNum>{rankingNum}</RankingNum>
      </div>
      <Line position="bottom">
        <Circle position="bottom" />
        <CircleRight position="bottom" />
      </Line>
    </BoxContainer>
  );
};

export default RankingBox;
