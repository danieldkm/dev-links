// Site-wide colors (CSS variables)
export type SiteColors = {
  background: string;
  foreground: string;
  surface: string;
  surfaceMuted: string;
  stroke: string;
  text: string;
  highlight: string;
  // card: string;
  // cardForeground: string;
  // primary: string;
  // primaryForeground: string;
  // secondary: string;
  // secondaryForeground: string;
  // muted: string;
  // mutedForeground: string;
  // accent: string;
  // accentForeground: string;
  // destructive: string;
  // input: string;
  // ring: string;
  // ... more as needed
};

export type EditorTheme = {
  id: string;
  name: string;
  site: SiteColors;
};

export const EDITOR_THEMES: Record<string, EditorTheme> = {
  dark: {
    id: "dark",
    name: "Dark",
    site: {
      background: "#282a36",
      foreground: `radial-gradient(circle at bottom left, rgba(128, 0, 128, 0.4), transparent 50%),
    radial-gradient(circle at top right, rgba(128, 0, 255, 0.3), transparent 50%);`,
      surface: "rgba(255, 255, 255, .1)",
      surfaceMuted: "rgba(255, 255, 255, .05)",
      stroke: "rgba(255, 255, 255, .5)",
      text: '#fff',
      highlight: 'rgba(255, 255, 255, .2)',
    },
  },
  light: {
    id: "light",
    name: "Light",
    site: {
      background: "#ffffff",
      foreground: `radial-gradient(circle at bottom left, rgba(128, 0, 128, 0.4), transparent 50%),
    radial-gradient(circle at top right, rgba(128, 0, 255, 0.3), transparent 50%);`,
      surface: "rgba(0, 0, 0, .05)",
      surfaceMuted: "rgba(0, 0, 0, .05)",
      stroke: "rgba(0, 0, 0, .5)",
      text: '#000',
      highlight: 'rgba(0, 0, 0, .1)',
    },
  },
};

export function applySiteTheme(theme: EditorTheme): void {
  const root = document.documentElement;
  const { site } = theme;

  root.style.setProperty("--background", site.background);
  root.style.setProperty("--foreground", site.foreground);
  root.style.setProperty("--surface", site.surface);
  root.style.setProperty("--surface-muted", site.surfaceMuted);
  root.style.setProperty("--stroke", site.stroke);
  root.style.setProperty("--text", site.text);
  root.style.setProperty("--highlight", site.highlight);

  // root.style.setProperty("--card", site.card);
  // root.style.setProperty("--card-foreground", site.cardForeground);
  // root.style.setProperty("--primary", site.primary);
  // root.style.setProperty("--primary-foreground", site.primaryForeground);
  // root.style.setProperty("--secondary", site.secondary);
  // root.style.setProperty("--secondary-foreground", site.secondaryForeground);
  // root.style.setProperty("--muted", site.muted);
  // root.style.setProperty("--muted-foreground", site.mutedForeground);
  // root.style.setProperty("--accent", site.accent);
  // root.style.setProperty("--accent-foreground", site.accentForeground);
  // root.style.setProperty("--destructive", site.destructive);
  // root.style.setProperty("--input", site.input);
  // root.style.setProperty("--ring", site.ring);
}

export const DEFAULT_THEME_ID = "dark";

export function getTheme(themeId: string): EditorTheme {
  return EDITOR_THEMES[themeId] || EDITOR_THEMES[DEFAULT_THEME_ID];
}
