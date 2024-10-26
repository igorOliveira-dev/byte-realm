import Image from "next/image";

export default function Loading() {
  return (
    <div className="my-40">
      <Image className="spin m-auto" src="/logo.webp" alt="carregando..." height={60} width={60} />
    </div>
  );
}
