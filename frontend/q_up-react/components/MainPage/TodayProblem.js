import styled from "styled-components";
import React, { useState } from "react";

const ProblemContainer = styled.div`
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const TableWrapper = styled.div`
  text-align: right;
`;

const Table = styled.table`
  font-size: 1.3rem;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
  }

  td:first-child {
    padding-left: 50px;
  }

  td:last-child {
    text-align: right;
    padding-right: 50px;
  }
`;

const RegisterButton = styled.button`
  font-size: 1.1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const TodayProblem = ({ title, problems }) => {
  const [registrations, setRegistrations] = useState(problems.map(() => ""));

  const handleRegisterClick = (index) => {
    const name = prompt("백준 핸들을 입력하세요:");
    if (name) {
      const newRegistrations = [...registrations];
      newRegistrations[index] = name;
      setRegistrations(newRegistrations);
    }
  };

  return (
    <ProblemContainer>
      <Title>{title}</Title>
      <TableWrapper style={{ marginLeft: "60px" }}>
        <Table>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
                <td>
                  {problem.pid} : {problem.p_title}
                </td>
                <td>
                  {registrations[index] ? (
                    registrations[index]
                  ) : (
                    <RegisterButton onClick={() => handleRegisterClick(index)}>
                      등록하기
                    </RegisterButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ProblemContainer>
  );
};

export default TodayProblem;
