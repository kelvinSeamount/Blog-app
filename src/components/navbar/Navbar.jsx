import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Fcebook logo" width={24} height={24} />
        <Image
          src="/instagram.png"
          alt="Instagram logo"
          width={24}
          height={24}
        />
        <Image src="/youtube.png" alt="Youtube logo" width={24} height={24} />
      </div>
      <div className={styles.logo}>Meka-blog</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </div>
      Navbar
    </div>
  );
}
