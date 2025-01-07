
import './App.css';
import Allevents from './pages/Allevents';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Login/>}/>
        <Route path='/adminhome'element={<Home/>}></Route>
        <Route path='/aevent'element={<Allevents/>}></Route>
        <Route path='/acalendar'element={<Calendar/>}></Route>
        <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
