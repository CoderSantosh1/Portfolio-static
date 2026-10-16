import type { LucideIcon } from "lucide-react";
import {
  Atom, Award, Box, Briefcase, Clock, Cloud, Code, CodeXml, Cpu, Database, FileCode,
  Gauge, GitBranch, Globe, GraduationCap, HardDrive, History, House, Layers, LayoutTemplate,
  LifeBuoy, Mail, PanelsTopLeft, Palette, PenTool, Plug, Server, ShoppingBag, Smartphone,
  Star, Terminal, User, Wind, Wrench, Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export type IconType = LucideIcon | typeof GithubIcon;

export const PROFILE_IMAGE = "https://portflio-santosh.pages.dev/assets/Myprotflio-ms2eVcYy.png";

export const navLinks: { href: string; label: string; icon: IconType }[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Layers },
  { href: "/work", label: "Work / Projects", icon: Briefcase },
  { href: "/skills", label: "Skills & Stack", icon: Cpu },
  { href: "/experience", label: "Experience", icon: History },
  { href: "/education", label: "Education & Certs", icon: GraduationCap },
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/contact", label: "Contact", icon: Mail },
];

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export type Stat = { value: string; suffix?: string; label: string };

export const homeStats: Stat[] = [
  { value: "6", suffix: "+", label: "Years building for the web" },
  { value: "40", suffix: "+", label: "Projects shipped" },
  { value: "12", label: "Product platforms supported" },
  { value: "100", suffix: "%", label: "Responsive & accessible builds" },
];

export const aboutStats: Stat[] = [
  { value: "3", suffix: "+", label: "Years of experience" },
  { value: "10", suffix: "+", label: "Technologies explored" },
  { value: "100", suffix: "%", label: "Focus on quality" },
  { value: "24/7", label: "Curiosity to learn" },
];

/* Short service cards (home) */
export const homeServices: { title: string; text: string; icon: IconType }[] = [
  { title: "Web Development", text: "High-performance web apps built with React, TypeScript, Next.js and Node.js.", icon: CodeXml },
  { title: "Responsive UI / UX", text: "Clean Figma prototypes turned into pixel-perfect, responsive frontends.", icon: PenTool },
  { title: "Performance & SEO", text: "Auditing speed, SEO scores and WCAG accessibility so every page feels instant.", icon: Gauge },
  { title: "API & Backend", text: "REST / GraphQL APIs and database integration with PostgreSQL and Redis.", icon: Server },
  { title: "E-commerce", text: "Online stores with product catalogs, secure checkout and smooth shopping UX.", icon: ShoppingBag },
  { title: "Maintenance & Support", text: "Bug fixes, content updates and ongoing improvements to keep sites healthy.", icon: LifeBuoy },
];

