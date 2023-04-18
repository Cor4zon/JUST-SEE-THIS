import React from 'react';
import styled from 'styled-components';

const PlanCard = ({color, icon, name, price}) => {
    return (
        <PlanCardContainer>
            <PlanIcon $color={color} $icon={icon} />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </PlanCardContainer>
    );
};

export default PlanCard;

const PlanCardContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #D6D9E6;
    border-radius: 8px;

    width: 295px;
    height: 77px;
`;

const PlanIcon = styled.div`
    background-image: url(${props => props.$icon});
    width: 40px;
    height: 40px;
    border-radius: 100px;
`;