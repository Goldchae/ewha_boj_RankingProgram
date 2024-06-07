import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';

const TogetherWrite = () => {
  const [pid, setPid] = useState('');
  const [togethertitle, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [handle, setHandle] = useState('');
  const [pw, setPw] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pid || !togethertitle || !link || !handle || !pw) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }

    console.log("Submitting data:", { pid, togethertitle, link, handle, pw });

    try {
      const response = await axios.post('/pstogether', {
        pid,
        togethertitle,
        link,
        handle,
        pw
      });
      if (response.data.isSuccess) {
        const togetherid = response.data.result.togetherid; // 백엔드에서 반환된 togetherid
        console.log("Received togetherid:", togetherid);
        alert('게시글 작성 성공');
        // router.push('/together');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error writing post:', error);
      alert('게시글 작성 중 오류가 발생했습니다.');
    }
  };

  return (
      <Layout>
        <Container>
          <h1>게시글 작성</h1>
          <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="문제 번호"
                value={pid}
                onChange={(e) => setPid(e.target.value)}
            />
            <Input
                type="text"
                placeholder="제목"
                value={togethertitle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                placeholder="깃허브 링크"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <Input
                type="text"
                placeholder="핸들"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
            />
            <Input
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <Button type="submit">작성</Button>
          </Form>
        </Container>
      </Layout>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default TogetherWrite;
