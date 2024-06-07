import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const TogetherTable = ({ posts, onDelete }) => {
    const handleDeleteClick = (togetherid) => {
        console.log("Selected togetherid:", togetherid);  // Log for debugging
        const pw = prompt('비밀번호를 입력하세요:');
        if (pw) {
            onDelete(togetherid, pw);
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <WrapContainer className={isVisible ? "slide-up" : ""} style={{ visibility: isVisible ? "visible" : "hidden", opacity: isVisible ? 1 : 0 }}>
            <Table>
                <thead>
                <tr>
                    <Th>문제 번호</Th>
                    <ThTitle>게시글 제목</ThTitle>
                    <Th>핸들</Th>
                    <Th>삭제</Th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={index}>
                        <Td>{post.pid}</Td>
                        <TdTitle>
                            <Link href={`/post/${post.togetherid}`} legacyBehavior>
                                <StyledLink>{post.togethertitle}</StyledLink>
                            </Link>
                        </TdTitle>
                        <Td>{post.handle}</Td>
                        <Td>
                            <Button onClick={() => handleDeleteClick(post.togetherid)}>삭제</Button>
                        </Td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </WrapContainer>
    );
};

const WrapContainer = styled.div`
    padding: 20px 40px 40px 40px;
    margin: 30px auto;
    background: rgba(47, 129, 65, 0.1);
    border-top: 4px dotted black;
    border-bottom: 4px dotted black;
    text-align: center;
    width: 100%;
`;

const Table = styled.table`
    font-size: 1.3rem;
    width: 100%;
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
        padding-left: 30px;
    }

    th:last-child,
    td:last-child {
    }
`;

const Th = styled.th`
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
    width: 20%;
`;

const ThTitle = styled(Th)`
    width: 40%;
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
    width: 20%;
`;

const TdTitle = styled(Td)`
    width: 40%;
`;

const StyledLink = styled.a`
    color: green;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Button = styled.button`
    padding: 5px 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #a0d468;
    }
`;

export default TogetherTable;
