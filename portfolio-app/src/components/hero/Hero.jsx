import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2>Hi, I'm Sumanth</h2>
            <p>
            I am a Full Stack Web Developer with experience in building robust and scalable web applications 
            using React and Spring Boot, delivering responsive and user-centric solutions.</p>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="" />
    </section>
  )
}

export default Hero
