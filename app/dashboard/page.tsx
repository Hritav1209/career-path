import { AppHeader } from '@/components/AppShell';

const dashboardItems = [
  { title: 'Current interests', value: 'Design + science + problem solving' },
  { title: 'Saved careers', value: '7 profiles' },
  { title: 'Roadmaps in progress', value: '2 learning journeys' },
  { title: 'Recent projects', value: '3 small experiments' },
];

export default function DashboardPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-600">Student dashboard</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Your learning and discovery progress</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Progress should help students reflect, not pressure them. The dashboard highlights recent interests, saved careers, and next steps.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-4">
          {dashboardItems.map((item) => (
            <div key={item.title} className="card p-5">
              <div className="text-sm text-slate-500">{item.title}</div>
              <div className="mt-3 text-lg font-bold text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Suggested next steps</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Review your strongest interest clusters and try a beginner project.</li>
              <li>• Compare at least two careers before making a major commitment.</li>
              <li>• Check one free learning resource and complete one small exercise.</li>
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Explore next</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/quiz" className="link-chip">Retake quiz</a>
              <a href="/explorer" className="link-chip">Browse careers</a>
              <a href="/mentor" className="link-chip">Ask mentor</a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
