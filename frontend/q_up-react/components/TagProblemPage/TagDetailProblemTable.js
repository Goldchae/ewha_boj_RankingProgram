import styled from "styled-components";
import React, { useEffect, useState } from "react";

// 초록 배경
const WrapContainer = styled.div`
  padding: 20px 40px 40px 40px;
  margin: 30px auto;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;
  width: 80%;
`;

// 표
const Table = styled.table`
  font-size: 1.3rem;
  width: 90%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
  }

  th {
    font-weight: bold;
    background-color: rgba(47, 129, 65, 0.2);
  }

  th:first-child,
  td:first-child {
    padding-left: 10px;
  }

  th:last-child,
  td:last-child {
  }
`;

const StyledLink = styled.a`
  color: green;

  &:hover {
    color: #a0d468;
  }
`;

const tierNumList = [
  { name: "B5", num: 1 },
  { name: "B4", num: 2 },
  { name: "B3", num: 3 },
  { name: "B2", num: 4 },
  { name: "B1", num: 5 },
  { name: "S5", num: 6 },
  { name: "S4", num: 7 },
  { name: "S3", num: 8 },
  { name: "S2", num: 9 },
  { name: "S1", num: 10 },
  { name: "G5", num: 11 },
  { name: "G4", num: 12 },
  { name: "G3", num: 13 },
  { name: "G2", num: 14 },
  { name: "G1", num: 15 },
  { name: "P5", num: 16 },
  { name: "P4", num: 17 },
  { name: "P3", num: 18 },
  { name: "P2", num: 19 },
  { name: "P1", num: 20 },
  { name: "D5", num: 21 },
  { name: "D4", num: 22 },
  { name: "D3", num: 23 },
  { name: "D2", num: 24 },
  { name: "D1", num: 25 },
  { name: "R5", num: 26 },
  { name: "R4", num: 27 },
  { name: "R3", num: 28 },
  { name: "R2", num: 29 },
  { name: "R1", num: 30 },
];

const TagDetailProblemTable = ({ ProblemData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const tierName = (num) => {
    const tier = tierNumList.find((tier) => tier.num == num);
    return tier ? tier.name : null;
  };

  return (
    <WrapContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>티어</th>
            <th>번호</th>
            <th>솔브닥 제목</th>
            <th>푼 사람 수</th>
            <th>푼 문제 링크</th>
          </tr>
        </thead>
        <tbody>
          {ProblemData.result &&
            ProblemData.result.map((ProblemData, index) => (
              <tr key={index}>
                <td>{tierName(ProblemData.tier)}</td>
                <td>{ProblemData.pid}</td>
                <td>{ProblemData.p_title}</td>
                <td>{ProblemData.solvednum}</td>
                <td>
                  <StyledLink
                    href={ProblemData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ProblemData.link}
                  </StyledLink>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </WrapContainer>
  );
};

export default TagDetailProblemTable;
