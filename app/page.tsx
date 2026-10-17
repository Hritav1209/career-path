import { AppHeader } from '@/components/AppShell';

const highlights = [
  {
    title: 'Explore interests',
    text: 'Build confidence by learning what you enjoy, what you want to try, and what kinds of work make sense for you.',
  },
  {
    title: 'Understand careers',
    text: 'Look beyond one title. Learn what people actually do, the skills they need, and the routes to get there.',
  },
  {
    title: 'Grow with projects',
    text: 'Turn curiosity into action with beginner-friendly projects, roadmaps, and a practical next step.',
  },
];

const quickLinks = [
  { href: '/quiz', label: 'Take the quiz' },
  { href: '/explorer', label: 'Browse careers' },
  { href: '/mentor', label: 'Talk to the mentor' },
  { href: '/dashboard', label: 'View dashboard' },
];

export default function HomePage() {
  return (
    <>
      <AppHeader />

      <main className="page-shell">
        <section className="grid gap-8 rounded-[28px] bg-slate-900 p-8 text-white shadow-soft md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-200">
              Student career companion
            </span>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Discover your interests. Build your skills. Find your path.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 md:text-lg">
              CareerPath helps students explore future possibilities without feeling locked into one decision.
              Discover what sparks your curiosity, understand realistic career options, and take small steps with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/quiz" className="primary-btn bg-sky-500 hover:bg-sky-400">
                Start the quiz
              </a>
              <a href="/explorer" className="secondary-btn border-white/20 bg-white/5 text-white hover:bg-white/10">
                Explore careers
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-sky-200">Why students use it</div>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:bg-white/10">
                  <span className="font-medium text-white">{link.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
