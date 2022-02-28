import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Bg from "../assests/1512217.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SignIn() {
  const [login, setlogin] = React.useState({
    Email: "",
    password: "",
  });
  const navigate = useNavigate();

  toast.configure();

  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var response = await axios.post(
        "https://backendmoviebook.herokuapp.com/register/signin",
        {
          ...login,
        }
      );

      await localStorage.setItem("token", response.data);
      navigate("/home");
    } catch (err) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <img
              src={Bg}
              className="img-fluid w-100 "
              style={{
                objectFit: "cover",
                objectPosition: "left",
                height: "114.5%",
              }}
              alt=""
            ></img>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <Container className="colorofsignin" maxWidth="sm">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <br></br>
                <br></br>
                <br></br>

                <h1 className="p">LOGIN</h1>
                <br></br>

                <Box
                  sx={{
                    width: 500,
                    m: 1,
                    maxWidth: "100%",
                    marginLeft: "10",
                  }}
                >
                  <TextField
                    fullWidth
                    type="email"
                    required
                    label="Email"
                    name="Email"
                    value={login.Email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Box>
                <br></br>

                <Box
                  sx={{
                    width: 500,
                    m: 1,
                    maxWidth: "100%",
                    marginLeft: "10",
                  }}
                >
                  <TextField
                    fullWidth
                    type="password"
                    required
                    label="password"
                    value={login.password}
                    name="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon />}
                    size="large"
                    sx={{ width: "100%", paddingLeft: "2em" }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </form>
              <br></br>
              <hr></hr>
              Don't have an Account?{" "}
              <Link to={"/signup"}>
                <b>Sign Up</b>
              </Link>
              <br></br>
              <hr className="my-4"></hr>
              <a  href="https://plus.google.com/">
              <button
                className="btn btn-lg btn-block btn-primary"
                style={{ backgroundColor: " #dd4b39", border: "none" }}
                type="submit"
              >
                <i>
                  <GoogleIcon></GoogleIcon>{" "}
                </i>{" "}
                <span className="fs-6">Sign in with google</span>
              </button>
              </a>
              <br></br>
              <br></br>
             <a  href="https://www.facebook.com/"><button
                className="btn btn-lg btn-block btn-primary mb-2"
                style={{ backgroundColor: "#3b5998", border: "none" }}
                type="submit"
              >
                <i>
                  <FacebookIcon></FacebookIcon>{" "}
                </i>{" "}
                <span className="fs-6">Sign in with facebook</span>
              </button>
              </a>
              <br></br>
              <br></br>
            </Container>
          </div>
        </div>
      </div>{" "}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
        <Link to="/home/aboutus" style={{color:"white",textDecoration:"none" }}><b>About Us</b></Link>
        <Link to="/home/contactus" style={{color:"white",textDecoration:"none" }}><b>Contact Us</b></Link>
        <Link to="termsandconditons"style={{color:"white",textDecoration:"none" }}><b>Privacy</b></Link>

        <div>
          <a href="https://www.facebook.com/" className="text-white me-4">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="https://twitter.com/" className="text-white me-4">
            <TwitterIcon></TwitterIcon>{" "}
          </a>
          <a href="https://plus.google.com/" className="text-white me-4">
            <GoogleIcon></GoogleIcon>
          </a>
          <a href="https://www.linkedin.com/home" className="text-white">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
      </div>
    </div>
    /////
  );
}
