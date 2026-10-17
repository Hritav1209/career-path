import { notFound } from 'next/navigation';
import { AppHeader } from '@/components/AppShell';
import { careerProfiles } from '@/data/careers';

export function generateStaticParams() {
  return careerProfiles.map((career) => ({ slug: career.slug }));
}

export default function CareerProfilePage({ params }: { params: { slug: string } }) {
  const career = careerProfiles.find((item) => item.slug === params.slug);

  if (!career) {
    notFound();
  }

  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <article className="card overflow-hidden p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{career.category}</span>
            <span className="text-sm text-slate-500">{career.level}</span>
          </div>

          <h1 className="text-4xl font-black text-slate-900">{career.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{career.description}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">What the work involves</h2>
              <p className="mt-3 text-slate-600">{career.work}</p>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900">Skills to build</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li><strong className="text-slate-800">Best for:</strong> {career.tags.join(', ')}</li>
                <li><strong className="text-slate-800">Good starting skills:</strong> {career.beginnerSkills.join(', ')}</li>
                <li><strong className="text-slate-800">Typical routes:</strong> {career.routes.join(', ')}</li>
              </ul>
            </aside>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/explorer" className="primary-btn">Back to explorer</a>
            <a href="/mentor" className="secondary-btn">Ask mentor</a>
          </div>
        </article>
      </main>
    </>
  );
}
