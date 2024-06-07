import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  color: #156827;
  margin: 10px;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: #156827;
  margin: 10px;
`;

const Member = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: #156827;
  margin: 30px 10px 10px 10px;
`;

const Footer = () => {
  return (
    <div style={{ padding: "30px 30px 30px 60px" }}>
      <Title>이화여자대학교 백준 랭킹 사이트 : 뀨업</Title>
      <SubTitle>데이터베이스 팀 뀨엘</SubTitle>
      <Member>박세은 | 정은채 | 정소은 | 정희원 | 최이경 </Member>
    </div>
  );
};

export default Footer;
