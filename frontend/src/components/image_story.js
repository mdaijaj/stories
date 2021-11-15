
import '../App.css';
import './story.css'

import React, { useState, useEffect } from 'react';
const ImageStory=()=>{
    const [storyList, setStoryList]= useState([]);

    useEffect(() => {
        const getStory=async()=>{
            const response= await fetch('/api/storyList')
            const postData= await response.json();
            const data=postData.data
            setStoryList([...data])
        }
        getStory()
    }, []);

    const dataList=storyList.filter((item)=> (item.types=="image/jpeg" || item.types=="image/png"))
    return(
        <>
        <h1>hello ImageStory</h1>
        <ul>
            {dataList.map((data)=>{
                return(
                    <li className="column">
                        <div className="card">
                            <img src={data.imageVideo_url} className="card-img-top" alt="image path not found.." height="300px"/>
                            <h5>{data.name}</h5>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default ImageStory;