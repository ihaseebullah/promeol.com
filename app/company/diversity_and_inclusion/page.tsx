"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";
import { DAI as DiversityAndInclusion } from "@/components/diversity-and-inclusion";
export default function DAI() {
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
      <DiversityAndInclusion />
      <PageIllustration />
      <Cta />
    </div>
  );
}
