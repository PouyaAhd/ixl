import React, { useState } from "react";
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [navigate, setNavigate] = useState(false);
  const [icon, setIcon] = useState(true);
  const handleNavigateClick = () => {
    setNavigate(true);
  };
  return (
    <>
      <header className={styles.headerSection}>
        <section className={styles.searchBarContainer}>
          <div className={styles.searchBar}>
            <BsSearch className={styles.icon} />
            <input type="text" placeholder="جست و جو مهارات و موضوعات" />
          </div>
          <div className={styles.logo}>
            <img
              src="https://www.ixl.com/dv3/ZEGq-H_E84nv7AEtsgfVpgEDYNg/yui3/site-nav/assets/icon-ixl-logo-156.png"
              width="70px"
              height="30px"
              alt="logo"
            />
          </div>
        </section>
        <section>
          <form>
            <input
              className={styles.emailInput}
              placeholder="نام کاربری..."
              type="text"
            />
            <input
              className={styles.passInput}
              placeholder="رمز عبور..."
              type="password"
            />
            <input className={styles.submit} type="submit" value="ورود" />
          </form>
        </section>
      </header>
      <header className={styles.res_header}>
        <div className={styles.res_right_header}>
          {" "}
          <div className={styles.logo2}>
            <img
              src="https://www.ixl.com/dv3/ZEGq-H_E84nv7AEtsgfVpgEDYNg/yui3/site-nav/assets/icon-ixl-logo-156.png"
              width="60px"
              height="20px"
              alt="logo"
            />
          </div>
          <p>اموزش</p>
        </div>
        <div className={styles.res_right_header}>
          <BsSearch />
          <div>
            <button className={styles.join}>وارد شوید</button>
          </div>
          {icon ? (
            <AiOutlineMenu
              className={styles.menu}
              onClick={() => {
                setNavigate(true);
                setIcon(false);
              }}
            />
          ) : (
            <AiOutlineClose
              className={styles.menu}
              onClick={() => {
                setNavigate(false);
                setIcon(true);
              }}
            />
          )}
        </div>

        {navigate && (
          <>
            <ul
              className={
                navigate
                  ? [styles.navbar_menu, styles.navbar_menu_active].join(" ")
                  : styles.navbar_menu
              }
            >
              {/* <div
                className={styles.closeNav}
                onClick={() => setNavigate(false)}
              >
                X
              </div> */}
              <div className={styles.items}>
                <li className={styles.item}>آموزش</li>
              </div>
              <div className={styles.line2}></div>
              <div className={styles.items}>
                <li className={styles.item}>ارزیابی</li>
              </div>
              <div className={styles.line2}></div>
              <div className={styles.items}>
                <li className={styles.item}>تحلیل</li>
              </div>
              <div className={styles.line2}></div>
              <div className={styles.items}>
                <li className={styles.item}>الهام بخشیدن</li>
              </div>
            </ul>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
