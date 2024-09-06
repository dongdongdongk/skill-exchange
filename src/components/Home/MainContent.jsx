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
  background-color: #6C63FF;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;
  color: #FFFFFF;
  max-with : 800px
  width: 100%;


//   /* 하단 재능등록 버튼 */

// height: 50px;
// left: calc(50% - 594px/2);
// top: 986px;


// /* 나의 재능 등록 하기 */



// font-family: 'Noto Sans KR';
// font-style: normal;
// font-weight: 700;
// font-size: 20px;
// line-height: 29px;
// /* identical to box height */
// display: flex;
// align-items: center;

// color: #FFFFFF;


`;

function MainContent() {
    return (
        <MainContentWrapper>
            <Content>
                <LatestTalents />
                <CommunityBoard />
                <RegisterTalentButton>나의 재능 등록 하기</RegisterTalentButton>
            </Content>
            
        </MainContentWrapper>
    );
}

export default MainContent;