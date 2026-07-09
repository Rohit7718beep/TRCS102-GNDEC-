import React from 'react'
import Lottie from 'lottie-react'
import animation from "../animation/skate.json"
const About = () => {
    const LottieComponent=Lottie.default || Lottie;
  return (<>
    <div className="anime">
<LottieComponent animationData={animation} loop={true} autoplay={true}/>
     </div></>
  )
}

export default About
