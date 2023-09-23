// components/App.js
import React from 'react';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export const App = () => {
  return (
    <>
      <Navbar />
      <TranslateBox />
      <ToastContainer autoClose={3000} />
    </>
  );
};
