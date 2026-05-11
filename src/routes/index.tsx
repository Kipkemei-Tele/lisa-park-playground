import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import picnicImg from "@/assets/picnic.jpg";
import swingsImg from "@/assets/swings.jpg";
import dogsImg from "@/assets/dogs.jpg";
import { MapPin, Phone, Star, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-cream">
          <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="inline-block size-2.5 rounded-full bg-sun" />
            Lisa Park
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-sun transition">What's here</a>
            <a href="#gallery" className="hover:text-sun transition">Gallery</a>
            <a href="#reviews" className="hover:text-sun transition">Reviews</a>
            <a href="#visit" className="hover:text-sun transition">Visit</a>
          </nav>
          <a href="tel:+254726966922" className="rounded-full bg-cream/95 text-leaf-deep px-4 py-2 text-sm font-semibold hover:bg-sun transition">
            Call park
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Children laughing on colorful swings at Lisa Park, Kapsabet"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-deep/70 via-leaf-deep/30 to-leaf-deep/85" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 text-cream">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-cream/20">
            <Star className="size-3.5 fill-sun text-sun" />
            4.1 from 49 visitors · Kapsabet, Kenya
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
            A little patch of <em className="text-sun not-italic">joy</em> in Kapsabet.
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-cream/85">
            Swings that creak, picnics under the trees, wagging tails on the lawn. Lisa Park is where Kapsabet families come to breathe.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lisa+Park+Kapsabet"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun text-leaf-deep px-6 py-3 font-semibold hover:scale-[1.02] transition"
            >
              <Navigation className="size-4" /> Get directions
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/30 px-6 py-3 font-semibold hover:bg-cream/20 transition"
            >
              Plan your visit
            </a>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 text-cream">
            {[
              { k: "Open", v: "Daily · Dawn–Dusk" },
              { k: "Entry", v: "Free for all" },
              { k: "Dogs", v: "Welcome on lead" },
            ].map((s) => (
              <div key={s.k} className="border-t border-cream/25 pt-3">
                <div className="text-xs uppercase tracking-widest text-cream/60">{s.k}</div>
                <div className="mt-1 font-display text-lg">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-leaf">What's here</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold max-w-2xl">Small park. <em className="not-italic text-coral">Big afternoons.</em></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Three simple things, done well. Bring a blanket, bring the kids, bring the dog.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: swingsImg, t: "Picnics & lawns", d: "Wide, shaded grass under mature trees. Bring a basket — stay until sunset." },
            { img: picnicImg, t: "Pool & play", d: "A splash of fun for the kids — pool time and play area side by side." },
            { img: dogsImg, t: "PlayGround", d: "Plenty of room to run and play. Bring the kids and enjoy the open space." },
          ].map((f, i) => (
            <article key={f.t} className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-border">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={f.img} alt={f.t} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 size-8 rounded-full bg-cream text-leaf-deep flex items-center justify-center font-display font-bold text-sm">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{f.t}</h3>
                <p className="mt-2 text-muted-foreground">{f.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-leaf-deep text-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sun">Reviews</p>
              <h2 className="mt-3 text-5xl md:text-6xl font-bold">4.1<span className="text-sun">.</span></h2>
              <div className="mt-2 flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-5 ${i < 4 ? "fill-sun" : ""}`} />
                ))}
              </div>
              <p className="mt-3 text-cream/70">Across 49 Google reviews</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { n: "Mercy K.", q: "Lovely shaded spot. Our kids spent the whole afternoon on the swings. Quiet on weekday mornings.", r: 5 },
                { n: "Brian C.", q: "Brought the dog for a long walk. Plenty of grass and friendly people around.", r: 4 },
                { n: "Aisha M.", q: "Great little park right in town. Perfect for a quick picnic after school.", r: 4 },
                { n: "Kipchirchir", q: "Simple, clean, peaceful. Could use a few more benches but we love it.", r: 4 },
              ].map((rev) => (
                <figure key={rev.n} className="rounded-2xl bg-cream/5 ring-1 ring-cream/10 p-6">
                  <div className="flex gap-1 text-sun mb-3">
                    {Array.from({ length: rev.r }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-sun" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg leading-snug">“{rev.q}”</blockquote>
                  <figcaption className="mt-4 text-sm text-cream/60">— {rev.n}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-leaf">Visit</p>
            <h2 className="mt-3 text-5xl md:text-6xl font-bold leading-[0.95]">
              Come spend an <em className="not-italic text-coral">afternoon</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Tucked into the heart of Kapsabet at 54XM+P3X. Free to enter, open every day of the year.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 size-10 rounded-full bg-leaf/10 text-leaf flex items-center justify-center">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">54XM+P3X, Kapsabet</div>
                  <a href="https://www.google.com/maps/search/?api=1&query=Lisa+Park+Kapsabet" target="_blank" rel="noreferrer" className="text-sm text-leaf underline-offset-4 hover:underline">Open in Google Maps →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 size-10 rounded-full bg-leaf/10 text-leaf flex items-center justify-center">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">0726 966 922</div>
                  <a href="tel:+254726966922" className="text-sm text-leaf underline-offset-4 hover:underline">Call the park →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 size-10 rounded-full bg-leaf/10 text-leaf flex items-center justify-center">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">Open daily</div>
                  <div className="text-sm text-muted-foreground">From sunrise to sunset</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 size-24 rounded-full bg-sun/60 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-coral/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border shadow-2xl">
              <iframe
                title="Lisa Park map"
                src="https://www.google.com/maps?q=Lisa+Park+Kapsabet&output=embed"
                className="w-full h-[520px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <span className="inline-block size-2.5 rounded-full bg-leaf" />
            Lisa Park
          </div>
          <p>© {new Date().getFullYear()} Lisa Park, Kapsabet. All rights deserved Kipkemei Tele</p>
        </div>
      </footer>
    </div>
  );
}
