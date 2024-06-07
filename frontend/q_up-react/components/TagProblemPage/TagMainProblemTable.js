import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// 초록 배경
const WrapContainer = styled.div`
  padding: 20px 40px 40px 40px;
  margin: 30px auto;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;
  width: 30%;
`;

// 표
const Table = styled.table`
  font-size: 1.3rem;
  width: 90%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;
  margin: 0 auto; /* 가운데 정렬!! */
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
`;

const TagMainProblemTable = ({ problems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleRowClick = (name) => {
    router.push(`/tag-problems/${name}`);
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
            <th>알고리즘 분류</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index} onClick={() => handleRowClick(problem.name)}>
              <td>{problem.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </WrapContainer>
  );
};

export default TagMainProblemTable;
