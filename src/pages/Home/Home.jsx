import React from 'react';
import styles from './Home.module.css';

const learn =
  'https://img.freepik.com/premium-vector/advertising-banner-office-collaboration-cartoon_81522-4169.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Full-Width Gradient Background */}
      <div className={styles.background}></div>

      {/* Animated Content Section */}
      <div className={styles.content}>
        {/* Left-Side Text */}
        <div className={styles.textBlock}>
          <h1 className={`${styles.heading} ${styles.animatedText}`}>
            <span>Innovating</span> <span>the</span> <span>Future</span> <span>of</span> <span>Technology</span>
          </h1>
          <p className={`${styles.subHeading} ${styles.animatedText}`}>
            <span>Empowering</span> <span>businesses</span> <span>with</span> <span>AI-driven</span> <span>solutions,</span>
            <span>scalable</span> <span>cloud</span> <span>infrastructure,</span> <span>and</span> <span>innovative</span> <span>software.</span>
          </p>
        </div>

        {/* Right-Side Animated Image */}
        <div className={styles.imageBlock}>
          <img src={learn} alt="Innovative Teamwork" className={styles.animatedImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
