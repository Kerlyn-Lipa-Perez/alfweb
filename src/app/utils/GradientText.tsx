import React, { ReactNode } from "react";

interface GradientTextProps {
	children: ReactNode;
	className?: string;
	colors?: string[];
	animationSpeed?: number;
	showBorder?: boolean;
}

export default function GradientText({
	children,
	className = "",
	colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
	animationSpeed = 8,
	showBorder = false,
}: GradientTextProps) {
	const gradientStyle = {
		backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
		animationDuration: `${animationSpeed}s`,
	};

	return (
		<div
			className={`relative inline-flex items-center justify-center px-6 py-3 text-2xl font-semibold rounded-xl cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
		>
			{showBorder && (
				<div
					className="absolute inset-0 animate-gradient z-0"
					style={{
						...gradientStyle,
						backgroundSize: "300% 100%",
					}}
				>
					<div
						className="absolute inset-[2px] bg-white rounded-xl z-[-1]"
					></div>
				</div>
			)}
			<span
				className="relative z-10 text-transparent bg-clip-text animate-gradient"
				style={{
					...gradientStyle,
					WebkitBackgroundClip: "text",
					backgroundSize: "300% 100%",
				}}
			>
				{children}
			</span>
		</div>
	);
}
