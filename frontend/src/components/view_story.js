import react from "react";
import './story.css'
import React, { useState, useEffect } from 'react';

const ViewStory=()=> {
    const [storyList, setStoryList]= useState([]);

    const getStory=async()=>{
      const response= await fetch('/api/storyList')
      const postData= await response.json();
      const data=postData.data
      setStoryList([...data])
  }
  console.log("storyList", storyList)
  useEffect(() => {
      getStory()
  }, []);

  return (
    <>
        <h2> hello ViewStory</h2>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="2000">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-RKX8-kWiwTVInESD0cd2Y7v8LKjVi-YLg&usqp=CAU"  width="800px" height="550px" alt="..." />
            </div>
          {storyList.map((data)=>{
            return(
              <div class="carousel-item">
                <img src={data.imageVideo_url} alt="..." width="800px" height="550px"/>
              </div>
            )
            })}

          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
    </>
  );
}

export default ViewStory;

