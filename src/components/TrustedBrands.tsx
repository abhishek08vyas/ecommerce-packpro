interface Brand {
	name: string;
	logo: string;
}

const brands: Brand[] = [
	{ name: "TechPack", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&auto=format&fit=crop" },
	{ name: "IndustroPro", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&auto=format&fit=crop" },
	{ name: "AutoMax", logo: "https://images.unsplash.com/photo-1598887142487-3c854d51c512?w=200&h=80&auto=format&fit=crop" },
	{ name: "MachineHub", logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=80&auto=format&fit=crop" },
	{ name: "PackSystems", logo: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=200&h=80&auto=format&fit=crop" },
	{ name: "ConveyTech", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=80&auto=format&fit=crop" },
];

const TrustedBrands: React.FC = () => {
	return (
		<section className="py-16 px-4">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-10">
					<h2 className="text-2xl font-bold text-foreground mb-2">Trusted Brands</h2>
					<p className="text-muted-foreground">Equipment from industry-leading manufacturers</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
					{brands.map((brand, index) => (
						<div
							key={index}
							className="bg-card border border-border rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
						>
							<img
								src={brand.logo}
								alt={brand.name}
								className="max-w-full h-16 w-full object-cover rounded"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBrands;
