import React, { FormEvent } from "react";
import styles from "./styles/news.module.css";
import { saveEmail } from "../../services/newsletter";
import NewsletterForm from "./components/NewsletterForm";

export const metadata = {
  title: "Newsletter - Byte Realm",
  description: "Fique informado sobre tudo que importa no mundo da tecnologia, com dois emails toda semana!",
  alternates: {
    canonical: "https://byterealm.vercel.app/newsletter",
  },
};

export default function page() {
  return (
    <main className={`only-screen ${styles.mainBox}`}>
      <div className={styles.centerBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>BYTE REALM</h2>
          <h1 className={styles.titleNewsletter}>Newsletter</h1>
        </div>
        <p className={styles.mainText}>
          Nos diga o seu email para receber todas as terças e sextas-feiras as atuais tendências da tecnologia!
        </p>
        <NewsletterForm />
      </div>
    </main>
  );
}
