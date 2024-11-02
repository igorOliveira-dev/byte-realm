export const metadata = {
  title: "Contato - Byte Realm",
  description: "Página de contato do Byte Realm, o seu portal de tecnologia que te fala tudo do mundo tecnológico.",
  alternates: {
    canonical: "https://byterealm.vercel.app/contato",
  },
};

export default function Contato() {
  return (
    <main className="flex flex-col items-center justify-center only-screen">
      <div className="blured-background rounded-lg shadow-md p-8 max-w-lg mx-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Fale conosco!</h1>
        <p className="text-lg mb-4 text-center">
          Para entrar em contato com a equipe Byte Realm, basta enviar uma mensagem ao email abaixo:
        </p>
        <a href="mailto:byterealm.contact@gmail.com" className="text-lg text-blue-500 hover:underline text-center block">
          byterealm.contact@gmail.com
        </a>
      </div>
    </main>
  );
}
