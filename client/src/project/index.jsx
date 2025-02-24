import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyHomePage} from "./containers";
import { MyHeader, MyFooter, MyProduct } from "./components";
import { Mail } from "./components/mail";
import { SignUp } from "./components/signUp";
import { SignIn } from "./components/signIn";
import { Profile } from "./components/profile/profile";
import { EachPhone } from "./components/phones/eachPhone";
import { Basket } from "./components/basket/basket";

export const Main = () => {
    return(
        <Router>
            <MyHeader/>
            <Routes>
                <Route path="/" element={<MyHomePage/>}/>
                <Route path="/header" element={<MyHeader/>}/>
                <Route path="/mail" element={<Mail/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/product" element={<MyProduct/>}/>
                <Route path="/phone/:id" element={<EachPhone/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
            <MyFooter/>
        </Router>
    )
}