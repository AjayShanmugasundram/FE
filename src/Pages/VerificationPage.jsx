import React from "react";
import ResponsiveAppBar from "../Components/Navbar";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

const imagapi = "https://image.tmdb.org/t/p/w1280";

export default function VerificationPage() {
toast.configure()
  const [avatar, setAvatar] = useState("");
  const [avatar2, setAvatar2] = useState("");
  const [avatar3, setAvatar3] = useState("");
  const [avatar4, setAvatar4] = useState("");

  useEffect(() => {
    setAvatar(localStorage.getItem("verfiyp"));
    setAvatar2(localStorage.getItem("verfiyq"));
    setAvatar3(localStorage.getItem("verfiyr"));
    setAvatar4(localStorage.getItem("verfiys"));
  }, []);

  const [ticket, setTicekt] = React.useState(0);
  const [value, setValue] = React.useState(new Date());
  
  const [bookings, setBookings] = React.useState("");
  const [email, setEmail] = React.useState("");
  ////<--------------------------------------->declaring<-------------------------------------->

  const handleChangeemail = (event) => {
    setEmail(event.target.value);
  };
  const handleChange = (event) => {
    setBookings(event.target.value);
  };

  const addtocart = () => {
    setTicekt(ticket + 1);
  };
  const Removetocart = () => {
    setTicekt(ticket - 1);
  };

  // const [information,setinformation]=React.useState({})
  // const navigate = useNavigate();
  ////<--------------------------------------->getting db<-------------------------------------->
  // const [every, setEvery] = useState([]);
  const fetchdata = async () => {
   await axios.get(
      "https://backendmoviebook.herokuapp.com/booked/get",
      {
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      }
    );
  };
  useEffect(() => {
    fetchdata();
  }, []);
  // console.log(every);
  // console.log("ignore this" + every);

  /////////////----------------------------------->fetching data from database<-----------------------------------------

  /////////////----------------------------------->updating data from database<-----------------------------------------
  const updateProduct = async (email, name, ticket, bookings, time) => {
    try{
    var response = await axios.put(
      `https://backendmoviebook.herokuapp.com/booked/update/${email}`,
      {
        Bookings: {
          moviename: name,
          Tickets: ticket,
          Theatre: bookings,
          Time: time,
        },
      },
      {
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      }
    )}
    catch(err){
toast.error("verification Failed")
    }
    // navigate("");
    console.log(response);
    
  };

  /////////////----------------------------------->updating data from database<-----------------------------------------

  return (
    <Box style={{ backgroundColor: "black"}}>
      <Box
        className="opacity"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), black),
              url(${imagapi}${avatar4}`,
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
        alt=""
      >
        <ResponsiveAppBar></ResponsiveAppBar>

        <br></br>
        <br></br>
        <br></br>
        

        <div
          className="container-sm container-lg container-md row"
          style={{ color: "white", fontWeight: "bolder", textAlign: "left" }}
        >
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              className="img-fluid"
              src={imagapi + avatar2}
              alt={{}}
              style={{
                height: "35em",
                borderRadius: "2em",
                boxShadow: "0 5px 5px grey, 0 6px 6px 0 black",
              }}
            ></img>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            {/* content bar */}
            <div className="container-sm container-lg container-md">
              <div className="row-sm-12 row-md-12 row-lg-12">
                <h2 style={{ fontSize: "50px", fontWeight: "bolder" }}>
                  {avatar}{" "}
                </h2>
              </div>
              <div
                className="row-sm-12 row-md-12 row-lg-12"
                style={{ fontSize: "18px" }}
              >
                {avatar3}
              </div>
<br></br>
<br></br>

              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-6">
                  <Button variant="contained" onClick={() => Removetocart()}>
                    -
                  </Button>{" "}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-6">
                  <Box pt={2} fontSize={15}>
                    {" "}
                    Number of Tickets :{ticket}{" "}
                  </Box>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-6">
                  <Box fontSize={15} py={2}>
                    Price= ${ticket * 100}
                  </Box>{" "}
                </div>
                <div className="col-md-3 col-lg-3 col-sm-6">
                  <Button variant="contained" onClick={() => addtocart()}>
                    +
                  </Button>
                </div>
              </div><br></br>
              <br></br>


              <div className="row">
                <FormControl
                  className="col-sm-12 col-md-6 col-lg-6"
                  sx={{ backgroundColor: "white", borderRadius: "1em" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    select the Cinema
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bookings}
                    label="Cinema"
                    onChange={handleChange}
                    // style={{ color: "white" }}
                  >
                    <MenuItem value={"Devi"}>Devi</MenuItem>
                    <MenuItem value={"Cinepolis"}>Cinepolis</MenuItem>
                    <MenuItem value={"Satyam"}>Satyam</MenuItem>
                    <MenuItem value={"Luxe"}>Luxe</MenuItem>
                    <MenuItem value={"PVR-Cinema"}>PVR Cinema</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* ---------------------->another bar<------------------------------- */}
              <br></br>
              <br></br>

              <div className="row">

                <span className="col-sm-3 col-md-3 col-lg-3" >SELECT THE TIME :</span>{" "}
                <div className="col-sm-9 col-md-9 col-lg-9">
                <LocalizationProvider dateAdapter={AdapterDateFns}  color="primary">
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props}      style={{backgroundColor:"white",color:"white",borderRadius:"1em"}}/>}
                    // label="DateTimePicker"
                    value={value}
                   
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
                </div>
              </div>
            
            <br></br>
            <form>
            <div className="row d-flex justify-content-between">
              <div className="col-sm-3 col-md-3 col-lg-3">
                Enter the mail id for Verification
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <TextField
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0.4em",
                    width: "100%",
                  }}
                  id="filled-basic"
                  label="Email for checkout"
                  variant="filled"
                  type="text"
                  name="Email"
                  required
                  value={email}
                  onChange={handleChangeemail}
                />
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <Link to="/home/VerificationPage/Booking"><button
                  className="btn btn-danger"
                  onClick={() =>
                    updateProduct(email, avatar, ticket, bookings, value)
                  }
                >
                  BOOK NOW
                </button>
                </Link>
              </div>
              </div>
              </form>
         
        
            </div>

            <br></br>
            
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Box>
      <br></br>
        <br></br>
        <br></br>
    </Box>
    
  );
}
