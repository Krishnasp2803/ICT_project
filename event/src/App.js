
import './App.css';
import Allevents from './pages/Allevents';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import UserProfile from './pages/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Login/>}/>
        <Route path='/adminhome'element={<AdminHome/>}></Route>
        <Route path='/aevent'element={<Allevents/>}></Route>
        <Route path='/acalendar'element={<Calendar/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
