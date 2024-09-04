import React from 'react';
import styled from 'styled-components';

const TalentCardWrapper = styled.div`
  padding: 15px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #f5f6f8;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

const Tags = styled.div`
  span {
    display: inline-block;
    margin-right: 5px;
    padding: 5px;
    background-color: #ddd;
    border-radius: 3px;
  }
`;

function TalentCard({ title, description, tags }) {
    return (
        <TalentCardWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
            <Tags>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </Tags>
        </TalentCardWrapper>
    );
}

export default TalentCard;