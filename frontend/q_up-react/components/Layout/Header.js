import styled, { css } from "styled-components";
import Link from "next/link";
import { FlexBox } from "../ui/flex-box";

const routes = [
  { title: "분류별 문제", href: "/tag-problems" },
  { title: "난이도별 문제", href: "/difficulty-problems" },
  { title: "함께 풀어요", href: "/together" },
  { title: "이화랭킹", href: "/ewha-ranking" },
];

const LogoWrapper = styled.div`
  width: 42px;
  height: 28px;
  cursor: pointer;
  z-index: 1001;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StyledHeader = styled.header`
  backdrop-filter: blur(3rem);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 75px;
  padding: 0 0 0 0;

  @media (max-width: 700px) {
    padding: 0 8vw;
  }
`;

const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <Link href="/">
        <div style={{ paddingLeft: "50px" }}>
          <LogoWrapper>
            <img src="/images/QL_logo.png" alt="logo" />
          </LogoWrapper>
        </div>
      </Link>

      <div style={{ paddingLeft: "20px" }}>
        <h4>뀨업</h4>
      </div>

      <div style={{ paddingLeft: "50px" }}></div>
      <div style={{ flexGrow: 1 }} />
      {routes.map(({ title, href }) => (
        <Link key={title} href={href}>
          <DesktopTopbarItem>{title}</DesktopTopbarItem>
        </Link>
      ))}
      <div style={{ paddingLeft: "50px" }}></div>
    </StyledHeader>
  );
};

const DesktopTopbarItem = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial";

  letter-spacing: -0.02rem;
  padding-left: 2.4rem;
  cursor: pointer;
  color: green;

  text-decoration: none;

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    font-weight: 600;
  }
`;

export default Header;
