export const SectionHeader = ({
  title,
  outline,
  description,
  uhOh,
}: {
  title: String;
  outline: String;
  description: String;
  uhOh?: Boolean;
}) => {
  return (
    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
      {!uhOh && (
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            {outline}
          </span>
        </div>
      )}
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
        {title}
      </h2>
       <p className="text-lg text-indigo-200/65">{description}</p>
    </div>
  );
};
