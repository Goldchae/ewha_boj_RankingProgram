import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
import EwhaRankingTable from "../components/EwhaRankingPage/EwhaRankingTable";

const EwhaRanking = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/studentRank");
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
      <Title sentence={"- 이화여대 랭킹 -"} />
      <EwhaRankingTable ewhaRankingData={data} />
    </Layout>
  );
};

export default EwhaRanking;
