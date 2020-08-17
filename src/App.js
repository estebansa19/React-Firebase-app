import React from 'react';
import './App.css';
import './components/Links';
import Links from './components/Links';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='container p-4'>
      <div className="row">
        <Links/>
      </div>

      <ToastContainer />
    </div>
  );
}
