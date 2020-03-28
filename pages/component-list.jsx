import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';
import styled from 'styled-components';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`

export default () => {
  const [text, setText] = useState('hoge');

  return (
  <DlWrapper>
    <dt>TextArea</dt>
    <dd>
      <TextArea label="ラベル" value={text} setter={setText} />
    </dd>
    <dt>TextField</dt>
    <dd>
      <TextField label="ラベル" value={text} setter={setText} />
    </dd>
  </DlWrapper>
  );
}
