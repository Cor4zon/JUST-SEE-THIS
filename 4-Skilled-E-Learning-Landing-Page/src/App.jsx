import './App.css';
import Button from './components/button/Button';
import LogoLightImg from './assets/logo-light.svg';
import LogoDarkImg from './assets/logo-dark.svg';
import styled from 'styled-components';

function App() {
  return (
    <>
      <header>
        <StyledLogoImg src={LogoDarkImg} alt="logo" />
        <Button color={`#13183F`} />
      </header>
      <main>
        <Content>
          <TitleText>Maximize skill, minimize budget</TitleText>
          <InfoText>
            Our modern courses across a range of in-demand skills will give you the
            knowledge you need to live the life you want.
          </InfoText>
          <Button color={`red`} />
        </Content>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

const StyledLogoImg = styled.img``;

const Content = styled.div``;

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
