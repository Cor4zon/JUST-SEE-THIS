import React from 'react';
import styled from 'styled-components';

const PlanCard = ({ icon, name, price }) => {
  return (
    <PlanCardContainer>
      <PlanIcon $icon={icon} />
      <div>
        <PlanTitle>{name}</PlanTitle>
        <PlanPrice>{price}</PlanPrice>
      </div>
    </PlanCardContainer>
  );
};

export default PlanCard;

const PlanCardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d6d9e6;
  border-radius: 8px;

  width: 295px;
  height: 77px;
`;

const PlanIcon = styled.div`
  background-image: url(${(props) => props.$icon});
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const PlanTitle = styled.p`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #022959;
`;

const PlanPrice = styled.p``;
