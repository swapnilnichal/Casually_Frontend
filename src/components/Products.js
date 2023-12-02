import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from "react-redux"
import { addTodo } from "../features/slices/todoSlice";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [itemDesc, setItemDesc] = useState([]);
  const [resultData,setResultData] = useState("");
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(()=>{
        let emailId = localStorage.getItem("user_email");
        if(!emailId){
            navigate("/signup");
        }
    },[])

  function handleShow(item) {
    setShow(true);
    setItemDesc(item)
  }
  useEffect(() => {
    console.log(itemDesc);
  }, [itemDesc]);

  async function getApi() {
    try{
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  const SearchItems = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (inputValue.length < 1) {
      setResultData([]); 
    } else {
      const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(inputValue)
      );
      setResultData(filteredData);
    }
  }
  
  return (
    <div>
        <div className="input-container">
           <input type="text" name="text" onChange={SearchItems} className="input" placeholder="Search something..."/>
           <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" className="icon"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white" height="24" width="24"></rect> <path fill="" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
        </div>
        <div>
          {
            resultData && resultData.map((item) =>(
              <Card key={item.id} className="item-div" style={{marginLeft:"30px"}}>
                <Card.Img variant="top" className="card-image" src={item.images[0]} onClick={()=>handleShow(item)}/>
                <Button className="addToCart" onClick={()=>dispatch(addTodo(item))}><FontAwesomeIcon icon={faPlus}/></Button>
                <Card.Body onClick={()=>handleShow(item)}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>$ {item.price}</Card.Text>
                </Card.Body>
              </Card>
             ))
          }
        </div>
    <div className="product-wrapper">
      {
        data.map((item) =>(
          <Card key={item.id} className="item-div">
            <Card.Img variant="top" className="card-image" src={item.images[0]} onClick={()=>handleShow(item)}/>
            <Button className="addToCart" onClick={()=>dispatch(addTodo(item))}><FontAwesomeIcon icon={faPlus}/></Button>
            <Card.Body onClick={()=>handleShow(item)}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>$ {item.price}</Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
    <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Detail</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="of-canvas-body">
                    {
                      <Card key={itemDesc.id} className="item-review-div">
                      <Card.Img variant="top" src={itemDesc.images} />
                      <Card.Body>
                        <Card.Text>$ {itemDesc.price}</Card.Text>
                        <Card.Title>{itemDesc.title}</Card.Title>
                        <Card.Text>{itemDesc.description}</Card.Text>
                      </Card.Body>
                    </Card>
                    }
                </Offcanvas.Body>
            </Offcanvas>
  </div>
  )
};

export default Products;
