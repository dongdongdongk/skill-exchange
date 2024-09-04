import React from 'react';
import Header from '../components/Layout/Header';
import MainContent from '../components/Home/MainContent';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Home = () => {
  return (
    <AppWrapper>
      <Header />
      <MainContent />
    </AppWrapper>
  );
}


export default Home