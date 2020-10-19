import { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
  }
  html {
    font-size: ${theme.typography.fontSize} px
  }
  body {
    font-family: ${theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "kern";
    font-feature-settings: "kern";
    -webkit-font-kerning: normal;
    font-kerning: normal;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.text.primary};
    height: 100%;
    word-wrap: break-word;
    font-size: 1rem;
    letter-spacing: 0.01071em;
    background-color: ${theme.palette.background.default};
  }
  a:link, a:visited, a:hover, a:active{
    color: ${theme.palette.text.primary};
    text-decoration: none;
  }
  // タブレット
  ${theme.breakpoints.up('sm')} {
  }
  // PC
  ${theme.breakpoints.up('md')} {
  }
`;

export default GlobalStyle;
