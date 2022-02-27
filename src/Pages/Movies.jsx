import React from "react";
import { useNavigate } from "react-router-dom";

const imagapi = "https://image.tmdb.org/t/p/w1280";

export default function Movies({
  title,
  poster_path,
  overview,
  vote_average,
  backdrop_path,
}) {
  const navigate = useNavigate(); 
  const handleClick = (e) => {
    navigate("/home/VerificationPage")
    const data=[title]
    const data2= [poster_path]
    const data3= [overview]
    const data4= [backdrop_path]
    const data5= [poster_path]
    
   
   localStorage.setItem("verfiyp",data)
   localStorage.setItem("verfiyq",data2)
   localStorage.setItem("verfiyr",data3)
   localStorage.setItem("verfiys",data4)
   localStorage.setItem("verfiyt",data5)
  
  };
    /////////----------------------------->sending those data to verification<----------------------------------////



  return (
      <div className="col-md-3 text-left">
        <div
          className="card"
          style={{
            borderRadius: "1em ",
            boxShadow:
              " 0 1px 1px 0 rgb(255, 255, 255), 0 1px 1px 0 rgb(167, 167, 167)",
          }}
        >
          <img
            style={{ borderRadius: "1em 1em 0em 0em" }}
            src={imagapi + poster_path}
            className="card-img-top"
            alt=""
          ></img>
          <div className="card-body" style={{ height: "9em" }}>
            <b className="card-title"> {title}</b>
            <p className="card-text"></p>
            <button
              className="btn btn-danger"
              onClick={(e)=>{handleClick(e)}}
            >
              BOOK NOW
            </button>{" "}
            <b style={{ marginLeft: "4.5em" }}>{vote_average}⭐️</b>
          </div>
        </div>
        <br />
      </div>
  );
}

///setlocal