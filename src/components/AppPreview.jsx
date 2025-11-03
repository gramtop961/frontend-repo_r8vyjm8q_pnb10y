import React, { useMemo, useState } from 'react';
import { CreditCard, ChevronRight, Bell, CheckCircle2 } from 'lucide-react';
import TabBar from './TabBar';

function HomeScreen() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl p-5 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm">Total Balance</p>
            <p className="text-3xl font-extrabold mt-1">$12,840.22</p>
          </div>
          <div className="flex items-center gap-2 text-sm bg-white/20 rounded-full px-3 py-1">
            <CheckCircle2 size={16} /> Verified
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <button className="rounded-xl bg-white/15 hover:bg-white/25 py-3 font-semibold transition">Add Money</button>
          <button className="rounded-xl bg-white/15 hover:bg-white/25 py-3 font-semibold transition">Send</button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white/90 font-semibold">Quick Actions</h4>
          <button className="text-xs text-white/60 hover:text-white">View All</button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3 text-center">
          {['Pay', 'Request', 'Split', 'Top Up'].map((label) => (
            <button key={label} className="rounded-xl bg-white/5 hover:bg-white/10 p-3 text-xs text-white/80 transition">
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ title, subtitle, amount, positive }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-white/90 grid place-items-center">
          <Bell size={18} />
        </div>
        <div>
          <p className="text-white font-medium text-sm">{title}</p>
          <p className="text-white/60 text-xs">{subtitle}</p>
        </div>
      </div>
      <p className={`text-sm font-semibold ${positive ? 'text-emerald-400' : 'text-white'}`}>
        {positive ? '+' : '-'}${amount}
      </p>
    </div>
  );
}

function ActivityScreen() {
  return (
    <div className="space-y-3">
      <ActivityItem title="Payment from Alex" subtitle="Today • 11:20 AM" amount="120.00" positive />
      <ActivityItem title="Coffee Shop" subtitle="Yesterday • 6:41 PM" amount="4.80" />
      <ActivityItem title="Grocery" subtitle="Mon • 4:10 PM" amount="52.40" />
      <ActivityItem title="Salary" subtitle="Mon • 9:00 AM" amount="2400.00" positive />
    </div>
  );
}

function Card({ brand, last4, gradient }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-lg ${gradient}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white/20 grid place-items-center">
            <CreditCard size={16} />
          </div>
          <span className="text-sm/none">{brand}</span>
        </div>
        <span className="text-xs/none bg-white/20 rounded-full px-2 py-1">Virtual</span>
      </div>
      <p className="mt-6 text-2xl tracking-widest">**** **** **** {last4}</p>
      <div className="mt-6 flex items-center justify-between text-xs text-white/85">
        <span>12/28</span>
        <span>CVV •••</span>
      </div>
    </div>
  );
}

function WalletScreen() {
  return (
    <div className="space-y-4">
      <Card brand="Hologram" last4="8421" gradient="bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500" />
      <Card brand="Aurora" last4="0332" gradient="bg-gradient-to-br from-emerald-400 via-teal-500 to-sky-600" />
      <button className="w-full rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 py-3 text-sm font-semibold flex items-center justify-center gap-2">
        Add new card <ChevronRight size={16} />
      </button>
    </div>
  );
}

function SettingRow({ title, desc, on }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
      <div>
        <p className="text-white text-sm font-medium">{title}</p>
        <p className="text-white/60 text-xs">{desc}</p>
      </div>
      <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${on ? 'bg-emerald-400/90' : 'bg-white/20'}`}>
        <span className={`inline-block h-5 w-5 translate-x-1 rounded-full bg-white transition ${on ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="space-y-3">
      <SettingRow title="Push Notifications" desc="Get alerts for payments and activity" on />
      <SettingRow title="Biometric Login" desc="Use Face ID / Fingerprint" on />
      <SettingRow title="Dark Mode" desc="Match system appearance" on />
    </div>
  );
}

const screens = {
  home: HomeScreen,
  activity: ActivityScreen,
  wallet: WalletScreen,
  settings: SettingsScreen,
};

export default function AppPreview() {
  const [active, setActive] = useState('home');
  const Screen = useMemo(() => screens[active] ?? HomeScreen, [active]);

  return (
    <div id="preview" className="relative mx-auto max-w-5xl px-6">
      <div className="mx-auto max-w-sm rounded-[2rem] border border-white/10 bg-slate-900/60 backdrop-blur shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="text-white/80 text-sm">Hologram</div>
          <div className="flex items-center gap-1 text-white/60">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs">Online</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <Screen />
        </div>

        <div className="p-3">
          <TabBar active={active} onChange={setActive} />
        </div>
      </div>
    </div>
  );
}
