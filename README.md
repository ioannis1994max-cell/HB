# Hapeshi Brothers Agency

Clean React + Tailwind CSS recreation of a premium agency landing page for Hapeshi Brothers Agency.

## Sections

- Home
- Services
- How We Work
- Results Journey
- Portfolio / Projects
- Why Choose Us
- FAQ
- Contact
- Book Appointment
- WhatsApp and Instagram action buttons

## Run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add your Supabase values when you want the booking form to save requests.

Add the real WhatsApp and Instagram details in `.env.local`:

```bash
VITE_WHATSAPP_NUMBER=357XXXXXXXX
VITE_INSTAGRAM_URL=https://instagram.com/hapeshisb_marketing
```

## Build

```bash
npm run build
```

## Vercel

Use these settings if Vercel asks:

```bash
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Add these environment variables in Vercel Project Settings:

```bash
VITE_SUPABASE_URL=https://oiollhqidydvobmicfak.supabase.co
VITE_SUPABASE_ANON_KEY=your Supabase publishable key
VITE_WHATSAPP_NUMBER=35796410472
VITE_INSTAGRAM_URL=https://instagram.com/hapeshisb_marketing
```

## Supabase

Run `supabase/schema.sql` in your Supabase SQL editor. It creates the `booking_requests` table, grants insert access to public website visitors, and enables Row Level Security with an insert-only policy.

## Direct Preview

If you are not running a dev server, open `open-directly.html` in your browser. The main `index.html` is for Vite, GitHub, and Vercel.
