import React from 'react';
import styled from 'styled-components';

const Button = ({ color }) => {
    return (
        <StyledButton style={{backgroundColor: color}}>
            Get Started
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.div`
    width: 140px;
    height: 48px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;