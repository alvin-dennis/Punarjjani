import Link from "next/link";

export default function Footer() {
    const navigation = [
        { label: "About", href: "/#about" },
        { label: "Impact", href: "/#impact" },
        { label: "Team", href: "/#team" },
        { label: "Donate", href: "/donate" },
    ];

    return (
      <footer
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
                Providing compassionate medical care to those in need —
                supporting underprivileged communities with essential
                healthcare, and restoring hope and dignity to vulnerable lives.
              </p>
              <div className="mt-4 flex gap-3">
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
                  {navigation.map((n) => (
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
                  <li>
                    <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/donation-policy" className="hover:underline">
                      Donation Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="hover:underline">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              © {new Date().getFullYear()} Punarjjani. All rights reserved.
            </div>

            <div className="text-right flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-slate-700"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-slate-700"
              >
                LinkedIn
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-slate-700">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
