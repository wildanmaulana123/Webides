import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import AppRouter from './Routes/Index'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App