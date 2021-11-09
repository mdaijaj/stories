// import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css"  //22
import react from "react";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <NavLink className="navbar-brand" to="/"> <img src="https://pxrnf35mt7b3csry7811do6t-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/Stories_Logo_Square.png" width="100px"></img></NavLink>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/video_story">Video Stories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/image_story">Images Stories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/text_story">Text Stories</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </>
    )
}




export default Navbar;