import React from 'react';
import { Home, LineChart, Wallet, Settings } from 'lucide-react';

const TABS = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'activity', label: 'Activity', icon: LineChart },
  { key: 'wallet', label: 'Cards', icon: Wallet },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function TabBar({ active, onChange }) {
  return (
    <nav className="sticky bottom-0 w-full rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 p-2">
      <ul className="grid grid-cols-4 gap-1">
        {TABS.map(({ key, label, icon: Icon }) => {
          const selected = active === key;
          return (
            <li key={key}>
              <button
                onClick={() => onChange(key)}
                className={[
                  'w-full flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 transition',
                  selected
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-white/80 hover:bg-white/10',
                ].join(' ')}
                aria-label={label}
              >
                <Icon size={22} />
                <span className="text-[11px] font-medium leading-none">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
