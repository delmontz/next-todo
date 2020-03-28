import React from 'react';
import styled from 'styled-components';

const TextArea = ({label, value='', setter} = {}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value);
  }
  return (
    <div>
      { label && <LabelWrapper>{ label }</LabelWrapper> }
      <TextAreaWrapper value={value} onChange={changeHandler} />
    </div>
  );
};

export default TextArea;

/* style */

const TextAreaWrapper = styled.textarea`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.borderline};
  box-sizing: border-box;
`
const LabelWrapper = styled.label`
  font-size: 14px;
`

// const TextField = (props = {value: 'age'}) => {

//   const useInput = initialValue => {
//     const [value, set] = useState(initialValue)
//     return { value, onChange: (e) => set(e.target.value) }
//   };

//   const value = useInput(props.value);
  
//   return (
//     <>
//       <textarea {...value}></textarea>
//     </>
//   );
// };