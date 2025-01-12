
import './App.css';
import Allevents from './pages/Allevents';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import Login_admin from './pages/Login_admin';
import Calendar from './pages/Calendar';
import UserProfile from './pages/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_signup from './pages/Admin_signup';
import Usersignup from './pages/Usersignup';
import UserLogin from './pages/UserLogin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Login_admin/>}/>
        <Route path='/asignup'element={<Admin_signup/>}></Route>
        <Route path='/adminhome'element={<AdminHome/>}></Route>
        <Route path='/aevent'element={<Allevents/>}></Route>
        <Route path='/acalendar'element={<Calendar/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>} />
        <Route path='/usersignup' element={<Usersignup/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
