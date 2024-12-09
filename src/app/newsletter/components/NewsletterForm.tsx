"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { saveEmail } from "../../../services/newsletter";
import styles from "../styles/news.module.css";

export default function NewsletterForm() {
  const [FailMessage, setFailMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;

    setFailMessage("");
    setLoading(true);

    try {
      await saveEmail(email);
      form.reset();
      window.location.href = "/inscricao-completa";
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Erro inesperado.";
      setFailMessage(
        "Algum erro aconteceu durante a sua inscrição. Se o erro persistir, entre em contato com o suporte do Byte Realm."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        type="text"
        name="email"
        placeholder="exemplo@gmail.com"
        className={`rounded border border-3 custom-border-color blured-background ${styles.emailInput}`}
      />
      <button type="submit" className={`rounded ${styles.submitBtn}`}>
        {loading ? "Carregando..." : "Inscreva-se"}
      </button>
      <div className={styles.messages}>
        <p className="text-red-400 text-lg">{FailMessage}</p>
      </div>
    </form>
  );
}
