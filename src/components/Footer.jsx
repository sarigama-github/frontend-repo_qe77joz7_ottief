export default function Footer() {
  return (
    <footer id="visit" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Visit Moonquill Books</h3>
          <p className="mt-2 text-white/80">Down the lantern-lit alley, third door on the left. Open when the stars are out.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="#" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">Directions</a>
            <a href="#" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Contact</a>
          </div>
          <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} Moonquill Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
