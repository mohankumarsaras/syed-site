import { industriesData } from './industries';

export const navigationConfig = {
  mainNav: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Industries & Applications", path: "/industries" },
    { label: "Contact Us", path: "/contact" }
  ],
  quickLinks: [
    { label: "Company Overview", path: "/about" },
    { label: "Engineering Capabilities", path: "/about#capabilities" },
    { label: "Quality Program", path: "/about#quality" },
    { label: "Industries & Sectors", path: "/industries" },
    { label: "Technical Consultation", path: "/contact" }
  ],
  industryLinks: industriesData.map(ind => ({
    label: ind.name,
    path: `/industries#${ind.id}`
  }))
};
