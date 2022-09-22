import React from "react";
import styles from "./index.module.css";

function Scoring({
  isPaused,
  time,
  rightAnswer,
  count,
  handlePauseResume,
  setIsPaused,
}) {
  return (
    <section className={styles.scores}>
      <div className={styles.answered}>
        <div className={styles.title}>
          <p>پاسخ داده شده</p>
        </div>
        <div className={styles.answeredCount}>{count}</div>
      </div>
      <div className={styles.answered}>
        <div className={styles.time}>
          <p>زمان سپری شده</p>
        </div>
        <div className={styles.answeredCount}>
          {" "}
          {!isPaused ? (
            <>
              <div onClick={handlePauseResume} className={styles.timer}>
                <span className="digits">
                  {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
              </div>
            </>
          ) : (
            <p
              className={styles.paused}
              onClick={() => {
                setIsPaused(false);
              }}
            >
              توقف
            </p>
          )}
        </div>
      </div>
      <div className={styles.answered}>
        <div className={styles.point}>
          <p>امتیاز</p>
        </div>
        <div className={styles.answeredCount}>{rightAnswer}</div>
      </div>
    </section>
  );
}

export default Scoring;
