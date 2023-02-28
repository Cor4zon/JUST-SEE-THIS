import React, { Image } from 'react';
import styled from 'styled-components';
import EquilibriumImg from '../../assets/images/image-equilibrium.jpg';
import AvatarImg from '../../assets/images/image-avatar.png';
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
          {/* <IconImage src={IconClock} alt={'clock'} /> */}
          <CounterIcon src={IconEthereum} alt="money" />
          0.041 ETH
        </CounterText>
        <DaysLeftText>
          <ClockIcon src={IconClock} alt={'clock'} /> 3 days left
        </DaysLeftText>
      </InfoWrapper>
      <Line />
      <AuthorWrapper>
        <AuthorImg src={AvatarImg} alt={'photo'} />
        <AuthorText>
          Creation of <AuthorNameText>Jules Wyvern</AuthorNameText>
        </AuthorText>
      </AuthorWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  // margin: 62px 24px;
  width: 100%;
  // height: 500px;
  background-color: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
`;

const CardImage = styled.img`
  width: 278px;
  height: 278px;
  margin: 25px;
  margin-bottom: 0;
  border-radius: 8px;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 24px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  margin-left: 14px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* Soft Blue */
  color: #8bacd9;

  text-align: left;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
`;

const CounterIcon = styled.img`
  width: 11px;
  height: 18px;
  padding-right: 6.5px;
`;

const CounterText = styled.p`
  display: flex;
  align-items: center;

  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #00fff8;
`;

const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  padding-right: 8px;
`;
const DaysLeftText = styled.p`
  display: flex;
  align-items: center;

  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #8bacd9;
`;

const Line = styled.div`
  height: 1px;
  margin: 0 25px;
  background: #2e405a;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: 24px;
  padding-bottom: 24px;
`;

const AuthorImg = styled.img`
  width: 33px;
  height: 33px;
`;

const AuthorText = styled.p`
  margin: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #8bacd9;
`;

const AuthorNameText = styled.p`
  margin-left: 5px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`;
