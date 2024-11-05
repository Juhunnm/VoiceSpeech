import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Voice from './Voice';

const RouterPage = () => {
  return (
    <Routes>
      <Route path='/voice' element={<Voice />}/>
    </Routes>
  );
}

export default RouterPage;
