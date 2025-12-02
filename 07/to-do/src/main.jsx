import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Todo from './components/Todo'
// import Counter from './components/Counter'
import Reminder from './components/Reminder'
// import App from './App.jsx'
import StudentRegistrationFrom from './components/StudentRegistrationFrom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo/>
<br></br>

    {/* <Counter/> */}
    <Reminder/>
    <StudentRegistrationFrom/>
  </StrictMode>,
)