import BookingForm from "../components/BookingForm";
import HeroBackgroundSlider from "../components/HeroBackgroundSlider";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";
import { Suspense } from "react";
import {
  Building2,
  MapPinned,
  Plane,
  Repeat2,
  Route,
  Timer,
  MessageCircle,
  Shield,
  Clock,
  BadgeCheck,
  Users,
  Car,
  Banknote,
  Headphones,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative w-full px-8 py-16 grid gap-16 items-center lg:grid-cols-2 lg:px-16 xl:px-24 min-h-[600px] lg:min-h-[700px]">
        <HeroBackgroundSlider />
        <div className="pt-2 lg:pr-6 relative z-10">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600">
            CAR BOOKING
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl drop-shadow-lg">
            We'll Get You Moving. Car Rental Made Easy
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base drop-shadow">
            Book reliable local and outstation rides with professional drivers,
            clean vehicles, and 24x7 support.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/919869808318"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-600"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
              <div className="text-sm font-bold text-slate-900">24x7 Support</div>
              <div className="mt-1 text-xs text-slate-600">
                Always available for your travel needs.
              </div>
            </div>
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
              <div className="text-sm font-bold text-slate-900">Premium Cars</div>
              <div className="mt-1 text-xs text-slate-600">
                Hatchback to SUV options.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-6 relative z-10">
          <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-slate-100" />}>
            <BookingForm />
          </Suspense>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="w-full px-6 py-14 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Our Services
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Experience premium travel with our diverse range of services.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Route}
              title="One Way Trip"
              description="City to city affordable rides."
            />
            <ServiceCard
              icon={Repeat2}
              title="Round Trip"
              description="Convenient return journey bookings."
            />
            <ServiceCard
              icon={Timer}
              title="Rental Trip"
              description="Hourly rental cab services."
            />
            <ServiceCard
              icon={Plane}
              title="Airport Transfer"
              description="Airport pickup and drop."
            />
            <ServiceCard
              icon={Building2}
              title="Corporate Travel"
              description="Professional cab services for businesses."
            />
            <ServiceCard
              icon={MapPinned}
              title="Outstation Travel"
              description="Comfortable travel across major Indian cities."
            />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Coverage</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Available for city rides, outstation trips, and airport transfers
                across Maharashtra and nearby states.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Fleet Options</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Choose from Hatchback, Sedan, Sedan Premium, SUV, and MUV based on
                your comfort and luggage needs.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Popular Routes</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pune, Mumbai, Nashik, Shirdi, Kolhapur, Hyderabad, Indore, Bhopal,
                Surat, and Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Our Cab Service</h2>
            <p className="mt-3 text-slate-600">Trusted by thousands of travelers across India</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Safe & Secure</h3>
              <p className="mt-2 text-sm text-slate-600">Verified drivers with background checks for your safety.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <Clock className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">24x7 Availability</h3>
              <p className="mt-2 text-sm text-slate-600">Book anytime, day or night. We are always ready.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <BadgeCheck className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Professional Drivers</h3>
              <p className="mt-2 text-sm text-slate-600">Experienced, courteous drivers who know the routes.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <Banknote className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Best Pricing</h3>
              <p className="mt-2 text-sm text-slate-600">Competitive rates with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Fleet</h2>
            <p className="mt-3 text-slate-600">Choose from our wide range of well-maintained vehicles</p>
          </div>       
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                {/* <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80" alt="Hatchback" fill className="object-cover" /> */}
                <Image src="/cab/wagonr.jpg" alt="Hatchback" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hatchback</h3>
              <p className="text-sm text-slate-600">Swift, i10, WagonR - 4 Seater</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                <Users className="h-4 w-4" />
                <span>4 Passengers</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                <Image src="/cab/sedan-car.jpg" alt="Swift Desire" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Swift Desire</h3>
              <p className="text-sm text-slate-600">Premium Sedan - 4 Seater</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                <Users className="h-4 w-4" />
                <span>4 Passengers</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                <Image src="/cab/sedan-car.jpg" alt="Sedan" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sedan</h3>
              <p className="text-sm text-slate-600">Dzire, Etios, Xcent - 4 Seater</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                <Users className="h-4 w-4" />
                <span>4 Passengers</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                {/* <Image src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80" alt="SUV" fill className="object-cover" /> */}
                <Image src="/cab/Innova.png" alt="SUV" fill className="object-contain" />

              </div>
              <h3 className="text-lg font-bold text-slate-900">SUV</h3>
              <p className="text-sm text-slate-600">Innova, Ertiga, Xylo - 6/7 Seater</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                <Users className="h-4 w-4" />
                <span>6-7 Passengers</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                {/* <Image src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=600&q=80" alt="Tempo Traveller" fill className="object-cover" /> */}
                <Image src="/cab/Tempo_travelers.jpg" alt="Tempo Traveller" fill className="object-contain" />

              </div>
              <h3 className="text-lg font-bold text-slate-900">Tempo Traveller</h3>
              <p className="text-sm text-slate-600">Force Traveller - 12/14/17 Seater</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                <Users className="h-4 w-4" />
                <span>12-17 Passengers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-8 lg:grid-cols-3 text-center">
            <div className="p-6">
              <div className="text-4xl font-extrabold text-white">5000+</div>
              <div className="mt-2 text-slate-400">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-extrabold text-white">50+</div>
              <div className="mt-2 text-slate-400">Cities Covered</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-extrabold text-white">100+</div>
              <div className="mt-2 text-slate-400">Professional Drivers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600">Book your ride in 3 simple steps</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold">1</div>
              <h3 className="text-lg font-bold text-slate-900">Enter Details</h3>
              <p className="mt-2 text-sm text-slate-600">Fill pickup, drop location and date.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold">2</div>
              <h3 className="text-lg font-bold text-slate-900">Get Quote</h3>
              <p className="mt-2 text-sm text-slate-600">Receive instant fare estimate.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white text-2xl font-bold">3</div>
              <h3 className="text-lg font-bold text-slate-900">Confirm Booking</h3>
              <p className="mt-2 text-sm text-slate-600">Driver arrives at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Popular Routes</h2>
            <p className="mt-3 text-slate-600">Most booked cab routes from Mumbai and Pune</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { from: "Mumbai", to: "Pune", distance: "150 km",},
              { from: "Pune", to: "Mumbai", distance: "150 km",},
              { from: "Mumbai", to: "Nashik", distance: "217 km", },
              { from: "Nashik", to: "Mumbai", distance: "217 km", },
              { from: "Mumbai", to: "Alibag ", distance: "99 km", },
              { from: "Mumbai", to: "Goa", distance: "350 km", },
              { from: "Mumbai", to: "Kolhapur", distance: "240 km", },
              { from: "Kolhapur", to: "Mumbai", distance: "240 km", },
              { from: "Mumbai", to: "Hyderabad", distance: "560 km", },
            ].map((route) => (
              <div key={route.to} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                <div>
                  <div className="font-bold text-slate-900">{route.from} to {route.to}</div>
                  <div className="text-sm text-slate-600">{route.distance}</div>
                </div>
                <Car className="h-6 w-6 text-red-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">What Our Customers Say</h2>
            <p className="mt-3 text-slate-600">Real experiences from real travelers</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Excellent service! Driver was punctual and the car was clean. Pune to Mumbai trip was smooth and comfortable."</p>
              <div className="font-bold text-slate-900">Rahul Sharma</div>
              <div className="text-sm text-slate-500">Business Traveler</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Used their airport pickup service multiple times. Always on time and professional. Highly recommended!"</p>
              <div className="font-bold text-slate-900">Priya Patel</div>
              <div className="text-sm text-slate-500">Frequent Flyer</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Best pricing for outstation trips. Booked Pune to Shirdi for family trip. Driver was courteous and helpful."</p>
              <div className="font-bold text-slate-900">Amit Kumar</div>
              <div className="text-sm text-slate-500">Family Traveler</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600">
        <div className="w-full px-6 py-16 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to Book Your Ride?</h2>
          <p className="mt-3 text-red-100 max-w-2xl mx-auto">Experience hassle-free cab booking with Shagun Travels. Available 24x7 for local and outstation travel across India.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919869808318" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-red-600 shadow-sm transition-colors hover:bg-slate-100">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Booking
            </a>
            <a href="tel:+919869808318" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
