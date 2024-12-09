import Link from "next/link";
import styles from "./styles/inscricao-completa.module.css";

export const metadata = {
  title: "Inscrição completa!",
};

export default function Page() {
  return (
    <div className="only-screen flex justify-center items-center p-6">
      <div className="blured-background shadow-lg p-6 rounded-lg max-w-lg flex flex-col">
        <h1 className={`text-3xl font-bold mb-4 ${styles.title}`}>Inscrição completa!</h1>
        <p className="mb-2">
          Parabéns por fazer parte do grupo de pessoas mais antenadas no mundo da tecnologia! Estamos muito felizes de tê-lo conosco.
        </p>
        <p>Agora, todas as terças e sextas você receberá por email as principais tendências tecnológicas atuais!</p>
        <Link href="/" type="submit" className={`rounded text-center ${styles.returnBtn}`}>
          Voltar ao blog
        </Link>
      </div>
    </div>
  );
}
