import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
