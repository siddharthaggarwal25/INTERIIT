import React from "react";
import styles from "./Navbar.module.css";
import logo_with_name from "../../assets/logo_with_name.svg";
import search from "../../assets/search.svg";
import down_arrow from "../../assets/down_arrow.svg";

const Navbar = () => {

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.trumioLogo1Parent}>
          <img
            className={styles.trumioLogo1Icon}
            alt=""
            src={logo_with_name}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.bxsearchParent}>
              <img className={styles.bxsearchIcon} alt="" src={search} />
              <div className={styles.searchForYour}>
                Search for your dream project
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.homeParent}>
            <div className={styles.searchForYour}>Home</div>
            <div className={styles.usersParent}>
              <div className={styles.searchForYour}>Users</div>
              <img
                className={styles.primesortDownFillIcon}
                alt=""
                src={down_arrow}
              />
            </div>
            <div className={styles.usersParent}>
              <div className={styles.searchForYour}>Solutions</div>
              <img
                className={styles.primesortDownFillIcon}
                alt=""
                src={down_arrow}
              />
            </div>
            <div className={styles.usersParent}>
              <div className={styles.searchForYour}>Organization</div>
              <img
                className={styles.primesortDownFillIcon}
                alt=""
                src={down_arrow}
              />
            </div>
            <div className={styles.searchForYour}>Blogs</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.hostWrapper}>
              <div className={styles.host}>Host +</div>
            </div>
            <div className={styles.logInWrapper}>
              <div className={styles.host}>Log in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
