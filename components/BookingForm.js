"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const tripTypes = ["One Way", "Round Trip", "Rental Trip", "Navi Mumbai Airport"];
const carCategories = ["Hatchback", "Sedan", "Sedan Premium", "SUV", "MUV"];

const initialForm = {
  tripType: tripTypes[0],
  carCategory: carCategories[1],
  pickupLocation: "",
  dropLocation: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
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
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "booking", ...form }),
      });

      const data = await res.json().catch(() => ({}));    
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send booking request");
      }

      setStatus({ state: "success", message: "Booking request sent." });
      setForm(initialForm);   
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong" });
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-5 md:p-6 shadow-xl ring-1 ring-slate-200">
      <div className="text-xs font-semibold tracking-wider text-red-600">
        BOOK A CAB NOW
      </div>

      <form onSubmit={onSubmit} className="mt-4 space-y-3 md:space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Trip Type
            </label>
            <select
              value={form.tripType}
              onChange={setField("tripType")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
            >
              {tripTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">
              Car Category
            </label>
            <select
              value={form.carCategory}
              onChange={setField("carCategory")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
            >
              {carCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">
            Pickup Location
          </label>
          <input
            value={form.pickupLocation}
            onChange={setField("pickupLocation")}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">
            Drop Location
          </label>
          <input
            value={form.dropLocation}
            onChange={setField("dropLocation")}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
            placeholder="Enter drop location"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={setField("date")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700">Time</label>
            <input
              type="time"
              value={form.time}
              onChange={setField("time")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Name</label>
            <input
              value={form.name}
              onChange={setField("name")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700">
              Phone Number
            </label>
            <input
              value={form.phone}
              onChange={setField("phone")}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
              placeholder="Your phone"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={setField("email")}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status.state === "loading"}
          className="inline-flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.state === "loading" ? "SENDING..." : "BOOK NOW"}
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
