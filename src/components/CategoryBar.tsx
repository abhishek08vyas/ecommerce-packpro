import React from "react";
import { Package, Truck, TrendingUp, Shield } from "lucide-react";

interface Category {
	name: string;
	count: number;
	icon: React.ElementType;
}

interface CategoryBarProps {
	activeCategory?: number;
	onCategoryChange?: (index: number) => void;
}

const categories: Category[] = [
	{ name: "Packaging Equipment", count: 156, icon: Package },
	{ name: "Material Handling", count: 203, icon: Truck },
	{ name: "Automation Systems", count: 128, icon: TrendingUp },
	{ name: "Quality Control", count: 94, icon: Shield },
];

const CategoryBar: React.FC<CategoryBarProps> = ({ activeCategory = 0, onCategoryChange }) => {
	return (
		<section className="bg-card border-b border-border">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
					{categories.map((category, index) => (
						<button
							key={index}
							onClick={() => onCategoryChange?.(index)}
							className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md ${activeCategory === index ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-card-foreground dark:text-white"}`}
						>
							<category.icon className="w-6 h-6 mb-2 mx-auto" />
							<h3 className="font-semibold text-sm mb-1">{category.name}</h3>
							<p className={`text-xs ${activeCategory === index ? "opacity-90" : "text-muted-foreground"}`}>{category.count} listings</p>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryBar;
