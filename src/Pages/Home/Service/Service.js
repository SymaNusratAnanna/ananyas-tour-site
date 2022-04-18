import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const {name,img,description,price } = service;
    return (
       

        <div class="card mt-10 g-5 my-5 mx-5 col-sm-12 col-md-6 col-lg-4"
         style={{width: "18rem"}}>
           <div>

  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">{name}</h3>
   
    <p class="card-text">{description}</p>
    <h4 class="card-text">Price : {price}</h4>

    <Link to ="/checkout">
      <button className='btn btn-primary'>Book</button> 
    </Link>

    
  </div>
  </div>
</div>
    );
};

export default Service;