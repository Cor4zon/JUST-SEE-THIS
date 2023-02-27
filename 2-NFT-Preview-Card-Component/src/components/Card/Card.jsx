import React, { Image } from 'react';
import styled from 'styled-components';
import EquilibriumImg from '../../assets/images/image-equilibrium.jpg';
import IconView from '../../assets/images/icon-view.svg';
import IconEthereum from '../../assets/images/icon-ethereum.svg';
import IconClock from '../../assets/images/icon-clock.svg';

const Card = () => {
  console.log(EquilibriumImg);
  return (
    <CardWrapper>
      <CardImage src={EquilibriumImg} alt={`image-equilibrium`} />
      <Title>Equilibrium #3429</Title>
      <Description>Our Equilibrium collection promotes balance and calm.</Description>
      <InfoWrapper>
        <CounterText>
          <IconEthereum />
          0.041 ETH
        </CounterText>
        <DaysLeftText>3 days left</DaysLeftText>
      </InfoWrapper>
      {/* //div line // div //author // img + text */}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  // margin: 62px 24px;
  width: 100%;
  height: 500px;
  background-color: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
`;

const CardImage = styled.img`
  width: 278px;
  height: 278px;
  margin: 25px;
  border-radius: 8px;
`;

const Title = styled.p`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
`;

const Description = styled.p`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* Soft Blue */
  color: #8bacd9;
`;

const InfoWrapper = styled.div``;

const CounterText = styled.p``;
const DaysLeftText = styled.p``;
