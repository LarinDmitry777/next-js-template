import React from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import exampleSlice from '../store/slices/exampleSlice';
import Layout from '../components/Layout/Layout';

export default function ReduxPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.example.items);

  const handleAddBtn = () => {
    dispatch(exampleSlice.actions.addItem({ name: 'someItem' }));
  };

  const handleClearBtn = () => {
    dispatch(exampleSlice.actions.clear());
  };

  return (
    <>
      <Head>
        <title>Пример redux</title>
      </Head>

      <Layout>
        <h1>Пример работы с редаксом</h1>
        <button type="button" onClick={handleAddBtn}>Добавить Кусок</button>
        <button type="button" onClick={handleClearBtn}>Удалить всё</button>
        <div>
          {items.map((item, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={idx}>{idx}</p>
          ))}
        </div>
      </Layout>
    </>
  );
}
