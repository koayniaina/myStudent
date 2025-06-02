import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.logo}>
          <Link href="/">
            <span className="material-symbols-outlined">school</span>
            <span>Student</span>
          </Link>
        </div>
      </section>
      <section>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <span className="material-symbols-outlined">search</span>
        </div>
      </section>

      <section className={styles.container}>
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="material-symbols-outlined">account_circle</span>
      </section>
     
    </main>
  );
}