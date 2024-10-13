export const SectionHeader = ({
  title,
  outline,
  description,
  uhOh,
  product,
  commingsoon,
}: {
  title: String;
  outline: String;
  description: String;
  uhOh?: Boolean;
  product?: Boolean;
  commingsoon?: Boolean;
}) => {
  return (
    <div
      className={`${
        commingsoon
          ? "mb-[20vh] mx-auto max-w-3xl pb-12 text-center md:pb-20"
          : "mx-auto max-w-3xl pb-12 text-center md:pb-20 mt-5"
      }`}
    >
      {!uhOh && !commingsoon && (
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            {outline}
          </span>
        </div>
      )}

      {commingsoon ? (
        <h6 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-8xl">
          {title}
        </h6>
      ) : (
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          {title}
        </h2>
      )}
      {!product && <p className="text-lg text-indigo-200/65">{description}</p>}
    </div>
  );
};
