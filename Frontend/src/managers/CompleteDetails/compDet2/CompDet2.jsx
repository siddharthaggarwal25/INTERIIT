import React from 'react'
import styles from './Frame.module.css'

const CompDet2 = () => {
  return (
     <div className={styles.mainContainer}>
     <div className={styles.form}>
     <div className={styles.backButton}>
     <img className={styles.iconParkright} alt="" src="icon-park:right.svg" />
     <div className={styles.backText}>Back</div>
     </div>
     </div>
     <div className={styles.frameParent}>
     <div className={styles.areYouAClubMemberParent}>
     <div className={styles.areYouA}>Are you a club member ?</div>
     <div className={styles.optionParent}>
     <div className={styles.backButton}>
     <div className={styles.optionChild} />
     <div className={styles.backText}>Yes</div>
     </div>
     <div className={styles.backButton}>
     <div className={styles.optionChild} />
     <div className={styles.backText}>No</div>
     </div>
     </div>
     <div className={styles.frameGroup}>
     <div className={styles.enterYourClubNameWrapper}>
     <div className={styles.backText}>Enter your club name</div>
     </div>
     <div className={styles.verifyWrapper}>
     <div className={styles.backText}>Verify</div>
     </div>
     </div>
     </div>
     <div className={styles.frameContainer}>
     <div className={styles.enterYourFieldOfStudyParent}>
     <div className={styles.enterYourField}>Enter your Field of Study</div>
     <div className={styles.chooseYourFieldOfStudyWrapper}>
     <div className={styles.areYouA}>choose your field of study</div>
     </div>
     </div>
     <div className={styles.enterYourFieldOfStudyParent}>
     <div className={styles.enterYourField}>Enter your Program</div>
     <div className={styles.chooseYourFieldOfStudyWrapper}>
     <div className={styles.areYouA}>choose your program</div>
     </div>
     </div>
     </div>
     <div className={styles.frameContainer}>
     <div className={styles.enterYourFieldOfStudyParent}>
     <div className={styles.enterYourField}>College name</div>
     <div className={styles.chooseYourFieldOfStudyWrapper}>
     <div className={styles.areYouA}>Enter your college name</div>
     </div>
     </div>
     <div className={styles.enterYourFieldOfStudyParent}>
     <div className={styles.enterYourField}>Passing year of study</div>
     <div className={styles.chooseYourFieldOfStudyWrapper}>
     <div className={styles.areYouA}>Enter your last name</div>
     </div>
     </div>
     </div>
     </div>
     <div className={styles.footer}>
     <div className={styles.frameParent1}>
     <div className={styles.clearAllWrapper}>
     <div className={styles.clearAll}>Clear all</div>
     </div>
     <div className={styles.nextWrapper}>
     <div className={styles.clearAll}>Next</div>
     </div>
     </div>
     </div>
     </div>);
     };

export default CompDet2
