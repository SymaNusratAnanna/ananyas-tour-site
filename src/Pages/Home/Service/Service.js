import React from 'react';
import './Service.css'


const Service = ({service}) => {
    const {name,img,description,price } = service;
    return (
        // <div className='service'>
        //    <img src={img}  alt="" />
        //    <h2>{name}</h2>
        //    <p>Price : {price}</p>
        //    <p><small>{description}</small></p>
        //    <button>Book </button>
        // </div>

        <div class="card mt-10 g-5 my-5 mx-5 col-sm-12 col-md-6 col-lg-4" style={{width: "18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
   
    <p class="card-text">{description}</p>
    <p class="card-text">Price : {price}</p>

    <button class="btn btn-primary">Book </button>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    );
};

export default Service;