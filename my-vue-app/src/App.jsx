import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logo from './Components/Logo.jsx';
import LoginForm from "./Components/LoginForm.jsx";
import SignUp from "./Components/SignUp.jsx";
import ForgetPassword from './Components/ForgetPassword.jsx';
import NewPassword from './Components/NewPassword.jsx';
function App() {
  return (
    <>

     <Router>
      <Routes>
      <Route path="/" element={<Logo/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path='/SignUp' element={<SignUp/>}/> 
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/NewPassword' element={<NewPassword/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;


