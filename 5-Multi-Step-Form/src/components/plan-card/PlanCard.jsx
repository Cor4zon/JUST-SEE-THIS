import React from 'react';
import styled from 'styled-components';

const PlanCard = ({ icon, name, price }) => {
  return (
    <PlanCardContainer>
      <PlanIcon $icon={icon} />
      <PlanInfoWrapper>
        <PlanTitle>{name}</PlanTitle>
        <PlanPrice>${price}/mo</PlanPrice>
      </PlanInfoWrapper>
    </PlanCardContainer>
  );
};

export default PlanCard;

const PlanCardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d6d9e6;
  border-radius: 8px;

  min-width: 295px;
  height: 77px; // temp?
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-top: 12px;
`;

const PlanIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const PlanInfoWrapper = styled.div`
    margin-left: 14px;
`;

const PlanTitle = styled.p`
  font-family: 'Ubuntu-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #022959;
  margin: 0;
  display: flex;
`;

const PlanPrice = styled.p`
  font-family: 'Ubuntu-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
  margin: 0;
  margin-top: 7px;
  display: flex;
`;
