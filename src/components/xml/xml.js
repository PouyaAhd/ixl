import React, { useEffect } from "react";
import styles from "./index.module.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tab from "./Tab";
import Questions from "./Questions";
import Scoring from "./Scoring";
import HelpCenter from "./HelpCenter";

function Xml() {
  const [toggle, setToggle] = useState(1);
  const [tab, setTab] = useState(1);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [add, setAdd] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleSubmitClick = () => {
    if (add.length > 0 && add !== undefined) {
      setCount(count + 1);
    }
    setShow(true);
  };

  useEffect(() => {
    console.log(add);
  }, [add]);

  return (
    <div className={styles.container}>
      <Header />
      <Navbar toggle={toggle} setToggle={setToggle} />
      {toggle === 1 && (
        <>
          <Tab setTab={setTab} tab={tab} />
          <section className={styles.pathSection}>
            <div className={styles.path}>
              <p>سال ششم &gt; عبارات معادل را شناسایی کنید</p>
              <button>اشتراک مهارت</button>
            </div>
          </section>
          <div className={styles.exp}>
            <p>یادگیری با یک مثال</p>
            <BsChevronDown />
          </div>
        </>
      )}

      <section>
        <div>
          {tab === 1 && toggle === 1 && (
            <>
              <div className={styles.questionContainer}>
            
                  <Questions
                    add={add}
                    setAdd={setAdd}
                    show={show}
                    setShow={setShow}
                    handleSubmitClick={handleSubmitClick}
                  />
             
                  <Scoring
                    isPaused={isPaused}
                    time={time}
                    rightAnswer={rightAnswer}
                    count={count}
                    handlePauseResume={handlePauseResume}
                    setIsPaused={setIsPaused}
                  />
        
              </div>
              <HelpCenter />
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Xml;
