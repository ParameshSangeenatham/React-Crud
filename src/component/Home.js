import React ,{useState,useEffect}from "react";
import axios from "axios";
import Product from "../screens/Product";

const URL="https://dummyjson.com"

function Home(props){

    const[products,setProducts]=useState([])

    const readProducts =async () =>{
        const res=await axios.get(`${URL}/products`)
        console.log('res =',res)
        setProducts(res.data.products)
    }

    useEffect(()=>{
        readProducts()
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">Home</h3>
                </div>
            </div>

            <div className="row">
                {
                    products.map((item,index)=>{
                       return(
                        <Product key={index} {...item}/>
                       )
                    })
                }
            </div>
        </div>
    )
}


export default Home