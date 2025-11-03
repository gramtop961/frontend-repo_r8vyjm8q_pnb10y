import React from 'react';
import Hero3D from './components/Hero3D';
import AppPreview from './components/AppPreview';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="font-semibold tracking-tight">Hologram</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#preview" className="hover:text-white">Preview</a>
            <a href="#login" className="hover:text-white">Login</a>
            <a href="#" className="rounded-lg border border-white/10 px-3 py-1.5 hover:bg-white/10">Docs</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero3D />

      {/* Mobile App Preview */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">iOS & Android Tabbed Template</h2>
            <p className="mt-2 text-white/70 max-w-2xl mx-auto">
              A clean, multi-tab layout complete with Home, Activity, Cards, and Settings screens.
            </p>
          </div>
          <AppPreview />
        </div>
      </section>

      {/* Login Section */}
      <LoginForm />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        Built with a modern, vibrant aesthetic • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
