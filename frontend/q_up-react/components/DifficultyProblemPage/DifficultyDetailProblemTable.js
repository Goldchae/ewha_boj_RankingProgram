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

const DifficultyDetailProblemTable = ({ ProblemData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

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

export default DifficultyDetailProblemTable;
