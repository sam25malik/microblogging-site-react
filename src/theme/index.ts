/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import baseStyled, { ThemedStyledInterface } from "styled-components";
export { ThemeProvider } from "./ThemeProvider";

export const theme = {
  color: {
    black: "#000000",
    white: "#ffffff",
  },
  space: {
    narrow: "8px",
    average: "16px",
    wide: "32px",
  },
  radius: {
    angular: "",
    medium: "",
    round: "",
  },
  font: {
    family: {
      main: "sans-serif",
      logo: "sans-serif",
    },
    size: {
      text: "100%",
      headline: "",
      subHeadline: "",
    },
  },
};

export const styled = baseStyled as ThemedStyledInterface<typeof theme>;
