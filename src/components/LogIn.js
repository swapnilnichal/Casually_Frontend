import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let user_pass = localStorage.getItem("user_pass");
    setIsValid(emailRegex.test(email));
    if (isValid === false) { return null; }
    // if (password.length < 8 || (!password.includes("@") && !password.includes("#"))) {
    //   setValidPass(false);
    //   return null;
    // }
    if(user_pass !== password){
      setValidPass(false);
      return null;
    }
    else {
      setValidPass(true);
      let localEmail = localStorage.getItem("backup_email"); 
      if (localEmail === email) {
        setToastMessage("User has successfully logged in");
        setShow(true);
        localStorage.setItem("user_email", email);
        navigate("/");
      } else {
        setToastMessage("Wrong email or password");
        setShow(true);
      }
    }
  }

  return (
    <div>
      <div className="form-wrapper">
        <div className="signup-form-div">
          <div className="container">
            <h4>Login for <span className="formLogo">Casually</span></h4>
            <form id="signup-form" onSubmit={handleForm}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                {isValid ? null : <p style={{ color: 'red' }}>Invalid email address</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                {validPass ? null : <p style={{ color: 'red' }}>length of password should be greater than 8 and include special characters like "@","#"</p>}
              </div>
              <div className="form-text">I agree to abide by Casually's Terms of Service and its Privacy Policy</div>
              <button type="submit" className="btn btn-primary signupBtn"><FontAwesomeIcon icon={faUserPlus} className="userIcon" />Log In</button>
              <div className="form-text">Create your account. <NavLink style={{marginLeft:"15px"}} to="/signup">Sign Up</NavLink></div>
            </form>
            <Row>
            <Col xs={6}>
              <ToastContainer className="p-3" position="middle-start" style={{ zIndex: 1 }} >
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                  <Toast.Header>
                    <strong className="me-auto">{toastMessage}</strong>
                  </Toast.Header>
                </Toast>
              </ToastContainer>
            </Col>
          </Row>
          </div>
        </div>
        <div className="login-img-div"></div>
      </div>
    </div>
  )
};

export default LogIn;