import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { addItem, clear } from '../store/slices/exampleSlice';
import { useAppDispatch, RootState } from '../store';

export default function ReduxPage() {
  const dispatch = useAppDispatch();
  const items: Array<{name: string}> = useSelector((state: RootState) => state.example.items);

  const handleAddBtn = () => {
    dispatch(addItem({ name: 'someItem' }));
  };

  const handleClearBtn = () => {
    dispatch(clear());
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
          {items.map((item, idx: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={idx}>{idx}</p>
          ))}
        </div>
      </Layout>
    </>
  );
}
