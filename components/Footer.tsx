import Link from "next/link";
import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-900 rounded-t-4xl mt-16"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-full mx-auto px-6 py-12">
        <div className="md:flex md:items-start md:justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <h3
                className="inline-block text-xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Punarjjani
              </h3>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-600">
              Providing compassionate medical care to those in need — supporting
              underprivileged communities with essential healthcare, and
              restoring hope and dignity to vulnerable lives.
            </p>
            <div className="mt-4 flex gap-3 flex-wrap items-center">
              <a
                href="mailto:hello@punarjjani.org"
                className="text-sm hover:underline"
              >
                mail id
              </a>
              <span className="text-sm text-slate-400">·</span>
              <a href="tel:+918330025044" className="text-sm hover:underline">
                +91 phone number
              </a>
              <div className="text-sm text-slate-400">
                Registered charity number: 1234567
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-700">
                Explore
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {footer.navigation.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:underline">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-700">
                Legal
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            © {new Date().getFullYear()} Punarjjani. All rights reserved.
          </div>

          <div className="text-right flex items-center gap-4">
            {footer.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.ariaLabel}
                className="hover:text-slate-700"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
