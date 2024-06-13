import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import TogetherTable from "../components/TogetherPage/TogetherTable";
import styled from "styled-components";
import { useRouter } from "next/router";

const Together = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/pstogether/previews");
      console.log("API Response:", response.data);
      const postsWithTogetherId = response.data.result.map((post) => ({
        ...post,
        togetherid: post.togetherid, // 백엔드에서 반환된 togetherid 사용
      }));
      console.log("Posts with Together ID:", postsWithTogetherId); // 모든 개체들을 콘솔에 로그
      setPosts(postsWithTogetherId);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      (post.togethertitle &&
        post.togethertitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.pid.toString().includes(searchQuery.toLowerCase())
  );

  const handleWriteButtonClick = () => {
    router.push("/togetherWrite");
  };

  const handleDelete = async (togetherid, pw) => {
    console.log("Deleting post:", { togetherid, pw });

    try {
      const response = await axios.delete("/pstogether/delete", {
        data: {
          togetherid,
          pw,
        },
      });
      console.log("Response:", response.data);
      if (response.data.isSuccess) {
        alert("게시글 삭제 성공");
        fetchPosts();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("게시글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <Layout>
      <Container>
        <h1>함께 풀어요</h1>
        <Button onClick={handleWriteButtonClick}>글쓰기</Button>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <TogetherTable posts={filteredPosts} onDelete={handleDelete} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  text-align: center;
  background: transparent;
  width: 80%;
  margin: 0 auto;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a0d468;
  }
`;

const SearchInput = styled.input`
  margin: 20px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default Together;
