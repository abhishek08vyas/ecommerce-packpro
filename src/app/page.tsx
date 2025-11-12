// app/page.tsx

import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors">
			<ThemeSwitch />

			<h1 className="text-5xl font-extrabold mt-8 mb-4 text-primary-500 dark:text-primary-400">Advanced Next.js Theme</h1>

			<p className="text-lg">
				This content changes style based on the **<span className="font-bold">data-theme</span>** attribute on the HTML element.
			</p>

			<div className="mt-8 p-6 rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
				<p>A card to demonstrate dark mode.</p>
				<p className="text-sm mt-2 text-red-500 dark:text-red-300">Note the dark: prefix working with Tailwind v4&apos;s custom variant.</p>
			</div>
		</main>
	);
}
