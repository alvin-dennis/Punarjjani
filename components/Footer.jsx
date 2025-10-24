import Link from "next/link";

export default function Footer() {
    const navigation = [
        { label: "About", href: "/#about" },
        { label: "Impact", href: "/#impact" },
        { label: "Team", href: "/#team" },
        { label: "Donate", href: "/donate" },
    ];

    return (
        <footer className="border-t border-slate-200 mt-16" aria-labelledby="footer-heading">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="md:flex md:items-start md:justify-between">
                    <div className="mb-8 md:mb-0">
                        <Link href="/">
                            <span className="inline-block text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                                Punarjjani
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm text-slate-600">
                            Providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a href="mailto:hello@punarjjani.org" className="text-sm hover:underline">mail id</a>
                            <span className="text-sm text-slate-400">·</span>
                            <a href="tel:+918330025044" className="text-sm hover:underline">+91 phone number</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold mb-3 text-slate-700">Explore</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                {navigation.map((n) => (
                                    <li key={n.href}>
                                        <Link href={n.href} className="hover:underline">{n.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-3 text-slate-700">Legal</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:underline">Terms of Use</Link></li>
                                <li><Link href="/donation-policy" className="hover:underline">Donation Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-3 text-slate-700">Follow</h3>
                            <ul className="flex gap-3">
                                <li>
                                    <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-slate-100">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M22 5.92c-.63.28-1.3.47-2 .56.71-.43 1.26-1.11 1.52-1.92-.66.39-1.39.67-2.16.82A3.48 3.48 0 0015.5 4c-1.92 0-3.48 1.56-3.48 3.48 0 .27.04.54.09.8C8.1 8.07 4.66 6.1 2.43 3.13c-.3.52-.47 1.12-.47 1.76 0 1.21.62 2.28 1.56 2.9-.58-.02-1.12-.18-1.6-.44v.04c0 1.7 1.21 3.12 2.81 3.44-.29.08-.6.12-.92.12-.23 0-.45-.02-.67-.06.45 1.41 1.76 2.44 3.31 2.47A6.98 6.98 0 012 19.54a9.86 9.86 0 005.33 1.56c6.39 0 9.89-5.29 9.89-9.88 0-.15 0-.3-.01-.45A7.05 7.05 0 0022 5.92z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-slate-100">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.84 3.44 8.85 7.94 9.73v-6.88H7.9V12.1h2.04V9.77c0-2.02 1.2-3.15 3.03-3.15.88 0 1.8.16 1.8.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.25V12.1h2.21l-.35 2.82h-1.86v6.88C18.56 20.92 22 16.91 22 12.07z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t pt-6 text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>© {new Date().getFullYear()} Punarjjani. All rights reserved.</div>
                    <div>Registered charity number: 1234567</div>
                </div>
            </div>
        </footer>
    );
}
