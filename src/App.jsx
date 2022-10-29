import Home from './pages/Home'
import Teachers from './pages/Teachers'
import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'


export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      // React Router doesn´t seem to work on vercel
      https://stackoverflow.com/questions/64815012/why-does-react-router-not-works-at-vercel
      // Possible fix :   add  vercel config file
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </>
  )
}
