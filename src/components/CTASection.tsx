import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
	return (
		<section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
			<div className="container mx-auto max-w-4xl text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Find Your Perfect Machine?</h2>
				<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Join thousands of businesses finding quality industrial equipment through our marketplace</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button variant="default">
						Browse Components
						<ArrowRight className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
