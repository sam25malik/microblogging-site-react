/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import React, { ReactNode } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";
import { theme } from ".";

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <BaseThemeProvider theme={theme} {...props}>
    {children}
  </BaseThemeProvider>
);
