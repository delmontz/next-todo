import App from 'next/app'
import React from 'react'
import { Provider } from "react-redux";
import store from "../stores/";

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import restCss from 'ress';

const GlobalStyle = createGlobalStyle`
  ${restCss}
`

const theme = {
  colors: {
    borderline: '#DADADA'
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}
