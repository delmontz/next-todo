import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';
import SelectBox from '../components/SelectBox';
import styled from 'styled-components';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`

const items = [
  {
    text: '選択肢１',
    value: '1'
  },
  {
    text: '選択肢2',
    value: '2'
  },
  {
    text: '選択肢255',
    value: '255'
  }
];

export default () => {
  const [text, setText] = useState('hoge');
  const [selected, setSelected] = useState('2');

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
    <dt>SelectBox</dt>
    <dd>
      <SelectBox  items={items} value={selected} setter={setSelected}/>
    </dd>
  </DlWrapper>
  );
}
