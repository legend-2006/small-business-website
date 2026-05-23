import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Scissors, Heart, Flower2, Phone, MapPin, Mail, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const WHATSAPP_NUMBER = "27724282520";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Lumiere Beauty Salon, I would like to book an appointment.",
);
const QUICK_BOOKING_LINK = `${WHATSAPP_LINK}?text=${DEFAULT_WHATSAPP_MESSAGE}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lumière Beauty Salon | Hair, Nails & Facials in Mpumalanga" },
      { name: "description", content: "Lumière is a modern beauty salon in Mpumalanga, South Africa offering hair styling, nail care, facial treatments, and massage therapy. Book your appointment today." },
      { name: "keywords", content: "beauty salon, hair salon, nails, facials, massage, Mpumalanga, South Africa, bridal makeup, spa" },
      { property: "og:title", content: "Lumière Beauty Salon | Hair, Nails & Facials in Mpumalanga" },
      { property: "og:description", content: "Modern beauty salon in Mpumalanga offering hair, nails, facials, and massage. Book your appointment today." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Lumière Beauty Salon | Hair, Nails & Facials in Mpumalanga" },
      { name: "twitter:description", content: "Modern beauty salon in Mpumalanga offering hair, nails, facials, and massage. Book your appointment today." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Lumière Beauty Salon",
          description: "Modern beauty salon offering hair styling, nail care, facial treatments, and massage therapy.",
          url: "/",
          telephone: "+27-72-428-2520",
          email: "faithmoeng8@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mpumalanga",
            addressCountry: "ZA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-25.4753",
            longitude: "30.9694",
          },
          priceRange: "R",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "17:00",
            },
          ],
          sameAs: [
            WHATSAPP_LINK,
          ],
        }),
      },
    ],
  }),
});

const services = [
  { icon: Scissors, name: "Hair Styling", desc: "Wash, styling, treatments, and event-ready looks.", price: "From R250" },
  { icon: Heart, name: "Nail Care", desc: "Manicures, pedicures, gel polish, and neat everyday sets.", price: "From R180" },
  { icon: Sparkles, name: "Facial Treatments", desc: "Refreshing skincare for a clean, healthy glow.", price: "From R350" },
  { icon: Flower2, name: "Massage Therapy", desc: "Relaxing bodywork to ease tension and restore calm.", price: "From R400" },
];

const gallery = [g1, g2, g3, g4, g2, g3];

const reviews = [
  { name: "Thandeka M.", text: "My nails came out neat and beautiful. Booking on WhatsApp was quick, and the salon made me feel comfortable from the moment I arrived.", role: "Nail care client" },
  { name: "Lerato Nkosi", text: "I booked my hair treatment before a family event and loved the result. Friendly service, clean space, and very professional.", role: "Hair styling client" },
  { name: "Nomsa Dlamini", text: "The facial was relaxing and my skin felt fresh afterwards. I will definitely come back for my next self-care day.", role: "Facial treatment client" },
];

function buildBookingMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  return [
    "Hi Lumiere Beauty Salon, I would like to book an appointment.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Preferred date: ${date}`,
    notes ? `Message: ${notes}` : "Message: No extra notes",
  ].join("\n");
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto flex h-20 items-center justify-between px-6">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight">
            Lumière<span className="text-gold">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Book on WhatsApp
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-soft">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold mb-6">
              <span className="h-px w-10 bg-gold" /> Beauty Studio
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground">
              Where beauty<br />
              <em className="text-primary not-italic font-normal">blossoms</em> gently.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
              A modern sanctuary for hair, skin, and self-care. Crafted by stylists who treat every visit as an art form.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-gold hover:-translate-y-0.5 transition-all">
                Book on WhatsApp
              </a>
              <a href="#services" className="rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-secondary transition-colors">
                Explore services
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span>4.9 rating from local clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span>Open today · 9am to 7pm</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Lumière salon interior"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-soft object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-soft hidden sm:block">
              <p className="font-display text-2xl text-primary">12+</p>
              <p className="text-xs text-muted-foreground mt-1">Years of artistry</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Tailored treatments, <em className="text-primary not-italic">curated for you</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, name, desc, price }) => (
              <div
                key={name}
                className="group rounded-3xl border border-border bg-card p-8 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blush mb-6 group-hover:bg-gradient-gold transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-gold-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-2">{name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <p className="font-display text-xl text-gold">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 bg-secondary/40">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Founder of Lumière"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl shadow-soft object-cover aspect-square w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">About Lumière</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              A studio built on <em className="text-primary not-italic">craft and care</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Lumière Beauty Salon was created for women and families in Mpumalanga who want reliable, friendly beauty care without the stress. Every appointment is handled with patience, neat work, and personal attention.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From everyday hair styling to nails, facials, and relaxing massage, our goal is simple: help you feel fresh, confident, and ready for your next moment.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "4", l: "Core services" },
                { n: "6", l: "Days open" },
                { n: "4.9", l: "Client rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Moments from <em className="text-primary not-italic">the studio</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Kind Words</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Loved by our <em className="text-primary not-italic">guests</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-3xl bg-card p-8 shadow-soft">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <p className="font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Visit us</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Step inside <em className="text-primary not-italic">Lumière</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Fill in your details and we will open WhatsApp with your booking request ready to send.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "Mpumalanga\nSouth Africa" },
                { icon: Phone, label: "Phone", value: "0724282520", href: WHATSAPP_LINK },
                { icon: Mail, label: "Email", value: "faithmoeng8@gmail.com", href: "mailto:faithmoeng8@gmail.com" },
                { icon: Clock, label: "Hours", value: "Tue–Sat · 9am — 7pm\nSun · 10am — 5pm" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition-shadow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blush">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="whitespace-pre-line text-foreground text-sm leading-relaxed hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="whitespace-pre-line text-foreground text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <a
                href={QUICK_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] p-5 text-white hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.748 11.748 0 001.585 5.943L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-sm font-medium">Book on WhatsApp</p>
                  <p className="text-xs opacity-90">Quick replies during business hours</p>
                </div>
              </a>
            </div>

            {/* Booking form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const message = buildBookingMessage(new FormData(e.currentTarget));
                window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
              }}
              className="lg:col-span-3 rounded-3xl bg-gradient-soft border border-border p-8 lg:p-10 shadow-soft"
            >
              <h3 className="font-display text-3xl mb-2">Book on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-8">Add your details and your message will be prepared automatically.</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gold mb-2">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gold mb-2">Phone</label>
                  <input id="phone" name="phone" type="tel" required placeholder="0724282520"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider text-gold mb-2">Service</label>
                  <select id="service" name="service" required
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition">
                    <option value="">Select a treatment…</option>
                    {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-wider text-gold mb-2">Preferred date</label>
                  <input id="date" name="date" type="date" required
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-gold mb-2">Message</label>
                  <textarea id="notes" name="notes" rows={4} placeholder="Anything we should know before your appointment?"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 transition resize-none" />
                </div>
              </div>

              <button type="submit"
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-gold hover:-translate-y-0.5 transition-all">
                <Sparkles className="h-4 w-4" /> Book on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-display text-xl text-foreground">Lumière<span className="text-gold">.</span></p>
          <p>© {new Date().getFullYear()} Lumière Salon. Crafted with care.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={QUICK_BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892a11.748 11.748 0 001.585 5.943L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
