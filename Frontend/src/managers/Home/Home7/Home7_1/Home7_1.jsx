import React from "react";
import styles from "./Frame.module.css";
import man_question from "../../../../assets/man_question.svg"

const Home7_1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frequentlyAskedQuestionsParent}>
        <b className={styles.frequentlyAskedQuestions}>
          <p className={styles.frequently}>Frequently</p>
          <p className={styles.frequently}>Asked Questions</p>
        </b>
        <div className={styles.theseAreA}>
          These are a few questions which are majorly asked by our users , feel
          free to ask more
        </div>
      </div>
      <div className={styles.getInTouchWrapper}>
        <div className={styles.getInTouch}>Get in touch</div>
      </div>

      <img className={styles.manConfusedByALotOfQuest} alt="" src={man_question} />
    </div>
  );
};

export default Home7_1;
