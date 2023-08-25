import { useState } from 'react'

// import react router
import { Routes,Route } from 'react-router-dom'

// import component
import PagePersonalInfo from './pages/personalInfo'
import SelectPlan from './pages/selectPlan'
import AddOnsPage from './pages/addons'
import FinishingUpPage from './pages/finishingUp'
import SuccessPage from './pages/successPage'

// fake encryption path
import fakeEncrytionPath from './data/fakeEncrytionPath'

// protectecd function
import { ProtectedFinishingUp,ProtectedSuccessPage} from './utils/protectedRouter'

function App() {


  return (
      <Routes>
        {/* router to personal info */}
        <Route path='/' element={<PagePersonalInfo/>} />
        {/* router to select your plan */}
        <Route path={`/${fakeEncrytionPath.selectPlan}`} element={<SelectPlan/>} />
        {/* router to addons page */}
        <Route path={`/${fakeEncrytionPath.addons}`} element={<AddOnsPage/>} />  
        {/* router to finishingUp page */}
        <Route path={`/${fakeEncrytionPath.finishingUp}`} element={<ProtectedFinishingUp/>} >
          <Route path='' element={<FinishingUpPage/>}/>
        </Route>
        {/* router to success page */}
        <Route path={`/${fakeEncrytionPath.successPage}`} element={<ProtectedSuccessPage/>} >
        <Route path='' element={<SuccessPage/>}/>
        </Route>
      </Routes>
  )
}

export default App
