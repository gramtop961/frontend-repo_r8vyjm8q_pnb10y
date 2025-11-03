import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[640px] bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Mobile UI Kit • iOS & Android
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-white to-slate-300 bg-clip-text text-transparent">
          Futuristic App Template
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          A vibrant, fintech-inspired starter with tabs, screens, and a polished login flow.
          Drop it into your project and ship beautiful mobile experiences faster.
        </p>
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
          <a
            href="#preview"
            className="inline-flex items-center rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition shadow-lg shadow-cyan-500/25"
          >
            Preview Screens
          </a>
          <a
            href="#login"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition"
          >
            View Login
          </a>
        </div>
      </div>
    </section>
  );
}
