"use client";
import Link from "next/link";
import styles from "@/styles/Dashboard.module.css";

export default function Sidebar() {
  return (
    <div>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">local_library</span>
        <h2>Managment</h2>
      </div>
      <ul className={styles.navLink}>
        <li>
          <Link href="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/teacher">
            <span className="material-symbols-outlined">person_book</span>
            <span>Teacher</span>
          </Link>
        </li>
        <li>
          <Link href="/class">
            <span className="material-symbols-outlined">apartment</span>
            <span>Class</span>
          </Link>
        </li>
        <li>
          <Link href="/student">
            <span className="material-symbols-outlined">school</span>
            <span>Student</span>
          </Link>
        </li>
        <li>
          <Link href="/parent">
            <span className="material-symbols-outlined">escalator_warning</span>
            <span>Parent</span>
          </Link>
        </li>
        <li>
          <Link href="/grade">
            <span className="material-symbols-outlined">star</span>
            <span>Grade</span>
          </Link>
        </li>
        <li>
          <Link href="/enrollment">
            <span className="material-symbols-outlined">cached</span>
            <span>Enrollment</span>
          </Link>
        </li>
        <li>
          <Link href="/attendance">
            <span className="material-symbols-outlined">topic</span>
            <span>Attendance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
