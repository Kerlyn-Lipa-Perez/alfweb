// Import necessary modules and components

import Link from "next/link";
import Alf from "./components/Alf";
import ServicesSection from "./components/ServicesSection";
import Experience from "./components/Experience";
import Contact from "./contact/page";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";


const DynamicExperience = dynamic(() => import("./components/Experience"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
		<main className="pt-20">
			<section id="Inicio">
				<Hero />
			</section>

			<section>
				<Alf />
			</section>

			<section id="Services">
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
