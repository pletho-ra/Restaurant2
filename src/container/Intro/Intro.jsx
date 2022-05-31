import React, { useState, useRef } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayvideo] = useState(false);
  const vidRef = useRef();
  
  const HandleVideo = () =>{
    setPlayvideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
      />
      <div className="app__video-overlay flex__center">
          <div 
              className="app__video-overlay-circle flex__center"
              onClick={HandleVideo}
          >
           {playVideo ? 
           (<BsPauseFill color="#fff" fontSize={30}/> ) 
            : <BsPlayFill color="#fff" fontsize={30}/>
           }
          </div>     
      </div>
    </div>
  )
}

export default Intro;
