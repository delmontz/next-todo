import React, { useState } from 'react';
import TextArea from '../components/TextArea';
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
    <dt>テキストエリア</dt>
    <dd>
      <TextArea label="hoge" value={text} setter={setText} />
    </dd>
  </DlWrapper>
  );
}
