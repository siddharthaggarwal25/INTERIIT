import React from "react";
import styles from "./Frame.module.css";
import hostyourownopp from "../../../assets/hostyourownopp.svg";
import upright from "../../../assets/upright.svg";

const Home4 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.readyHostYourOwnOpportuniParent}>
          <b className={styles.readyHostYourContainer}>
            <span>{`Ready! `}</span>
            <span className={styles.host}>Host</span>
            <span>{` your own `}</span>
            <span className={styles.host}>Opportunity</span>
          </b>
          <div className={styles.exploreADiverse}>
            Explore a diverse pool of talented individuals who are waiting for
            such opportunities
          </div>
        </div>
        <div className={styles.popularProjectsYouCanStartParent}>
            <div className={styles.popularProjectsYou}>
              Popular projects you can start hosting:
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
        <div className={styles.frameDiv}>
          <div className={styles.hostNowParent}>
            <div className={styles.hostNow}>Host Now</div>
            <img
              className={styles.biarrowUpIcon}
              alt=""
              src={upright}
            />
          </div>
          <div className={styles.knowMoreWrapper}>
            <div className={styles.hostNow}>Know more</div>
          </div>
        </div>
      </div>
      <img
        className={styles.cfe6d841Frame10000124211Icon}
        alt=""
        src={hostyourownopp}
      />
    </div>
  );
};

export default Home4;
