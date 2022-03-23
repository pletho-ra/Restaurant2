import React, { useState } from 'react';

import {BsFillPlayFill, BsFillPauseFill} from 'react-icons'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayvideo] = React.useState(false);
  const vidRef = React.useRef();

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
    </div>
  )
}

export default Intro;