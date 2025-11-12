"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = {
	variant: {
		default: "bg-cta text-cta-foreground shadow-md hover:shadow-lg hover:brightness-90 transition-all duration-200",
		destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-all duration-200",
		outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm transition-colors duration-200",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg transition-all duration-200",
		ghost: "hover:bg-accent hover:text-accent-foreground transition-colors duration-200",
		link: "text-primary underline-offset-4 hover:underline transition-colors duration-200",
	},
	size: {
		default: "h-10 px-4 py-2",
		sm: "h-9 rounded-lg px-3",
		lg: "h-11 rounded-lg px-8",
		icon: "h-10 w-10 rounded-lg",
	},
};

const baseButtonClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", size = "default", ...props }, ref) => {
	const variantClass = buttonVariants.variant[variant] || buttonVariants.variant.default;
	const sizeClass = buttonVariants.size[size] || buttonVariants.size.default;

	return (
		<button
			className={cn(baseButtonClasses, variantClass, sizeClass, className)}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = "Button";

export { Button };
