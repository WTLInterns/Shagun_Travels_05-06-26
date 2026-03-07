import Image from "next/image";

export default function HeroSection({ 
  imageSrc, 
  overlayClassName,
  height = "55vh",
  children 
}) {
  return (
    <section 
      className="relative w-full flex items-center justify-center text-white overflow-hidden"
      style={{ minHeight: height }}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div
        className={
          "absolute inset-0 " +
          (overlayClassName || "bg-slate-900/50")
        }
        aria-hidden="true"
      />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 text-center">
        {children}
      </div>
    </section>
  );
}
