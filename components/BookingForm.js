"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const tripTypes = ["One Way", "Round Trip", "Rental Trip", "Navi Mumbai Airport", "Local Rental  (4 hrs/40 km, 8 hrs/80 km, Full Day, etc.) ", "Mumbai local", "Pune local"];
const carCategories = ["Hatchback", "Sedan", "Sedan Premium", "SUV", "MUV"];
const passengerOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];
const luggageOptions = ["Small", "Medium", "Large"];

const initialForm = {
  tripType: tripTypes[0],
  carCategory: carCategories[1],
  pickupLocation: "",
  dropLocation: "",
  date: "",
  returnDate: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  passengers: "1",
  luggage: "Small",
};

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Pre-fill pickup location from URL parameter
  useEffect(() => {
    const pickupParam = searchParams.get("pickup");
    if (pickupParam) {
      setForm(prev => ({ ...prev, pickupLocation: decodeURIComponent(pickupParam) }));
    }
  }, [searchParams]);

  const setField = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const bookingData = {
        type: "booking",
        tripType: form.tripType,
        carCategory: form.carCategory,
        passengers: form.passengers,
        luggage: form.luggage,
        pickupLocation: form.pickupLocation,
        dropLocation: form.dropLocation,
        date: form.date,
        returnDate: form.tripType === "Round Trip" ? form.returnDate : "N/A",
        time: form.time,
        name: form.name,
        phone: form.phone,
        email: form.email || "N/A",
      };

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send booking request");
      }

      setStatus({ state: "success", message: "Booking request sent successfully!" });
      setForm(initialForm);
    } catch (err) {
      console.error("Booking Error:", err);
      setStatus({ 
        state: "error", 
        message: err.message || "Failed to send booking request. Please try again or call us directly." 
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-4 md:p-5 shadow-xl ring-1 ring-slate-200">
      <div className="text-xs font-semibold tracking-wider text-red-600">
        BOOK A CAB NOW
      </div>

      <form onSubmit={onSubmit} className="mt-3 space-y-2.5 md:space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Trip Type
            </label>
            <select
              value={form.tripType}
              onChange={setField("tripType")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
            >
              {tripTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Car Category
            </label>
            <select
              value={form.carCategory}
              onChange={setField("carCategory")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
            >
              {carCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Passengers
            </label>
            <select
              value={form.passengers}
              onChange={setField("passengers")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
            >
              {passengerOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Luggage
            </label>
            <select
              value={form.luggage}
              onChange={setField("luggage")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
            >
              {luggageOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Pickup Location
            </label>
            <input
              value={form.pickupLocation}
              onChange={setField("pickupLocation")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              placeholder="Enter pickup location"
              required
            />
          </div>

          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Drop Location
            </label>
            <input
              value={form.dropLocation}
              onChange={setField("dropLocation")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              placeholder="Enter drop location"
              required
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">Journey Date</label>
            <input
              type="date"
              value={form.date}
              onChange={setField("date")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">Pickup Time</label>
            <input
              type="time"
              value={form.time}
              onChange={setField("time")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              required
            />
          </div>
        </div>

        {form.tripType === "Round Trip" && (
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">Return Date</label>
            <input
              type="date"
              value={form.returnDate}
              onChange={setField("returnDate")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              required={form.tripType === "Round Trip"}
            />
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">Name</label>
            <input
              value={form.name}
              onChange={setField("name")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">
              Phone Number
            </label>
            <input
              value={form.phone}
              onChange={setField("phone")}
              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
              placeholder="Your phone"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-tight">Email (Optional)</label>
          <input
            type="email"
            value={form.email}
            onChange={setField("email")}
            className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:border-red-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={status.state === "loading"}
          className="inline-flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.state === "loading" ? "SENDING..." : "Book Your Ride"}
        </button>

        {status.state === "success" ? (
          <div className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            {status.message}
          </div>
        ) : null}

        {status.state === "error" ? (
          <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {status.message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
