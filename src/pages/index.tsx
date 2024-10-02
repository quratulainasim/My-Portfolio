import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-0 p-0">
      <Link href="/about"></Link>
      <Link href="/contact"></Link>
      <Header />
      <div className="bg-slate-200 w-full m-0 p-0 min-h-60">
        <Image
          src="/image.png"
          alt="image"
          width={1400}
          height={1900}
          className="m-0 p-0"
        />
      </div>
      <Footer />
    </div>
  );
}
