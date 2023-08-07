import { useState } from 'react'

// import react router
import { Routes,Route } from 'react-router-dom'

// import component
import PagePersonalInfo from './pages/personalInfo'
import SelectPlan from './pages/selectPlan'

// fake encryption path
import fakeEncrytionPath from './data/fakeEncrytionPath'

function App() {


  return (
      <Routes>
        {/* router to personal info */}
        <Route path='/' element={<PagePersonalInfo/>} />
        {/* router to select your plan */}
        <Route path={`/${fakeEncrytionPath.selectPlan}`} element={<SelectPlan/>} />
      </Routes>
  )
}

export default App
