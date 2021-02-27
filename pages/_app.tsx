import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import makeStore from '../store';

const store = makeStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
