import Image from "next/image";

const sectionContent = {
  dateLocationBadge: "6 de setembro • Salvador",
  headingLine1: "Congresso de",
  headingHighlight: "Odontologia Digital",
  description:
    "Tecnologia, inovação e networking com os maiores nomes da Odontologia Digital.",
  venue: "Mundo Plaza, Salvador",
  time: "8h às 18h",
  buttonLabel: "Garanta sua vaga",
};

export default function EventSection() {
  return (
    <div className="w-full lg:hidden bg-white overflow-x-hidden relative">
      {/* Banner image */}
      <div className="relative">
        <Image
          src="/mobilebanner.jpg"
          alt="Event Banner"
          width={1000}
          height={700}
          className="w-full h-auto"
        />
        {/* Softer gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-b from-transparent to-cyan-200 pointer-events-none" />
      </div>

      {/* Content section */}
      <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-white/20 text-white border border-white/30 text-sm px-4 py-2 rounded-full mb-6 inline-block">
            {sectionContent.dateLocationBadge}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {sectionContent.headingLine1}{" "}
            <span className="text-cyan-200">{sectionContent.headingHighlight}</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
            {sectionContent.description}
          </p>

          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-base font-semibold shadow-md">
            {sectionContent.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
