import Layout from "../components/Layout/Layout";
import Title from "../components/Title";
import EwhaRankingTable from "../components/EwhaRankingPage/EwhaRankingTable";

const ewhaRankingData = [
  {
    rank_ingroup: 1,
    handle: "celina324",
    tier: "P5",
    solved_num: "1000",
    userlink: "https://solved.ac/profile/celina324",
  },
  {
    rank_ingroup: 2,
    handle: "celina324",
    tier: "P5",
    solved_num: "1000",
    userlink: "https://solved.ac/profile/celina324",
  },
  {
    rank_ingroup: 3,
    handle: "celina324",
    tier: "P5",
    solved_num: "1000",
    userlink: "https://solved.ac/profile/celina324",
  },
  {
    rank_ingroup: 4,
    handle: "celina324",
    tier: "P5",
    solved_num: "1000",
    userlink: "https://solved.ac/profile/celina324",
  },
  {
    rank_ingroup: 5,
    handle: "celina324",
    tier: "P5",
    solved_num: "1000",
    userlink: "https://solved.ac/profile/celina324",
  },
];

const EwhaRanking = () => {
  return (
    <Layout>
      <Title sentence={"- 이화여대 랭킹 -"} />
      <EwhaRankingTable ewhaRankingData={ewhaRankingData} />
    </Layout>
  );
};

export default EwhaRanking;
