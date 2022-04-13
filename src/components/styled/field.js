import React from 'react';
import styled from 'styled-components';
import Container from './container';

const F = styled.input`
  width: 100%;
  font-family: 'Mandali', sans-serif;
  font-size: ${props => props.size || '1.5rem'};
  font-weight: ${props => props.weight || '700'};
  color: ${props => props.color || props.theme.secondary};
  background: transparent;
  text-align: center;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-transform: lowercase;
    color: ${props => props.theme.main};
  }
`;
const Field = props => {
  return (
    <Container>
      <F
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => {
          props.setValue(e.value);
        }}
        autoCapitalize='characters'
      />
    </Container>
  );
};
export default Field;
