/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import { FunctionComponent } from "react";
import { styled } from "theme";

type Props = {
  children: React.ReactNode;
};

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.font.family.main};
  font-size: ${({ theme }) => theme.font.size.text};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;

export const Greeting: FunctionComponent<Props> = ({ children }) => {
  return <Headline>{children}</Headline>;
};
