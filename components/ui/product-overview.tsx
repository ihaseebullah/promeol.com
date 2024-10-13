export const ProductOverview = ({
  productName,
  link,
  paragraph1,
  paragraph2,
}: {
  productName: String;
  paragraph1: String;
  link: String;
  paragraph2?: String;
}) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={400}
      className="mx-auto max-w-6xl pb-12 md:pb-20 text-center md:text-left flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0 md:space-x-6"
    >
      <div className="md:w-1/2 p-1 rounded-md relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <iframe
          width="100%"
          height="315"
          src={`${link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="md:w-1/2 flex flex-col justify-start">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50">
          {productName}
        </h2>
        <p className="text-justify md:text-left my-2 ">{paragraph1}</p>
        <p className="text-justify md:text-left">{paragraph2}</p>
      </div>
    </div>
  );
};
