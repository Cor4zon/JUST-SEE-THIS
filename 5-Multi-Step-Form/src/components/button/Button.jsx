import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/Colors';

export const Button = ({ text, style}) => {
    return (
        <StyledButton style={style}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.dark.blue};
    border-radius: 4px;
    padding: 12px 16px;
    color: ${Colors.light.white};
`;