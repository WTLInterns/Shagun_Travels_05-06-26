import { Facebook, Instagram, MapPin, MessageCircle, Phone, Clock, Mail, Headset, Car, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import HeroSection from "../../components/HeroSection";
import Image from "next/image";

function ContactCard({ icon: Icon, title, lines, action }) {
  return (
    <div className="group rounded-3xl bg-white p-8 text-center shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-colors duration-300 group-hover:bg-red-600">
        <Icon className="h-8 w-8 text-red-600 transition-colors duration-300 group-hover:text-white" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      {lines.map((line, idx) => (
        <p key={idx} className="text-slate-600">{line}</p>
      ))}
      {action && (
        <a 
          href={action.href} 
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function QuickHelpCard({ title, description, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80"
        overlayClassName="bg-slate-900/60"
        height="55vh"
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-600 mb-6">
            CONTACT US
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We&apos;re Here to Help You Travel
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Have questions about bookings, pricing, or services? 
            Our team is available 24/7 to assist you.
          </p>
        </div>
      </HeroSection>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Multiple Ways to Reach Us
            </h2>
            <p className="mt-4 text-slate-600">
              Choose the most convenient way to contact our team
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={Phone}
              title="Call Us"
              lines={["+91 99999 99999", "+91 88888 88888"]}
              action={{ href: "tel:+919999999999", label: "Call Now" }}
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              lines={["+91 99999 99999", "Quick Response"]}
              action={{ href: "https://wa.me/919999999999", label: "Chat Now" }}
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              lines={["marmikca@gmail.com", "24hr Response Time"]}
              action={{ href: "mailto:marmikca@gmail.com", label: "Send Email" }}
            />
            <ContactCard
              icon={MapPin}
              title="Visit Office"
              lines={["Nanded City, Pune", "Maharashtra 411024"]}
              action={{ href: "#", label: "Get Directions" }}
            />
          </div>
        </div>
      </section>

      {/* Working Hours - Gradient Background */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Always Available for You
            </h2>
            <p className="mt-4 text-slate-300">
              We operate 24 hours a day, 7 days a week, including all holidays
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-3xl font-extrabold text-red-400 mb-1">24/7</p>
              <p className="text-sm text-slate-400">Always answered</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-3xl font-extrabold text-red-400 mb-1">24/7</p>
              <p className="text-sm text-slate-400">Instant replies</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Cab Services</h3>
              <p className="text-3xl font-extrabold text-red-400 mb-1">24/7</p>
              <p className="text-sm text-slate-400">Anytime pickup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
                SEND MESSAGE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Get a Quick Quote
              </h2>
              <p className="mt-4 text-slate-600">
                Fill in your details and we&apos;ll get back to you within minutes
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-slate-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              QUICK HELP
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How Can We Help You?
            </h2>
            <p className="mt-4 text-slate-600">
              Quick answers to common questions and services
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <QuickHelpCard
              icon={Car}
              title="Book a Cab"
              description="Need a ride? Book instantly via phone, WhatsApp, or our online form. Get confirmation within minutes."
            />
            <QuickHelpCard
              icon={Star}
              title="Fare Enquiry"
              description="Get accurate pricing for your route. Share pickup and drop locations for an instant quote."
            />
            <QuickHelpCard
              icon={CheckCircle2}
              title="Booking Status"
              description="Already booked? Check your booking status or make changes to your reservation."
            />
            <QuickHelpCard
              icon={Headset}
              title="Customer Support"
              description="Facing issues? Our support team is ready to help resolve any concerns immediately."
            />
            <QuickHelpCard
              icon={MapPin}
              title="Route Information"
              description="Planning a trip? Get information about routes, travel time, and best cab options."
            />
            <QuickHelpCard
              icon={MessageCircle}
              title="Feedback"
              description="Share your experience. Your feedback helps us improve our services continuously."
            />
          </div>
        </div>
      </section>

      {/* Map Section - Image Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Visit Our Office
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Prefer to meet in person? Our office is conveniently located in Nanded City, Pune. 
                Feel free to visit us for bookings, inquiries, or just to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Office Address</h3>
                    <p className="text-slate-300">Nanded City, Pune - 411024</p>
                    <p className="text-slate-400 text-sm">Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Office Hours</h3>
                    <p className="text-slate-300">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                    <p className="text-slate-400 text-sm">Cab services available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Contact Numbers</h3>
                    <p className="text-slate-300">+91 99999 99999</p>
                    <p className="text-slate-300">+91 88888 88888</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* Google Maps Embed - Pune, Nanded City area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.8860!3d18.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaddc27984bd%3A0x1dca143b6f5e7!2sNanded%20City%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Follow us on social media for updates, offers, and travel tips
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-7 w-7" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <Car className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Book Your Cab?
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s a quick city ride or a long outstation journey, 
            we&apos;re here to make your travel comfortable and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919999999999" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-red-600 shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919999999999" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-red-600"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
