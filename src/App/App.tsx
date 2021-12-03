import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import {Profile} from "../components/Profile/Profile";
import {Login} from "../components/Login/Login";
import {Layout} from "../components/Layout/Layout";
import {NewPassword} from "../components/NewPassword/NewPassword";
import {Page404} from "../components/Page404/Page404";
import {RecoveryPassword} from "../components/RecoveryPassword/RecoveryPassword";
import {Test} from "../components/Test/Test";
import {UserRegistration} from "../components/UserRegistration/UserRegistration";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<Test/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'new-password'} element={<NewPassword/>}/>
            <Route path={'recovery-password'} element={<RecoveryPassword/>}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'user-registration'} element={<UserRegistration/>}/>
            <Route path={'*'} element={<Page404/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
