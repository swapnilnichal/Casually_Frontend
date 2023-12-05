import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../features/slices/todoSlice";
import { loadStripe } from '@stripe/stripe-js';


const CheckOut = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:7000";
    console.log(backendUrl);
    const [noItem, setNoItem] = useState(true);
    const todos = useSelector(state => state.todos);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    const date = new Date();
    const formatted_date = date.toLocaleDateString("en", {
        year: "numeric",
        day: "2-digit",
        month: "long",
    }); // March 19, 2023

    const makePayment = async () => {
        if (todos.length <= 0) {
            setNoItem(false); 
        } else {
            const stripe = await loadStripe('pk_test_51OGxqwSA044I0aiRpRCMVCGk0VeAYyhybbgwkBpFRGbolXWFBtG6oxeyTDag0dM82AOEoNEGdJgduiyZuU1lncCG00SO8lhq8S');
            const body = {
                products: todos
            }
            const headers = {
                "content-type": "application/json"
            }
            const response = await fetch(`${backendUrl}/api/create-checkout-session`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });
            const session = await response.json();
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            if (result.error) {
                console.log(result.error);
            }
        }
    }

    return (
        <div className="checkout-page">
            <div className="checkout-wrapper">
                <h4 style={{ margin: "0 0 40px 20px" }}>My Order</h4>
                <div className="checkout-time">
                    <div className="checkout-date">
                        <h5>{formatted_date}</h5>
                        <p>{todos.length} items</p>
                    </div>
                    <div className="checkout-total">$ {total}</div>
                </div>
                {
                    todos.map((item) => (
                        <div className="cart-item-wrapper" key={item.data.id}>
                            <div className="cart-item-img">
                                <img src={item.data.images} className="cart-img" />
                            </div>
                            <div className="cart-item-desc">
                                <h5>{item.data.title}</h5>
                                <h6>$ {item.data.price}</h6>
                                <button className="cart-item-remove-btn" onClick={() => dispatch(removeProduct(item.data.id))}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>
                    ))
                }
                <Button className="orderPlace-btn" onClick={makePayment}>Place Order</Button>
                {noItem ? null : <p style={{ color: 'red' }}>Add atleast one Product.</p>}
            </div>
        </div>
    )
};

export default CheckOut;
