import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Memberships from './components/Memberships';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter selection:bg-emerald-400 selection:text-neutral-900">
      <Hero />
      <main className="relative z-10">
        <Skills />
        <Credentials />
        <Memberships />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} CyberSec Portfolio. Built for ethical security research.</p>
          <nav className="flex items-center gap-6">
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-emerald-400 transition-colors">Certificates & Achievements</a>
            <a href="#memberships" className="hover:text-emerald-400 transition-colors">Member Of</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
