import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo({ footer }) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image
        src={logo}
        alt="Cruip Logo"
        width={!footer ? 140 : 500}
        height={!footer ? 70 : 100}
      />
    </Link>
  );
}
