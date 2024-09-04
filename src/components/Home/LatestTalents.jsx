import React from 'react';
import TalentCard from './TalentCard';
import styled from 'styled-components';

const LatestTalentsWrapper = styled.div`
  margin-bottom: 20px;
`;

const LatestTalentsBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
`;

function LatestTalents() {
    const talents = [
        {
            title: '프로그래밍과 피아노를 교환하고 싶어요',
            description: '안녕하세요 재능을 교환하고 싶습니다...',
            tags: ['프로그래밍', '피아노'],
        },
        {
            title: '프로그래밍과 피아노를 교환하고 싶어요',
            description: '안녕하세요 재능을 교환하고 싶습니다...',
            tags: ['프로그래밍', '피아노'],
        },
        {
            title: '프로그래밍과 피아노를 교환하고 싶어요',
            description: '안녕하세요 재능을 교환하고 싶습니다...',
            tags: ['프로그래밍', '피아노'],
        },
        {
            title: '프로그래밍과 피아노를 교환하고 싶어요',
            description: '안녕하세요 재능을 교환하고 싶습니다...',
            tags: ['프로그래밍', '피아노'],
        },
    ];

    return (
        <LatestTalentsWrapper>
            <h2>최신 재능 등록</h2>
            <LatestTalentsBody>
                {talents.map((talent, index) => (
                    <TalentCard
                        key={index}
                        title={talent.title}
                        description={talent.description}
                        tags={talent.tags}
                    />
                ))}
            </LatestTalentsBody>
        </LatestTalentsWrapper>
    );
}

export default LatestTalents;