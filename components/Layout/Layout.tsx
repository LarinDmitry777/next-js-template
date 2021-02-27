import React from 'react';
import styles from './layout.module.scss';

export interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <section className={styles.layout}>
    { children }
  </section>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
