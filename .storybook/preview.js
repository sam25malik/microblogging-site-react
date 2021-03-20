/**
 * @openformation/ui-starterkit
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

/**
 * @author Valentina Rotkin <valentina.rotkin@openformation.io>
 *
 */

import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap');
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  backgrounds: {
    default: "Light",
    values: [
      {
        name: "Light",
        value: "rgb(249, 248, 248)",
      },
      {
        name: "Darker",
        value: "rgba(0, 0, 0, 0.2)",
      },
    ],
  },
};