import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Illustrations from './components/Illustrations';
import Nooks from './components/Nooks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900">
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.35))]" />

      <Navbar />
      <Hero />
      <Illustrations />
      <Nooks />
      <Footer />
    </div>
  );
}

export default App;
