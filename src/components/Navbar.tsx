"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	const [showContactForm, setShowContactForm] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleContactClick = () => {
		setShowContactForm(true);
		closeMobileMenu();
	};

	// Close mobile menu on Escape key
	useEffect(() => {
		if (!isMobileMenuOpen) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMobileMenuOpen]);

	return (
		<>
			<nav className="sticky top-0 z-50 w-full border-b bg-card backdrop-blur supports-backdrop-filter:bg-card/60">
				<div className="container mx-auto px-4 flex h-16 items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2"
						onClick={closeMobileMenu}
					>
						<svg
							className="h-6 w-6 text-primary"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
							/>
						</svg>
						<span className="text-xl font-bold dark:text-white">PackPro Solutions</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-6">
						<Link
							href="/"
							className="text-sm font-medium transition-colors dark:text-white"
						>
							Home
						</Link>
						<Link
							href="/products"
							className="text-sm font-medium transition-colors dark:text-white"
						>
							Products
						</Link>
						<ThemeSwitch />
						<Button
							onClick={() => setShowContactForm(true)}
							variant="default"
						>
							Contact Us
						</Button>
					</div>

					{/* Mobile Hamburger Button */}
					<div className="flex md:hidden items-center gap-4">
						<ThemeSwitch />
						<Button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							variant="ghost"
							size="icon"
							aria-label="Toggle menu"
							className="relative"
						>
							{isMobileMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t bg-card">
						<div className="container mx-auto px-4 py-4 flex flex-col gap-4">
							<Link
								href="/"
								onClick={closeMobileMenu}
								className="text-sm font-medium transition-colors py-2 px-4 rounded-md hover:bg-muted dark:text-white"
							>
								Home
							</Link>
							<Link
								href="/products"
								onClick={closeMobileMenu}
								className="text-sm font-medium transition-colors py-2 px-4 rounded-md hover:bg-muted dark:text-white"
							>
								Products
							</Link>
							<Button
								onClick={handleContactClick}
								variant="default"
								className="w-full justify-start"
							>
								Contact Us
							</Button>
						</div>
					</div>
				)}
			</nav>
			{showContactForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/50">
					<div className="bg-card rounded-lg p-6 max-w-md w-full mx-4">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-xl font-bold text-card-foreground">Contact Us</h2>
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
		</>
	);
};

export default Navbar;
