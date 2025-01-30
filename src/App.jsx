import { useEffect, useState } from 'react'
import './App.css';
import Dashboard from './pages/Dashboard';
import Rating from './pages/Rating';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
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
          <Route path="/" element={<LandingPage />} />
          {/* <ProtectedRoute> */}
            <Route path="/dashboard" element={<Dashboard onSubmit={(arr) => {handleRouting(arr)}}/>} />
            <Route path="/rating" element={<Rating genres={inGenres} />} />
          {/* </ProtectedRoute> */}
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App