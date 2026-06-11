import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getEnv(name, fallback = "") {
  return process.env[name] || fallback;
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function formatLines(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${k}: ${v || "-"}`)
    .join("\n");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const smtpHost = requireEnv("SMTP_HOST");
    const smtpPort = Number(getEnv("SMTP_PORT", "587"));
    const smtpSecure = getEnv("SMTP_SECURE", "false") === "true";
    const smtpUser = requireEnv("SMTP_USER");
    const smtpPass = requireEnv("SMTP_PASS");

    const mailTo = requireEnv("MAIL_TO");
    const mailFrom = getEnv("MAIL_FROM", smtpUser);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const type = body?.type;

    if (type === "booking") {
      const details = {
        tripType: body.tripType,
        carCategory: body.carCategory,
        passengers: body.passengers,
        luggage: body.luggage,
        pickupLocation: body.pickupLocation,
        dropLocation: body.dropLocation,
        date: body.date,
        returnDate: body.returnDate,
        time: body.time,
        name: body.name,
        phone: body.phone,
        email: body.email,
      };

      await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: `New Booking Request - ${details.tripType}`,
        text: `New booking request received.\n\n${formatLines(details)}`,
      });

      return Response.json({ ok: true });
    }

    if (type === "contact") {
      const details = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
      };

      await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: `New Contact Message - ${details.name || "Website"}`,
        text: `New contact message received.\n\n${formatLines(details)}`,
      });

      return Response.json({ ok: true });
    }

    return new Response(JSON.stringify({ error: "Invalid type" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err?.message || "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
