import { Shield, Search, TrendingUp, Users } from "lucide-react";

interface Feature {
	icon: React.ElementType;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: Shield,
		title: "Verified Sellers",
		description: "All suppliers are thoroughly vetted and certified for quality assurance",
	},
	{
		icon: Search,
		title: "Easy Discovery",
		description: "Advanced search filters help you find exactly what you need quickly",
	},
	{
		icon: TrendingUp,
		title: "Market Insights",
		description: "Real-time pricing and availability data across North America",
	},
	{
		icon: Users,
		title: "Expert Support",
		description: "Dedicated team to guide you through selection and purchase process",
	},
];

const WhyChooseUs: React.FC = () => {
	return (
		<section className="py-16 px-4 bg-muted/30">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-foreground mb-3">Why Choose Our Marketplace</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">Connect with North America&apos;s leading industrial equipment suppliers through our trusted platform</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
								<feature.icon className="w-6 h-6 text-primary" />
							</div>
							<h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
