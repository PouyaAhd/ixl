import React from "react";
import styles from "./index.module.css";

import { useState } from "react";
import { FaBalanceScale, FaRegComments, FaAward } from "react-icons/fa";
import { MdOutlineMenuBook, MdRecommend } from "react-icons/md";
import { GiMaterialsScience, GiEarthAfricaEurope } from "react-icons/gi";
import { GrScheduleNew } from "react-icons/gr";

function Tab({setTab,tab}) {
  return (
    <nav className={styles.tabContainer}>
      <div
        onClick={() => {
          setTab(1);
        }}
        className={tab === 1 ? styles.Activetabs : styles.tabs}
      >
        <p>ریاضی</p>
        <FaBalanceScale />
      </div>
      <div
        onClick={() => {
          setTab(2);
        }}
        className={styles.tabs}
      >
        <p>هنر زبان</p>
        <MdOutlineMenuBook />
      </div>
      <div className={styles.tabs}>
        <p>دانش</p>
        <GiMaterialsScience />
      </div>
      <div className={styles.tabs}>
        <p>مطالعات اجتماعی</p>
        <GiEarthAfricaEurope />
      </div>
      <div className={styles.tabs}>
        <p>فارسی</p>
        <FaRegComments />
      </div>
      <div className={styles.line}></div>
      <div className={styles.tabs}>
        <p>پیشنهادات</p>
        <MdRecommend />
      </div>
      <div className={styles.line}></div>
      <div className={styles.tabs}>
        <p>برنامه ریزی</p>
        <GrScheduleNew />
      </div>
      <div className={styles.line}></div>
      <div className={styles.tabs}>
        <p>جوایز</p>
        <FaAward />
      </div>
    </nav>
  );
}

export default Tab;
