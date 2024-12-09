import Link from "next/link";
import React from "react";

export default function NewsletterBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-lg shadow-lg text-center my-10">
      <h2 className="text-white text-4xl font-bold mb-4">Assine nossa Newsletter!</h2>
      <p className="text-white text-lg mb-6">
        Receba as últimas novidades e atualizações do mundo da tecnologia diretamente no seu e-mail.
      </p>
      <Link
        href="/newsletter"
        className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Inscreva-se Agora
      </Link>
    </div>
  );
}
