import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title";
import TagDetailProblemTable from "../../components/TagProblemPage/TagDetailProblemTable";

const tagProblemsDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/problems/algo?tag=${name}`
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
      <TagDetailProblemTable ProblemData={data} />
    </Layout>
  );
};

export default tagProblemsDetail;
