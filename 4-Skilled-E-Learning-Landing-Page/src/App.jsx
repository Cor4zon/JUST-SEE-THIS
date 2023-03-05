import './App.css'
import Button from './components/button/Button'
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
      <main></main>
      <footer></footer>
    </>
  )
}

export default App

const StyledLogoImg = styled.img``;
