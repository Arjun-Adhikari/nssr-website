import type { Metadata } from "next";
import { Oswald, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

/* The weights below mirror the Google Fonts request the static site made:
     Source Sans/Serif 4 at 300;400;600;700 (normal + italic) and Oswald at
     500;600. Without them next/font serves only the 400 face and the browser
     fakes every other weight, which visibly changes the hero headline. */
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ns-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ns-serif",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-ns-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NSSR | Nepalese Society of Student Researchers",
    template: "%s | NSSR",
  },
  description:
    "The Nepalese Society of Student Researchers is a catalyst for academic excellence, fostering a culture where inquiry meets integrity.",
  icons: {
    icon: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "NSSR | Nepalese Society of Student Researchers",
    description:
      "Towards an Informed Society. A national, student-governed organisation fostering authentic scientific inquiry in Nepal.",
    images: ["/assets/images/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}assets/images/logo.png`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} ${oswald.variable} h-full antialiased`}
    >
      <head>
        {/* Self-hosted through next/font; the CDN <link> the static site used
            for Font Awesome is kept so the icon glyphs stay identical. */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}