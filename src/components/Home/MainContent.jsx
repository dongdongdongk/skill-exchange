import React from 'react';
import Sidebar from '../Layout/Sidebar';
import LatestTalents from '../Home/LatestTalents';
import CommunityBoard from '../Home/CommunityBoard';
import RightSidebar from '../Layout/RightSidebar';
import styled from 'styled-components';

const MainContentWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.section`
  flex: 1;
  padding: 20px;
`;

const RegisterTalentButton = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;
`;

function MainContent() {
    return (
        <MainContentWrapper>
            <Sidebar />
            <Content>
                <LatestTalents />
                <CommunityBoard />
                <RegisterTalentButton>나의 재능 등록 하기</RegisterTalentButton>
            </Content>
            <RightSidebar />
        </MainContentWrapper>
    );
}

export default MainContent;