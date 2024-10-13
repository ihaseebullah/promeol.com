"use client";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import { useEffect } from "react";
import { useLoading } from "@/context/uicontext";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductOverview } from "@/components/ui/product-overview";

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
        title={"Promeol Buisness 365"}
        outline={"PB-365"}
        description={""}
        uhOh={false}
      />
      <ProductOverview
        productName={"PB365"}
        paragraph1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, illo perspiciatis quibusdam molestias obcaecati veniam culpa provident doloremque tempore, facere ratione fugit officia omnis. Repellat neque iste accusantium pariatur quidem."
        }
        paragraph2={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, illo perspiciatis quibusdam molestias obcaecati veniam culpa provident doloremque tempore, facere ratione fugit officia omnis. Repellat neque iste accusantium pariatur quidem."
        }
        key={"pb365"}
        link={"https://www.youtube.com/embed/bj69B9bQtTk?si=bjNai6YZ-s2fP05"}
      />
      <PageIllustration />
      <Cta />
    </>
  );
}
