import Image from "next/image";

export default function PageBanner({ imageSrc, overlayClassName, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
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
          (overlayClassName || "bg-gradient-to-br from-slate-900/95 to-slate-800/90")
        }
        aria-hidden="true"
      />
      <div className="relative px-6 py-12 text-white md:px-12">{children}</div>
    </div>
  );
}
