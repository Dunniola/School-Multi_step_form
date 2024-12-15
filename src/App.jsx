import React from 'react'
import StepOne from "./Components/Pages/StepOne"
import StepTwo from "./Components/Pages/StepTwo"
import StepThree from "./Components/Pages/StepThree"
import StepFour from "./Components/Pages/StepFour"


import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from "react-router-dom"
import { FormProvider } from './Components/FormContext'
import Summary from './Components/Pages/Summary'
import SuccessMessage from './Components/Pages/SuccessMessage'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element ={<StepOne/>}/>
      <Route path='/contact-info' element ={<StepTwo/>}/>
      <Route path='/primary-contact' element ={<StepThree/>}/>
      <Route path='/school-code' element ={<StepFour/>}/>
      <Route path='/summary' element ={<Summary/>}/>
      <Route path='/success' element ={<SuccessMessage/>}/>
      
    </Route>
  )
)



  return (
    <FormProvider>
      <RouterProvider router = {router} />

    </FormProvider>
  )
}

export default App