import Layout from "../components/Layout/Layout";
import Title from "../components/MainPage/Title";
import RankingBoxWrap from "../components/MainPage/RankingBoxWrap";
import TodayProblemWrap from "../components/MainPage/TodayProblemWrap";

const todayProblems = [
  {
    title: "골드",
    problems: [
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
    ],
  },
  {
    title: "실버",
    problems: [
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
    ],
  },
  {
    title: "브론즈",
    problems: [
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : celina324" },
      { name: "1000 : 우주 정복", status: "해결 예정자 : 등록하기" },
    ],
  },
];

const Home = () => {
  return (
    <Layout>
      <Title />
      <RankingBoxWrap />
      <TodayProblemWrap problems={todayProblems} />
    </Layout>
  );
};

export default Home;
