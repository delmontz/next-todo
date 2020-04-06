import React from 'react';
import styled, {css} from 'styled-components';

/*
  使えるアイコン name一覧
  add
  delete
  fab
  info
*/

const Icon = ({name, ...props}) => {
  return (
    <ImageWrapper {...props} src={`svg/icon/${name}.svg`} />
  );
};

export default Icon;

/* style */

const ImageWrapper = styled.img`
  width: ${props => props.pxWidth ? props.pxWidth : '100%'};
  height: ${props => props.pxHeight ? props.pxHeight : '100%'};
`