// import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css"  //22

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#"> <img src="https://pxrnf35mt7b3csry7811do6t-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/Stories_Logo_Square.png" width="100px"></img></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Video Stories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Images Stories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Text Stories</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </>
    )
}




export default Navbar;