"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroBackgroundSlider() {
  const slides = useMemo(
    () => [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2400&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2400&q=80",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2400&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80",
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " +
            (i === index ? "opacity-100" : "opacity-0")
          }
          aria-hidden="true"
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"
        aria-hidden="true"
      />
    </div>
  );
}
