import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import Category from "@/components/category/Category";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
