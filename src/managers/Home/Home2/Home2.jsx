import React from 'react'
import styles from './Frame.module.css'
import group_people from '../../../assets/group_people.svg'
import group_people2 from '../../../assets/group_people2.svg'
import ai from '../../../assets/ai.svg'


const Home2 = () => {
  return (

          <div className={styles.whatTrumioIsParent}>
          <b className={styles.whatTrumioIsContainer}>
          <span>{`What `}</span>
          <span className={styles.trumio}>Trumio</span>
          <span> is ?</span>
          </b>
          <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
          <div className={styles.aVibrantEcosystemParent}>
          <b className={styles.aVibrantEcosystem}>A Vibrant Ecosystem</b>
          <div className={styles.connectsGlobalClients}>Connects global clients with university student and expert teams for projects</div>
          </div>
          <img className={styles.graphicElementsIcon} alt="" src={group_people} />
          </div>
          <div className={styles.frameContainer}>
          <div className={styles.aVirtualWorkbenchParent}>
          <b className={styles.aVirtualWorkbench}>A Virtual Workbench</b>
          <div className={styles.aiEmbeddedThroughout}>AI embedded throughout project lifecycle, secure execution environment, and expanding tools workbench.</div>
          </div>
          <img className={styles.exchangeBusinessDocuments1Icon} alt="" src={group_people2} />
          </div>
          <div className={styles.frameDiv}>
          <div className={styles.poweredByAiParent}>
          <b className={styles.poweredByAi}>Powered by AI</b>
          <div className={styles.connectsGlobalClients}>Enabling emerging talent and entrepreneurs across the world to step boldly into the future of work.</div>
          </div>
          <img className={styles.manAndRobotWithComputersS} alt="" src={ai} />
          </div>
          </div>
          </div>);
          };

          

export default Home2
