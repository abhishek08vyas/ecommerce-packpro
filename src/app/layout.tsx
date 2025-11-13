import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PackPro Solutions",
	description: "Delivering best packing solutions for your business",
	keywords: ["packing", "solutions", "business", "packaging", "packing solutions"],
	authors: [{ name: "PackPro Solutions", url: "" }],
	creator: "PackPro Solutions",
	publisher: "PackPro Solutions",
	openGraph: {
		title: "PackPro Solutions",
		description: "Delivering best packing solutions for your business",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider storageKey="app-theme">
					<Navbar />
					{children}
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
