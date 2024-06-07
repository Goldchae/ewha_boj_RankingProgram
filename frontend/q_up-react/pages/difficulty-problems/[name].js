import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title";
import DifficultyDetailProblemTable from "../../components/DifficultyProblemPage/DifficultyDetailProblemTable";

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

const tagProblemsDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 알고리즘 넘버변경
  const tierNumber = (name) => {
    const tier = tierNumList.find((tier) => tier.name === name);
    return tier ? tier.num : null;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/problems/tier?tier=${tierNumber(name)}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("데이터를 불러오는 중 에러가 발생했습니다.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Title sentence={`- ${name} -`} />
      <DifficultyDetailProblemTable ProblemData={data} />
    </Layout>
  );
};

export default tagProblemsDetail;
