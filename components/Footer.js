import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="w-full px-6 py-14 md:px-12 lg:px-20 xl:px-32">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-white">
              MarmikcaCabServices
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-red-400" />
                <span>Nanded City, Pune - 411024</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-red-400" />
                <div className="space-y-1">
                  <div>+91 99999 99999</div>
                  <div>+91 88888 88888</div>
                </div>
              </div>
              <div>
                <span className="text-slate-400">Email:</span> marmikca@gmail.com
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/919999999999"
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
              <li>Maharashtra</li>
              <li>Goa</li>
              <li>Karnataka</li>
              <li>Telangana</li>
              <li>Gujarat</li>
              <li>MP</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Popular Cities</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>Pune</li>
              <li>Mumbai</li>
              <li>Nashik</li>
              <li>Shirdi</li>
              <li>Kolhapur</li>
              <li>Hyderabad</li>
              <li>Indore</li>
              <li>Bhopal</li>
              <li>Surat</li>
              <li>Bangalore</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div>© MarmikcaCabServices, All Rights Reserved.</div>
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
