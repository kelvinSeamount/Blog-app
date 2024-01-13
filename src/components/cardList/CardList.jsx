import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";

export default function CardList() {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
}
