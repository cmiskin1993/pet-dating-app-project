import React from 'react';
import '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/stylesheets/Home.css';
import DogVideo from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/assets/01_part_39_dog_sunglass.mp4';



const Home = () => {


  return (
    <div>
      <div className="overlay"></div>
          <h1> All you need is love... and a dog</h1>
            <video src={DogVideo} autoPlay loop ></video>
    </div>
  )
}

export default Home

// Add a controlled form that includes:
// A text input
// A button with the text of “Click Me!”
// A paragraph that has a counter that starts at 0
// When they input text in the text field, the text input should reset and based on word length, the counter should increment.
// The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.