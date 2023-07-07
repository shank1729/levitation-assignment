
import { Routes, Route } from "react-router-dom";
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import MultiStepForm from './components/MultiStepForm'

function App() {
 

  return (
    <>
     <main >
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/form" element={   <MultiStepForm/>} />
          <Route path="/forgot-password" element={ <ForgotPassword/>} />
          
        </Routes>
      </main>
    
   
 
    </>
  )
}

export default App
