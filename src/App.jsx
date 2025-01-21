import { useEffect } from 'react'
import './App.css';
import MakeRequest from '../ai/zuki';
import Landing from './landing';
import Rating from './rating';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Rating />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
