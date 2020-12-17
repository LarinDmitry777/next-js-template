import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <layout className={styles.layout}>
    { children }
  </layout>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
