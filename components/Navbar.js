"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  MapPin,
  Phone,
  Clock3,
  Menu,
  X,
  House,
  Info,
  BriefcaseBusiness,
  PhoneCall,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: Info },
  { href: "/services", label: "Services", Icon: BriefcaseBusiness },
  { href: "/contact", label: "Contact", Icon: PhoneCall },
];

function NavLink({ href, label, Icon, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        "inline-flex items-center gap-2 text-sm font-medium transition-colors " +
        (isActive
          ? "text-red-500"
          : "text-slate-700 hover:text-slate-900")
      }
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const socialLinks = useMemo(
    () => [
      {
        href: "https://wa.me/919869808318",
        label: "WhatsApp",
        Icon: MessageCircle,
      },
      {
        href: "https://facebook.com",
        label: "Facebook",
        Icon: Facebook,
      },
      {
        href: "https://instagram.com",
        label: "Instagram",
        Icon: Instagram,
      },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden w-full border-b border-slate-200 bg-slate-900 text-slate-100 md:block">
        <div className="flex w-full items-center justify-between gap-6 px-6 py-2 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-400" />
              <span>Shop no 39, 1st floor, RaniLaxmibai Madai , kalina Santacruz East Mumbai 400055</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-red-400" />
              <span>24x7</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-400" />
              <a href="tel:+919869808318" className="hover:text-white hover:underline">+91 9869808318</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex w-full items-center justify-between px-6 py-3 md:px-12 lg:px-20 xl:px-32">
          <Link
            href="/"
            className="flex items-center gap-3 text-slate-900"
            aria-label="SHAGUN TRAVELS Home"
          >
            <span className="flex h-10 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-sm">
              <span className="text-sm font-bold">ST</span>
            </span>
            <span className="text-base font-extrabold tracking-tight sm:text-lg">
              SHAGUN TRAVELS
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} Icon={l.Icon} />
            ))}
            <a
              href="/contact"
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
            >
              Join Us
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-900 shadow-sm md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute right-0 top-0 h-full w-[82%] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <span className="text-sm font-bold text-slate-900">
                SHAGUN TRAVELS
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-900"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  Icon={l.Icon}
                  onClick={() => setOpen(false)}
                />
              ))}

              <a
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
              >
                Join Us
              </a>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>Shop no 39, 1st floor, RaniLaxmibai Madai , kalina Santacruz East Mumbai 400055</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-700">
                  <Phone className="h-4 w-4 text-red-500" />
                  <a href="tel:+919869808318" className="hover:text-red-500 hover:underline">+91 9869808318</a>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-700">
                  <Clock3 className="h-4 w-4 text-red-500" />
                  <span>24x7</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:bg-slate-100"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
