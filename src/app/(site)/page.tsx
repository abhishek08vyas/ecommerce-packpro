// app/page.tsx

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground transition-colors">
			<h1 className="text-5xl font-extrabold mt-8 mb-4 text-primary">Advanced Next.js Theme</h1>

			<p className="text-lg">
				This content changes style based on the **<span className="font-bold">data-theme</span>** attribute on the HTML element.
			</p>

			<div className="mt-8 p-6 rounded-lg shadow-xl bg-muted border border-border">
				<p>A card to demonstrate dark mode.</p>
				<p className="text-sm mt-2 text-destructive">Note the dark: prefix working with Tailwind v4&apos;s custom variant.</p>
			</div>
		</main>
	);
}
