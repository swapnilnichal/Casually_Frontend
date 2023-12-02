import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-card-wrapper">
      <div class="success-card">
      <div className="check-circle" >
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request.<br/> we'll be in touch shortly!</p>
        <NavLink to="/"><button className="goHome-btn">Go Home <FontAwesomeIcon icon={faArrowRight} /></button></NavLink>
      </div>
    </div>
  )
};

export default Success;
