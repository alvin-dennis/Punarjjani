import { footer } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container w-full mx-auto text-center">
      <div className="flex w-full flex-col justify-center gap-10 lg:flex-row lg:items-start lg:text-left">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:items-start lg:justify-start">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Punarjjani Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <h2 className="text-xl font-semibold text-primary">Punarjjani</h2>
          </div>

          <p className="max-w-[70%] text-sm text-muted-foreground justify-center lg:justify-start text-center lg:text-left">
            Providing compassionate medical care to those in need — supporting
            underprivileged communities with essential healthcare, and restoring
            hope and dignity to vulnerable lives.
          </p>
          <p className="max-w-[70%] text-sm text-muted-foreground justify-center lg:justify-start text-center lg:text-left">
            Reg No.:TSR/TC/368/2017
          </p>

          <div className="items-center gap-1 text-sm text-muted-foreground lg:items-start">
            <p>Email: <Link href="mailto:punarjjanitmc123@gmail.com" className="text-accent hover:underline">punarjjanitmc123@gmail.com</Link></p>
            <p>Phone: <Link href="https://wa.me/918078190629" className="text-accent hover:underline">+91 80781 90629</Link></p>
          </div>

          <p className="text-sm font-semibold text-muted-foreground mt-4">
            Connect with us
          </p>
          <ul className="flex items-center justify-center space-x-6 text-muted-foreground">
            {footer.socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <li key={idx} className="font-medium hover:text-primary">
                  <Link href={social.href} aria-label={social.label}>
                    <Icon className="h-6 w-6" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid w-full gap-6 text-center md:grid-cols-3 lg:text-left lg:gap-20">
          {footer.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-4 font-bold text-accent">{section.title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="order-2 lg:order-1 text-center">
          © {new Date().getFullYear()} Punarjjani. All rights reserved.
        </p>
        <p className="order-1 flex flex-col gap-2 text-center md:order-2 md:flex-row md:text-left lg:text-right">
          Designed & Developed by
          <Link
            href="https://mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            µLearn Community
          </Link>
        </p>
      </div>
    </footer>
  );
}
