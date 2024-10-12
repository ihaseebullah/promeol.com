import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Card = ({ image, name, description, designation }: any) => {
  return (
    <div
      style={{
        maxHeight: 410,
        minHeight: 410,
        maxWidth: 250,
        cursor: "pointer",
      }}
      className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
    >
      <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:to-gray-900/50">
        {/* Arrow */}
        <div
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={8}
            fill="none"
          >
            <path
              fill="#F4F4F5"
              d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
            />
          </svg>
        </div>
        {/* Image */}
        <div className="relative w-full h-56">
          {" "}
          {/* Set a consistent height */}
          <Image
            style={{ objectFit: "cover" }}
            className="inline-flex z-30"
            src={image}
            fill // Use fill to make the image responsive
            alt="Workflow 01"
          />
        </div>
        {/* Content */}
        <div className="p-2">
          <p className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-200 shadow-lg">
            {name}
          </p>
          <p className="text-sm text-indigo-200/65 text-justify">
            {description}
          </p>

          <div className="flex justify-center items-center mt-2">
            <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {designation}
              </span>
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <ul className="inline-flex gap-1">
              <li>
                <div
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  aria-label="Linkedin"
                >
                  <Image
                    className="mt-[5px]"
                    src={require("@/public/images/linkedin.svg")}
                    alt="linkedin "
                    height={17}
                    width={17}
                  />
                </div>
              </li>
              <li>
                <div
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  aria-label="Github"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
