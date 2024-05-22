import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
import ProblemTable from "../components/ProblemPage/ProblemTable";

const tagProblemData = [
  { name: "다이나믹 프로그래밍", count: 6180 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
  { name: "자료 구조", count: 3690 },
];

const TagProblems = () => {
  return (
    <Layout>
      <Title sentence={"- 분류별 벗들이 안 푼 문제 -"} />
      <ProblemTable problems={tagProblemData} />
    </Layout>
  );
};

export default TagProblems;
