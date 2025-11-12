"use client";

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): "light" | "dark" => {
	if (typeof window !== "undefined" && window.matchMedia) {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	return "light";
};

interface ThemeProviderProps {
	children: ReactNode;
	storageKey?: string;
}

export function ThemeProvider({ children, storageKey = "app-theme" }: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window === "undefined") return "system";
		return (localStorage.getItem(storageKey) as Theme | null) ?? "system";
	});

	// ✅ Derived value — no extra state or setState
	const resolvedTheme = useMemo(() => {
		if (theme === "system") {
			return getSystemTheme();
		}
		return theme;
	}, [theme]);

	// ✅ Only synchronize DOM attribute and subscribe to system theme changes
	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-theme", resolvedTheme);

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (theme === "system") {
				const newResolved = e.matches ? "dark" : "light";
				root.setAttribute("data-theme", newResolved);
			}
		};

		mediaQuery.addEventListener("change", handleSystemChange);
		return () => mediaQuery.removeEventListener("change", handleSystemChange);
	}, [theme, resolvedTheme]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem(storageKey, newTheme);
	};

	return <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
