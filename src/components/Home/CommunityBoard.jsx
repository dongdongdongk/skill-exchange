import React from 'react';
import styled from 'styled-components';

const CommunityBoardWrapper = styled.div`
  margin-bottom: 20px;
`;

const Post = styled.div`
  padding: 15px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #f5f6f8;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  
  h3 {
    margin: 0 0 10px;
    font-size: 18px;
  }
`;

function CommunityBoard() {
    const posts = [
        { title: '예쁜이의 커뮤니티 이벤트 안내', content: '커뮤니티 이벤트 안내 상세 내용...' },
        // 추가 게시물 목록
    ];

    return (
        <CommunityBoardWrapper>
            <h2>자유 게시판</h2>
            {posts.map((post, index) => (
                <Post key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </Post>
            ))}
        </CommunityBoardWrapper>
    );
}

export default CommunityBoard;