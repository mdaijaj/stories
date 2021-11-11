import react from "react";
import React, { useState } from 'react';
import axios from "axios";

const TextModel=()=>{
    const [story, setStory]= useState({
        name: "", 
        title: "", 
        note: "", 
        time: "",
    });

    let name, value;
    const handleInputs=(e)=>{
        name= e.target.name
        value= e.target.value
        console.log("story", story)
        setStory({...story, [name]: value})  // dynamic data for
    }

    const postStory= async(e)=>{
        e.preventDefault()
        console.log("story", story)
        const {name,title, note, time}=story
        const config={
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },   
            body: JSON.stringify({name, title, note})
        }
        let response= await fetch('/api/addTextStory', config)
        let responseOk= response && response.ok
        console.log("responseOk", responseOk)
        // .then((data)=>data.json())
        
        // if(res.status===400 || !res){
        //     window.alert("Invalid Registration");
        // }
        // else{
        //     window.alert("Story add is successfully!")
        //     // history.push('/login')
    }


    return (
        <>
            <h1>story add key</h1>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">add text story</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add New Story</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group">
                        <label for="recipient-name" className="col-form-label">username:</label>
                        <input type="text" onChange={handleInputs} className="form-control" id="recipient-name"/>
                    </div>
                    <div className="form-group">
                        <label for="recipient-name" className="col-form-label">title:</label>
                        <input type="text" onChange={handleInputs} className="form-control" id="recipient-name"/>
                    </div>
                    <div className="form-group">
                        <label for="message-text" className="col-form-label">story:</label>
                        <textarea className="form-control" onChange={handleInputs} id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" name="name" onClick={postStory} className="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default TextModel;