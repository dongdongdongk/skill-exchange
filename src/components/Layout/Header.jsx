import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #6c63ff;
  padding: 20px;
  color: #ffffff;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const HeaderImage = styled.div`
  flex: 1;
  text-align: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const SearchInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderText>
                    <h1>364일 24시간 어디서든 재능을 교환하세요</h1>
                    <p>재능을 판매하고 구입하세요</p>
                    <SearchInput type="text" placeholder="필요한 재능을 검색해보세요..." />
                </HeaderText>
                <HeaderImage>
                    <img src="your-image.jpg" alt="Header" />
                </HeaderImage>
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;