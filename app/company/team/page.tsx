"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { TeamCards } from "@/components/ui/card-team";
import { SectionHeader } from "@/components/ui/section-header";
import Head from "next/head";

export default function Team() {
  const { loading, setLoading } = useLoading();
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      <Head>
        <title>Team - Promeol</title>
      </Head>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-[20px] flex flex-col items-center">
        <SectionHeader
          outline="Passionate and creative, we strive for excellence."
          title="Our Dedicated Team"
          description="With diverse skills and backgrounds, our dedicated team works harmoniously to achieve remarkable results."
        />
        <TeamCards />
      </div>
      <PageIllustration />
      <Cta />
    </> 
  );
}
