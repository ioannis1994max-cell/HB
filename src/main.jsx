import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Clock,
  Globe2,
  Instagram,
  Mail,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { submitBookingRequest } from "./lib/bookings";
import { contact } from "./config/contact";
import "./styles.css";

const navItems = ["Home", "Services", "About", "Contact"];

const stats = [
  ["120+", "Businesses Scaled"],
  ["8x", "Avg. ROI on Ads"],
  ["24h", "Project Kickoff"],
  ["100%", "Results Focused"],
];

const services = [
  ["Website Development", "Premium, fast websites built to convert visitors into customers and appointments.", MonitorSmartphone],
  ["Social Media", "Content systems that grow your audience, sharpen trust, and support real sales.", Users],
  ["Paid Ads", "Meta and Google campaigns engineered for predictable client acquisition.", Megaphone],
  ["Branding", "Identities, messaging, and visuals that command attention and instant trust.", PenTool],
  ["SEO", "Rank higher on Google and get found by people who are ready to buy.", Search],
];

const reasons = [
  ["Built for ROI", "Every campaign tracks revenue and booked calls, not vanity metrics."],
  ["Specialists for service businesses", "We understand clinics, professionals, and service brands that need qualified leads."],
  ["Trusted partnership", "Transparent reporting, clear communication, and practical growth advice."],
];

const results = [
  ["Leads (30d)", "+312", "+48%"],
  ["Bookings", "184", "+62%"],
  ["Ad Spend", "EUR 4.2k", "Efficient"],
  ["Revenue", "EUR 38k", "+9.1x"],
];

const processSteps = [
  ["Audit", "We map your current website, offer, audience, and lead flow."],
  ["Build", "We create the landing page, campaigns, tracking, and booking path."],
  ["Scale", "We improve what converts and move budget toward the strongest channels."],
];

const testimonials = [
  [
    "Our calendar is fully booked 3 weeks ahead. The team rebuilt our entire online presence and the patients have not stopped coming.",
    "Dr. Andreas M.",
    "Dental Clinic Owner",
  ],
  [
    "Within 30 days we tripled our consultations. They do not just deliver marketing, they deliver clients.",
    "Maria K.",
    "Aesthetic Clinic",
  ],
  [
    "Best investment I have made in my business. Clean, professional, and they know exactly how to convert.",
    "Yannis P.",
    "Real Estate Pro",
  ],
];

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Hapeshis Brothers Agency home">
      <span className="grid h-12 w-12 place-items-center rounded-sm border border-white/20 bg-white/[0.06] text-lg font-black text-white shadow-premium transition group-hover:border-signal/70">
        HB
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black uppercase tracking-[0.16em] text-white">Hapeshis Brothers</span>
        <span className="block text-xs uppercase tracking-[0.22em] text-white/50">Agency</span>
      </span>
    </a>
  );
}

