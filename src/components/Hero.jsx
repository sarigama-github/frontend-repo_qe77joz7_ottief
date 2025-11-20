import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,182,193,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(216,180,254,0.35),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(147,197,253,0.3),transparent_40%)]" />

      {/* Stars sprinkle */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 text-white/50">✦</div>
        <div className="absolute top-20 right-24 text-white/40">✧</div>
        <div className="absolute bottom-24 left-1/4 text-white/40">✷</div>
        <div className="absolute bottom-10 right-12 text-white/50">✦</div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center pt-20 pb-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs border border-white/15 backdrop-blur">
            Open late • Floating candles included
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            A Magical Bookstore for Curious Hearts
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85">
            Wander past stacks of hand-drawn tomes, follow the glow of drifting candles, and curl up in our cozy reading nooks. Your next adventure begins between these pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-violet-400/20 hover:shadow-violet-400/40 transition">Browse Collections</a>
            <a href="#visit" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Plan a Visit</a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[540px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <Spline scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
