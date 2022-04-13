import React from 'react';
import styled from 'styled-components';

const T = styled.text`
  font-family: 'Mandali', sans-serif;
  font-size: ${props => props.size || '1.5rem'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || props.theme.main};
`;
const Text = props => {
  return (
    <T size={props.size} weight={props.weight} color={props.color}>
      {props.children}
    </T>
  );
};
export default Text;
