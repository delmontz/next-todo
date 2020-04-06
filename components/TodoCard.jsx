import React from 'react';
import styled from 'styled-components';

const TodoCard = ({todoData}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value);
  }
  return (
    <div>
      <div>
        
      </div>
      <div>

      </div>
    </div>
  );
};

export default TextField;

/* style */

const LabelWrapper = styled.label`
  font-size: 14px;
`