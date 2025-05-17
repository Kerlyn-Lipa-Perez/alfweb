"use client";
import { useSprings, animated, SpringValue } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
	text?: string;
	className?: string;
	delay?: number;
	animationFrom?: { opacity: number; transform: string };
	animationTo?: { opacity: number; transform: string };
	easing?: (t: number) => number;
	threshold?: number;
	rootMargin?: string;
	textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
	onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
	text = "",
	className = "",
	delay = 100,
	animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
	animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
	easing = (t) => t,
	threshold = 0.1,
	rootMargin = "-100px",
	textAlign = "center",
	onLetterAnimationComplete,
}) => {
	
	// Nueva lógica para soportar saltos de línea
	const parseText = (text: string) => {
		const parts = text.split(/(<br\s*\/?\s*>)/i);
		return parts.map((part, idx) => {
			if (/^<br\s*\/?\s*>$/i.test(part)) {
				return { type: "br", key: `br-${idx}` };
			}
			return { type: "text", value: part, key: `text-${idx}` };
		});
	};

	const parsed = parseText(text);

	// Calcular la cantidad total de letras para animación
	const getLetterCountBefore = (parsed: any[], idx: number) => {
		let count = 0;
		for (let i = 0; i < idx; i++) {
			if (parsed[i].type === "text") {
				count += parsed[i].value.replace(/ /g, "").length;
			}
		}
		return count;
	};

	const words = text.split(" ").map((w) => w.split(""));
	const letters = words.flat();

	const [inView, setInView] = useState(false);
	const ref = useRef<HTMLParagraphElement>(null);
	const animatedCount = useRef(0);

	useEffect(() => {
		if (!ref.current) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					obs.unobserve(ref.current as Element);
				}
			},
			{ threshold, rootMargin }
		);

		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [threshold, rootMargin]);

	const springs = useSprings(
		letters.length,
		letters.map((_, i) => ({
			from: animationFrom,
			to: inView
				? async (
						next: (step: Record<string, string | number>) => Promise<void>
				  ) => {
						await next(animationTo);
						animatedCount.current += 1;
						if (
							animatedCount.current === letters.length &&
							onLetterAnimationComplete
						) {
							onLetterAnimationComplete();
						}
				  }
				: animationFrom,
			delay: i * delay,
			config: { easing },
		}))
	);

	return (
		<p
			ref={ref}
			className={`split-parent ${className}`}
			style={{
				textAlign: textAlign,
				overflow: "hidden",
				display: "inline",
				whiteSpace: "normal",
				wordWrap: "break-word",
			}}
		>
			{parsed.map((part, idx) => {
				if (part.type === 'br') {
					return <br key={part.key} />;
				}
				if (!part.value) return null;
				const words = part.value.split(" ").map((w) => w.split(""));
				const letterOffset = getLetterCountBefore(parsed, idx);
				return words.map((word, wIdx) => (
					<span
						key={`${part.key}-w${wIdx}`}
						style={{ display: "inline-block", whiteSpace: "nowrap" }}
					>
						{word.map((letter, lIdx) => {
							const index =
								words.slice(0, wIdx).reduce((acc, w) => acc + w.length, 0) +
								lIdx +
								letterOffset;
							return (
								<animated.span
									key={`${part.key}-l${lIdx}`}
									style={{
										...springs[index],
										display: "inline-block",
										willChange: "transform, opacity",
									} as unknown as Record<string, SpringValue | string | number>}
								>
									{letter}
								</animated.span>
							);
						})}
						<span style={{ display: "inline-block", width: "0.3em" }}>
							&nbsp;
						</span>
					</span>
				));
			})}
		</p>
	);
};

export default SplitText;
