"use client";

import { useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryBar from "@/components/CategoryBar";
import FeaturedMachines from "@/components/FeaturedMachines";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsBanner from "@/components/StatsBanner";
import TrustedBrands from "@/components/TrustedBrands";
import CTASection from "@/components/CTASection";
import ContactFormDialog from "@/components/ContactFormDialog";

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
			<ContactFormDialog
				open={showContactForm}
				onOpenChange={setShowContactForm}
			/>
		</main>
	);
}
