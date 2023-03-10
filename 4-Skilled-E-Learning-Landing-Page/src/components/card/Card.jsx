import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description }) => {
    return (
        <StyledCard>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <GetStartedLink>Get Started</GetStartedLink>
        </StyledCard>
    );
};

export default Card;

const StyledCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
    border-radius: 10px;
`;

const CardTitle = styled.p`font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 25px;
color: #13183F;
`;

const CardDescription = styled.p`

font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #83869A;
`;

const GetStartedLink = styled.a`

font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;
color: #F74780;
`;