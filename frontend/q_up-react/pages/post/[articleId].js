import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import styled from 'styled-components';

const PostDetail = () => {
    const router = useRouter();
    const { articleId } = router.query;
    const [post, setPost] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (articleId) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(`/pstogether`, {
                        params: { id: articleId }
                    });
                    console.log('Fetched post data:', response.data);
                    if (response.data.isSuccess) {
                        setPost(response.data.result);
                        setIsVisible(true); // 데이터가 로드된 후에 애니메이션 시작
                    } else {
                        console.error('Error:', response.data.message);
                    }
                } catch (error) {
                    console.error('Error fetching post details:', error);
                }
            };

            fetchPost();
        }
    }, [articleId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <WrapContainer className={isVisible ? "slide-up" : ""}>
                <Title>게시글 상세 조회</Title>
                <Table>
                    <thead>
                    <tr>
                        <Th>항목</Th>
                        <Th>내용</Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Td>문제 번호</Td>
                        <Td>{post.pid}</Td>
                    </tr>
                    <tr>
                        <Td>게시자 핸들</Td>
                        <Td>{post.handle}</Td>
                    </tr>
                    <tr>
                        <Td>깃허브 링크</Td>
                        <Td><StyledLink href={`https://${post.link}`} target="_blank" rel="noopener noreferrer">{post.link}</StyledLink></Td>
                    </tr>
                    </tbody>
                </Table>
            </WrapContainer>
        </Layout>
    );
};

const WrapContainer = styled.div`
    padding: 20px 40px 40px 40px;
    margin: 30px auto;
    background: rgba(47, 129, 65, 0.1);
    border-top: 4px dotted black;
    border-bottom: 4px dotted black;
    text-align: center;
    width: 60%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

    &.slide-up {
        visibility: visible;
        opacity: 1;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    color: green;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Table = styled.table`
    font-size: 1.3rem;
    width: 90%;
    background: rgba(0, 0, 0, 0);
    border-spacing: 0;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid green;
        border-top: 1px solid green;
        text-align: left;
    }

    th {
        font-weight: bold;
        background-color: rgba(47, 129, 65, 0.2);
    }

    th:first-child,
    td:first-child {
        padding-left: 70px;
    }

    th:last-child,
    td:last-child {
    }
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: rgba(47, 129, 65, 0.2);
    text-align: left;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const StyledLink = styled.a`
    color: green;

    &:hover {
        color: #a0d468;
    }
`;

export default PostDetail;
