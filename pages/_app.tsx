import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import React from 'react';
import ColorScheme from '../services/color-scheme';


function Init() {
  return(
    <ColorScheme/>
  );
}

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <React.Fragment>
      <Provider store={store}>
        <Init/>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}
export default MyApp
