export const metadata = {
  title: "Products",
  description: "Our solutions work across all platforms, set up once, and get lasting, scalable results.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      
      <Cta />
    </>
  );
}
