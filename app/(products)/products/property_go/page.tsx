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
        title={"Prperty Go"}
        outline={"Ultimate Property Mangment Software"}
        description={""}
        uhOh={false}
      />
      <ProductOverview
        github={"https://github.com/ihaseebullah"}
        productName={"Propery Go :"}
        paragraph1={
          "Property Go is a real estate management platform designed to simplify property operations with a focus on efficiency. It offers a streamlined system for listing properties, managing images, and securing user sessions, ensuring smooth transactions and data integrity. The platform's intuitive design enables professionals to oversee their real estate assets seamlessly, improving overall business performance."
        }
        paragraph2={
          "With features like finance tracking, project management, and installment-based payment systems, Property Go helps users stay organized and financially sound. Its data analysis tools provide clear insights for predictive decision-making, while role-based login ensures secure access control, creating a reliable environment for managing real estate portfolios."
        }
        learnMore={
          "Promeol's Property Go platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The frontend leverages React.js to create an intuitive and dynamic user experience, allowing real estate professionals to easily navigate the platform's features. Express.js handles the backend, managing secure sessions and API communication with a focus on performance and data security. MongoDB serves as the database, offering scalable storage for managing property listings, user data, and financial records. The platform is cloud-deployed, ensuring high availability, seamless scalability, and robust support for handling extensive real estate operations."
        }
        key={"propertyGO"}
        link={"https://www.youtube.com/embed/XzhuZhOqC88"}
      />
      <PageIllustration />
      <Cta />
    </>
  );
}
