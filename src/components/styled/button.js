import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Text from './text';

const B = styled.button`
  padding: 0.2rem 1rem;
  margin: 0;
  background: ${props => props.background || 'transparent'};
  border-radius: 0.5rem;
  border: ${props =>
    props.noBorder ? '0px' : ' 3px solid ' + props.theme.main};
  color: ${props => props.color || props.theme.main};
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.main};
    color: ${props => props.theme.background};
  }
`;
const T = styled.text`
  font-family: 'Mandali', sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
`;
const Button = props => {
  return (
    <Container noBorder>
      <B
        onClick={() => {
          props.onClick();
        }}
      >
        <T>{props.children}</T>
      </B>
    </Container>
  );
};
export default Button;
