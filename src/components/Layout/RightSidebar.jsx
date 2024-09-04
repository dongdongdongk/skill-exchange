import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: #f8f8f8;
  padding: 20px;
`;

const DownloadApp = styled.div`
  margin-bottom: 20px;
`;

const DownloadButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
`;

const RealTimeBest = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

function RightSidebar() {
    return (
        <SidebarWrapper>
            <DownloadApp>
                <p>재능교환소 앱에서 언제 어디서나 편하게 재능을 교환해보세요!</p>
                <DownloadButton>지금 다운로드 받기</DownloadButton>
            </DownloadApp>
            <RealTimeBest>
                <h2>실시간 재능 베스트</h2>
                <ul>
                    <li>피아노: 무언가, 피아노입니다</li>
                    <li>바이올린 배우고 싶어요</li>
                    {/* 추가 목록 */}
                </ul>
            </RealTimeBest>
        </SidebarWrapper>
    );
}

export default RightSidebar;