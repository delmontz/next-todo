import React from 'react';
import styled from 'styled-components';

const SelectBox = ({items, value, setter}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value);
  }
  return (
    <Container>
      <SelectWrapper value={value} onChange={changeHandler}>
        {items.map((item, index) => (
          <option key={index} value={item.value}>{item.text}</option>
        ))}
      </SelectWrapper>
      <IconWrapper>
        <img src="svg/selectbox-arrow-icon.svg" />
      </IconWrapper>
    </Container>
  );
};

export default SelectBox;

/* style */

const Container = styled.div`
`

const SelectWrapper = styled.select`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.borderline};
`

const IconWrapper = styled.div`
  z-index: -1;
  position: relative;
  bottom: 30px;
  width: 30px;
  height: 30px;
  margin-left: auto;
`
