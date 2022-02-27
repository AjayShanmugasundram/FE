import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../Authentication/signUp";
import Termsandconditions from "../Authentication/termsandconditions";
import SignIn from "../Authentication/signIn";
import Home from "../Pages/Home";
import VerificationPage from "../Pages/VerificationPage";
import Booking from "../Pages/Booking";


export default function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/termsandconditons" element={<Termsandconditions />} ></Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/home/VerificationPage" element={<VerificationPage></VerificationPage>}> </Route>
        <Route path="/home/VerificationPage/Booking" element={<Booking></Booking>}> </Route>

      </Routes>
    </BrowserRouter>
  );
}
