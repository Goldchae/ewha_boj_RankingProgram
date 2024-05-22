import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: url("/images/background.svg") no-repeat top center fixed;
  background-size: cover;
`;

const MainContent = styled.main`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 메인 콘텐츠 수직 가운데 정렬 */
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
