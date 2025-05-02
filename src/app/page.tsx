// Import necessary modules and components

import Link from "next/link";
import Alf from "./components/Alf";
import ServicesSection from "./components/ServicesSection";
import Experience from "./components/Experience";
import Contact from "./contact/page";
import dynamic from "next/dynamic";


const DynamicExperience = dynamic(() => import("./components/Experience"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className="pt-20">
      <div className="  pb-10  text-center">
        <h2 className="font-bold text-6xl pb-10">
          VENTA MAYORISTA Y MINORISTA <br/> DE ALFALFA DE CALIDAD
        </h2>
        <Link
          className="bg-lime-400 hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 transition disabled:opacity-50 py-2 px-4 rounded text-2xl "
          href=""
        >
          Comprar ahora
        </Link>
      </div>
      <section>
        <Alf />
      </section>
      <section>
        <ServicesSection />
      </section>

      <section>
        <DynamicExperience />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
