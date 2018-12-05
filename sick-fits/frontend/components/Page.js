import React, { Component } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
  white: "#ffddaa",
  red: "#ff0000",
  black: "#000000",
  lightGray: "#dfdfdf",
  maxWidth: "500px"
};
const PageStyles = styled.div``;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: ${props => props.theme.white};
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2/') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,*:before,*.after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageStyles>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </PageStyles>
      </ThemeProvider>
    );
  }
}

export default Page;
