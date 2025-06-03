import React from "react";
import styles from "@/styles/Homepage.module.css";
import Mybar from "./reachart/Mybar";

export default function Barchart() {
  return (
    <div className={styles.wraper}>
      <div className={styles.bare}>
        <Mybar />
      </div>
      <div className={styles.absent}>
        <p className="text-gray-500">Bar chart will be rendered here</p>
      </div>
    </div>
  );
}