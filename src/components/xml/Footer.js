import React from "react";
import {
  BsSearch,
  BsChevronDown,
  BsCheckLg,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

import styles from './index.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.services}>
        <p>شرکت</p>
        <p>عضویت</p>
        <p>بلاگ</p>
        <p>کمک رسانی</p>
        <p>راهنمای استفاده</p>
        <p>در باره ی چه فکری میکنید</p>
        <p>گواهینامه ها</p>
        <p>حرفه ها</p>
        <p>تماس با ما</p>
        <p>شرایط استفاده از خدمات</p>
        <p>حریم خصوصی</p>
      </div>
      <div className={styles.lastLine}>
        <div>
          {" "}
          <img
            src="https://www.ixl.com/dv3/ZEGq-H_E84nv7AEtsgfVpgEDYNg/yui3/site-nav/assets/icon-ixl-logo-156.png"
            width="40px"
            height="15px"
            alt="logo"
          />
        </div>
        <div className={styles.terms}>
          <p> Learning © 2022 IXL Learning. All rights reserved. Follow us</p>
        </div>
        <div className={styles.socialMedia}>
          <BsFacebook style={{ color: "blue" }} />

          <BsTwitter style={{ color: "#00b4d8" }} />

          <BsPinterest style={{ color: "#e63946" }} />

          <BsInstagram style={{ color: "#6a4c93" }} />

          <BsYoutube style={{ color: "#d90429" }} />

          <BsLinkedin style={{ color: "#118ab2" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
