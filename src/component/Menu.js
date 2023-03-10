import React from "react";
import {NavLink} from 'react-router-dom'

function Menu(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to ={`/`} className="navbar-brand">React-CRUD</NavLink>
                <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to ={`/`} className="nav-link float-end">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to ={`/create`} className="nav-link float-inline-right">Create</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Menu