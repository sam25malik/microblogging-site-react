/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import React from "react";
import { styled } from "theme";

import { Greeting } from "components";

const Main = styled.main`
  padding-top: ${({ theme }) => theme.space.wide};
`;

const IndexPage = () => (
  <Main>
    <Greeting>Hi 👋🏽</Greeting>
  </Main>
);

export default IndexPage;
