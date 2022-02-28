import { Button, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../Components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  toast.configure()
  const fetchdata = async () => {
    try{
   await axios.get("https://backendmoviebook.herokuapp.com/booked/get", {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    })
    toast.success("Succesfully Booked")
  }
    catch(err){
console.error(err)
    }
    // setEvery(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
// console.log("igonore this"+every)
  return (
    <div className="Booking">
      <ResponsiveAppBar></ResponsiveAppBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container maxWidth="lg">
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "50px",
            fontWeight: "bolder",
            backgroundColor: "white",
            borderRadius: "0.5em",
            boxShadow:
              " 0 9px 9px 0 rgb(0, 0, 0), 0 9px 9px 0 rgb(224, 219, 219)",
          }}
        >
          <div>
            Your booking is Succesfully Booked ✅
            <div>Saved in OUR Database </div>
          </div>

          <div>We will Send the Ticket By mail</div>
          <div>Thank YOU Have a Nice Day 😊</div>
          <div style={{ color: "red" }}>
            Check the console Now for clarification
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Link to="/home"><Button variant="contained">Go to Home</Button></Link>
      </Container>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
