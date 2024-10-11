import React, { useRef } from "react";
import styles from "./Frame.module.css";
import people_icon from "../../../assets/people_icon.svg";
import clock from "../../../assets/clock.svg";
import left from "../../../assets/left.svg";
import right from "../../../assets/right.svg";
import flipkart_grid from "../../../assets/flipkart_grid.svg";

const Home3 = () => {
  // Ref to the frameGroup div
  const frameGroupRef = useRef(null);

  // Function to handle left scroll
  const scrollLeft = () => {
    if (frameGroupRef.current) {

      
      frameGroupRef.current.scrollBy({
        left: -480, // Scroll by the fixed width of one frame container
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  // Function to handle right scroll
  const scrollRight = () => {
    if (frameGroupRef.current) {
      frameGroupRef.current.scrollBy({
        left: 480, // Scroll by the fixed width of one frame container
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.featuredOpportunitiesParent}>
        <b style={{ fontSize: 50 }} className={styles.featuredOpportunities}>
          Featured Opportunities
        </b>
        <div className={styles.theseAreThe}>
          These are the latest and best opportunities from top organizations
        </div>
      </div>
      <div ref={frameGroupRef} className={styles.frameGroup}>
        {/* Frame Containers */}
        {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
          <div key={idx} className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src={flipkart_grid} />
            <div className={styles.frameDiv}>
              <div className={styles.onlinePaidParent}>
                <div className={styles.onlinePaid}>Online | Paid</div>
                <div className={styles.fluentpeople24RegularParent}>
                  <img
                    className={styles.fluentpeople24RegularIcon}
                    alt=""
                    src={people_icon}
                  />
                  <div className={styles.featuredOpportunities}>1,605 Bids</div>
                </div>
                <div className={styles.iontimeOutlineParent}>
                  <img
                    className={styles.fluentpeople24RegularIcon}
                    alt=""
                    src={clock}
                  />
                  <div className={styles.featuredOpportunities}>5 Days Left</div>
                </div>
              </div>
              <div className={styles.flipkartGrid60}>Flipkart Grid 6.0</div>
              <div className={styles.estimated1500020000Parent}>
                <div className={styles.estimated15000}>
                  Estimated : ₹15000 - ₹20000
                </div>
                <div className={styles.lastBid}>Last Bid : ₹17000</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.frameParent5}>
        {/* Arrows */}
        <img
          className={styles.frameIcon}
          alt=""
          src={left}
          onClick={scrollLeft}
        />
        <img
          className={styles.frameIcon}
          alt=""
          src={right}
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default Home3;
