export default function Illustrations() {
  return (
    <section id="collections" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Whimsical Collections</h2>
          <p className="mt-3 text-white/80">Hand-drawn books with gilded edges, celestial margins, and tiny doodles in the corners. Choose a doorway, not a genre.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'Potion Pockets',
            desc: 'Brews, elixirs, and sparkly liquids tucked into every chapter.',
            emoji: '🧪'
          }, {
            title: 'Starbound Sagas',
            desc: 'Constellations woven into the margins of interstellar epics.',
            emoji: '🌠'
          }, {
            title: 'Whispering Woods',
            desc: 'Leaves that turn themselves and roots that remember.',
            emoji: '🌿'
          }].map((c, i) => (
            <div key={i} className="relative group rounded-2xl p-6 bg-white/5 border border-white/10 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-200/40 to-violet-200/40 blur-2xl group-hover:blur-[36px] transition" />
              <div className="flex items-start gap-4 relative">
                <div className="text-4xl select-none">{c.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                  <p className="text-white/80 mt-1">{c.desc}</p>
                </div>
              </div>
              {/* Hand-drawn book illustration */}
              <div className="mt-6">
                <svg viewBox="0 0 220 120" className="w-full text-white/90">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#c4b5fd" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 20 Q 40 10, 80 18 Q 120 10, 160 18 Q 190 12, 200 20 L200 95 Q 190 88, 160 92 Q 120 85, 80 92 Q 40 88, 20 95 Z" className="opacity-80" />
                    <path d="M110 22 L110 96" className="opacity-50" />
                    {[...Array(7)].map((_,i) => (
                      <path key={i} d={`M ${28+i*10} 30 Q ${32+i*10} 28, ${36+i*10} 30`} className="opacity-40" />
                    ))}
                    <path d="M22 22 Q 40 15, 80 22 Q 120 15, 158 22" stroke="url(#g)" />
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
