import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants/Colors';

export const Button = ({ text, style, primary}) => {
    return (
        <StyledButton style={style} $primary={primary}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.$primary ? Colors.dark.blue : Colors.common.purple};
    border-radius: 4px;
    padding: 12px 16px;
    color: ${Colors.light.white};
`;