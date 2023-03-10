import React from "react";

import {NavLink} from 'react-router-dom'

function Product(props){
    const {title,id,thumbnail,price}=props
    return(
            <div className="col-md-4 col-lg-3 col-sm-6 mt-2">
                <div className="card">
                    <img src={thumbnail} alt="no image found" className="card-top-img" height={200}/>
                    <div className="card-body">
                        <h6 className="text-success text-center">{title}</h6>
                        <p>
                            <strong>Price</strong>
                            <span className="float-end text-success">&#36; {price}</span>
                        </p>

                        <NavLink to={`/products/details/${id}`} className="btn btn-outline-success">Details</NavLink>
                    </div>
                </div>
            </div>
    
    )
}
export default Product