/* Service cards with images (services page) */
export const services: { title: string; text: string; icon: IconType; image: string; alt: string }[] = [
  { title: "Web Development", text: "High-performance web apps built using React, TypeScript, Next.js and Node.js.", icon: PanelsTopLeft,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", alt: "Developer building a website on a laptop" },
  { title: "Responsive UI / UX", text: "Clean design prototypes in Figma, transformed into responsive, reactive frontends.", icon: Smartphone,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80", alt: "Mobile-friendly interface design displayed on a screen" },
  { title: "Performance Optimization", text: "Auditing and tuning speed, SEO scores and WCAG accessibility standards.", icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", alt: "Website performance analytics dashboard" },
  { title: "API & Backend Architecture", text: "REST / GraphQL APIs and serverless database integration with PostgreSQL & Redis.", icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80", alt: "Backend server infrastructure" },
  { title: "E-commerce Development", text: "Easy-to-use online stores with product catalogs, secure checkout and responsive shopping.", icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", alt: "Online store checkout on a laptop" },
  { title: "Maintenance & Support", text: "Keeping websites secure and up to date with fixes, content updates and improvements.", icon: Wrench,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", alt: "Website analytics and performance dashboard" },
];

/* Home featured projects */
export const featuredProjects = [
  { title: "Analytics Dashboard", tech: "REACT.JS · TAILWIND CSS", text: "A clean dashboard interface for presenting data, metrics and visual insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", alt: "Analytics dashboard project" },
  { title: "Business Website", tech: "NEXT.JS · TYPESCRIPT", text: "A responsive website focused on clear content, modern layouts and usability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", alt: "Business analytics website" },
  { title: "E-commerce UI", tech: "REACT.JS · API INTEGRATION", text: "A product-focused shopping interface with reusable components and responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", alt: "E-commerce shopping interface" },
  { title: "Interactive Web App", tech: "JAVASCRIPT · CSS", text: "An interactive web experience built around intuitive navigation and a simple user interface.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", alt: "Web application interface" },
];

/* Work page projects */
export const projects = [
  { title: "Analytics Platform", tags: ["React", "Tailwind", "Node"], text: "Real-time enterprise dashboard handling large traffic events with interactive data charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", alt: "SaaS analytics dashboard" },
  { title: "Crypto Trading Interface", tags: ["Next.js", "TypeScript"], text: "Trading application with live WebSocket market feeds and order books.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80", alt: "Finance trading app" },
  { title: "E-commerce Storefront", tags: ["React", "Stripe", "Node.js"], text: "A responsive online store with product discovery, a streamlined cart and secure checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", alt: "Online shopping storefront displayed on a laptop" },
  { title: "Task Management App", tags: ["Next.js", "TypeScript"], text: "A collaborative workspace for organizing tasks, tracking progress and managing team projects.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80", alt: "Task planning board with organized project cards" },
];

export const marqueeTech = ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "HTML5", "CSS3", "Figma", "Git", "PostgreSQL", "MongoDB", "Docker", "AWS"];

/* Technology cards with level bars (about page) */
export const techCards: { title: string; icon: IconType; items: { name: string; level: string; pct: number }[] }[] = [
  { title: "Frontend", icon: LayoutTemplate, items: [
    { name: "React / Next.js", level: "Expert", pct: 95 },
    { name: "TypeScript", level: "Expert", pct: 92 },
    { name: "Tailwind CSS", level: "Expert", pct: 94 },
    { name: "HTML5 & CSS3", level: "Expert", pct: 96 },
  ] },
  { title: "Backend", icon: Database, items: [
    { name: "Node.js", level: "Advanced", pct: 82 },
    { name: "REST APIs", level: "Advanced", pct: 85 },
    { name: "PostgreSQL", level: "Intermediate", pct: 70 },
    { name: "MongoDB", level: "Intermediate", pct: 68 },
  ] },
  { title: "Tools & Design", icon: Wrench, items: [
    { name: "Figma", level: "Advanced", pct: 85 },
    { name: "Git & GitHub", level: "Advanced", pct: 88 },
    { name: "Docker", level: "Intermediate", pct: 65 },
    { name: "AWS", level: "Intermediate", pct: 66 },
  ] },
];

export type Level = "Expert" | "Advanced" | "Intermediate";

export const skillGroups: { title: string; skills: { name: string; level: Level; icon: IconType }[] }[] = [
  { title: "Frontend", skills: [
    { name: "TypeScript", level: "Expert", icon: Code },
    { name: "React / Next.js", level: "Expert", icon: Atom },
    { name: "Tailwind CSS", level: "Expert", icon: Wind },
    { name: "JavaScript", level: "Expert", icon: FileCode },
    { name: "HTML5", level: "Expert", icon: CodeXml },
    { name: "CSS3", level: "Expert", icon: Palette },
  ] },
  { title: "Backend & Data", skills: [
    { name: "Node.js", level: "Advanced", icon: Server },
    { name: "REST APIs", level: "Advanced", icon: Plug },
    { name: "PostgreSQL", level: "Intermediate", icon: Database },
    { name: "MongoDB", level: "Intermediate", icon: HardDrive },
    { name: "Python", level: "Intermediate", icon: Terminal },
  ] },
  { title: "Tools & Design", skills: [
    { name: "Figma", level: "Advanced", icon: PenTool },
    { name: "Git", level: "Advanced", icon: GitBranch },
    { name: "GitHub", level: "Advanced", icon: GithubIcon },
    { name: "Docker", level: "Intermediate", icon: Box },
    { name: "AWS", level: "Intermediate", icon: Cloud },
  ] },
];

export type Step = { title: string; text: string };

export const processSteps: Step[] = [
  { title: "Discover", text: "Understand your goals, users and the problem worth solving." },
  { title: "Design", text: "Wireframes and polished UI in Figma, reviewed together early." },
  { title: "Develop", text: "Clean, reusable components with regular previews of progress." },
  { title: "Deliver", text: "Testing, launch and support so everything keeps running smoothly." },
];

export const approachSteps: Step[] = [
  { title: "Understand", text: "Break down requirements, understand user needs and plan a clear structure first." },
  { title: "Develop", text: "Build reusable React components, integrate APIs and keep UI patterns consistent." },
  { title: "Optimize", text: "Check responsive layouts, handle edge cases, improve performance and test flows." },
  { title: "Collaborate", text: "Work with the team, incorporate feedback and keep improving the final product." },
];

export type TimelineEntry = { tag: string; alt?: boolean; time: string; title: string; org: string; text: string };

export const journey: TimelineEntry[] = [
  { tag: "Experience", time: "2023 — Present", title: "Lead Frontend Engineer", org: "TechPulse Corp · San Francisco", text: "Spearheaded a shared design system used across 12 product platforms." },
  { tag: "Experience", time: "2020 — 2023", title: "Full Stack Developer", org: "Apex Software · New York", text: "Built scalable web applications with Next.js, Node.js and PostgreSQL." },
  { tag: "Certification", alt: true, time: "2024", title: "AWS Solutions Architect", org: "Amazon Web Services", text: "Designing reliable, cost-efficient cloud architecture." },
  { tag: "Education", alt: true, time: "2015 — 2019", title: "B.S. Computer Science", org: "UC Berkeley", text: "Foundations in software engineering, algorithms and problem solving." },
];

export const experience: TimelineEntry[] = [
  { tag: "Current", time: "2023 — Present", title: "Lead Frontend Engineer", org: "TechPulse Corp · San Francisco", text: "Spearheaded the development of a design system used across 12 product platforms." },
  { tag: "Full-time", alt: true, time: "2020 — 2023", title: "Full Stack Developer", org: "Apex Software · New York", text: "Built scalable web applications using Next.js, Node.js and PostgreSQL." },
];

export const education: (TimelineEntry & { icon: IconType })[] = [
  { tag: "Education", alt: true, time: "2015 — 2019", title: "B.S. Computer Science", org: "UC Berkeley", text: "Foundations in software engineering, algorithms and problem solving.", icon: GraduationCap },
  { tag: "Certification", time: "Certified 2024", title: "AWS Solutions Architect", org: "Amazon Web Services", text: "Designing reliable, scalable and cost-efficient cloud architecture.", icon: Award },
];

export type Review = { quote: string; name: string; role: string; initials: string };

export const reviews: Review[] = [
  { quote: "Santosh delivered our web app ahead of schedule. The code quality and design polish were exceptional.", name: "Sarah Jenkins", role: "Founder, SaaSify", initials: "SJ" },
  { quote: "Collaborating with Santosh was seamless. Highly creative and reliable engineer.", name: "David Ross", role: "VP Product", initials: "DR" },
];

export const homeReviews: Review[] = [
  reviews[0],
  { quote: "Collaborating was seamless. A highly creative and reliable engineer.", name: "David Ross", role: "VP Product", initials: "DR" },
  { quote: "Great communication, clean handoff and a site that is noticeably faster than before.", name: "Maya Patel", role: "Marketing Lead", initials: "MP" },
];

export const faqs = [
  { q: "What kind of projects do you take on?", a: "Websites, web apps, dashboards and e-commerce stores — from a single landing page to a full product frontend." },
  { q: "How long does a typical project take?", a: "A landing page usually takes 1–2 weeks; larger web apps take 4–10 weeks depending on scope. You'll get a clear timeline before we start." },
  { q: "Can you work from my existing design?", a: "Yes. I can build from Figma, Adobe XD or even screenshots, or design the interface for you first." },
  { q: "Do you offer support after launch?", a: "Absolutely — bug fixes, updates and performance improvements are available as ongoing support." },
];

export const contactInfo: { title: string; text: string; icon: IconType }[] = [
  { title: "Open to work", text: "Freelance projects and full-time frontend roles.", icon: Briefcase },
  { title: "Quick replies", text: "I usually respond within one business day.", icon: Clock },
  { title: "Remote friendly", text: "Happy to collaborate across time zones.", icon: Globe },
];
