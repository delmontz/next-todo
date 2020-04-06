import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../stores/';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import resetCss from 'ress';

const GlobalStyle = createGlobalStyle`
  ${resetCss}
  /* googlefontsの読み込み */
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
`;

const theme = {
  colors: {
    borderline: '#DADADA',
    main: '#FF5470',
    gray: '#888888',
    lime: '#00EBC7',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
