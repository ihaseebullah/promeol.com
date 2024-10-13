import Link from "next/link";
import { Button } from "./button";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./modal";
import { useState } from "react";

export const ProductOverview = ({
  productName,
  link,
  paragraph1,
  paragraph2,
  github,
  learnMore,
}: {
  productName: String;
  paragraph1: String;
  link: String;
  paragraph2?: String;
  github: String;
  learnMore: String;
}) => {
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false); // Separate state for "Learn more" modal
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false); // Separate state for "Purchase" modal

  return (
    <div
      data-aos="fade-down"
      data-aos-delay={400}
      className="mx-auto max-w-6xl pb-12 md:pb-20 text-center md:text-left flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0 md:space-x-6 "
    >
      <div className="md:w-1/2 p-2 rounded-md ">
        <iframe
          width="100%"
          height="400"
          src={`${link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-lg"
        ></iframe>
      </div>

      <div
        style={{ minHeight: 400}}
        className="m-4 md:w-1/2 p-5 rounded-md flex flex-col justify-start relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
      >
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50">
          {productName}
        </h2>
        <p className="text-justify md:text-left my-2">
          {paragraph1.substring(0, 347)+'...'}
        </p>
        <p className="text-justify md:text-left">
          {paragraph2?.substring(0, 347)+'...'}
        </p>

        <div className="md:w-full flex items-center justify-start space-x-4 mt-4">
          {/* "Purchase" Button */}
          <button
            onClick={() => {
              setIsPurchaseModalOpen(true); // Open the "Purchase" modal
            }}
          >
            <Button title="Purchase" icon={Icons.faCartArrowDown} />
          </button>

          {/* "Learn More" Button */}
          <button
            onClick={() => {
              setIsLearnMoreModalOpen(true); // Open the "Learn More" modal
            }}
          >
            <Button
              title="Learn more"
              glassy={true}
              icon={Icons.faInfoCircle}
            />
          </button>

          {/* GitHub Link */}
          <Link target="_blank" href={`${github}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              height={30}
              width={30}
            >
              <path
                fill="#6366F1"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </Link>

          {/* "Learn More" Modal */}
          <Modal
            title="Information"
            isOpen={isLearnMoreModalOpen}
            onClose={() => setIsLearnMoreModalOpen(false)}
          >
            <p className="text-sm text-gray-500 text-justify">{learnMore}</p>
          </Modal>

          {/* "Purchase Software" Modal */}
          <Modal
            title="Purchase Software"
            isOpen={isPurchaseModalOpen}
            onClose={() => setIsPurchaseModalOpen(false)}
            showForm={true}
          >
            <p className="text-sm text-gray-500 text-justify">
              We will fix a meeting based on your prefrences you can fill out
              the form below to specify your prefrences and we will try to fit
              into your scheudele
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};
