import React from "react";
import styles from "@/styles/Homepage.module.css";

export default function Card() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.body}>
          <h1>Student</h1>
          <span>15.00k</span>
        </div>
        <div className={styles.bodys}>
          <span className="material-symbols-outlined">school</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.body}>
          <h1>Teacher</h1>
          <span>2.00k</span>
        </div>
        <div className={styles.bodys}>
          <span className="material-symbols-outlined">co_present</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.body}>
          <h1>Parent</h1>
          <span>5.6k</span>
        </div>
        <div className={styles.bodys}>
          <span className="material-symbols-outlined">supervisor_account</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.body}>
          <h1>Earnings</h1>
          <span>$ 31.00k</span>
        </div>
        <div className={styles.bodys}>
          <span className="material-symbols-outlined">request_quote</span>
        </div>
      </div>
    </div>
  );
}
