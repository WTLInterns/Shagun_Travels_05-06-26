"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919869808318"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+919869808318"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Call"
      >
        <PhoneCall className="h-5 w-5" />
      </a>
    </div>
  );
}
