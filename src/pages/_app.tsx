/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme";

import { Resetter } from "components";

export default class UI extends App {
  render() {
    const Component = this.props.Component;
    const pageProps = this.props.pageProps;

    return (
      <ThemeProvider>
        <Head>
          <meta charSet="utf8" />
          <title>Frontend Engineering Challenge</title>
        </Head>
        <Resetter />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
