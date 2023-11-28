import React from 'react'
import Home from './pages/Home'
import { BasketProvider } from './context/BasketContext'

const App = () => {
  return (
    <BasketProvider>
      <Home />
    </BasketProvider>
  )
}

export default App