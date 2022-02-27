import React from "react";
import ResponsiveAppBar from "../Components/Navbar";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const imagapi = "https://image.tmdb.org/t/p/w1280";

export default function VerificationPage() {
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
  const navigate = useNavigate();
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

  ////<--------------------------------------->getting db<-------------------------------------->
  const [every, setEvery] = useState([]);
  const fetchdata = async () => {
    var response = await axios.get("https://backendmoviebook.herokuapp.com/booked/get", {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    });
    setEvery(response.data);
    
  };
  useEffect(() => {
    fetchdata();
  }, []);
  // console.log(every);
  console.log("ignore this"+every)

  /////////////----------------------------------->fetching data from database<-----------------------------------------

  /////////////----------------------------------->updating data from database<-----------------------------------------
  const updateProduct = async (email, name, ticket, bookings, time) => {
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
    );
    console.log(response);
    navigate("/home/VerificationPage/Booking");
  };

  /////////////----------------------------------->updating data from database<-----------------------------------------

  return (
    <Box style={{ backgroundColor: "black" }}>
      <Box
        className="opacity"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), black),
              url(${imagapi}${avatar4}`,
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
        alt=""
      >
        <ResponsiveAppBar></ResponsiveAppBar>

        <br></br>
        <br></br>

        <Box className="col-sm-12">
          <Grid
            container
            spacing={8}
            style={{ color: "white", fontWeight: "bolder", textAlign: "left" }}
          >
            <Grid item xs={4}>
              <img
                src={imagapi + avatar2}
                alt={{}}
                style={{
                  height: "35em",
                  widht: "14em",
                  borderRadius: "2em",
                  boxShadow: "0 8px 8px white, 0 6px 6px 0 black",
                }}
              ></img>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h2 style={{ fontSize: "50px", fontWeight: "bolder" }}>
                    {avatar}{" "}
                  </h2>
                </Grid>
                <Grid item xs={12} style={{ fontSize: "18px" }}>
                  {avatar3}
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={4}>
                    <Box>
                      <Button
                        variant="contained"
                        onClick={() => Removetocart()}
                      >
                        -
                      </Button>{" "}
                      <Box pt={2} fontSize={15}>
                        {" "}
                        Number of Tickets :{ticket}{" "}
                      </Box>
                      <Box fontSize={15} py={2}>
                        Price= ${ticket * 100}
                      </Box>{" "}
                      <Button variant="contained" onClick={() => addtocart()}>
                        +
                      </Button>
                    </Box>
                    <Box>
                      {" "}
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl
                          fullWidth
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
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "1em",
                      }}
                    >
                      {" "}
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="DateTimePicker"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              {/* {every.map((row) => (
          <div key={row._id}></div>
        ))} */}
              {/* {console.log(every._id)} */}
              <br></br>
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  Enter the mail id to Check out
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
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      updateProduct(email, avatar, ticket, bookings, value)
                    }
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
