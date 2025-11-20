import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-300 via-pink-200 to-violet-300 shadow-md ring-1 ring-white/50 flex items-center justify-center">
            <span className="text-violet-700 text-xl" aria-hidden>✧</span>
          </div>
          <div>
            <p className="text-xl font-semibold text-white tracking-tight">Moonquill Books</p>
            <p className="text-xs text-white/70 -mt-1">Curiosities & Cozy Corners</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#collections" className="hover:text-white transition-colors">Collections</a>
          <a href="#nooks" className="hover:text-white transition-colors">Reading Nooks</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#visit" className="hover:text-white transition-colors">Visit</a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/10">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
