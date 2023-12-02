import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart,faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/slices/todoSlice";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const todos = useSelector(state => state.todos);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClose = () => setShow(false);

    let emailId = localStorage.getItem("user_email");
    const handleShow = () =>{
        !emailId ? navigate("/login") : setShow(true);
    } 

    function removeOfferMsg() {
        const element = document.getElementById("offer");
        element.remove();
      }

     const handleLogout = () => {
        navigate("/login");
        localStorage.removeItem("user_email");
      }

    return (
        <div>
            <div className="nav-top" id="offer">Buy more ! and save up to 25% . <span onClick={removeOfferMsg}><FontAwesomeIcon icon={faXmark} /></span></div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: 0 }}>
                <div className="container-fluid" id="navbar">
                    <NavLink to="/" className="navbar-brand" id="logo">Casually</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <NavLink to="/mission" className="nav-link">Mission</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex navbar-nav" role="search" >
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Log In</NavLink>
                            </li>
                            {
                                emailId ? 
                                <li className="nav-item">
                                <NavLink onClick={handleLogout} className="nav-link">Log Out</NavLink>
                                </li> :
                                <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink onClick={handleShow} className="nav-link" id="cart">
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <span className="item-count">{todos.length}</span>
                                </NavLink>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        todos.map((item) => (
                            <div className="cart-item-wrapper" key={item.data.id}>
                                <div className="cart-item-img">
                                    <img src={item.data.images} className="cart-img" />
                                </div>
                                <div className="cart-item-desc">
                                    <h5>{item.data.title}</h5>
                                    <h6>$ {item.data.price}</h6>
                                    <button className="cart-item-remove-btn" onClick={()=>dispatch(removeProduct(item.data.id))}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <h5>Total</h5>
                        <h5>$ {total}</h5>
                    </div>
                    <NavLink to="/checkout"><Button className="checkout-btn" onClick={handleClose}>Checkout</Button></NavLink>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
};

export default Navbar;

