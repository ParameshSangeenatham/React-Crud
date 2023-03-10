import React, { useState ,useEffect} from "react";
import { useParams,NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify'

const URL = "https://dummyjson.com"

function ProductDetails(props){
    const params =useParams()
    const navigate = useNavigate()

    const [product,setProduct]=useState(false)

    const getSingleProduct =async () =>{
        const res=await axios.get(`${URL}/products/${params.id}`)
        console.log('single =',res)
        setProduct(res.data)
    }


    useEffect(()=>{
        getSingleProduct()
    },[])

    // delete product logic
    const deleteProduct = async (id) => {
         if(window.confirm(`are you sure to delete product id = $(id)?`)){
            await axios.delete(`${URL}/products/${id}`)
              .then(res =>{
                toast.success("product deleted successfully")
                navigate('/')
              }).catch(err =>toast.error(err.response.data.message))
         } else{
            return
         }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="card mt-3 mb-3">
                        <img src={product.thumbnail} alt="no image" className="card-img-top"  height={250}/>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="card mt-3 mb-3">
                        <div className="card-header">
                            <h4 className="text-success text-center">{product.title}</h4>
                        </div>
                        <div className="card-body">
                            <p>
                            <strong>Price</strong>
                            <span className="text-success float-end">&#36;{product.price}</span>
                            </p>
                            <p>
                            <strong>Brand</strong>
                            <span className="text-success float-end">{product.brand}</span>
                            </p> <hr />
                            <p>
                            <strong >Description</strong>
                            <span className="text-secondary">{product.description}</span>
                            </p>
                        </div>
                        <div className="card-footer">
                            <NavLink to={`/products/${product.title}/edit/${product.id}`} className="btn btn-info"><i className="bi bi-pen"></i>Edit</NavLink>
                            <button onClick={()=> deleteProduct(product.id)} className="btn btn-danger float-end"><i className="bi bi-trash"></i>Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails