
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
            // console.log("data", data)
            setStoryList([...data])
        }
        getStory()
    }, []);
    const arrayOfStory= storyList.map((data)=>
        <li>{data}</li>
    );
    return(
        <>
        <h1>hello ImageStory</h1>
        <ul className="list-group w-75 m">
        
            <li>
            <div className="row">
                <div className="column">
                {console.log("storyList", storyList)}
                    <div className="card">
                        <img src="#" className="card-img-top" alt="..." height="300px"/>
                        <h5>king khan</h5>
                        <p>hello bro</p>
                    </div>
                </div>
            </div>
            </li>
        </ul>
{/* 
            <div className="column">
                <div className="card">
                <img src="https://bornrealist.com/wp-content/uploads/2017/05/warran-buffet.jpg" className="card-img-top" alt="..." height="300px"/>
                <h5>elon musk</h5>
                <p>hello bro</p>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKszlfp4Mg9MpvMD1CFyPt7XE42UDFfcSuA&usqp=CAU" className="card-img-top" alt="..." height="300px"/>
                <h5>borren wuffet </h5>
                <p>hello bro</p>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp7xboivJkV6ds1y3lmoUfWWytOiZkx01-w&usqp=CAU" className="card-img-top" alt="..." height="300px"/>
                <h5>michael phelps</h5>
                <p>hello bro</p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-WjL_h253KHA-lK07xCMrl3VI278pm5fHg&usqp=CAU" className="card-img-top" alt="..." height="300px"/>
                <h5>Hrithik Roshan</h5>
                <p>hello bro</p>
                </div>
            </div> */}
        </>
    )
}

export default ImageStory;