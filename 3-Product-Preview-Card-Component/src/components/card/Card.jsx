import React from 'react';
import MobileImg from '../../assets/images/image-product-mobile.jpg';
import DesktopImg from '../../assets/images/image-product-desktop.jpg';
import styled from 'styled-components';

const Card = () => {
  return (
    <CardWrapper>
      <StyledImage src={MobileImg} alt={'chanel'} />
      <ContentWrapper>
        <p>PERFUME</p>
        <p>Gabrielle Essence Eau De Parfum</p>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <p>$149.99</p>
        <p>$169.99</p>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  margin: 28px 16px;
`;

const StyledImage = styled.img`
  height: 240px;
`;

const ContentWrapper = styled.div``;
