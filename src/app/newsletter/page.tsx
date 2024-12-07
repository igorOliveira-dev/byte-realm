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
    <main className={`only-screen ${styles.mainBox}`}>
      <div className={styles.centerBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>BYTE REALM</h2>
          <h1 className={styles.titleNewsletter}>Newsletter</h1>
        </div>
        <p className="center">EM BREVE</p>
        {/* <p className={styles.mainText}>
          Nos diga o seu email para receber todas as terças e sextas-feiras as atuais tendências da tecnologia!
        </p>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="exemplo@gmail.com"
            className={`rounded border border-3 custom-border-color blured-background ${styles.emailInput}`}
          />
          <button type="submit" className={`rounded ${styles.submitBtn}`}>
            Inscreva-se
          </button>
        </form> */}
      </div>
    </main>
  );
}
