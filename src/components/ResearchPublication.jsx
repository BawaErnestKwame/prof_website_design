import React, { useState } from "react";
import image from '../assets/accordianImage.jpg';

const ResearchPublication = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const publications = [
    {
      title: "Effects of weather and policy intervention on COVID-19 infection in Ghana",
      year: 2020,
      description:
        "This study investigates the effects of temperature, humidity, precipitation, wind speed and the specific government policy intervention of partial lockdown on the new cases of COVID-19 infection in Ghana.",
    },
    {
      title: "Detection of iron deficiency anemia by medical images: a comparative study of machine learning algorithms",
      year: 2023,
      description:
        "Anemia occurs when the level of red blood cells within the body decreases or when the structure of the red blood cells is destroyed or when the Hb level in the red blood cell is below the normal threshold, which results from one or more increased red cell destructions, blood loss, defective cell production or a depleted sum of Red Blood Cells.",
    },
    {
      title: "VAR, ARIMAX and ARIMA models for nowcasting unemployment rate in Ghana using Google trends",
      year: 2023,
      description:
        "The analysis of the high volume of data spawned by web search engines on a daily basis allows scholars to scrutinize the relation between the user’s search preferences and impending facts. This study can be used in a variety of economics contexts. The purpose of this study is to determine whether it is possible to anticipate the unemployment rate by examining behavior.",
    },
    {
      title: "Raising Students Programming Skills Using Appiahene Gamification Model",
      year: 2017,
      description:
        "This paper proposes the Appiahene Gamification Model (AGM) for programming education, exploring how ICT-driven gamification can enhance teaching and learning. While gamification is widely praised, empirical validation is limited. AGM aims to demonstrate that well-applied gamification effectively motivates and engages students, making programming learning more enjoyable and impactful.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full py-12 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(1,129,155,0.9), rgba(1,129,155,0.9)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-[80%] mx-auto px-4 md:px-8 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          PUBLICATIONS
        </h1>

        {publications.map((pub, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer bg-white/80 rounded-md mb-4"
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 rounded transition-colors duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {pub.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-medium text-gray-800">
                    Publication Year:
                  </span>{" "}
                  {pub.year}
                </p>
              </div>

              {/* Toggle Icon */}
              <div
                className={`text-2xl font-bold text-gray-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-500 px-4 ${
                openIndex === index ? "max-h-96 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-sm md:text-base">{pub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPublication;
