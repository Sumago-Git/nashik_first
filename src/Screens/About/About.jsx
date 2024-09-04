import React from 'react'
import Aboutbanner from '../../ScreenComponents/AboutComponents/Aboutbanner'
import Directors from "../../ScreenComponents/AboutComponents/Directors"
import Achivements from '../../ScreenComponents/AboutComponents/Achivements'
import Opportunities from '../../ScreenComponents/AboutComponents/Opportunities'

const About = () => {
  return (
    <div>
      <Aboutbanner/>
      <Directors/>
      <Achivements/>
      <Opportunities/>
    </div>
  )
}

export default About
