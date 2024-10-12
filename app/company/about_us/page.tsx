"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function About() {
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="mt-[30px]">
      <SectionHeader
        outline={"About Us"}
        title={"Who are we?"}
        description={" "}
        key={"aboutus-section-header"}
      />
      <p
        style={{ marginTop: "-60px" }}
        className="text-indigo-200/65 mx-auto max-w-3xl text-justify md:pb-10"
      >
        At{" "}
        <Image
          data-aos="fade-down"
          data-aos-delay={400}
          src={logo}
          alt="Promeol Logo"
          width={90}
          height={50}
          className="inline-block align-middle " // This class aligns the image with the text
          style={{ margin: "0 5px" }} // Optional: adds horizontal spacing
        />
        , we are a dedicated team of software engineering students passionate
        about turning ideas into innovative solutions. As a tech startup, we've
        partnered with industry leaders like Eleven, Codes Solution, Ceven
        Technologies, and Siber Koza, gaining valuable insights and expanding
        our expertise.
      </p>

      <p className="text-indigo-200/65  mx-auto max-w-3xl  text-justify md:pb10">
        We offer a range of software solutions, including{" "}
        <strong>Promeol Business Ultimate</strong> for marts,{" "}
        <strong>Property Management Systems</strong>, and{" "}
        <strong>Learning Management Systems</strong>. Our focus is on delivering
        high-quality products that meet the unique needs of our clients.
      </p>
      <p className="text-indigo-200/65  mx-auto max-w-3xl  text-justify md:pb-10">
        Currently, we are excited about our flagship products,{" "}
        <strong>Aerostate</strong> and <strong>Menu Khwaga</strong>, designed to
        enhance business operations and elevate the dining experience. With more
        projects in the pipeline, we are committed to pushing the boundaries of
        technology and creating impactful solutions.
      </p>
      <p className="text-indigo-200/65  mx-auto max-w-3xl  text-justify md:pb-10">
        Join us on our journey as we strive to shape the future of software
        development!
      </p>

      <PageIllustration />
      <Cta />
    </div>
  );
}
