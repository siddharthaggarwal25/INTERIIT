import React, { useState } from "react";
import styles from "./Frame.module.css";
import plus from "../../../../assets/plus.svg";
import minus from "../../../../assets/minus.svg";

const Home7_2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.frameParent}>
      {/* First Section */}
      <div
        className={`${styles.section} ${activeIndex === 0 ? styles.activeSection : ""}`}
      >
        <div
          className={styles.howIsTrumioEnablingTheFutParent}
          onClick={() => toggleSection(0)}
        >
          <div className={styles.howIsTrumio}>
            How is Trumio enabling the future of work?
          </div>
          <img
            className={styles.lsiconminusOutline}
            alt=""
            src={activeIndex === 0 ? minus : plus}
          />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            activeIndex === 0 ? styles.active : ""
          }`}
        >
          <div className={styles.byHelpingGlobalContainer}>
            <p className={styles.byHelpingGlobal}>
              By helping global clients engage on-demand with extended teams of
              students and experts powered by AI at every stage of the project
              lifecycle.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />

      {/* Second Section */}
      <div
        className={`${styles.section} ${activeIndex === 1 ? styles.activeSection : ""}`}
      >
        <div
          className={styles.howIsTrumioEnablingTheFutParent}
          onClick={() => toggleSection(1)}
        >
          <div className={styles.howIsTrumio}>Is there a fee for using Trumio?</div>
          <img
            className={styles.lsiconminusOutline}
            alt=""
            src={activeIndex === 1 ? minus : plus}
          />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            activeIndex === 1 ? styles.active : ""
          }`}
        >
          <div className={styles.byHelpingGlobalContainer}>
            <p className={styles.byHelpingGlobal}>
              Trumio charges a nominal fee for enterprise solutions that require
              advanced features like team analytics, custom integrations, and
              priority support. For individual users or small teams, there is a
              free plan available with limited features.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />

      {/* Third Section */}
      <div
        className={`${styles.section} ${activeIndex === 2 ? styles.activeSection : ""}`}
      >
        <div
          className={styles.howIsTrumioEnablingTheFutParent}
          onClick={() => toggleSection(2)}
        >
          <div className={styles.howIsTrumio}>
            Can I work on projects with talent from different universities and countries?
          </div>
          <img
            className={styles.lsiconminusOutline}
            alt=""
            src={activeIndex === 2 ? minus : plus}
          />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            activeIndex === 2 ? styles.active : ""
          }`}
        >
          <div className={styles.byHelpingGlobalContainer}>
            <p className={styles.byHelpingGlobal}>
              Yes, Trumio connects you with talent from universities and
              countries worldwide, promoting collaboration and diversity of
              ideas. The platform allows teams to collaborate in real-time,
              breaking geographical barriers.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />

      {/* Fourth Section */}
      <div
        className={`${styles.section} ${activeIndex === 3 ? styles.activeSection : ""}`}
      >
        <div
          className={styles.howIsTrumioEnablingTheFutParent}
          onClick={() => toggleSection(3)}
        >
          <div className={styles.howIsTrumio}>
            How does Trumio match projects with the most suitable talent?
          </div>
          <img
            className={styles.lsiconminusOutline}
            alt=""
            src={activeIndex === 3 ? minus : plus}
          />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            activeIndex === 3 ? styles.active : ""
          }`}
        >
          <div className={styles.byHelpingGlobalContainer}>
            <p className={styles.byHelpingGlobal}>
              Trumio uses advanced AI algorithms to match projects with the
              best-suited talent based on expertise, project needs, and
              availability. The system also considers factors like past
              performance, reviews, and project complexity.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />

      {/* Fifth Section */}
      <div
        className={`${styles.section} ${activeIndex === 4 ? styles.activeSection : ""}`}
      >
        <div
          className={styles.howIsTrumioEnablingTheFutParent}
          onClick={() => toggleSection(4)}
        >
          <div className={styles.howIsTrumio}>
            What resources does the Trumio platform provide to aid project delivery?
          </div>
          <img
            className={styles.lsiconminusOutline}
            alt=""
            src={activeIndex === 4 ? minus : plus}
          />
        </div>
        <div
          className={`${styles.dropdownContent} ${
            activeIndex === 4 ? styles.active : ""
          }`}
        >
          <div className={styles.byHelpingGlobalContainer}>
            <p className={styles.byHelpingGlobal}>
              Trumio offers a range of resources such as task management tools,
              collaborative workspaces, communication tools, project templates,
              and AI-powered insights to streamline project execution and
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home7_2;
