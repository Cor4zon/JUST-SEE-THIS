import React from 'react';
import styled from 'styled-components';
import IconDesign from '../../assets/icon-design.svg';

const Card = ({ title, description, icon = IconDesign }) => {
  return (
    <StyledCard>
      <StyledIcon src={icon} alt="icon" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <GetStartedLink>Get Started</GetStartedLink>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
  border-radius: 10px;
  padding: 56px 29px 32px 28px;
  text-align: left;
  margin-top: 40px;
  position: relative;
`;

const CardTitle = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  color: #13183f;
`;

const CardDescription = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #83869a;
`;

const GetStartedLink = styled.a`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #f74780;
`;

const StyledIcon = styled.img`
  background-color: red;
  border-radius: 100px;
  width: 56px;
  height: 56px;
  position: absolute;
  top: -24px;
  left: 28px;
`;
