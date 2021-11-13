import react from "react";
import './story.css'
import React, { useState, useEffect } from 'react';

const ViewStory=()=> {
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
  return (
    <>
        <h2> hello ViewStory</h2>

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="2000">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          {storyList.map((data)=>{
            <>
            <h3>{data}</h3>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={data} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
            </div>
            </>
          })}
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
     
        </div>
    </>
  );
}

export default ViewStory;