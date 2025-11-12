// src/components/ThemeSwitch.tsx
"use client";

import { useTheme } from "@/lib/theme/ThemeProvider"; // Assuming src alias for '@/lib'

// Simple component to switch between themes
export function ThemeSwitch() {
	const { theme, setTheme, resolvedTheme } = useTheme();

	const toggleTheme = () => {
		if (resolvedTheme === "light") {
			// Toggle to dark (you can add 'system' logic here if needed)
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full transition-colors bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
			aria-label={`Switch to ${resolvedTheme === "light" ? "Dark" : "Light"} Mode`}
		>
			<span className="text-xl dark:text-yellow-400">{resolvedTheme === "light" ? "☀️" : "🌙"}</span>
			<span className="ml-2 text-gray-800 dark:text-gray-100">{resolvedTheme === "light" ? "Light" : "Dark"}</span>
		</button>
	);
}
