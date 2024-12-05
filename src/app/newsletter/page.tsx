import React from "react";
import styles from "./styles/news.module.css";
import Image from "next/image";

export const metadata = {
  title: "Newsletter - Byte Realm",
  // description: "Fique informado sobre tudo que importa no mundo da tecnologia, com dois emails toda semana!",
  // alternates: {
  //   canonical: "https://byterealm.vercel.app/newsletter",
  // },
};

export default function page() {
  return (
    <main className="only-screen">
      <div className={styles.titleBox}>
        <h2 className={styles.title}>BYTE REALM</h2>
        <h1 className={styles.titleNewsletter}>Newsletter</h1>
      </div>
      <p className={styles.emBreve}>Em breve</p>
    </main>
  );
}
