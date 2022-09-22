import React from "react";
import styles from "./index.module.css";
import { IoDiamond } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";

function HelpCenter() {
  return (
    <section className={styles.helpSection}>
      <div className={styles.helpTitle}>
        <p>مسئله را حل کنید </p>
      </div>
      <div style={{ direction: "rtl", zIndex: "1" }}>
        <p>هنوز آماده نیستید؟ اینها می توانند کمک کنند:</p>
      </div>
      <div className={styles.helpers}>
        <div className={styles.helper}>
          <p>عبارات معادل I را مشخص کنید</p>
          <IoDiamond />
        </div>
        <div className={styles.helper}>
          <p>درس: عبارات معادل</p>
          <FaRegListAlt />
        </div>
      </div>
      <div className={styles.shadow}></div>
    </section>
  );
}

export default HelpCenter;
