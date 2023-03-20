import React from 'react';
import styled from 'styled-components';

const CardGrid = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default CardGrid;

const Wrapper = styled.div`
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;