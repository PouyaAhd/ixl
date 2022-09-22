import React from "react";
import styles from "./index.module.css";

function Navbar({ toggle, setToggle }) {
  return (
    <nav className={styles.navigation}>
      <section className={styles.navContainer}>
        <div className={styles.navs}>
          <p
            onClick={() => {
              setToggle(1);
            }}
            style={{ paddingRight: "0px" }}
            className={toggle === 1 && styles.active}
          >
            آموزش
          </p>
          <p
            onClick={() => {
              setToggle(2);
            }}
            className={toggle === 2 && styles.active}
          >
            ارزیابی
          </p>
          <p
            onClick={() => {
              setToggle(3);
            }}
            className={toggle === 3 && styles.active}
          >
            تحلیل
          </p>
        </div>
        <div className={styles.navs}>
          <p
            onClick={() => {
              setToggle(4);
            }}
            className={toggle === 4 && styles.active}
          >
            الهام بخشیدن
          </p>
          <p
            onClick={() => {
              setToggle(5);
            }}
            className={toggle === 5 && styles.active2}
            style={{ paddingLeft: "0px" }}
          >
            عضویت
          </p>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
