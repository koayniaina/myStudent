import React from "react";
import Drawer from "./ui/Drawer";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

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

      <section className={styles.container}>
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="material-symbols-outlined">account_circle</span>
        <span>
          <Drawer />
        </span>
      </section>
    </main>
  );
}
