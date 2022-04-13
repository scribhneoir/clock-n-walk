import React from 'react';
import styled from 'styled-components';

const C = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  margin: 1rem auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 0.2rem;
  background: ${props => props.background || 'transparent'};
  border-radius: 0.5rem;
  border: ${props =>
    props.noBorder ? '0px' : ' 3px solid ' + props.theme.main};
`;
const Container = props => {
  return (
    <C background={props.background} noBorder={props.noBorder}>
      {props.children}
    </C>
  );
};
export default Container;
