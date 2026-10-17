import { AppHeader } from '@/components/AppShell';
import { careerProfiles } from '@/data/careers';

export default function ExplorerPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-600">Career explorer</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Browse careers across different paths</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Explore more than one category. A student might enjoy tech, design, business, healthcare, sports, law, or skilled trades.
            The goal is curiosity and informed exploration.
          </p>
        </section>

        <div className="mb-6 flex flex-wrap gap-3">
          {['Technology', 'Design', 'Business', 'Health', 'Environment', 'Sports', 'Education', 'Law'].map((filter) => (
            <span key={filter} className="link-chip">{filter}</span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {careerProfiles.map((career) => (
            <article key={career.id} className="card p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{career.category}</span>
                <span className="text-xs text-slate-500">{career.level}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{career.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{career.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {career.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">{tag}</span>
                ))}
              </div>
              <div className="mt-5">
                <a href={`/careers/${career.slug}`} className="primary-btn w-full">View profile</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
