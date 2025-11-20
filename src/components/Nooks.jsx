export default function Nooks() {
  return (
    <section id="nooks" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-200/10 via-pink-200/10 to-violet-200/10" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4">
              {["Window Seat","Fireplace","Hidden Loft","Garden Bench"].map((label, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-amber-100/10 to-violet-200/10 p-4 flex flex-col justify-between">
                  <div className="text-white/90 font-medium">{label}</div>
                  <div className="text-2xl">🕯️📚</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Cozy Reading Nooks</h2>
          <p className="mt-3 text-white/80">Settle into plush cushions under floating candles that gently drift as you turn each page. Every nook hums with quiet magic.</p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li>• Charms to keep your place if you doze off</li>
            <li>• Sound-dampening enchantments for perfect hush</li>
            <li>• Complimentary tea that refills itself</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
