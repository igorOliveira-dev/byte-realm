import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade - Byte Realm",
  description: "Veja a política de privacidade do Byte Realm para garantir a sua segurança no site.",
  alternates: {
    canonical: "https://byterealm.vercel.app/politica-privacidade",
  },
};

export default function Contato() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="blured-background rounded-lg shadow-md p-8 max-w-3xl mx-6 m-20">
        <h1>Política de privacidade</h1>
        <p className="mb-4">Esta política de privacidade descreve como o Byte Realm coleta, usa e protege os seus dados pessoais.</p>
        <h2>Informações coletadas:</h2>
        <p>
          Utilizamos o Google Analytics e o Google Search Console para coletar dados anônimos e agregados sobre o uso do nosso site.
          Estas informações podem incluir:
        </p>
        <ul>
          <li className="m-2">- Endereço IP;</li>
          <li className="m-2">- Tipo de navegador;</li>
          <li className="m-2">- Páginas visitadas;</li>
          <li className="m-2">- Tempo gasto no site;</li>
          <li className="m-2">- Dados demográficos.</li>
        </ul>
        <h2>Uso das informações:</h2>
        <p className="mb-4">
          Os dados coletados são utilizados para melhorar a experiência do usuário em nosso site, analisar tendências, administrar o
          site e coletar informações demográficas sobre nossa base de usuários.
        </p>
        <h2>Compartilhamento das informações:</h2>
        <p className="mb-4">Não compartilhamos, vendemos ou alugamos suas informações pessoais a terceiros.</p>
        <h2>Alterações na política de privacidade:</h2>
        <p className="mb-4">
          Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você reveja esta página regularmente para se
          manter informado sobre como estamos protegendo suas informações.
        </p>
        <h2>Contato:</h2>
        <p>
          Se restar qualquer dúvida, entre em contato com a nossa equipe a partir do link:{" "}
          <Link href="/contato" className="text-blue-400 underline">
            Contato
          </Link>
        </p>
      </div>
    </main>
  );
}
