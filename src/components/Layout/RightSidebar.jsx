import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: #f8f8f8;
  padding: 20px;
`;

const DownloadApp = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  flex-direction: column; /* 자식 요소를 세로로 쌓이도록 설정 */
  margin-bottom: 20px;
`;

const DownloadText = styled.p`
  margin: 0; /* 기본 여백 제거 */
  margin-bottom: 10px; /* 버튼과의 간격 설정 */
`;

const DownloadButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  width: 100%; /* 버튼이 부모의 너비에 맞추어 늘어나도록 설정 */
  box-sizing: border-box; /* 패딩과 테두리 포함 너비 설정 */
  text-align: center; /* 버튼의 텍스트 중앙 정렬 */
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
                <DownloadText>
                    재능교환소 앱에서 언제 어디서나 편하게 재능을 교환해보세요!
                </DownloadText>
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
