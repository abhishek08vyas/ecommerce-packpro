"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface HeroCarouselProps {
	onContactClick: () => void;
}

const HeroCarousel = ({ onContactClick }: HeroCarouselProps) => {
	const [api, setApi] = useState<CarouselApi>();
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const carouselContainerRef = useRef<HTMLDivElement>(null);

	const slides = [
		{
			image: "/images/hero-packaging.jpg",
			title: "Marketplace for Machine in North America",
			description: "Connect with verified sellers",
		},
		{
			image: "/images/product-conveyor.jpg",
			title: "Premium Industrial Equipment",
			description: "Top manufacturers nationwide",
		},
		{
			image: "/images/product-pallet-wrapper.jpg",
			title: "Quality Machines",
			description: "Verified suppliers",
		},
	];

	// Auto-slide functionality
	useEffect(() => {
		if (!api) return;

		const startAutoSlide = () => {
			// Clear any existing interval
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			// Start new interval
			intervalRef.current = setInterval(() => {
				api.scrollNext();
			}, 5000);
		};

		const stopAutoSlide = () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};

		// Start auto-slide initially
		startAutoSlide();

		return () => {
			stopAutoSlide();
		};
	}, [api]);

	// Pause on drag/hold functionality
	useEffect(() => {
		const carouselNode = carouselContainerRef.current;
		if (!carouselNode || !api) return;

		const stopAutoSlide = () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};

		const startAutoSlide = () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			intervalRef.current = setInterval(() => {
				api.scrollNext();
			}, 5000);
		};

		// Pause on interaction start (mouse down or touch start)
		const handleInteractionStart = () => {
			stopAutoSlide();
		};

		// Resume after interaction ends (with a small delay)
		const handleInteractionEnd = () => {
			setTimeout(() => {
				startAutoSlide();
			}, 1000); // Resume after 1 second of inactivity
		};

		// Add event listeners for mouse and touch events
		carouselNode.addEventListener("mousedown", handleInteractionStart);
		carouselNode.addEventListener("touchstart", handleInteractionStart);
		carouselNode.addEventListener("mouseup", handleInteractionEnd);
		carouselNode.addEventListener("touchend", handleInteractionEnd);
		carouselNode.addEventListener("mouseleave", handleInteractionEnd);

		return () => {
			carouselNode.removeEventListener("mousedown", handleInteractionStart);
			carouselNode.removeEventListener("touchstart", handleInteractionStart);
			carouselNode.removeEventListener("mouseup", handleInteractionEnd);
			carouselNode.removeEventListener("touchend", handleInteractionEnd);
			carouselNode.removeEventListener("mouseleave", handleInteractionEnd);
		};
	}, [api]);

	return (
		<Carousel
			ref={carouselContainerRef}
			setApi={setApi}
			opts={{
				align: "start",
				loop: true,
				dragFree: false,
			}}
			className="w-full cursor-grab active:cursor-grabbing"
		>
			<CarouselContent>
				{slides.map((slide, index) => (
					<CarouselItem key={index}>
						<div className="relative h-[700px] flex items-center overflow-hidden">
							{/* Background Image using Next.js Image */}
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								priority={index === 0}
								className="object-cover pointer-events-none"
								sizes="100vw"
							/>

							{/* Gradient Overlay - Light Purple for light theme, White for dark theme */}
							<div className="absolute inset-0 bg-gradient-to-r from-purple/80 via-purple/50 to-purple/60 dark:from-white/80 dark:via-white/50 dark:to-white/60" />

							{/* Content */}
							<div className="container relative z-10 mx-auto px-4">
								<div className="max-w-3xl text-white dark:text-[#3d3266] animate-in fade-in duration-500 ml-8 md:ml-16 lg:ml-24">
									<h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">{slide.title}</h1>
									<p className="text-2xl mb-10 opacity-90">{slide.description}</p>
									<div className="flex gap-4">
										<Link href="/products">
											<Button
												variant="default"
												size="lg"
												className="group"
											>
												Explore
												<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
											</Button>
										</Link>
										<Button
											size="lg"
											variant="outline"
											className="bg-white/20 border-white text-white hover:bg-white/30 backdrop-blur-sm dark:bg-white/20 dark:border-[#3d3266] dark:text-[#3d3266] dark:hover:bg-white/30"
											onClick={onContactClick}
										>
											Get Quote
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default HeroCarousel;
