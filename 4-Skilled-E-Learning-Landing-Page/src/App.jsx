import './App.css';
import Button from './components/button/Button';
import LogoLightImg from './assets/logo-light.svg';
import LogoDarkImg from './assets/logo-dark.svg';
import styled from 'styled-components';
import HeroImgMobile from './assets/image-hero-mobile.png';
import HeroImgTablet from './assets/image-hero-tablet.png';
import HeroImgDesktop from './assets/image-hero-desktop.png';
import Card from './components/card/Card';
import CardGrid from './components/card-grid/CardGrid';

function App() {
  return (
    <>
      <header>
        <StyledLogoImg src={LogoDarkImg} alt="logo" />
        <Button color={`#13183F`} />
      </header>
      <main>
        <Content>
          <MainContentWrapper>
            <Wrapper>
              <TitleText>Maximize skill, minimize budget</TitleText>
              <InfoText>
                Our modern courses across a range of in-demand skills will give you the
                knowledge you need to live the life you want.
              </InfoText>
              <Button gradient={`linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)`} />
            </Wrapper>
            <StyledHeroImg />
          </MainContentWrapper>

          <CardGrid>
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <Card
              title={'Animation'}
              description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
          </CardGrid>
        </Content>
      </main>

      <footer>
        <StyledLogoImg src={LogoLightImg} alt="logo" />
        <Button gradient={`linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)`} />
      </footer>
    </>
  );
}

export default App;

const StyledLogoImg = styled.img``;

const Content = styled.div`
  padding: 16px;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div``;

const TitleText = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  color: #13183f;
  text-align: left;
`;

const InfoText = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #83869a;
  text-align: left;
`;

const StyledHeroImg = styled.div`
  background-image: url(${HeroImgMobile});
  background-size: cover;
  width: 100%;
  height: 300px;

  @media (min-width: 500px) {
    background-image: url(${HeroImgDesktop});
    background-size: containt;
  }
`;
