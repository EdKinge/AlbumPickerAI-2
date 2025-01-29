import { useEffect, useState } from 'react'
import './App.css';
import Landing from './landing';
import Rating from './rating';
import Login from './components/Auth/Login';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, useNavigate, Router, Navigate } from 'react-router-dom';

function App() {
  const [ inGenres, setInGenres ] = useState([]);
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  async function handleRouting(arr) {
    setInGenres(arr);
    setIsSubmitted(true);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing onSubmit={(arr) => {handleRouting(arr)}} />} />
          {
            isSubmitted ?
            <Route path="/dashboard" element={<Rating genres={inGenres} />} />:
            <Route path="/dashboard" element={<Navigate to="/" />} />
          }
          <Route path="/login" element={<Login />}/>
          <Route path="/landing" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App