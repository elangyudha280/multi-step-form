import { useState } from 'react'

// import react router
import { Routes,Route } from 'react-router-dom'

// import component
import PagePersonalInfo from './pages/personalInfo'
function App() {
 

  return (
      <Routes>
        <Route path='/' element={<PagePersonalInfo/>} />
      </Routes>
  )
}

export default App
