import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: #f8f8f8;
  padding: 20px;
  width: 250px; /* 사이드바의 너비를 설정 */
  display: flex;
  flex-direction: column; /* 자식 요소를 세로로 정렬 */
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column; /* 내비게이션 메뉴 항목을 세로로 정렬 */
  flex: 1; /* 사이드바의 가용 공간을 차지하도록 설정 */
`;

const NavLink = styled.a`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #333;
  font-size: 16px;
`;

const LoginButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 100%; /* 버튼을 부모의 너비에 맞추어 확장 */
  box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 설정 */
`;

function Sidebar() {
    return (
        <SidebarWrapper>
            <NavMenu>
                <NavLink href="#">자유 게시판</NavLink>
                <NavLink href="#">마이 페이지</NavLink>
                <NavLink href="#">재능 판매 게시판</NavLink>
                <NavLink href="#">모임 게시판</NavLink>
                <NavLink href="#">질문 게시판</NavLink>
            </NavMenu>
            <LoginButton>로그인</LoginButton>
        </SidebarWrapper>
    );
}

export default Sidebar;
