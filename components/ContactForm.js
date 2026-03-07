"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const setField = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus({ state: "success", message: "Message sent." });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong" });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-semibold text-slate-700">Name</label>
        <input
          value={form.name}
          onChange={setField("name")}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-500"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={setField("email")}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">Phone</label>
        <input
          value={form.phone}
          onChange={setField("phone")}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-500"
          placeholder="Your phone"
          required
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">Message</label>
        <textarea
          value={form.message}
          onChange={setField("message")}
          rows={5}
          className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-500"
          placeholder="How can we help?"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.state === "loading" ? "SENDING..." : "Send Message"}
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
  );
}
