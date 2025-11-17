import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }

  button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  .ant-btn-icon {
    color: #FFFFFF !important;
  }

  .ant-select-arrow {
    color: #FFFFFF !important;
  }

  .ant-select-clear {
    color: #FFFFFF !important;
  }
`
