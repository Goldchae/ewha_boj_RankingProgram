import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
import TagMainProblemTable from "../components/TagProblemPage/TagMainProblemTable";

const tagProblemData = [
  { name: "math" },
  { name: "implementation" },
  { name: "greedy" },
  { name: "string" },
  { name: "data_structures" },
  { name: "graphs" },
  { name: "dp" },
  { name: "geometry" },
];

const TagProblems = () => {
  return (
    <Layout>
      <Title sentence={"- 분류별 벗들이 안 푼 문제 -"} />
      <TagMainProblemTable problems={tagProblemData} />
    </Layout>
  );
};

export default TagProblems;
