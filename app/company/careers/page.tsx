"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";

export default function Careers() {
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="mt-10">
    <SectionHeader
      outline={"Your next adventure awaits!"}
      title={"Careers at Promeol"}
      description={""}
    />
    <SectionHeader
      uhOh={true}
      outline={"Join us on our journey!"}
      title={"Career Opportunities Coming Soon!"}
      description={"Exciting opportunities are just around the corner! We’re gearing up to expand our team, and we can’t wait to share what’s in store. Keep an eye out for openings where you can bring your talents to Promeol!"}
    />
    <PageIllustration />
    <Cta />
  </div>
  
  );
}
