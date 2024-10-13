"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";

export default function Products() {
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
    <SectionHeader
        title={"Promeol's Flagship AeroEstate"}
        outline={"Ai powered patwar"}
        description={""}
        uhOh={false}
        product={true}
      />
      <SectionHeader
        title={"Comming Soon!"}
        outline={"Ai powered patwar"}
        description={""}
        uhOh={false}
        product={true}
        commingsoon={true}
      />
      <PageIllustration />
      <Cta />
    </>
  );
}
