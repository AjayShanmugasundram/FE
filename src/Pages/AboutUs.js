import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutUs() {
  return (
    <div className='vh-100 gray-bg '>
    <div className="about-section paddingTB60 " style={{textAlign:"left"}}>
                <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span>Us</span></h1>
								<h3>Book My Cinema</h3>
								<p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
								<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
						<div className="about-icons"> 
                            <ul >
                                <li><a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"><FacebookIcon></FacebookIcon></i></a> </li>
                                <li> <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"><GoogleIcon></GoogleIcon></i></a> </li>
                                <li> <a href="https://www.linkedin.com/home"><i id="social-em" className="fa fa-envelope-square fa-3x social"><LinkedInIcon></LinkedInIcon></i></a> </li>
                                <li><a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i><TwitterIcon></TwitterIcon></a> </li>

                            </ul>      
               
               
	           
	           
	        
	        </div>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="about-img">
								<img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""></img>
							</div>
						</div>	
                    </div>
                </div><br></br>
                <br></br>
                <br></br>
                
            </div>
            <Link to="/"><Button variant="contained">Go to Home</Button></Link>
   
    </div>

  )
}
