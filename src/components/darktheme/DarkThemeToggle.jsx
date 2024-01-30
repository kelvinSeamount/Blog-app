"use client";
import React, { useContext } from "react";
import styles from "./darkthemetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="Moon icon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="Sun icon" width={14} height={14} />
    </div>
  );
}
