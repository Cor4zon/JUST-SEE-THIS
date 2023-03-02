import React from 'react';
import MobileImg from '../../assets/images/image-product-mobile.jpg';
import DesktopImg from '../../assets/images/image-product-desktop.jpg';
import styled from 'styled-components';

const Card = () => {
  return (
    <CardWrapper>
      <StyledImage src={MobileImg} alt={'chanel'} />
      <ContentWrapper>
        <Perfume>PERFUME</Perfume>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </Description>
        <PriceWrapper>
          <PriceText>$149.99</PriceText>
          <OldPriceText>$169.99</OldPriceText>
        </PriceWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  margin: 28px 16px;
  background-color: white;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const ContentWrapper = styled.div`
  padding: 0 24px;
  text-align: left;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #1c232b;
`;

const Perfume = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 5px;
  color: #6c7289;
`;

const Description = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: #6c7289;
`;

const PriceText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #3d8168;
`;

const OldPriceText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  text-decoration-line: line-through;
  color: #6c7289;

  margin-left: 19px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`