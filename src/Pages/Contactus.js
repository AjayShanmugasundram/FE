import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Contactus() {
  return (
    <section>
      <div className="container contact">
        <div className="row">
          <div className="col-md-3 contact-0">
            <div className="contact-info">
              <img src="https://dynamic.brandcrowd.com/preview/logodraft/7d27584c-ae74-4b56-8ec1-1dbab9cb2a1a/image/large.png" alt=""></img>
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/">
                <Button variant="contained">Go to Home</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-9 contact-1">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">
                  First Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                    name="fname"
                  ></input>
                </div>
                <br></br>
                <br></br>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">
                  Last Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                    name="lname"
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">
                  Comment:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <br></br>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
