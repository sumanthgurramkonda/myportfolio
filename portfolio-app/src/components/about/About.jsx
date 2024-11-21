import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.container}>
        <h2>About</h2>
        <div className={styles.aboutItems}>
            <div>
                 <h3>Frontend Developer</h3>
                 <p>I am a Frontend Developer with experience in building responsive and optimized websites. 
                  Leveraging the full capabilities of ReactJS, I have developed lightweight, 
                  high-performance web pages with enhanced functionality and user experience.</p>
            </div>
            <div>
                <h3>Backend Developer</h3>
                <p>I am a Backend Developer with expertise in building fast, optimized, and secure web APIs 
                  using Spring Boot and J2EE. By leveraging the full potential of Spring Boot, I have developed 
                  high-performance, scalable, and efficient web applications tailored to meet diverse business needs.</p>
            </div>
        </div>
    </section>
  )
}

export default About
