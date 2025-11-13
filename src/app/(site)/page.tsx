"use client";

import { useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryBar from "@/components/CategoryBar";
import { Button } from "@/components/ui/button";
import FeaturedMachines from "@/components/FeaturedMachines";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsBanner from "@/components/StatsBanner";
import TrustedBrands from "@/components/TrustedBrands";
import CTASection from "@/components/CTASection";

export default function Home() {
	const [showContactForm, setShowContactForm] = useState(false);

	const handleContactClick = () => {
		setShowContactForm(true);
	};

	return (
		<main className="min-h-screen">
			<HeroCarousel onContactClick={handleContactClick} />
			<CategoryBar />
			<FeaturedMachines onContactClick={handleContactClick} />
			<WhyChooseUs />
			<StatsBanner />
			<TrustedBrands />
			<CTASection />
			{showContactForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
					<div className="bg-card rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-xl font-bold text-card-foreground">Get Quote</h2>
							<Button
								onClick={() => setShowContactForm(false)}
								variant="ghost"
								size="icon"
								aria-label="Close contact form"
							>
								✕
							</Button>
						</div>
						<p className="text-muted-foreground">Contact form will be implemented here.</p>
					</div>
				</div>
			)}
		</main>
	);
}
