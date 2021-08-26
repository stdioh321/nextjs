import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Container</h1>
      <div>
        <Link href="/jsons">Jsons</Link>
      </div>
    </div>
  );
}
