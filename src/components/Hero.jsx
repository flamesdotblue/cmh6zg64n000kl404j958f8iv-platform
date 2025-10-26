import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-xs tracking-wide border border-emerald-400/20">
            Cybersecurity • Ethical Hacking • Defense-in-Depth
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Secure by Design.
            <span className="block text-emerald-400">Ethical Hacking that Protects.</span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl">
            I help teams harden systems through responsible security research, red teaming, and continuous improvement. No exploits in production—only insights that raise the bar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#skills" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-400 text-neutral-900 font-medium hover:bg-emerald-300 transition-colors">
              Explore Skills
            </a>
            <a href="#credentials" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 hover:border-white/30 text-white/90 hover:text-white transition-colors">
              View Credentials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
