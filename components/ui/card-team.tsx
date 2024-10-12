import Image from "next/image";
import Haseeb from "@/public/images/haseeb.png";
import Talha from "@/public/images/tlha.jpg";
import Yaseen from "@/public/images/ysn.jpg";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { Card } from "./card";

export const TeamCards = () => {
  const team = [
    {
      name: "Haseeb Ullah",
      description:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
      designation: "Founder and CEO",
      image: Haseeb,
    },
    {
      name: "Talha Sher",
      description:
        "As CTO, I lead innovation and empower teams to deliver exceptional software solutions using the latest tools.",
      designation: "Co Founder and CTO",
      image: Talha,
    },
    {
      name: "Yaseen Malik",
      description:
        "As a Social Media Manager, I create engaging content and strategies that boost brand visibility and community engagement.",
      designation: "Socail Media Manager",
      image: Yaseen,
    },
  ];
  return (
    <Spotlight className="mb-10 group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
      {/* Card 1 */}
      {team.map((memeber) => {
        return (
          <Card
            image={memeber.image}
            name={memeber.name}
            description={memeber.description}
            designation={memeber.designation}
          />
        );
      })}
    </Spotlight>
  );
};
