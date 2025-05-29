"use client";
import Link from "next/link";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

export default function Sidebar() {
  const [side, setSide] = useState<boolean>(false);
  const toogleSidebar = () => {
    setSide((prev) => !prev);
  };
  return (
    <div>
      <div data-collapse={side} className={styles.navLink}>
      <div className={styles.icon}>
        <span className="material-symbols-outlined" onClick={toogleSidebar}>
          chevron_left
        </span>
      </div>
        {/* <div className={styles.logo}>
          <span className="material-symbols-outlined">local_library</span>
          <h2 className="logo">Managment</h2>
        </div> */}

        <li>
          <Link href="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="nav-name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/teacher">
            <span className="material-symbols-outlined">person_book</span>
            <span className="nav-name">Teacher</span>
          </Link>
        </li>
        <li>
          <Link href="/class">
            <span className="material-symbols-outlined">apartment</span>
            <span className="nav-name">Class</span>
          </Link>
        </li>
        <li>
          <Link href="/student">
            <span className="material-symbols-outlined">school</span>
            <span className="nav-name">Student</span>
          </Link>
        </li>
        <li>
          <Link href="/parent">
            <span className="material-symbols-outlined">escalator_warning</span>
            <span className="nav-name">Parent</span>
          </Link>
        </li>
        <li>
          <Link href="/grade">
            <span className="material-symbols-outlined">star</span>
            <span className="nav-name">Grade</span>
          </Link>
        </li>
        <li>
          <Link href="/enrollment">
            <span className="material-symbols-outlined">cached</span>
            <span className="nav-name">Enrollment</span>
          </Link>
        </li>
        <li>
          <Link href="/attendance">
            <span className="material-symbols-outlined">topic</span>
            <span className="nav-name">Attendance</span>
          </Link>
        </li>
      </div>
    </div>
  );
}
