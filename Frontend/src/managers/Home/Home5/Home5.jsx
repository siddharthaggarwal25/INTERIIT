import React from "react";
import styles from "./Frame.module.css";
import university from "../../../assets/university.svg";
import expert from "../../../assets/experts.svg";
import hires from "../../../assets/hires.svg";
import extended from "../../../assets/extended.svg";
import jose_manuel from "../../../assets/jose_manuel.svg";
import design from "../../../assets/design.svg";

const Home5 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.whatTrumioOffersParent}>
        <b className={styles.whatTrumioOffersContainer}>
          <span>{`What Trumio `}</span>
          <span className={styles.offers}>Offers</span>
          <span> ?</span>
        </b>
        <div className={styles.frameGroup}>
          <div className={styles.forClientsWrapper}>
            <div className={styles.forClients}>For Clients</div>
          </div>
          <div className={styles.forTalentsWrapper}>
            <div className={styles.forClients}>For Talents</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.horizontalborder}>
            <div className={styles.figureUniversityTeamssvg}>
              <div className={styles.universityTeamssvgFill}>
                <img
                  className={styles.universityTeamssvgIcon}
                  alt=""
                  src={university}
                />
              </div>
            </div>
            <div className={styles.heading3}>University teams</div>
            <div className={styles.onDemandEngagementContainer}>
              <p className={styles.onDemandEngagement}>
                On demand engagement on rapid proof of concepts,
              </p>
              <p className={styles.onDemandEngagement}>
                research, and prototyping utilizing Gen-AI.
              </p>
            </div>
          </div>
          <div className={styles.horizontalborder1}>
            <div className={styles.figureUniversityTeamssvg}>
              <div className={styles.universityTeamssvgFill}>
                <img
                  className={styles.universityTeamssvgIcon}
                  alt=""
                  src={expert}
                />
              </div>
            </div>
            <div className={styles.heading3}>Expert teams</div>
            <div className={styles.onDemandEngagementContainer}>
              <p className={styles.onDemandEngagement}>
                With proven capabilities evolving proof of concepts
              </p>
              <p className={styles.onDemandEngagement}>
                and prototypes to production deployments.
              </p>
            </div>
          </div>
          <div className={styles.horizontalborder2}>
            <div className={styles.figureUniversityTeamssvg}>
              <div className={styles.universityTeamssvgFill}>
                <img
                  className={styles.provenNewHiressvgIcon}
                  alt=""
                  src={hires}
                />
              </div>
            </div>
            <div className={styles.heading3}>Proven New Hires</div>
            <div className={styles.ensureSuccessfulNewContainer}>
              <p className={styles.onDemandEngagement}>
                Ensure successful new talent hires by evaluating
              </p>
              <p className={styles.onDemandEngagement}>
                them on real-world project work prior to making an
              </p>
              <p className={styles.onDemandEngagement}>offer.</p>
            </div>
          </div>
          <div className={styles.figureExtendedTeamssvg}>
            <div className={styles.universityTeamssvgFill}>
              <img
                className={styles.universityTeamssvgIcon}
                alt=""
                src={extended}
              />
            </div>
          </div>
          <div className={styles.heading33}>Extended Teams</div>
          <div className={styles.forFlexibleWorkContainer}>
            <p className={styles.onDemandEngagement}>
              For flexible work engagements at a fraction of the
            </p>
            <p className={styles.onDemandEngagement}>time and cost.</p>
          </div>
        </div>
        <div className={styles.background1}>
          <img
            className={styles.forClientBgSvgsvgFillIcon}
            alt=""
            src={design}
          />
          <div className={styles.container1} />
          <img className={styles.figureJoseMarinpng} alt="" src={jose_manuel} />
          <div className={styles.heading34}>Jose Manuel Sanchez Marin</div>
          <div className={styles.ceoSmaiSpain}>CEO, SMAI, Spain</div>
          <div className={styles.heading5}>
            <div className={styles.forOurDevelopmentContainer}>
              <p className={styles.onDemandEngagement}>
                “For our development in the field of legal
              </p>
              <p className={styles.onDemandEngagement}>
                consulting, having a company like Trumio
              </p>
              <p className={styles.onDemandEngagement}>
                AI opens a door to entrepreneurship in a
              </p>
              <p className={styles.onDemandEngagement}>
                sector that would otherwise be far beyond
              </p>
              <p className={styles.onDemandEngagement}>our reach.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
