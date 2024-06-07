import axios from "axios";
import React, { useEffect, useState } from "react";

import Layout from "../components/Layout/Layout";
import Title from "../components/MainPage/Title";
import RankingBoxWrap from "../components/MainPage/RankingBoxWrap";
import TodayProblemWrap from "../components/MainPage/TodayProblemWrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/main");
        setData(response.data);
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
        <Title />
        <RankingBoxWrap RankingBoxData={data} />
        <TodayProblemWrap rawData={data?.result} />
      </Layout>
  );
};

export default Home;
