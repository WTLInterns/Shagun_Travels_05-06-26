"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
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
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
            <div className="relative h-24 w-[260px]">
  <Image
    src="/cab/logo1.png"
    alt="SHAGUN TRAVELS Logo"
    fill
    quality={100}
    className="object-contain"
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
                href="https://www.facebook.com/share/17KrrQoEsA/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/travelsshagun?igsh=azBzNG1ndmF4ZzB1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">States</h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm text-slate-300">
              {states.map((state) => (
                <li key={state}>
                  <button
                    onClick={() => handleLocationClick(state)}
                    className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                  >
                    {state}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Popular Cities</h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm text-slate-300">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => handleLocationClick(city)}
                    className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Our Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  new Kalina market Rani Lakshmibai madai shop no 39 1st floor near geeta Vihar hotel kalina santacruz east Mumbai 400029
                </p>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl bg-slate-900 border border-white/10 shadow-2xl">
                <a 
                  href="https://maps.app.goo.gl/PtMBRugWpd7s6pAd8?g_st=iw"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full h-full relative"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1818274435863!2d72.868351!3d19.073434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ef5c5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sShagun%20Travels!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin"
                    width="100%"
                    height="160"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </a>
              </div>

              <a 
                href="https://maps.app.goo.gl/PtMBRugWpd7s6pAd8?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold text-red-400 hover:text-red-300 transition-colors group tracking-widest"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
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
