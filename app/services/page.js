import {
  Building2,
  Car,
  Clock,
  MapPinned,
  Plane,
  Route,
  Users,
  BadgeCheck,
  ArrowRight,
  Phone,
  Star,
  Shield,
  Headset,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "../../components/HeroSection";
import Image from "next/image";

function ServiceCard({ image, icon: Icon, title, description, price, features }) {
  return (
    <div className="group rounded-3xl bg-white overflow-hidden shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white mb-2">
            <Icon className="h-5 w-5" />
            <span className="text-sm font-semibold">{title}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-red-600 font-bold text-lg mb-4">
          <BadgeCheck className="h-5 w-5" />
          {price}
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FleetCard({ image, name, model, seats, price }) {
  return (
    <div className="group rounded-3xl bg-white p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
        <Image src={image} alt={name} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
      <p className="text-sm text-slate-500">{model}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-slate-600 flex items-center gap-1">
          <Users className="h-3 w-3" /> {seats}
        </span>
        {price && <span className="text-sm font-bold text-red-600">{price}</span>}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2400&q=80"
        overlayClassName="bg-gradient-to-br from-red-600/80 to-slate-900/70"
        height="60vh"
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wider text-white mb-6">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Premium Cab Services for Every Journey
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            From local city rides to long-distance outstation travel, we offer 
            comprehensive cab solutions tailored to your needs.
          </p>
        </div>
      </HeroSection>

      {/* Services Grid with Image Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              WHAT WE OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Explore Our Services
            </h2>
            <p className="mt-4 text-slate-600">
              Choose from our wide range of cab services designed for every travel need
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <ServiceCard
              image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"
              icon={Car}
              title="Local City Rides"
              description="Perfect for daily commuting, shopping trips, hospital visits, and local sightseeing within Pune city. Professional drivers who know every corner of the city."
              // price="Starting from Rs.12/km"
              features={["4-7 seater options", "AC vehicles", "Experienced drivers", "24/7 availability"]}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
              icon={Plane}
              title="Airport Transfers"
              description="Reliable airport pickups and drops to Pune and Mumbai airports. Flight tracking, meet & greet, and timely service guaranteed."
              price="Starting from Rs.800"
              features={["Flight tracking", "Meet & greet", "Luggage assistance", "On-time pickup"]}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
              icon={MapPinned}
              title="Outstation Travel"
              description="Weekend getaways, pilgrimages, and business trips to Mumbai, Shirdi, Nashik, Goa, and more destinations across India."
              price="Starting from Rs.22/km"
              features={["One-way & round trip", "Multiple stops", "Experienced drivers", "All routes covered"]}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mt-8">
            <ServiceCard
              image="https://images.unsplash.com/photo-1497366216548-766e1452684a?auto=format&fit=crop&w=600&q=80"
              icon={Building2}
              title="Corporate Travel"
              description="Professional cab services for businesses, including employee transport, client pickups, and office commute solutions."
              price="Custom Pricing"
              features={["Monthly contracts", "Dedicated vehicles", "Priority support", "Billed monthly"]}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1527603815363-e79385e0747e?auto=format&fit=crop&w=600&q=80"
              icon={Route}
              title="One Way Cab Service"
              description="City-to-city comfortable travel with simple pickup and direct drop. Most economical option for single journeys."
              price="Starting from Rs.10/km"
              features={["No return charges", "Direct drop", "Multiple cities", "Best rates"]}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
              icon={Clock}
              title="Round Trip & Rentals"
              description="Return journey packages and hourly rentals for shopping, meetings, weddings, and extended city tours."
              price="Starting from Rs.150/hr"
              features={["8hr/80km packages", "Flexible timing", "Multiple stops", "Wait time included"]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Choose Our Services
            </h2>
            <p className="mt-4 text-slate-300">
              Experience the difference with our premium cab service features
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Safe & Secure", desc: "GPS tracking, verified drivers, 24/7 monitoring" },
              { icon: IndianRupee, title: "Best Pricing", desc: "Transparent fares with no hidden charges" },
              { icon: Star, title: "Premium Cars", desc: "Clean, AC vehicles with regular maintenance" },
              { icon: Headset, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
              { icon: CheckCircle2, title: "Easy Booking", desc: "Phone, WhatsApp, or online booking" },
              { icon: Users, title: "Expert Drivers", desc: "Trained, courteous, and experienced" },
              { icon: Clock, title: "On-Time Service", desc: "Punctual pickups and drops guaranteed" },
              { icon: BadgeCheck, title: "Best Routes", desc: "Optimized routes to save time and fuel" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section - Light Background */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              OUR FLEET
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Choose Your Vehicle
            </h2>
            <p className="mt-4 text-slate-600">
              From economical hatchbacks to spacious SUVs, find the perfect ride for your journey
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FleetCard
              image="/cab/wagonr.jpg"
              name="Hatchback"
              model="Swift, i10, WagonR"
              seats="4 Passengers"
              // price="Rs.12/km"
            />
            <FleetCard
              image="/cab/sedan-car.jpg"
              name="Sedan"
              model="Dzire, Etios, Xcent"
              seats="4 Passengers"
              // price="Rs.14/km"
            />
            <FleetCard
              image="/cab/Innova.png"
              name="SUV"
              model="Innova, Ertiga, Xylo"
              seats="6-7 Passengers"
              // price="Rs.18/km"
            />
            <FleetCard
              image="/cab/Tempo_travelers.jpg"
              name="Tempo Traveller"
              model="Force Traveller"
              seats="12-17 Passengers"
              // price="Rs.25/km"
            />
          </div>
        </div>
      </section>

      {/* Popular Routes - Image Background */}
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
        <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Popular Routes from Pune
            </h2>
            <p className="mt-4 text-slate-300">
              Most booked outstation destinations with competitive pricing
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { from: "Mumbai", to: "Pune", distance: "150 km",},
              { from: "Pune", to: "Mumbai", distance: "150 km",},
              { from: "Mumbai", to: "Nashik", distance: "200 km", },
              { from: "Nashik", to: "Mumbai", distance: "200 km", },
              { from: "Mumbai", to: "Alibag ", distance: "210 km", },
              { from: "Mumbai", to: "Goa", distance: "350 km", },
              { from: "Mumbai", to: "Kolhapur", distance: "240 km", },
              { from: "Kolhapur", to: "Mumbai", distance: "240 km", },
              { from: "Mumbai", to: "Hyderabad", distance: "560 km", },
              
            ].map((route, idx) => (
              <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-bold text-lg">{route.from} to {route.to}</span>
                  <Car className="h-5 w-5 text-red-400" />
                </div>
                <div className="text-sm text-slate-300 mb-3">{route.distance}</div>
                {/* <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Sedan: <span className="text-white font-semibold">{route.sedan}</span></span>
                  <span className="text-slate-300">SUV: <span className="text-white font-semibold">{route.suv}</span></span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Light Background */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-wider text-red-600 mb-4">
              EASY BOOKING
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-slate-600">
              Book your cab in 3 simple steps
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Enter Details", desc: "Fill pickup location, destination, date, and preferred car type" },
              { step: "02", title: "Get Quote", desc: "Receive instant fare estimate with all charges clearly mentioned" },
              { step: "03", title: "Confirm & Go", desc: "Confirm booking and our driver arrives at your location" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white text-2xl font-extrabold shadow-lg shadow-red-600/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Experience the best cab service in Pune. Whether it&apos;s a quick city ride 
            or a long outstation journey, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919869808318" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-red-600 shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-red-600"
            >
              Book Online
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
