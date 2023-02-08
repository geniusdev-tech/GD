import React from 'react'
import "./About.scss";
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
//import portfolio from "../../../assets/portfolio.jpg"
//import about from "../../../assets/about.gif"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src="https://media.giphy.com/media/biSFmaBCo9K6Ut1PDu/giphy.gif"
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>I started studying Technology when I was 10 years old. I was born in Maceió, where I worked in logistics, administration, human resources, finance, NF-E administration, and in the IT area at the Federal Police Superintendence. I didn't stop and kept taking and acquiring more and more experience in the places I passed through.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='https://wa.me/5582999993986' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <SocialIcon url="#"  network="whatsapp" style={{ height: 30, width: 30 }} />
             Contact Me
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About