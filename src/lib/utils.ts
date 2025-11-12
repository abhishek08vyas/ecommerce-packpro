type ClassValue = string | number | boolean | undefined | null | Record<string, boolean | undefined | null> | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
	const classes: string[] = [];

	for (const input of inputs) {
		if (input === null || input === undefined || input === false) continue;
		if (input === true) continue; // true values don't add classes

		if (typeof input === "string") {
			classes.push(input);
		} else if (typeof input === "number") {
			classes.push(String(input));
		} else if (Array.isArray(input)) {
			const inner = cn(...input);
			if (inner) classes.push(inner);
		} else if (typeof input === "object") {
			for (const key in input) {
				if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
					classes.push(key);
				}
			}
		}
	}

	// Basic deduplication - remove duplicate classes (simple approach)
	// For production, consider using a library, but this works for most cases
	const seen = new Set<string>();
	const final: string[] = [];

	for (const cls of classes.join(" ").split(/\s+/)) {
		if (cls && !seen.has(cls)) {
			seen.add(cls);
			final.push(cls);
		}
	}

	return final.join(" ").trim();
}
