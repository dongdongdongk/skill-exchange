import React from 'react';
import Header from '../components/Layout/Header';
import MainContent from '../components/Home/MainContent';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column; /* 세로로 요소 정렬 */
  align-items : center
`;

const Home = () => {
  return (
    <>

      <Header />
      <AppWrapper>
        <MainContent />
      </AppWrapper>

    </>
  );
}

export default Home;
