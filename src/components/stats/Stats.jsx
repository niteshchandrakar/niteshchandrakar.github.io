import React from 'react'
import styles from "./stats.module.css"
import Github from 'react-github-calendar';

const Stats = () => {
  return (
    <section className={styles.stats__section} id="stats">
      <h1 className={styles.stats__heading}>Github Stats</h1>
      <p className={styles.stats__description}>Check out my work on Github</p>

      <div className={styles.stats__maindiv}>
       
       <div>
        <Github  class="react-activity-calendar" username="niteshchandrakar" color={"#d11243"} blockSize={20} />
        </div>

        <div className={styles.stats__imagediv}>
          <img className={styles.stats__image} src="https://github-readme-streak-stats.herokuapp.com/?user=niteshchandrakar&theme=default" alt="github stats" />
        </div>
        <div className={styles.stats__imagediv}>
          <img className={styles.stats__image} src="https://github-readme-stats.vercel.app/api?username=niteshchandrakar&theme=default&show_icons=true&locale=en" alt="github stats" />
        </div>
        <div className={styles.stats__imagediv}>
          <img className={styles.stats__image} src="https://github-readme-stats.vercel.app/api/top-langs?username=niteshchandrakar&show_icons=true&locale=en&layout=compact" alt="github stats" />
        </div>
      </div>
    </section>
  )
}

export default Stats;