import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Preview = ({ posts }) => {
    return (
        <Table>
            <thead>
            <tr>
                <Th>문제 번호</Th>
                <Th>게시글 제목</Th>
                <Th>핸들</Th>
                <Th>삭제</Th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post, index) => (
                <tr key={index}>
                    <Td>{post.pid}</Td>
                    <Td>
                        <Link href={`/post/${post.togetherid}`} legacyBehavior>
                            <a>{post.togethertitle}</a>
                        </Link>
                    </Td>
                    <Td>{post.handle}</Td>
                    <Td>
                        <Button>삭제</Button>
                    </Td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    margin: 0 auto;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const Button = styled.button`
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

export default Preview;
