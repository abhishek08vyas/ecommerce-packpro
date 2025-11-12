// src/components/ThemeSwitch.tsx
"use client";

import { useTheme } from "@/lib/theme/ThemeProvider";

export function ThemeSwitch() {
	const { setTheme, resolvedTheme } = useTheme();

	const toggleTheme = () => {
		if (resolvedTheme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"
			type="button"
			aria-label="Toggle theme"
		>
			{/* Sun icon - visible in light mode */}
			<div className="theme-switch-icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					className="h-[1.2rem] w-[1.2rem]"
				>
					<circle
						cx="12"
						cy="12"
						r="5"
						fill="url(#sunGradient)"
					/>
					<defs>
						<linearGradient
							id="sunGradient"
							x1="12"
							y1="7"
							x2="12"
							y2="17"
						>
							<stop
								offset="0%"
								stopColor="#FDB813"
							/>
							<stop
								offset="100%"
								stopColor="#FF6B35"
							/>
						</linearGradient>
					</defs>
					<g
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
					>
						<line
							x1="12"
							y1="1"
							x2="12"
							y2="3"
						/>
						<line
							x1="12"
							y1="21"
							x2="12"
							y2="23"
						/>
						<line
							x1="4.22"
							y1="4.22"
							x2="5.64"
							y2="5.64"
						/>
						<line
							x1="18.36"
							y1="18.36"
							x2="19.78"
							y2="19.78"
						/>
						<line
							x1="1"
							y1="12"
							x2="3"
							y2="12"
						/>
						<line
							x1="21"
							y1="12"
							x2="23"
							y2="12"
						/>
						<line
							x1="4.22"
							y1="19.78"
							x2="5.64"
							y2="18.36"
						/>
						<line
							x1="18.36"
							y1="5.64"
							x2="19.78"
							y2="4.22"
						/>
					</g>
				</svg>
			</div>
			{/* Moon icon - visible in dark mode */}
			<div className="theme-switch-icon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					className="h-[1.2rem] w-[1.2rem]"
				>
					<path
						d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
						fill="url(#moonGradient)"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="moonGradient"
							x1="12"
							y1="3"
							x2="12"
							y2="21"
						>
							<stop
								offset="0%"
								stopColor="#A78BFA"
							/>
							<stop
								offset="100%"
								stopColor="#6366F1"
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
