import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm.jsx";
import SignUp from "./Components/SignUp.jsx";
import ForgetPassword from './Components/ForgetPassword.jsx';
import NewPassword from './Components/NewPassword.jsx';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signUp' element={<SignUp/>}/> 
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        <Route path='/newPassword' element={<NewPassword/>}/>
      </Routes>
    </Router>
    </>
  );
}


export default App;


