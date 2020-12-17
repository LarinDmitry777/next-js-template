import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import exampleSlice from '../store/slices/exampleSlice';

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
      <h1>Пример работы с редаксом</h1>
      <button type="button" onClick={handleAddBtn}>Добавить Кусок</button>
      <button type="button" onClick={handleClearBtn}>Удалить всё</button>
      <div>
        {items.map((item, idx) => (
          <p>{idx}</p>
        ))}
      </div>
    </>
  );
}
