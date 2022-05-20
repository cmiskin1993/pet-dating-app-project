import React from 'react';
import './stylesheets/Home.css';
import DogVideo from '../components/assets/01_part_39_dog_sunglass.mp4';

const Home = () => {
  return (
    <div>
    <div className="overlay"> </div>
      <h1> All you need is love... and a dog</h1>
        <video src={DogVideo} autoPlay loop ></video>
    </div>
       
  )
}

export default Home