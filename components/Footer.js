"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect } from "react";

import Image from "next/image";

export default function Footer() {
  const states = ["Maharashtra", "Goa", "Karnataka", "Telangana", "Gujarat", "MP"];
  const cities = ["Pune", "Mumbai", "Nashik", "Shirdi", "Kolhapur", "Hyderabad", "Indore", "Bhopal", "Surat", "Bangalore"];

  const handleLocationClick = (location) => {
    // Navigate to home page with location parameter
    window.location.href = `/?pickup=${encodeURIComponent(location)}`;
  };
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="w-full px-6 py-14 md:px-12 lg:px-20 xl:px-32">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-6">
              <div className="relative h-16 w-48 overflow-hidden">
                <Image 
                  src="/cab/logo.jpeg" 
                  alt="SHAGUN TRAVELS Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-red-400" />
                <span>new Kalina market Rani Lakshmibai madai shop no 39 1st floor near geeta Vihar hotel kalina santacruz east Mumbai 400029</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-red-400" />
                <div className="space-y-1">
                  <div><a href="tel:+919869808318" className="hover:text-white hover:underline">+91 9869808318</a></div>
                  <div><a href="tel:+919004561775" className="hover:text-white hover:underline">+91 9004561775</a></div>
                </div>
              </div>
              <div>
                <span className="text-slate-400">Email:</span>
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@shaguntravels.co.in" className="hover:text-white hover:underline">info@shaguntravels.co.in</a>
                  <a href="mailto:shaguntravels1@gmail.com" className="hover:text-white hover:underline">shaguntravels1@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/919869808318"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">States</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              {states.map((state) => (
                <li key={state}>
                  <button
                    onClick={() => handleLocationClick(state)}
                    className="hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    {state}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Popular Cities</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => handleLocationClick(city)}
                    className="hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div>© SHAGUN TRAVELS, All Rights Reserved.</div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
