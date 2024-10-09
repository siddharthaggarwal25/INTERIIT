import React, { useState, useEffect } from "react";
import styles from './Frame.module.css';
import search from "../../../assets/search.svg";
import home1 from "../../../assets/home1.svg";

const Home1 = () => {
  const [talent, setTalent] = useState(0);
  const [team, setTeam] = useState(0);
  const [university, setUniversity] = useState(0);

  useEffect(() => {
    const startAnimation = (target, setter, duration) => {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setter(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    // Start animations for each counter with different durations
    startAnimation(500, setTalent, 2000); // Animate 'talent' over 2 seconds
    startAnimation(25, setTeam, 1000); // Animate 'team' over 1 second
    startAnimation(15, setUniversity, 1200); // Animate 'university' over 1.2 seconds
  }, []);

  return (
    <div style={{ scale: "90%" }} className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameContainer}>
            <div className={styles.modernizingYourJobSearchExParent}>
              <b className={styles.modernizingYourJobContainer}>
                <p className={styles.modernizingYour}>Modernizing your</p>
                <p className={styles.modernizingYour}>
                  <span className={styles.jobSearch}>Job search</span>
                  <span> Experience</span>
                </p>
              </b>
              <div className={styles.over100000JobsContainer}>
                <p className={styles.modernizingYour}>
                  {`Over 1,00,000+ jobs listed here and over `}
                </p>
                <p className={styles.modernizingYour}>
                  20,000 students have registered for projects
                </p>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.bxsearchParent}>
                <img className={styles.bxsearchIcon} alt="" src={search} />
                <div className={styles.searchForYour}>
                  Search for your dream project
                </div>
              </div>
              <div className={styles.searchWrapper}>
                <div className={styles.searchForYour}>Search</div>
              </div>
            </div>
          </div>
          <div className={styles.popularProjectsYouCanStartParent}>
            <div className={styles.popularProjectsYou}>
              Popular projects you can start on:
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.uiuxWrapper}>
                <div className={styles.searchForYour}>UI/UX</div>
              </div>
              <div className={styles.uiuxWrapper}>
                <div className={styles.searchForYour}>Web Development</div>
              </div>
              <div className={styles.uiuxWrapper}>
                <div className={styles.searchForYour}>E-commerce</div>
              </div>
              <div className={styles.uiuxWrapper}>
                <div className={styles.searchForYour}>Health and Wellness</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.homepageHeroSectionImagePnIcon}
          alt=""
          src={home1}
        />
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.frameParent4}>
          <div className={styles.frameChild} />
          <div className={styles.parent}>
            <b className={styles.b}>{talent} +</b>
            <div className={styles.talent}>TALENT</div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameChild} />
          <div className={styles.group}>
            <b className={styles.b1}>{team} +</b>
            <div className={styles.talent}>TEAMS</div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameChild} />
          <div className={styles.group}>
            <b className={styles.b1}>{university} +</b>
            <div className={styles.talent}>UNIVERSITIES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
