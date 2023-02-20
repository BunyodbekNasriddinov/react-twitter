import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
      @font-face {
    font-family: 'Segoe UI Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Regular'), url('../../assets/fonts/Segoe\ UI.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Segoe UI Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Italic'), url('../../assets/fonts/Segoe\ UI\ Italic.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Segoe UI Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Bold'), url('../../assets/fonts/Segoe\ UI\ Bold.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Segoe UI Bold Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Bold Italic'), url('../../assets/fonts/Segoe\ UI\ Bold\ Italic.woff') format('woff');
    }
  
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  main {
    flex-grow: 1;
  }
  img {
    vertical-align: middle;
    object-fit: cover;
  }

  
  `;
export const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  padding: 0 20px;
`;
