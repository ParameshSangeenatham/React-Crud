import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create";
import Pnf from "./component/Pnf";
import Update from "./component/Update";
import ProductDetails from "./screens/ProductDetails";

function App(props) {
  return(
    <BrowserRouter>
       <Menu/>
       <ToastContainer autoClose={3000}/>
       <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/create`} element={<Create/>}/>
          <Route path={`/products/:product/edit/:productId`} element={<Update/>}/>
          <Route path={`/*`} element={<Pnf/>}/>
          <Route path={`products/details/:id`} element={<ProductDetails/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App