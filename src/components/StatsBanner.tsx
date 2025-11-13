"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface Stat {
	number: string;
	label: string;
}

const stats: Stat[] = [
	{ number: "500+", label: "Active Listings" },
	{ number: "200+", label: "Verified Sellers" },
	{ number: "50", label: "States Covered" },
	{ number: "24/7", label: "Support Available" },
];

// Helper function to extract numeric value and suffix from stat string
const parseStatValue = (statString: string): { value: number; suffix: string } => {
	if (statString === "24/7") {
		return { value: 24, suffix: "/7" };
	}

	const match = statString.match(/^(\d+)(.*)$/);
	if (match) {
		return { value: parseInt(match[1], 10), suffix: match[2] || "" };
	}

	return { value: 0, suffix: statString };
};

const StatsBanner: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="py-12 px-4 bg-primary"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
					{stats.map((stat, index) => {
						const { value, suffix } = parseStatValue(stat.number);

						return (
							<div key={index}>
								<div className="text-4xl font-bold mb-1">
									{stat.number === "24/7" ? (
										// Special handling for 24/7
										isVisible ? (
											<>
												<CountUp
													start={0}
													end={24}
													duration={2}
													enableScrollSpy={false}
												/>
												{suffix}
											</>
										) : (
											<>0{suffix}</>
										)
									) : (
										<>
											{isVisible ? (
												<CountUp
													start={0}
													end={value}
													duration={2}
													enableScrollSpy={false}
												/>
											) : (
												0
											)}
											{suffix}
										</>
									)}
								</div>
								<div className="text-sm opacity-90">{stat.label}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default StatsBanner;
