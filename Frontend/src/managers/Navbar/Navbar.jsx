import React from "react";
import styles from "./Navbar.module.css";
import logo_with_name from "../../assets/logo_with_name.svg";
import search from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate();  // Initialize navigate function

  return (
    <div style={{ zIndex: 50 }} className={styles.frameParent}>
      <div style={{ zIndex: 50 }} className={styles.frameGroup}>
        <div className={styles.trumioLogo1Parent}>
          {/* Use navigate instead of window.location.href */}
          <img
            onClick={() => navigate("/")}  // Use navigate for routing
            className={`${styles.trumioLogo1Icon} ${styles.cursorPointer}`}
            alt="logo"
            src={logo_with_name}
          />
          <div className={styles.searchWrapper}>
            <img className={styles.bxsearchIcon} alt="search" src={search} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search for your dream project"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.homeParent}>
            <div className={`${styles.searchForYour} ${styles.cursorPointer}`} onClick={() => navigate("/")}>Home</div>
            <div className={styles.usersParent}>
              <div className={`${styles.searchForYour} ${styles.cursorPointer}`} onClick={() => navigate("/projects")}>Projects</div>
            </div>
            <div className={styles.usersParent}>
              <div className={`${styles.searchForYour} ${styles.cursorPointer}`} onClick={() => navigate("/organization")}>Organization</div>
            </div>
            <div className={`${styles.searchForYour} ${styles.cursorPointer}`} onClick={() => navigate("/blogs")}>Blogs</div>
          </div>
          <div className={styles.frameDiv}>
            {/* Add onClick for Host + */}
            <div
              className={`${styles.hostWrapper} ${styles.cursorPointer}`}
              onClick={() => navigate("/hostProject")}
            >
              <div className={styles.host}>Host +</div>
            </div>
            {!localStorage.getItem("userId") ? (
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className={`${styles.logInWrapper} ${styles.cursorPointer}`}
              >
                <div className={styles.host}>Log in</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
