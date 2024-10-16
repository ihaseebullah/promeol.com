"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { useLoading } from "@/context/uicontext";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname

export default function Logo({ footer }: any) {
  const { setLoading } = useLoading();
  const router = useRouter(); // Router for navigation
  const pathname = usePathname(); // Get the current pathname

  const handleClick = (e: any) => {
    e.preventDefault(); // Prevent the default link behavior
    if (pathname === "/") {
      // If already on '/', reload the page
      window.location.reload();
    } else {
      // Otherwise, navigate to '/'
      setLoading(true); // Optionally set loading state
      router.push("/"); // Navigate to the homepage
    }
  };

  return (
    <Link
      data-aos="fade-up"
      data-aos-delay={400}
      onClick={handleClick} // Conditionally reload or navigate
      href="/"
      className="inline-flex shrink-0"
      aria-label="Cruip"
    >
      <Image
        src={logo}
        alt="promeol Logo"
        width={!footer ? 140 : 500}
        height={!footer ? 70 : 100}
      />
    </Link>
  );
}
