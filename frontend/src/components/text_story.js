import react from "react";
import '../App.css';
import './story.css'
import React, { useState, useEffect } from 'react';

const TextStory=()=>{
    const [storyList, setStoryList]= useState([]);

    useEffect(() => {
        const getStory=async()=>{
            const response= await fetch('/api/availableTextStory')
            const postData= await response.json();
            const data=postData.data
            setStoryList([...data])
        }
        getStory()
    }, []);
    console.log("storyList", storyList)
    return (
        <>
            <ul>
                {storyList.map((data)=>{
                    return(
                        <li className="column">
                        <div className="TextStoryPages">
                            <div className="card">
                                <h5>{data.name}</h5>
                                <h5>{data.title}</h5>
                                <p>{data.note}</p>
                                <p>{data.createdAt}</p>
                            </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TextStory;