import React from 'react';
import styled from 'styled-components';

const C = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: ${props => props.theme.background};
`;
const Background = props => {
  return <C />;
};
export default Background;
