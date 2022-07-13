import Head from "next/head";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Linguix Front-end Test</title>
        <meta name="description" content="Front-end test for Linguix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
