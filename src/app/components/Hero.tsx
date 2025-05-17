import Link from "next/link";
import React from "react";
import Alf from "./Alf";
import SplitText from "../utils/SplitText";
import GradientText from "../utils/GradientText";
function Hero() {
	return (
		<section className="pb-10 text-center flex flex-col items-center">
			<SplitText
				text="VENTA MAYORISTA Y MINORISTA <br /> DE ALFALFA DE CALIDAD"
				className="font-bold text-6xl pb-10 text-center"
				delay={100}
				animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
				animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
				threshold={0.2}
				rootMargin="-50px"
			/>
			<div className="flex justify-center w-full">
				<div>
					<Link href={"/products"}>
						<GradientText
							colors={[
								"#4ade80", // green-400
								"#a3e635", // lime-400
								"#a3e635", // lime-400
								"#4ade80", // green-400
								"#84cc16", // lime-500
							]}
							animationSpeed={4}
							showBorder={true}
							className="hover:opacity-90"
						>
							Comprar ahora
						</GradientText>
					</Link>
				</div>
			</div>

			<Alf />
		</section>
	);
}

export default Hero;
