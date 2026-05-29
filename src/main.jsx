import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Instagram,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { submitBookingRequest } from "./lib/bookings";
import { contact } from "./config/contact";
import "./styles.css";

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["How We Work", "how-we-work"],
  ["Projects", "projects"],
  ["About", "about"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

const services = [
  {
    title: "Website Development",
    text: "Fast, polished websites built to explain your offer clearly and turn visitors into enquiries.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Automation",
    text: "Practical AI workflows for admin, lead handling, content support, and repeatable business tasks.",
    icon: Bot,
  },
  {
    title: "Marketing Strategy",
    text: "Positioning, campaign planning, and lead-generation direction for businesses ready to grow.",
    icon: Compass,
  },
  {
    title: "Social Media Management",
    text: "Content systems that keep your brand active, professional, and aligned with your sales goals.",
    icon: Megaphone,
  },
  {
    title: "Business Growth Solutions",
    text: "A connected plan across website, automation, content, and follow-up so growth feels less random.",
    icon: Rocket,
  },
];

const workSteps = [
  ["Discover", "We understand your business, audience, current website, and lead process."],
  ["Design", "We shape the offer, user journey, visuals, and content structure."],
  ["Build", "We create the website, booking path, automations, and marketing assets."],
  ["Improve", "We review what is working and refine the system around better enquiries."],
];

const journey = [
  ["Clarity", "Your offer becomes easier to understand."],
  ["Presence", "Your website and social channels feel consistent and professional."],
  ["Automation", "Common tasks and enquiries become easier to manage."],
  ["Conversion", "Visitors have a clearer path to book a consultation or start a conversation."],
];

const projectTypes = [
  ["Service Business Website", "A premium website for local companies that need trust, clarity, and lead capture."],
  ["AI Workflow Setup", "Automation support for enquiries, internal tasks, and content operations."],
  ["Campaign Landing Page", "A focused page for a service, offer, launch, or paid marketing campaign."],
  ["Social Growth System", "A content and messaging foundation for consistent visibility online."],
];

const reasons = [
  ["Modern and practical", "We focus on useful systems that make your business easier to find, understand, and contact."],
  ["Built for business owners", "The website, content, and automations are designed around real day-to-day operations."],
  ["Clean communication", "You get direct guidance, simple priorities, and a build that is easy to keep improving."],
];

const faqs = [
  ["Who do you work with?", "We work with small businesses, startups, local businesses, and growing companies that want a stronger online presence."],
  ["Can you help if I already have a website?", "Yes. We can improve an existing website, rebuild it, or create focused landing pages for specific services."],
  ["Do you build AI automations?", "Yes. We help set up practical AI workflows for lead handling, admin tasks, content support, and internal processes."],
  ["How do consultations work?", "Send the booking form or message us on WhatsApp. We will review your goals and suggest the clearest next step."],
];

function usePremiumMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return undefined;
    }

    const root = document.documentElement;
    const hero = document.querySelector(".hero-shell");
    const revealElements = Array.from(document.querySelectorAll(".reveal-on-scroll"));
    let pointerFrame = 0;
    let scrollFrame = 0;

    root.classList.add("motion-ready");

    revealElements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 60, 240)}ms`);
    });

    const revealObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  revealObserver.unobserve(entry.target);
                }
              });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
          )
        : null;

    if (revealObserver) {
      revealElements.forEach((element) => revealObserver.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    function handlePointerMove(event) {
      if (!hero) {
        return;
      }

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }

      pointerFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        hero.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
        hero.style.setProperty("--spotlight-opacity", "1");
        pointerFrame = 0;
      });
    }

    function handlePointerLeave() {
      hero?.style.setProperty("--spotlight-opacity", "0");
    }

    function handleScroll() {
      if (scrollFrame) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--hero-parallax", `${Math.min(window.scrollY * 0.035, 24)}px`);
        scrollFrame = 0;
      });
    }

    hero?.addEventListener("pointermove", handlePointerMove);
    hero?.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      root.classList.remove("motion-ready");
      revealObserver?.disconnect();
      hero?.removeEventListener("pointermove", handlePointerMove);
      hero?.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(pointerFrame);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, []);
}

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Hapeshi Brothers Agency home">
      <span className="grid h-11 w-11 place-items-center rounded-md border border-sky-300/25 bg-sky-300/10 text-base font-black text-white shadow-blue">
        HB
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black uppercase tracking-[0.14em] text-white">Hapeshi Brothers</span>
        <span className="block text-xs uppercase tracking-[0.18em] text-sky-100/60">Agency</span>
      </span>
    </a>
  );
}

function Button({ href, children, variant = "primary", icon: Icon = ArrowRight, ...props }) {
  const classes = {
    primary: "bg-sky-400 text-navy-950 hover:bg-sky-300 shadow-[0_18px_48px_rgba(56,189,248,0.28)]",
    secondary: "border border-white/15 bg-white/[0.04] text-white hover:border-sky-300/50 hover:bg-white/[0.08]",
    dark: "bg-navy-950 text-white hover:bg-slate-900",
  };

  return (
    <a
      href={href}
      {...props}
      className={`premium-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.11em] transition ${classes[variant]}`}
    >
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}

function SectionHeader({ kicker, title, text, dark = true }) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className={`section-title ${dark ? "text-white" : "text-navy-950"}`}>{title}</h2>
      {text ? <p className={`mt-5 text-lg leading-8 ${dark ? "text-slate-200/70" : "text-slate-700"}`}>{text}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Logo />
        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map(([item, id]) => (
            <a key={id} href={`#${id}`} className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200/60 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <div className="hidden sm:block">
          <Button href="#book-appointment">Book a Free Call</Button>
        </div>
      </nav>
      <div className="border-t border-white/10 px-4 pb-3 sm:px-6 xl:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto whitespace-nowrap">
          {[...navItems, ["Book Appointment", "book-appointment"]].map(([item, id]) => (
            <a key={id} href={`#${id}`} className="py-1 text-[11px] font-black uppercase tracking-[0.14em] text-slate-200/70 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function HeroVisual() {
  const flowPaths = [
    "M126 168 C216 148 286 174 356 266",
    "M360 102 C430 154 432 216 368 266",
    "M126 392 C226 394 298 344 356 286",
    "M374 278 C452 234 524 238 594 290",
  ];

  return (
    <div
      className="hero-visual reveal-on-scroll"
      role="img"
      aria-label="Animated system map showing website development, AI automation, and marketing flowing into business growth"
    >
      <div className="hero-grid" />
      <svg className="hero-flow-svg" viewBox="0 0 720 560" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="heroFlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.16" />
            <stop offset="48%" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.72" />
          </linearGradient>
          <filter id="heroLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="heroArrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0 0 L9 4.5 L0 9 Z" fill="#7dd3fc" opacity="0.9" />
          </marker>
        </defs>
        <path className="flow-halo" d="M118 168 C216 112 306 148 364 262 C430 152 520 206 596 290 C506 380 374 420 126 392" />
        {flowPaths.map((path, index) => (
          <g key={path}>
            <path className="flow-line-base" d={path} markerEnd={index === 3 ? "url(#heroArrow)" : undefined} />
            <path className={`flow-line-active flow-line-${index + 1}`} d={path} markerEnd={index === 3 ? "url(#heroArrow)" : undefined} />
          </g>
        ))}
      </svg>
      <div className="hero-core">
        <Sparkles className="h-7 w-7 text-sky-200" />
        <span>HB Growth System</span>
        <small>Tech + AI + Marketing</small>
      </div>
      <div className="hero-node node-web">
        <span className="hero-node-icon">
          <MonitorSmartphone className="h-5 w-5" />
        </span>
        <span>
          <strong>Website</strong>
          <small>Development</small>
        </span>
      </div>
      <div className="hero-node node-ai">
        <span className="hero-node-icon">
          <Bot className="h-5 w-5" />
        </span>
        <span>
          <strong>AI</strong>
          <small>Automation</small>
        </span>
      </div>
      <div className="hero-node node-marketing">
        <span className="hero-node-icon">
          <Megaphone className="h-5 w-5" />
        </span>
        <span>
          <strong>Marketing</strong>
          <small>Campaigns</small>
        </span>
      </div>
      <div className="hero-node node-growth">
        <span className="hero-node-icon">
          <Rocket className="h-5 w-5" />
        </span>
        <span>
          <strong>Business</strong>
          <small>Growth</small>
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-shell relative isolate overflow-hidden bg-navy-950 pt-36 text-white xl:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_32%),linear-gradient(180deg,#07162f_0%,#0b1733_55%,#0f1f3d_100%)]" />
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="reveal-on-scroll">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-100">
            <Sparkles className="h-4 w-4 text-sky-300" aria-hidden="true" />
            AI, marketing and web development
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Helping Businesses Grow with AI, Marketing & Modern Websites
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/75 sm:text-xl">
            Hapeshi Brothers Agency helps businesses improve their online presence, automate everyday work, and generate more qualified leads through modern websites, AI systems, and marketing strategy.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#book-appointment">Book a Free Consultation</Button>
            <Button href="#services" variant="secondary">View Services</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200/75">
            {["Websites that explain clearly", "Automation that saves time", "Marketing built around enquiries"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-sky-300" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="reveal-on-scroll bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Services"
          title="A connected growth stack for modern businesses"
          text="Choose one service or combine them into a practical system for your website, marketing, operations, and lead generation."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="motion-card group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.06]">
              <div className="grid h-11 w-11 place-items-center rounded-md border border-sky-300/20 bg-sky-300/10 text-sky-200">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="how-we-work" className="reveal-on-scroll bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            kicker="How We Work"
            title="Simple process, clear decisions"
            text="We keep the work focused so business owners can move from unclear digital presence to a system that supports enquiries."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {workSteps.map(([title, text]) => (
              <article key={title} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-7 grid h-11 w-11 place-items-center rounded-md bg-sky-300/10 text-sky-200">
                  <Workflow className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsJourney() {
  return (
    <section id="results" className="reveal-on-scroll bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Results Journey"
          title="From scattered presence to a clearer growth system"
          text="No invented metrics. The goal is real improvement in clarity, workflow, trust, and the path from visitor to conversation."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {journey.map(([title, text]) => (
            <article key={title} className="motion-card rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-6">
              <CheckCircle2 className="h-6 w-6 text-sky-300" aria-hidden="true" />
              <h3 className="mt-7 text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="reveal-on-scroll bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            kicker="Portfolio / Projects"
            title="Project tracks we can build with you"
            text="Rather than showing invented case studies, this section shows the types of work Hapeshi Brothers Agency can create for your business."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {projectTypes.map(([title, text]) => (
              <article key={title} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <LayoutDashboard className="h-6 w-6 text-violet-200" aria-hidden="true" />
                <h3 className="mt-7 text-xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" className="reveal-on-scroll bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <SectionHeader
          kicker="Why Choose Us"
          title="Premium execution without the noise"
          text="Hapeshi Brothers Agency combines web development, AI automation, and marketing thinking into one clean, practical build."
        />
        <div className="space-y-4">
          {reasons.map(([title, text]) => (
            <article key={title} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200/60">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="reveal-on-scroll bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="FAQ" title="Questions before you book" text="A few simple answers before we talk about your business." />
        <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.04]">
          {faqs.map(([question, answer]) => (
            <details key={question} className="motion-card group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-white">
                {question}
                <ChevronDown className="h-5 w-5 shrink-0 text-sky-300 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200/60">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="reveal-on-scroll bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            kicker="Contact"
            title="Start with a conversation"
            text="Send a message on WhatsApp, visit Instagram, or use the appointment form below."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [MessageCircle, "WhatsApp", "+357 96410472"],
              [Instagram, "Instagram", "@hapeshisb_marketing"],
              [Clock, "Hours", "Mon - Sat, 9am - 7pm"],
            ].map(([Icon, label, value]) => (
              <div key={label} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <Icon className="h-5 w-5 text-sky-300" aria-hidden="true" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-200/50">{label}</p>
                <p className="mt-2 text-lg font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setNotice("");

    try {
      const result = await submitBookingRequest(new FormData(form));
      form.reset();
      setStatus("success");
      setNotice(
        result.offline
          ? "Preview mode: add Supabase environment variables to save this request live."
          : "Your request has been sent. We will contact you shortly."
      );
    } catch (error) {
      setStatus("error");
      setNotice(error.message);
    }
  }

  return (
    <section id="book-appointment" className="reveal-on-scroll bg-white py-20 text-navy-950 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker text-sky-600">Book Appointment</p>
          <h2 className="section-title text-navy-950">Book a free consultation</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Tell us what you want to improve. We will review your goals and suggest a clear next step for your website, automation, or marketing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={contact.whatsapp} variant="dark" icon={MessageCircle} target="_blank" rel="noreferrer">
              WhatsApp
            </Button>
            <Button href={contact.instagram} variant="dark" icon={Instagram} target="_blank" rel="noreferrer">
              Instagram
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="motion-card grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2 sm:p-7" aria-label="Appointment booking form">
          <label className="hidden" aria-hidden="true">
            Company
            <input type="text" name="company" tabIndex="-1" autoComplete="off" />
          </label>
          <label className="form-field">
            <span>Name</span>
            <input required type="text" name="name" placeholder="Your name" autoComplete="name" />
          </label>
          <label className="form-field">
            <span>Phone</span>
            <input required type="tel" name="phone" placeholder="+357 ..." autoComplete="tel" />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input required type="email" name="email" placeholder="you@example.com" autoComplete="email" />
          </label>
          <label className="form-field">
            <span>Service</span>
            <select required name="service" defaultValue="">
              <option value="" disabled>Select service</option>
              {services.map(({ title }) => <option key={title}>{title}</option>)}
            </select>
          </label>
          <label className="form-field">
            <span>Preferred Date</span>
            <input type="date" name="date" />
          </label>
          <label className="form-field">
            <span>Preferred Time</span>
            <input type="time" name="time" />
          </label>
          <label className="form-field sm:col-span-2">
            <span>Project Details</span>
            <textarea name="message" rows="5" placeholder="Tell us what you want to improve." />
          </label>
          <button disabled={status === "sending"} type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-sky-500 px-5 text-sm font-black uppercase tracking-[0.13em] text-navy-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2">
            {status === "sending" ? "Sending..." : "Send Request"}
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
          </button>
          {notice ? (
            <p className={`rounded-md px-4 py-3 text-sm font-semibold normal-case tracking-normal sm:col-span-2 ${status === "error" ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>
              {notice}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a className="social-button bg-[#25d366]" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact Hapeshi Brothers Agency on WhatsApp">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a className="social-button bg-[linear-gradient(135deg,#5b5ff4,#8b5cf6,#38bdf8)]" href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Open Hapeshi Brothers Agency on Instagram">
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Logo />
        <p className="max-w-lg text-sm leading-6 text-slate-200/60">
          AI, marketing, and web development systems for businesses that want a stronger online presence and a clearer path to leads.
        </p>
        <p className="text-sm text-slate-200/50">(c) 2026 Hapeshi Brothers Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  usePremiumMotion();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <ResultsJourney />
        <Projects />
        <WhyChooseUs />
        <FAQ />
        <Contact />
        <BookingForm />
      </main>
      <Footer />
      <FloatingSocials />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
