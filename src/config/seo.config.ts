import { DefaultSeoProps } from "next-seo/lib/types";

const config: DefaultSeoProps = {
  title: "Shun Tedokon",
  openGraph: {
    title: "Shun Tedokon",
    description: "Shun Tedokon's Personal Website",
    type: "website",
    locale: "ja_jp",
    url: "https://tedokon.com",
    site_name: "Shun Tedokon",
  },
  twitter: {
    handle: "@tdkn_",
    site: "@tdkn_",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
  ],
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
};

export default config;
