"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";

export default function Blog() {
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
        outline={"There's always a lesson to be learned."}
        title={"Promeol Blogs"}
        description={""}
      />
      <SectionHeader
        uhOh={true}
        outline={"There's always a lesson to be learned."}
        title={"Blog Coming Soon!"}
        description={"Well, well, well! It seems we haven’t hit “publish” on any blogs yet. But don’t worry, we’re just warming up! Keep your eyes peeled for some entertaining insights, tech musings, and the occasional sprinkle of humor. Stay tuned for what’s to come!"}
      />
      <PageIllustration />
      <Cta />
    </div>
  );
}
