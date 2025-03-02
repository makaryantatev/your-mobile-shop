import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LogInAdmin } from "./logIn/logIn";
import { AddPhone } from ".";
import { adminProfile } from "../api";
import { AllReviews } from "./allReviews";
import { DoneReviews } from "./doneReviews";

export const  Main = () => {
    useEffect(() => {
        async function getData() {
          try {
            const token = localStorage.getItem('adminToken')
            if (!token) return;
            const response = await adminProfile(token)
            console.log(response);
          } catch (error) {
            localStorage.removeItem('adminToken');
            window.location.replace("/login")
            console.log(error);
          }
        }
        getData()
      }, [])
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<LogInAdmin/>}/>
                <Route path="/" element={<AddPhone/>}/>
                <Route path="/allReviews" element={<AllReviews/>}/>
                <Route path="/DoneReviews" element={<DoneReviews/>}/>
            </Routes>
        </Router>
    )
}
