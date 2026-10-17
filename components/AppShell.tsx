const navItems = [
  { href: '/', label: 'Home' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/explorer', label: 'Explorer' },
  { href: '/mentor', label: 'AI Mentor' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="page-shell flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-lg font-bold text-white">
            C
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">CareerPath</div>
            <div className="text-xs text-slate-500">Discover your interests. Build your skills. Find your path.</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/quiz" className="primary-btn">Start exploring</a>
      </div>
    </header>
  );
}

export function PageSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-1 text-slate-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
