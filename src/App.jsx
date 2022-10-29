import Home from './pages/Home'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'


// React Router doesn´t seem to work on vercel
// Possible fix: add  vercel config file  (vercel.json)


export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </>
  )
}
