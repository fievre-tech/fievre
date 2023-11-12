import { siteConfig } from "./config/site";

export default defineAppConfig({
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["Nuxt.js", "Vue", "Tailwind CSS", "Server Components", "Radix UI"],
  authors: [
    {
      name: "xieyezi",
      url: "https://shadcn.com"
    }
  ],
  creator: "xieyezi",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
});
