import type { Metadata } from "next";
import { Layout } from "@/presentation/components";
import { SettingsProvider } from "@/presentation/hooks/settings/settings-provider";
import "./globals.css";
import { APP_NAME } from "@/shared/constants/app.constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Share your links with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          const settings = JSON.parse(localStorage.getItem('devtype-settings'));
          if (settings?.themeId) {
            document.documentElement.setAttribute('data-theme', settings.themeId);
          }
        } catch (e) {}
      `,
          }}
        />
      </head>
      <body>
        <SettingsProvider>
          <Layout>{children}</Layout>
        </SettingsProvider>
      </body>
    </html>
  );
}
