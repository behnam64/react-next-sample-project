import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import React, { useEffect } from 'react';
import ColorScheme from '../services/color-scheme';
import Router from 'next/router'
import HeadShared from '../components/head-shared';


function Init() {
  // useEffect(() => {
  //   Router.push('/signup')
  // }, []);
  return (
    <ColorScheme/>
  );
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
      <Provider store={store}>
        <HeadShared/>
        <Init/>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}
export default MyApp
