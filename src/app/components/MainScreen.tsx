import Image from "next/image";

export default function MainScreen() {
  return (
    <div className="flex items-center">
      <div className="text-box">
        <h1 className="animated-gradient">Byte Realm</h1>
        <h2 className="typewriter">O seu portal de tecnologia.</h2>
      </div>
    </div>
  );
}

{
  /* 
  <div className="text-box">
    <h1 className="animated-gradient">Byte Realm</h1>
    <h2 className="typewriter">O seu portal de tecnologia.</h2>
  </div>
  <Image src="/logo.webp" alt="logo" width={400} height={400} className="img-main-screen" />
*/
}
