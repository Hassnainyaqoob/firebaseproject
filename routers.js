import React from "react";
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Dashboards from "../../pages/dashboard";
import Login from "../../pages/login";
import Signup from "../../pages/signup";

export default function Routerings() {
    return (

        <Router>
            <Routes >

                <Route path='/' element={<Signup />} />

                <Route path='/login' element={<Login />} />

                <Route path='/dashboared:id' element={<Dashboards />} />

            </Routes>
        </Router>

    )
}









