import React from "react";
import styles from "@/styles/Homepage.module.css";
import Card from "@/components/Card";
import Barchart from "@/components/Barchart";

export default function Home() {
  return (
    <div className={styles.content}>
      <div className="contanaire">
        <div className="logo">
          <p className="p-2 ">Admin Dashboard</p>
        </div>
      </div>
      <main className="cards p-2 ">
        <div >
          <Card />
        </div>
        <div className="barchart">
          <Barchart />
        </div>
      </main>
    </div>
  );
}
