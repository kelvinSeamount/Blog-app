import React from "react";
import styles from "./authlink.module.css";
import Link from "next/link";

//Teporary
const status = "notauthenticated";
export default function AuthLink() {
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}
