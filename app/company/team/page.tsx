"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { TeamCards } from "@/components/ui/card-team";
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-[20px]">
        <SectionHeader outline="Its always talent behind great success" title="Our dedicated Team" description="lorem ipsum dollar and go to the main stream for getting some potatoes out fo the box yet the cat came out empty handed sorry toes"/>
        <TeamCards />
      </div>
      <PageIllustration />
      <Cta />
    </>
  );
}
