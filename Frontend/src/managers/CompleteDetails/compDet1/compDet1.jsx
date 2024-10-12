import React from 'react'
import styles from './Frame.module.css'
import { useNavigate } from 'react-router-dom';
import back from "../../../assets/back.svg"

const CompDet1 = () => {
           const navigate = useNavigate();

            
            return (
                   <div className={styles.mainContainer}>
                          <div className={styles.form}>
                                 <div className={`cursor-pointer ${styles.backButton}`}>
                                        <img className={styles.iconParkright} alt="" src={back} />
                                        <div onClick={()=>navigate('/')} className={`${styles.backText}`}>Back</div>
                                 </div>
                          </div>
                          <div className={styles.frameParent}>
                                 <div className={styles.frameGroup}>
                                        <div className={styles.frameChild} />
                                        <div className={styles.editImageWrapper}>
                                               <div className={styles.editImage}>Edit Image</div>
                                        </div>
                                 </div>
                                 <div className={styles.frameContainer}>
                                        <div className={styles.yourFirstNameParent}>
                                               <div className={styles.yourFirstName}>Your First name</div>
                                               <div className={styles.enterANameForTheProjectWrapper}>
                                                      <div className={styles.editImage}>Enter a name for the project</div>
                                               </div>
                                        </div>
                                        <div className={styles.yourFirstNameParent}>
                                               <div className={styles.yourFirstName}>Last name</div>
                                               <div className={styles.enterANameForTheProjectWrapper}>
                                                      <div className={styles.editImage}>Enter your last name</div>
                                               </div>
                                        </div>
                                 </div>
                                 <div className={styles.frameContainer}>
                                        <div className={styles.yourFirstNameParent}>
                                               <div className={styles.phoneNumber}>Phone number</div>
                                               <div className={styles.frameParent1}>
                                                      <div className={styles.enterA10DigitPhoneNumberWrapper}>
                                                             <div className={styles.backText}>Enter a 10-digit phone number</div>
                                                      </div>
                                                      <div className={styles.verifyWrapper}>
                                                             <div className={styles.backText}>Verify</div>
                                                      </div>
                                               </div>
                                        </div>
                                        <div className={styles.yourFirstNameParent}>
                                               <div className={styles.phoneNumber}>Enter college email address</div>
                                               <div className={styles.frameParent1}>
                                                      <div className={styles.enterA10DigitPhoneNumberWrapper}>
                                                             <div className={styles.backText}>Enter your college email address</div>
                                                      </div>
                                                      <div className={styles.verifyWrapper}>
                                                             <div className={styles.backText}>Verify</div>
                                                      </div>
                                               </div>
                                        </div>
                                 </div>
                          </div>
                          <div className={styles.footer}>
                                 <div className={styles.frameParent3}>
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
     


export default CompDet1
