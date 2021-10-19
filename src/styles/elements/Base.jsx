// only add bare HTML elemnts like body, h1, p, etc or add overrides for MaterialUI in this file.
import { css } from '@emotion/react';

export const Base = ({ theme }) => css`
  @import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900);

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    font-family: 'Roboto', serif;
  }

  html,
  body,
  li {
    height: auto;
  }

  h1 {
    font-size: ${theme.fontSize.h1};
  }

  h2 {
    font-size: ${theme.fontSize.h2};
  }

  h3 {
    font-size: ${theme.fontSize.h3};
  }

  h4 {
    font-size: ${theme.fontSize.h4};
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }

  body {
    margin: 0;
    color: ${theme.textColor.default};
    font-size: ${theme.fontSize.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  textarea,
  select {
    -webkit-appearance: none;
  }

  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;
