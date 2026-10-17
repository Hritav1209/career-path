import { AppHeader } from '@/components/AppShell';

const modes = [
  {
    title: 'Quick Discovery',
    description: 'A fast introduction to interest areas. Best for first-time exploration.',
    questionCount: 15,
    badge: 'Fast and friendly',
  },
  {
    title: 'Standard Discovery',
    description: 'A broader set of questions to reveal stronger career matches and learning paths.',
    questionCount: 35,
    badge: 'Balanced',
  },
  {
    title: 'Deep Discovery',
    description: 'More detailed exploration for students who want to compare several paths thoughtfully.',
    questionCount: 70,
    badge: 'In-depth',
  },
];

export default function QuizPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-600">Career quiz</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Start discovering what may fit you</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            The quiz is designed to help you notice patterns in your interests, not label you. It should inspire exploration,
            not lock you into one future.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="card p-6">
              <span className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                {mode.badge}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{mode.title}</h2>
              <p className="mt-2 text-slate-600">{mode.description}</p>
              <div className="mt-5 text-sm font-medium text-slate-500">Approx. {mode.questionCount} questions</div>
              <div className="mt-6">
                <a href="/explorer" className="primary-btn w-full">Choose this mode</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
