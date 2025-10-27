# Punarjjani

## Colour Scheme

* **Primary:** `#2C55C0`   <!-- Softer royal blue -->
* **Secondary:** `#2563EB` <!-- Bright blue -->
* **Accent:** `#3B82F6`    <!-- Standard blue (medium) -->
* **Background:** `#faf9f6` <!-- Pure white -->
* **Text:** `#0F172A`      <!-- Deep navy/near-black -->

## Tech Stack

* **Frontend:** Nextjs
* **Database:** *To be decided*
* **UI Framework / Styling:** Tailwind CSS
* **Deployment / Hosting:** Vercel

## Sections to be implemented

- [x] Hero Section
- [ ] About Section
- [ ] Impact Section
- [x] Statistics Section
- [x] Team Section (page available at `/team`)
- [ ] Donate button with payment flow and Thank you pop-up
- [x] Footer with contact and legal information

Note: The project uses the following colour scheme and fonts (see `app/globals.css`):

- Primary: `#2C55C0` (CSS var: `--primary` / `--color-primary`)
- Secondary: `#2563EB`
- Accent: `#3B82F6`
- Background: `#faf9f6`
- Text: `#0F172A` (CSS var: `--foreground` / `--color-foreground`)

Fonts loaded in the app: Montserrat (Google) and Nura (local). Headings use the local `Nura` font.

## Getting Started

1. Clone the repository
2. Install dependencies (using Bun):

	```bash
	bun install
	```

3. Create a `.env` (if needed) with required environment variables for the donation flow. Consider adding a minimal `.env.example` containing the keys your payment provider requires.

4. Run the development server:

	```bash
	bun run dev
	```

## Folder Structure

```json
/Punarjjani
├─ app/   # Next.js app router — pages, routes and layouts
├─ public/   # Static assets (images, icons, favicons, etc.)
├─ components/   # Reusable UI components
├─ lib/   # Config, server functions, API wrappers
├─ utils/   # Helper functions, constants, formatters
└─ ...  # Additional folders (hooks, types, etc.)
```
