import React from "react";
import Sidebar from "../Sidebar";
import styles from '@/styles/Dashboard.module.css'

export default function Drawer() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <span className="material-symbols-outlined">logout</span>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className={styles.menu}>
          <Sidebar />
        </ul>
      </div>
    </div>
  );
}
