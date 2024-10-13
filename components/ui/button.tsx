import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ title, icon, glassy }: any) => {
  return (
    <div
      className={`${
        glassy
          ? "btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
          : "btn group mb-2 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
      } flex items-center justify-center py-2 px-4`}
    >
      <span className="relative inline-flex items-center justify-center">
        {title}
        {icon && (
          <span className="ml-2">
            <FontAwesomeIcon icon={icon} className="text-xs" />
          </span>
        )}
      </span>
    </div>
  );
};
