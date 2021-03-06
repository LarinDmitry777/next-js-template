import React from 'react';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
