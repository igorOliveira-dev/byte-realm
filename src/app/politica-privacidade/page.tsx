import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade - Byte Realm",
  description: "Veja a política de privacidade do Byte Realm para garantir a sua segurança no site.",
  alternates: {
    canonical: "https://byterealm.vercel.app/politica-privacidade",
  },
};

export default function PoliticaPrivacidade() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="blured-background rounded-lg shadow-md p-8 max-w-3xl mx-6 m-20">
        <h1>Política de Privacidade</h1>
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

        <h2>Informações coletadas para a newsletter:</h2>
        <p>Ao se inscrever em nossa newsletter, coletamos as seguintes informações:</p>
        <ul>
          <li className="m-2">- Endereço de e-mail;</li>
        </ul>

        <h2>Uso das informações:</h2>
        <p className="mb-4">
          Os dados coletados são utilizados para melhorar a experiência do usuário em nosso site, analisar tendências, administrar o
          site e coletar informações demográficas sobre nossa base de usuários.
        </p>

        <h2>Finalidade do uso dos dados:</h2>
        <p>As informações coletadas para a newsletter são usadas exclusivamente para:</p>
        <ul>
          <li className="m-2">- Enviar atualizações sobre novos artigos e conteúdos do Byte Realm;</li>
          <li className="m-2">- Compartilhar informações, dicas ou novidades relacionadas a tecnologia.</li>
        </ul>
        <p className="mb-4">Garantimos que os dados fornecidos não serão usados para outros fins sem o seu consentimento.</p>

        <h2>Compartilhamento das informações:</h2>
        <p className="mb-4">Não compartilhamos, vendemos ou alugamos suas informações pessoais a terceiros.</p>

        <h2>Cancelamento da inscrição:</h2>
        <p className="mb-4">
          Para cancelar a assinatura da nossa newsletter e solicitar a remoção de seus dados, envie um e-mail para o nosso suporte em:{" "}
          <Link href="/contato" className="text-blue-400 underline">
            Contato
          </Link>
        </p>

        <h2>Armazenamento e proteção de dados:</h2>
        <p className="mb-4">
          As informações coletadas são armazenadas em uma plataforma segura e são acessadas apenas por pessoal autorizado. Utilizamos
          medidas de segurança adequadas para proteger os dados contra acessos não autorizados, alterações ou divulgação.
        </p>

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
