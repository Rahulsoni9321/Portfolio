import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Soni | Backend Engineer & Full Stack Developer",
  description:
    "Portfolio of Rahul Soni — Backend Engineer specializing in Node.js, AWS, MongoDB, real-time systems, and AI/LLM integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cal.com embed script — dark theme with cyber accent */}
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal; let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {}; cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === "string") {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar); p(cal, ["-", namespace]);
                } else { p(cal, ar); }
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", { origin: "https://cal.com" });
          Cal("ui", {
            theme: "dark",
            styles: { branding: { brandColor: "#00D2FF" } },
            hideEventTypeDetails: false,
          });
        `}</Script>
      </head>
      <body className={`${inter.className}`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
