import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { add, reset } from '../stores/counter';

import { RootStyles } from '../styles/common';
import { fadeIn } from '../styles/keyframes';

/* style */
const Hello = styled.span`
  color: blue;
  animation: ${fadeIn} 3s;
`
const Button = styled.button`
  padding: 3px;
  color: white;
  background: ${(props) => props.color};
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;

  &:active {
    border-bottom: solid 2px #fd9535;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
    color: #F00;
  }
`
Button.defaultProps = {
  color: 'orange'
}

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  const [helloList, setHelloList] = useState([]);

  const helloEventHandler = useCallback(() => {
    setHelloList(state => [...state, <Hello>HELLO WORLD!!</Hello>]);
    dispatch(add(1));
  }, [count]);

  const resetHandler = useCallback(() => {
    setHelloList([]);
    dispatch(reset());
  }, []);

  return (
    <RootStyles>
      <Button onClick={ helloEventHandler }>
        クリックしてね!!
      </Button>
      <Button color="red" onClick={ resetHandler }>
        リセット
      </Button>
      <div>{ count }回</div>
      { helloList }
    </RootStyles>
  );
}
