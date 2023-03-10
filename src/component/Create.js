import React ,{useState}from "react";
import{toast} from 'react-toastify'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL ='https://dummyjson.com'
function Create(props){

    const [product,setProduct] =useState({
        title: "",
        price:0,
        description: "",
        thumbnail:"",
        brand:""
    })

    const navigate =useNavigate()


    const readValue =(e)=>{
        // console.log(e.target.name + " " + e.target.value)
        const {name ,value} = e.target;
        setProduct({...product,[name]:value})
    }

    const submitHandler=async (e)=>{
        e.preventDefault();
        console.log('product =',product)
        await axios.post(`${URL}/products/add`,product)
        .then(res =>{
            toast.success("Product Added Successfully")
            navigate('/')
        }).catch(err => toast.error(err.message))
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary float-right" >Create</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" id="title" value={product.title} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" name="price" id="price"  value={product.price} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="description">Description</label>
                                   <textarea name="description" id="description"  value={product.description} onChange={readValue} cols="30" rows="5" className="form-control" required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="thumbnail">Thumbnail</label>
                                    <input type="url" name="thumbnail" id="thumbnail"  value={product.thumbnail} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="brand">Brand</label>
                                    <input type="text" name="brand" id="brand"  value={product.brand} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Create" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Create