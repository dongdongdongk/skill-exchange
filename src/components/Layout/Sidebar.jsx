import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: #f8f8f8;
  padding: 20px;
`;

const NavMenu = styled.nav`
  a, button {
    display: block;
    margin: 10px 0;
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
`;

const LoginButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

function Sidebar() {
    return (
        <SidebarWrapper>
            <NavMenu>
                <a href="#">자유 게시판</a>
                <a href="#">마이 페이지</a>
                <a href="#">재능 판매 게시판</a>
                <a href="#">모임 게시판</a>
                <a href="#">질문 게시판</a>
                <LoginButton>로그인</LoginButton>
            </NavMenu>
        </SidebarWrapper>
    );
}

export default Sidebar;