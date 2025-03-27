import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm.jsx";
import SignUp from "./Components/SignUp.jsx";
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


