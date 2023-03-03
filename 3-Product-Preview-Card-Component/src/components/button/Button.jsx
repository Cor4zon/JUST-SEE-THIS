import React, {Image} from 'react';
import styled from 'styled-components';
import IconCart from '../../assets/images/icon-cart.svg';

const Button = () => {
    return (
        <StyledButton>
            <TextButton><Image src={IconCart} />Add to Cart</TextButton>
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.div`
    background: #3D8168;
    border-radius: 8px;
    width: 100%;
`;

const TextButton = styled.p`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`;