function Button({ href, children, variant = "primary", icon: Icon = ArrowRight, ...props }) {
  const classes = {
    primary: "bg-signal text-white hover:bg-ember shadow-[0_18px_44px_rgba(207,36,56,0.28)]",
    secondary: "border border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]",
    dark: "bg-ink text-white hover:bg-steel",
  };

  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-black uppercase tracking-[0.13em] transition ${classes[variant]}`}
    >
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden sm:block">
          <Button href="#book-appointment">Book a Free Call</Button>
        </div>
      </nav>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="rounded-sm border border-white/10 bg-white/[0.05] p-5 shadow-premium backdrop-blur">
      <div className="rounded-sm bg-[radial-gradient(circle_at_35%_20%,rgba(255,65,87,0.24),transparent_27%),linear-gradient(145deg,#0c2342,#050608)] p-6">
        <div className="rounded-sm border border-white/10 bg-ink/70 p-7">
          <div className="flex items-center justify-between">
            <div className="grid h-20 w-20 place-items-center rounded-sm border border-signal/60 bg-signal/10 text-3xl font-black text-white">
              HB
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
              Live
            </span>
          </div>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-white/50">Client Dashboard</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {results.map(([label, value, change]) => (
              <div key={label} className="rounded-sm border border-white/10 bg-white/[0.045] p-4 transition hover:border-signal/40">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{label}</p>
                <p className="mt-3 text-3xl font-black tracking-normal text-white">{value}</p>
                <p className="mt-1 text-sm font-bold text-emerald-300">{change}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {[
              ["Website conversion", "86%"],
              ["Campaign health", "92%"],
              ["Lead quality", "78%"],
            ].map(([label, width]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                  <span>{label}</span>
                  <span>{width}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-signal to-ember" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink pt-28 text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className="h-full w-full object-cover opacity-[0.22]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#050608_0%,rgba(6,19,40,0.96)_48%,rgba(5,6,8,0.74)_100%)]" />
      </div>

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-sm border border-signal/50 bg-signal/10 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-100">
            <Sparkles className="h-4 w-4 text-ember" aria-hidden="true" />
            AI-powered marketing agency
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Help Businesses Get More Clients Online
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Websites, ads, and social media systems that bring real results, built for clinics and service businesses ready to grow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#book-appointment">Book a Free Consultation</Button>
            <Button href="#services" variant="secondary">Explore Services</Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-white/70">
            {["No long contracts", "Results-focused", "Worldwide service"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-ember" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroDashboard />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 border-y border-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([value, label]) => (
          <div key={label} className="border-white/10 py-7 odd:border-r lg:border-r lg:last:border-r-0">
            <p className="text-4xl font-black text-white">{value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-midnight py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">What We Do</p>
          <h2 className="section-title">Full-stack growth systems</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Everything you need to attract, convert, and retain clients, built and managed by experts.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([title, text, Icon], index) => (
            <article key={title} className="group rounded-sm border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-signal/50 hover:bg-white/[0.055]">
              <Icon className="h-7 w-7 text-ember" aria-hidden="true" />
              <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{text}</p>
              <p className="mt-8 text-right text-sm font-black tracking-[0.26em] text-white/[0.22] transition group-hover:text-signal/70">0{index + 1}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-sm border border-signal/30 bg-signal/10 p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg font-semibold text-white">Ready to grow? Book a free 20-minute strategy call. No pressure, just clarity.</p>
          <Button href="#book-appointment">Book a Free Call</Button>
        </div>
      </div>
    </section>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="rounded-sm border border-white/10 bg-white/[0.055] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="section-kicker">Why Hapeshis Brothers</p>
          <h2 className="section-title">Modern strategy. AI execution. Real growth.</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            We do not sell marketing fluff. We build measurable client-acquisition systems for businesses that mean business.
          </p>
          <div className="mt-9 space-y-4">
            {reasons.map(([title, text]) => (
              <div key={title} className="rounded-sm border border-white/10 bg-white/[0.035] p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-white/10 bg-white/[0.05] p-6 shadow-premium">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">Client Dashboard</p>
              <h3 className="mt-2 text-2xl font-black text-white">Growth Engine Live</h3>
            </div>
            <BarChart3 className="h-8 w-8 text-ember" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {results.map(([label, value, change]) => (
              <div key={label} className="rounded-sm bg-ink/70 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{label}</p>
                <p className="mt-3 text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm font-bold text-emerald-300">{change}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricPill label="Speed" value="A+" />
            <MetricPill label="Tracking" value="Live" />
            <MetricPill label="Funnel" value="Ready" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title">A cleaner path from attention to booked calls.</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">
              The site, campaigns, analytics, and appointment flow work together as one growth engine.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map(([title, text], index) => (
              <article key={title} className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-sm bg-signal text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-midnight py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Client Results</p>
          <h2 className="section-title">Trusted by ambitious businesses</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">Real outcomes from real clients. We let the work speak.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map(([quote, name, role]) => (
            <figure key={name} className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
              <blockquote className="text-lg leading-8 text-white/70">"{quote}"</blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="font-black text-white">{name}</p>
                <p className="mt-1 text-sm text-white/50">{role}</p>
              </figcaption>
            </figure>
          ))}
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
    <section id="book-appointment" className="bg-white py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker text-signal">Book Appointment</p>
          <h2 className="section-title text-ink">Your next 30 days could change everything.</h2>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Book a free strategy call and we will show you exactly how to get more clients, whether you work with us or not.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={contact.whatsapp} variant="dark" icon={MessageCircle} target="_blank" rel="noreferrer">WhatsApp</Button>
            <Button href={contact.instagram} variant="dark" icon={Instagram} target="_blank" rel="noreferrer">Instagram</Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-sm border border-black/10 bg-[#f5f7fb] p-5 sm:grid-cols-2 sm:p-7" aria-label="Appointment booking form">
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
              {services.map(([title]) => <option key={title}>{title}</option>)}
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
          <button disabled={status === "sending"} type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-signal px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-ember disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2">
            {status === "sending" ? "Sending..." : "Send Request"}
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
          </button>
          {notice ? (
            <p className={`rounded-sm px-4 py-3 text-sm font-semibold normal-case tracking-normal sm:col-span-2 ${status === "error" ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>
              {notice}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-midnight py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Built to convert. Engineered to scale.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Mail, "Email", contact.email],
              [Globe2, "Service Area", "Worldwide"],
              [Clock, "Hours", "Mon - Sat, 9am - 7pm"],
            ].map(([Icon, label, value]) => (
              <div key={label} className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
                <Icon className="h-5 w-5 text-ember" aria-hidden="true" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">{label}</p>
                <p className="mt-2 text-lg font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a className="social-button bg-[#25d366]" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact Hapeshis Brothers Agency on WhatsApp">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a className="social-button bg-[linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)]" href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Open Hapeshis Brothers Agency on Instagram">
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Logo />
        <p className="max-w-lg text-sm leading-6 text-white/50">
          AI-powered marketing systems that bring real clients to small businesses, clinics, and service professionals worldwide.
        </p>
        <p className="text-sm text-white/50">(c) 2026 Hapeshis Brothers Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingSocials />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
