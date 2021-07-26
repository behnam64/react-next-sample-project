import Head from "next/head";
import React from "react";


export default function HeadShared() {

  return (
    <React.Fragment>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#90cdf4" />
        <script src="/scripts/scrollbar.js"></script>
        <script src="/scripts/font-size.js"></script>
      </Head>
    </React.Fragment>
  )
}
