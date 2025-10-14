export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Dev Rastogi - Web Developer Portfolio | React & Next.js",
  description: "Portfolio of Dev Rastogi, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Dev Rastogi",
  keywords: ["Dev Rastogi", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Dev Rastogi",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Dev Rastogi",
  contactTitle: "CEO",
  email: "rastogi.db1@gmail.com",
  phone: "+917906456957",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Meerut",
  state: "UP",
  zipCode: "98034",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/in/austin-serb/",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
    github: "https://github.com/austin1serb",
    x: "https://x.com/AustinSerb",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-dev-rastogi",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/https://github.com/devr11/Amazing-Keyboards",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/devr11/Amazing-Keyboards",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
