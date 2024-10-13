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
        github={"https://github.com/ihaseebullah/Point-Of-Sale"}
        productName={"PB365"}
        paragraph1={
          "PB 365 is a cloud-based retail management solution tailored for Megamart Enterprises, built on the MERN stack. It streamlines operations with a secure point-of-sale (POS) system that enables quick transactions and automated invoicing, reducing manual errors. Advanced sales analytics provide real-time insights that help business leaders make informed decisions, enhancing profitability and operational efficiency."
        }
        paragraph2={
          "PB 365 offers a user-friendly React.js interface for easy navigation and real-time inventory management to optimize stock levels. Cloud deployment ensures scalability, while granular access control and integrated customer management enhance interactions and data security."
        }
        key={"pb365"}
        link={"https://www.youtube.com/embed/bj69B9bQtTk?si=bjNai6YZ-s2fP05"}
      />
      <PageIllustration />
      <Cta />
    </>
  );
}
