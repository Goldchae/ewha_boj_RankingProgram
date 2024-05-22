import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Title from "../components/Title";
import TogetherTable from "../components/TogetherPage/TogetherTable";
import styled from "styled-components";

const togetherData = [
  {
    problemNumber: "저녁 메뉴 추천 해주세요",
    problemTitle: "2839",
    handle: "yellowsubmarine372",
  },
  {
    problemNumber: "출력을 어떻게 하나용",
    problemTitle: "1234",
    handle: "celina324",
  },
  {
    problemNumber: "햄스터 세계정복 하는 법 알려준다",
    problemTitle: "2223",
    handle: "yellowsubmarine372",
  },
  {
    problemNumber: "홈런볼",
    problemTitle: "23421",
    handle: "celina324",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  width: 60%;
`;

const WriteButton = styled.button`
  background-color: green;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: 10%;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 30%;
`;

const Together = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const [posts, setPosts] = useState(togetherData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleWriteClick = () => {
    router.push("/togetherWrite");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.problemTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.problemNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <Title sentence={"- 함께 풀어요 -"} />
      <Container
        className={isVisible ? "slide-up" : ""}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>

        <SearchInput
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Container>
      <TogetherTable togetherData={filteredPosts} />
    </Layout>
  );
};

export default Together;
