import {
  BadgeCheck,
  Car,
  Headset,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Eye,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  HeartHandshake,
  Zap,
} from "lucide-react";
import HeroSection from "../../components/HeroSection";
import Image from "next/image";

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label, icon: Icon }) {
  return (
    <div className="text-center p-6">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-4xl font-extrabold text-white">{number}</div>
      <div className="mt-1 text-slate-400 text-sm">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2400&q=80"
        overlayClassName="bg-slate-900/60"
        height="60vh"
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-600 mb-6">
            ABOUT US
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Your Trusted Travel Partner Across India
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Shagun Travels provides reliable, safe, and comfortable cab services 
            with a commitment to excellence and customer satisfaction.
          </p>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard number="5000+" label="Happy Customers" icon={Users} />
            <StatCard number="100+" label="Professional Drivers" icon={Car} />
            <StatCard number="50+" label="Cities Covered" icon={MapPin} />
            <StatCard number="13+" label="Years Experience" icon={Award} />
          </div>
        </div>
      </section>

      {/* Company Introduction with Image Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1527603815363-e79385e0747e?auto=format&fit=crop&w=800&q=80" 
                alt="Our Fleet" 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Leading Cab Service Provider in Mumbai
              </h2> 
              <br />
              <h3 className="text-2xl font-bold text-slate-900">
                About <b>Shagun Travels</b> Mumbai
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Shagun Travels Mumbai is a trusted car rental and transportation company serving businesses and individuals since 2013. We provide corporate transportation, chauffeur-driven car services, airport transfers, employee transportation, and fleet management solutions with a strong focus on safety, reliability, and punctuality.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are proud to serve leading organizations such as Sherwin-Williams, Asian PPG, Chaudhary International, Rudra Aluminium Formwork, Muthoot Housing Finance, Muthoot MICROFIN , Forward Engineering Industries, Raj Darbar Group, Mangalam Enterprises, Plus Advance Technologies, and Agility Logistics Private Limited.
              </p>
              <br />
              <p>With a professional team and well-maintained fleet, Shagun Travels Mumbai is committed to delivering comfortable, dependable, and hassle-free travel experiences for every client.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                  <ShieldCheck className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-slate-700">Trusted Since 2013</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-slate-700">Safe & Reliable Travel Solutions 🚘</span>
                </div>
                {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                  <HeartHandshake className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-slate-700">Customer Focused</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-slate-600">
              We go the extra mile to ensure your journey is safe, comfortable, and memorable
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={Car}
              title="Professional Drivers"
              description="Our drivers undergo rigorous training, background checks, and regular assessments to ensure your safety."
            />
            <Feature
              icon={IndianRupee}
              title="Transparent Pricing"
              description="No hidden charges, no surprises. Get upfront fare estimates with detailed breakdowns before you book."
            />
            <Feature
              icon={Sparkles}
              title="Premium Vehicles"
              description="Well-maintained, clean, and air-conditioned cars with regular sanitization and maintenance checks."
            />
            <Feature
              icon={Headset}
              title="24/7 Support"
              description="Round-the-clock customer service for bookings, queries, and emergency assistance anytime, anywhere."
            />
            <Feature
              icon={BadgeCheck}
              title="Easy Booking"
              description="Book in seconds via phone, WhatsApp, or online. Instant confirmation and real-time tracking."
            />
            <Feature
              icon={ShieldCheck}
              title="Safe & Secure"
              description="GPS tracking, emergency buttons, and verified drivers ensure your security throughout the journey."
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-10 border border-white/10 transition-all duration-300 hover:bg-white/15">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To provide safe, reliable, and affordable transportation solutions that connect 
                people and places across India. We strive to make every journey comfortable and 
                stress-free, setting new standards in the cab service industry through innovation 
                and customer-centric approach.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-10 border border-white/10 transition-all duration-300 hover:bg-white/15">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become India&apos;s most trusted cab service platform, recognized for excellence 
                in safety, reliability, and customer satisfaction. We envision a future where 
                every Indian has access to premium transportation services at affordable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              OUR FLEET
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Choose Your Perfect Ride
            </h2>
            <p className="mt-4 text-slate-600">
              From economical hatchbacks to luxury sedans and spacious SUVs, we have the perfect vehicle for every journey
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "Swift Desire", model: "Premium Sedan", seats: "4 Passengers", image: "/cab/swift.jpg" },
              { name: "Hatchback", model: "Swift, i10, WagonR", seats: "4 Passengers", image: "/cab/wagonr.jpg" },
              { name: "Sedan", model: "Dzire, Etios, Xcent", seats: "4 Passengers", image: "/cab/sedan-car.jpg" },
              { name: "SUV", model: "Innova, Ertiga, Xylo", seats: "6-7 Passengers", image: "/cab/Innova.png" },
              { name: "Tempo Traveller", model: "Force Traveller", seats: "12-17 Passengers", image: "/cab/Tempo_travelers.jpg" },
            ].map((car) => (
              <div key={car.name} className="group rounded-3xl bg-white p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                  <Image src={car.image} alt={car.name} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>
                <p className="text-sm text-slate-500">{car.model}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <Users className="h-3 w-3" /> {car.seats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drivers Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
                OUR DRIVERS
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Experienced & Courteous Drivers
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our drivers are the backbone of our service. Each driver undergoes a rigorous 
                selection process including background verification, driving skill assessment, 
                and customer service training. They know the local routes inside out and are 
                trained to handle all kinds of road situations.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Background Verified</h4>
                    <p className="text-sm text-slate-600">All drivers are police verified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Trained Professionals</h4>
                    <p className="text-sm text-slate-600">Regular training programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <HeartHandshake className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Courteous Service</h4>
                    <p className="text-sm text-slate-600">Customer-first attitude</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <Zap className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Route Experts</h4>
                    <p className="text-sm text-slate-600">Know the best routes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" 
                alt="Professional Driver" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safe Travel Section with Image Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 mb-32">
          <div className="text-center max-w-3xl mx-auto mb-8 mt-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Safe & Comfortable Travel Guaranteed
            </h2>
            <p className="mt-4 text-slate-200">
              Your safety is our top priority. From verified drivers to well-maintained vehicles, 
              we ensure every aspect of your journey meets the highest safety standards.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919869808318" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-slate-900"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Contact Information
            </h2>
            <p className="mt-4 text-slate-600">
              Have questions? We&apos;re here to help. Reach out to us through any of the channels below
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Office Address</h3>
              <p className="text-slate-600">new Kalina market Rani Lakshmibai madai shop no 39 1st floor near geeta Vihar hotel kalina santacruz east Mumbai 400029</p>
              <p className="text-slate-500 text-sm">Maharashtra, India</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Numbers</h3>
              <p className="text-slate-600"><a href="tel:+919869808318" className="hover:text-red-600 hover:underline">+91 9869808318</a></p>
              <p className="text-slate-600"><a href="tel:+919004561775" className="hover:text-red-600 hover:underline">+91 9004561775</a></p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600"><a href="mailto:info@shaguntravels.co.in" className="hover:text-red-600 hover:underline">info@shaguntravels.co.in</a></p>
              <p className="text-slate-600"><a href="mailto:shaguntravels1@gmail.com" className="hover:text-red-600 hover:underline">shaguntravels1@gmail.com</a></p>
              <p className="text-slate-500 text-sm">24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
