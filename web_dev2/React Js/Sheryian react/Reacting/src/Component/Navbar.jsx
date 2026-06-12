import React from "react";
import styles from "./style.module.css";

export function Navbar({ songData }) {
  return (
    <div className="flex justify-between items-center py-6 w-full px-20">
      <h1 className={styles.a}>Orange</h1>
      <div className="flex gap-2 rounded-md bg-amber-600 text-white font-semibold px-2 py-1">
        <h4>Favourites</h4>
        <span>{songData.filter((song) => song.favourite).length}</span>
      </div>
    </div>
  );
}
