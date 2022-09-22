import React from "react";
import styles from "./index.module.css";
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

function Questions({ add, setAdd, show, handleSubmitClick, setShow }) {
  return (
    <section className={styles.question}>
      <div>
        <p className={styles.questionTitle}>عباراتی را که معادل هستند انتخاب کنید 5+5:</p>
      </div>
      <div className={styles.questionBoxContainer}>
        <div
          onClick={() => {
            setAdd(
              add.includes(1)
                ? add.filter((item) => item !== 1)
                : (list) => [...list, 1]
            );
          }}
          className={
            add.includes(1) ? styles.questionBoxActive : styles.questionBox
          }
        >
          <p>5</p>
          <div className={styles.questionIcon}>
            <BsCheckLg className={styles.check} />
          </div>
        </div>
        <div
          onClick={() => {
            setAdd(
              add.includes(2)
                ? add.filter((item) => item !== 2)
                : (list) => [...list, 2]
            );
          }}
          className={
            add.includes(2) ? styles.questionBoxActive : styles.questionBox
          }
        >
          <p>4</p>
          <div className={styles.questionIcon}>
            <BsCheckLg className={styles.check} />
          </div>
        </div>
        <div
          onClick={() => {
            setAdd(
              add.includes(3)
                ? add.filter((item) => item !== 3)
                : (list) => [...list, 3]
            );
          }}
          className={
            add.includes(3) ? styles.questionBoxActive : styles.questionBox
          }
        >
          <p>9</p>
          <div className={styles.questionIcon}>
            <BsCheckLg className={styles.check} />
          </div>
        </div>
        <div
          onClick={() => {
            setAdd(
              add.includes(4)
                ? add.filter((item) => item !== 4)
                : (list) => [...list, 4]
            );
          }}
          className={
            add.includes(4) ? styles.questionBoxActive : styles.questionBox
          }
        >
          <p>10</p>
          <div className={styles.questionIcon}>
            <BsCheckLg className={styles.check} />
          </div>
        </div>
      </div>
      <div className={styles.submitBtn}>
        <button onClick={handleSubmitClick}>ثبت کردن</button>
      </div>
      <div>
        {show && add.length === 0 ? (
          <>
            <div
              onClick={() => {
                setShow(false);
              }}
              className={styles.backdrop}
            >
              <div className={styles.modal}>
                <div>لطفا یکی از گزینه ها را انتخاب کنید</div>
              </div>
            </div>
          </>
        ) : (
          show &&
          add.length !== 0 && (
            <>
              <div
                onClick={() => {
                  setShow(false);
                }}
                className={styles.backdrop}
              >
                <div className={styles.modal}>
                  <div>گزینه {add.join(" و ")} برای بکند ارسال شدند</div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}

export default Questions;
