import React from 'react';
import styled from 'styled-components';

const C = styled.div`
  display: flex;
  position: relative;
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

const B = styled.button`
  display: flex;
  position: absolute;
  top: -15px;
  left: -15px;
  padding: 0.2rem;
  background: ${props => props.theme.background};
  border-radius: 100%;
  border: ${props =>
    props.noBorder ? '0px' : ' 3px solid ' + props.theme.main};
  color: ${props => props.color || props.theme.main};
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.main};
    color: ${props => props.theme.background};
  }
`;
const Container = props => {
  return (
    <>
      <C background={props.background} noBorder={props.noBorder}>
        {props.children}
        {props.button ? (
          <B
            onClick={() => {
              props.onClick();
            }}
          >
            {props.buttonText}
          </B>
        ) : (
          <></>
        )}
      </C>
    </>
  );
};
export default Container;
