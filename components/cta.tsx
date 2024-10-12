import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Logo from "./ui/logo";
import { Loader } from "./ui/loader";
import { Button } from "./ui/button";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Logo footer={true} />
            <p className="text-indigo-200/65 mb-5">
              Innovating software solutions that empower businesses to thrive in
              a digital world.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <Button
                  glassy={false}
                  title="Become a partner"
                  icon={Icons.faArrowRight}
                />
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <Button
                  glassy={true}
                  title="Schdule a meeting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
