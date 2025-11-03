import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, User } from 'lucide-react';

export default function LoginForm() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <section id="login" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="h-8 w-8 rounded-lg bg-cyan-400/20 grid place-items-center text-cyan-300">
                <User size={18} />
              </div>
              Sign in to continue
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">Welcome back</h3>

            <form className="mt-6 space-y-4">
              <label className="block">
                <span className="text-xs text-white/70">Email</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 focus-within:border-cyan-400/60">
                  <Mail size={18} className="text-white/70" />
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs text-white/70">Password</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 focus-within:border-cyan-400/60">
                  <Lock size={18} className="text-white/70" />
                  <input
                    type={showPwd ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="text-white/70 hover:text-white"
                    aria-label={showPwd ? 'Hide password' : 'Show password'}
                  >
                    {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-white/70">
                  <input type="checkbox" className="accent-cyan-400" defaultChecked />
                  Remember me
                </label>
                <button type="button" className="text-cyan-300 hover:text-cyan-200">Forgot password?</button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:opacity-95 text-slate-900 font-semibold py-3 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <LogIn size={18} /> Continue
              </button>

              <div className="relative my-4 text-center text-xs text-white/50">
                <span className="bg-slate-950 px-2">or</span>
                <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 py-2.5 text-white/90 text-sm">Sign in with Apple</button>
                <button type="button" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 py-2.5 text-white/90 text-sm">Sign in with Google</button>
              </div>

              <p className="text-xs text-white/60 text-center">
                By continuing, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-blue-500/20 p-1">
            <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/60 p-6">
              <h4 className="text-white/80 text-sm">Why create an account?</h4>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  Sync across iOS & Android devices
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  Secure, biometric-ready login
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  Real-time notifications and insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
