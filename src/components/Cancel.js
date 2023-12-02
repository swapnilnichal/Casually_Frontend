import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="success-card-wrapper">
      <div class="cancel-card">
      <div className="check-circle" >
        <i style={{color:"tomato"}}><FontAwesomeIcon icon={faXmark} /></i>
      </div>
        <h1 style={{color:"tomato"}}>Error</h1> 
        <p>Oops!<br/> Something went wrong!</p>
        <NavLink to="/products"><button className="cancel-btn">Try Again <FontAwesomeIcon icon={faArrowRight} /></button></NavLink>
      </div>
    </div>
  )
};

export default Cancel;
