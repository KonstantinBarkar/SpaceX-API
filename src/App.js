import React from 'react';

import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';

import Layout from './components/Layout';
import HistoricEvents from './components/HistoricEvents';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HistoricEvents />}/>
        </Route>
    </Routes>
  );
}

export default App;
