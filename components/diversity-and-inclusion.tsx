import { SectionHeader } from "./ui/section-header";

export const DAI = () => {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <SectionHeader
        title="Diversity and Inclusion Policy"
        outline="Our Commitment to Diversity"
        description="At Promeol, we believe that diversity and inclusion are essential to our success."
      />
      <div style={{ marginTop: "-40px" }}>
        <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
          Inclusive Environment
        </h3>
        <p style={{ marginTop: "-15px" }} className="text-indigo-200/65 mb-3">
          We strive to create an environment where individuals from all
          backgrounds can thrive. We value diversity in race, ethnicity, gender,
          age, sexual orientation, disability, religion, and any other
          characteristic that makes individuals unique.
        </p>

        <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
          Recruitment and Retention
        </h3>
        <p style={{ marginTop: "-15px" }} className="text-indigo-200/65 mb-3">
          We actively seek to recruit a diverse workforce. Our hiring practices
          are designed to attract candidates from varied backgrounds and
          experiences. We also prioritize retention through mentorship and
          career development programs that support underrepresented groups.
        </p>

        <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
          Training and Awareness
        </h3>
        <p style={{ marginTop: "-15px" }} className="text-indigo-200/65 mb-3">
          We provide training and resources to all employees to promote
          understanding and awareness of diversity and inclusion. This includes
          workshops, seminars, and ongoing discussions to foster a culture of
          respect and inclusion.
        </p>

        <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
          Support and Resources
        </h3>
        <p style={{ marginTop: "-15px" }} className="text-indigo-200/65 mb-3">
          We offer support systems, such as employee resource groups, to
          encourage community and collaboration among diverse team members.
          These groups provide a platform for sharing experiences and fostering
          connections.
        </p>

        <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
          Accountability
        </h3>
        <p style={{ marginTop: "-15px" }} className="text-indigo-200/65 mb-3">
          We hold ourselves accountable for our diversity and inclusion efforts.
          Regular assessments and feedback mechanisms ensure that we
          continuously improve our practices and create a truly inclusive
          environment.
        </p>
      </div>
    </div>
  );
};
