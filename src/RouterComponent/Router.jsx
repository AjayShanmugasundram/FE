import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../Authentication/signUp";
import Termsandconditions from "../Authentication/termsandconditions";
import SignIn from "../Authentication/signIn";
import Home from "../Pages/Home";
import VerificationPage from "../Pages/VerificationPage";
import Booking from "../Pages/Booking";
import Contactus from "../Pages/Contactus";
import AboutUs from "../Pages/AboutUs";
import Dashboard from "../Components/Dashboard";


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
        <Route path="/home/contactus" element={<Contactus></Contactus>}> </Route>
        <Route path="/home/aboutus" element={<AboutUs></AboutUs>}> </Route>
        <Route path="/home/Dashboard" element={<Dashboard></Dashboard>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}
