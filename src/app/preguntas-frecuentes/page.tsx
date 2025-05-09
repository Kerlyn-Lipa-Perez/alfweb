import React from "react";

function PreguntasFrecuentes() {
  return (
    <>
      {/* FAQ */}
      <section className="h-screen max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-1 text-gray-600">
            
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-2xl mx-auto">
          {/* Accordion */}
          <div className="hs-accordion-group">
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500"
                aria-expanded="true"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                ¿Qué tipos de alfalfa ofrecen?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="text-gray-800">
                  Ofrecemos alfalfa fresca de alta calidad tanto para venta mayorista como minorista, ideal para productores y consumidores finales.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500"
                aria-expanded="false"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                ¿Realizan entregas a domicilio?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="text-gray-800">
                  Sí, contamos con una red de distribución confiable que asegura entregas rápidas y seguras en óptimas condiciones.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500"
                aria-expanded="false"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                ¿Cuáles son los métodos de pago disponibles?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="text-gray-800">
                  Aceptamos pagos con Yape y efectivo al momento de la entrega.
                </p>
              </div>
            </div>
          </div>
          {/* End Accordion */}
        </div>
      </section>
      {/* End FAQ */}
    </>
  );
}

export default PreguntasFrecuentes;
