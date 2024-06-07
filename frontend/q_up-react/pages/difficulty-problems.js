import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
import DifficultyMainProblemTable from "../components/DifficultyProblemPage/DifficultyMainProblemTable";

const tagProblemData = [
  { name: "B5", count: 6180 },
  { name: "B4", count: 3690 },
  { name: "B3", count: 3690 },
  { name: "B2", count: 3690 },
  { name: "B1", count: 3690 },
  { name: "S5", count: 6180 },
  { name: "S4", count: 3690 },
  { name: "S3", count: 3690 },
  { name: "S2", count: 3690 },
  { name: "S1", count: 3690 },
  { name: "G5", count: 6180 },
  { name: "G4", count: 3690 },
  { name: "G3", count: 3690 },
  { name: "G2", count: 3690 },
  { name: "G1", count: 3690 },
  { name: "P5", count: 6180 },
  { name: "P4", count: 3690 },
  { name: "P3", count: 3690 },
  { name: "P2", count: 3690 },
  { name: "P1", count: 3690 },
  { name: "D5", count: 6180 },
  { name: "D4", count: 3690 },
  { name: "D3", count: 3690 },
  { name: "D2", count: 3690 },
  { name: "D1", count: 3690 },
  { name: "R5", count: 6180 },
  { name: "R4", count: 3690 },
  { name: "R3", count: 3690 },
  { name: "R2", count: 3690 },
  { name: "R1", count: 3690 },
];

const TagProblems = () => {
  return (
    <Layout>
      <Title sentence={"- 난이도별 벗들이 안 푼 문제 -"} />
      <DifficultyMainProblemTable problems={tagProblemData} />
    </Layout>
  );
};

export default TagProblems;
