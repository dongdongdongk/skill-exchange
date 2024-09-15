import React from 'react';
import styles from './Header.module.css'
// import styled from 'styled-components';

// const HeaderWrapper = styled.header`
//   background-color: #6c63ff;
//   padding: 20px;
//   color: #ffffff;
//   display : flex;
//   justify-content: center;
// `;

// const HeaderContent = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const HeaderText = styled.div`
//   flex: 1;
// `;

// const HeaderImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// const SearchInput = styled.input`
//   margin-top: 10px;
//   padding: 10px;
//   width: 80%;
//   max-width: 400px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

function Header() {
    return (

        <>
            <div className={styles['main-header']}>
                <div className={styles['header-content']}>
                    <div className={styles['header-text']}>
                        <p>364일 24시간 어디서든 재능을 교환하세요</p>
                    </div>
                    <div className={styles['header-image']}>
                        <img src="your-image.jpg" alt="Header" />
                    </div>
                </div>
                <div className={styles['search-container']}>
                    <input className={styles['search-bar']} type="text" placeholder="필요한 재능을 검색해 보세요" />
                    <div className={styles['search-icon']}></div>
                </div>
            </div>
        </>
    );
}

export default Header;