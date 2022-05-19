
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp/SignUp';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/home' element={<PrivateRoute><Home></Home></PrivateRoute>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
