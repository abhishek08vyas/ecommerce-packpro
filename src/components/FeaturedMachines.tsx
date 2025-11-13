import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Machine {
	name: string;
	location: string;
	image: string;
	verified: boolean;
}

interface FeaturedMachinesProps {
	onContactClick?: () => void;
}

const featuredMachines: Machine[] = [
	{
		name: "Automatic Packaging System",
		location: "Ohio",
		image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&auto=format&fit=crop",
		verified: true,
	},
	{
		name: "Conveyor Belt System",
		location: "Texas",
		image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
		verified: true,
	},
	{
		name: "Pallet Wrapper Pro",
		location: "California",
		image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
		verified: true,
	},
	{
		name: "Industrial Robot Arm",
		location: "Michigan",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
		verified: true,
	},
];

export const FeaturedMachines: React.FC<FeaturedMachinesProps> = ({ onContactClick }) => {
	return (
		<section className="py-16 px-4">
			<div className="container mx-auto max-w-7xl">
				<div className="flex justify-between items-end mb-10">
					<div>
						<h2 className="text-3xl font-bold text-foreground mb-2">Featured Equipment</h2>
						<p className="text-muted-foreground">Top-rated machines from verified sellers</p>
					</div>
					<button className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2">
						View All
						<ArrowRight className="w-4 h-4" />
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredMachines.map((machine, index) => (
						<div
							key={index}
							className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
						>
							<div className="relative h-48 overflow-hidden">
								<div
									className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
									style={{ backgroundImage: `url(${machine.image})` }}
								/>
								{machine.verified && (
									<div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
										<CheckCircle className="w-3 h-3" />
										Verified
									</div>
								)}
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{machine.name}</h3>
								<div className="flex items-center justify-end mb-3">
									<div className="flex items-center gap-1 text-xs text-muted-foreground">
										<MapPin className="w-3 h-3" />
										{machine.location}
									</div>
								</div>
								<Button
									onClick={onContactClick}
									variant="default"
									className="w-full"
								>
									Request Quote
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default FeaturedMachines;
