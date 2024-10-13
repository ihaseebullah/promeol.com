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
        title={"LMS"}
        outline={"Learning Managment System"}
        description={""}
        uhOh={false}
      />
      <ProductOverview
        github={"https://github.com/ihaseebullah"}
        productName={"Features :"}
        paragraph1={
          "The LMS for schools is a comprehensive system designed to interconnect different stakeholders within an educational institution. It provides tailored dashboards for students, teachers, institution heads, and finance administrators, offering a personalized experience for managing tasks, tracking performance, and engaging in real-time communication. The platform streamlines various educational processes, ensuring efficient workflows and smooth operations across the institution."
        }
        paragraph2={
          "Key features include a real-time fee payment system, enabling finance admins to manage and process payments with ease. The LMS also supports quizzes, assignments, and online results, fostering a seamless learning experience. Additionally, the platform incorporates a blog section and messaging system, encouraging collaboration and interaction among students, teachers, and administrators."
        }
        learnMore={
          "This LMS is built using Node.js, Express, and MongoDB for the backend, providing a scalable and secure infrastructure. The frontend is developed using EJS templating along with HTML, CSS, and JavaScript to create interactive dashboards for each stakeholder. RESTful APIs ensure smooth communication between the client and server, while MongoDB stores data related to users, quizzes, payments, and blog content. This combination of technologies allows for efficient data management and dynamic content delivery."
        }
        key={"lms"}
        link={"https://www.youtube.com/embed/akVQ2TLClpY?si=FPLxC0asJ8R1Wouc"}
      />
      <PageIllustration />
      <Cta />
    </>
  );
}
