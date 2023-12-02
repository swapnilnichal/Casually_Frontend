import React, { useEffect, useState } from "react"
import Video from "./Video";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        let emailId = localStorage.getItem("user_email");
        if(!emailId){
            navigate("/signup");
        }
    },[])
    async function getApi() {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        getApi();
    }, []);

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active  custom-carousel-item">
                        <img src="https://www.dick-moby.com/cdn/shop/files/TIDES_1920x.jpg?v=1698054980" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item  custom-carousel-item">
                        <img src="https://www.dick-moby.com/cdn/shop/files/TIDES_Sun_1920x.jpg?v=1698055953" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="info-wrapper">
                <div className="sustainable-content">
                    <h4>Sustainable Fashion</h4>
                    <p>Elevate your style sustainably with organic cotton and recycled fibers.</p>
                </div>
                <div className="high-quality-content">
                    <h4>Premium Craftsmanship</h4>
                    <p>Indulge in comfort and style with meticulously crafted, high-quality casual wear.</p>
                </div>
                <div className="trendsetting-styles-content">
                    <h4>Trendsetting Fashion</h4>
                    <p>Stay ahead in fashion with our curated collection of trendsetting styles.</p>
                </div>
            </div>

            <div className="style-wrapper">
                <div className="w-style-wrap">
                    <div className="women-style-img">
                        <div className="img-content">
                            <h1>Women's Styles</h1>
                            <NavLink to="/products"><button className="explore-btn">Explore</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="m-style-wrap">
                    <div className="men-style-img">
                        <div className="img-content">
                            <h1>Men's Styles</h1>
                            <NavLink to="/products"><button className="explore-btn" >Explore</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bestseller">
                    <h1>Bestsellers</h1>
                    <NavLink to="/products" className="product-link"><button className="explore-products">See all products</button></NavLink>
                </div>
                <div className="bestSellers-wrapper">
                    {
                        data.length >= 3 && (
                            <>
                                <div className="bestseller-item">
                                    <div className="card" key={data[0].id} style={{ width: "26rem" }}>
                                        <img src={data[0].images[0]} className="card-img-top" alt="product-picture" />
                                        <div className="card-body">
                                            <h5 className="card-title product-info">{data[0].title}</h5>
                                            <h5 className="card-title product-info">$ {data[0].price}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="bestseller-item">
                                    <div className="card" key={data[1].id} style={{ width: "26rem" }}>
                                        <img src={data[1].images[0]} className="card-img-top" alt="product-picture" />
                                        <div className="card-body">
                                            <h5 className="card-title product-info">{data[1].title}</h5>
                                            <h5 className="card-title product-info">$ {data[1].price}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="bestseller-item">
                                    <div className="card" key={data[2].id} style={{ width: "26rem" }}>
                                        <img src={data[2].images[0]} className="card-img-top" alt="product-picture" />
                                        <div className="card-body">
                                            <h5 className="card-title product-info">{data[2].title}</h5>
                                            <h5 className="card-title product-info">$ {data[2].price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

            <Video />
        </div>
    )
};

export default Home;
