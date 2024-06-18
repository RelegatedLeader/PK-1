import React from 'react';
import Menu from './PK_Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './PK_Menu/Login';
import SignUp from './PK_Menu/SignUp';
import Admin from './PK_Menu/Amin';
import RandomWordPage from './PK_Menu/RandomWordPage';
import SecurityCodeLogin from './PK_Menu/SecurityCodeLogin';
import { AdminShowPeopleInfo } from './PK_Menu/AdminShowPeopleInfo';
import { MainApp } from './MainApp/MainApp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/mainApp' element={<MainApp />}></Route>

        <Route path='/adminShowInfo' element={<AdminShowPeopleInfo />}></Route>
        <Route path='/securityPage' element={<SecurityCodeLogin />}></Route>
        <Route path='/randomWordPage' element={<RandomWordPage />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Menu />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
