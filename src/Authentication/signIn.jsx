import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container} from "@mui/material";
import Stepper from "../Components/Stepper";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      var response = await axios.post("https://backendmoviebook.herokuapp.com/register/signin", {
        ...login,
      });

      await localStorage.setItem("token", response.data);
      navigate("/home");
    } catch (err) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="bgforsignin" style={{ height: "100vh" }}>
      
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{color:"white"}}> BOOK MY CINEMA</h1>
        <br></br>
        <br></br>
        <br></br>
      <div className="row"
        justify="space-between" // Add it here :)
        
      >
        
        <div className="col-sm-12 col-md-6">
          <Stepper></Stepper>
        </div>

        <div className="col-sm-12 col-md-6">
          <Container className="colorofsignin" maxWidth="sm">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <br></br>

              <h1 className="p">Welcome...!</h1>
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
              <br></br>
            <br></br>
          </Container>
        </div>
      </div>
    </div>
    /////
  );
}
