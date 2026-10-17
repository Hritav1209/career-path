import { AppHeader } from '@/components/AppShell';

const starterQuestions = [
  'I have no idea what career I want.',
  'Help me discover my interests.',
  'What careers combine business and technology?',
  'What can I do if I enjoy many different subjects?',
  'Compare two careers for me.',
  'Make me a learning plan for the next four weeks.',
  'Suggest a beginner project I can build.',
  'What careers can I explore after Class 10?',
  'Show me careers I probably haven’t considered.',
];

const conversation = [
  { role: 'mentor', text: 'Hi! I can help you explore careers, compare options, suggest projects, and make a practical plan. Tell me what you enjoy and I’ll help you discover a few good directions.' },
  { role: 'student', text: 'I like design and science but I am not sure what to do.' },
  { role: 'mentor', text: 'That is a great place to start. Design and science can point toward fields like product design, biomedical engineering, UX research, environmental technology, and science communication.' },
];

export default function MentorPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card p-6">
            <h1 className="text-3xl font-black text-slate-900">AI Career Mentor</h1>
            <p className="mt-3 text-slate-600">
              A guidance companion for students who want practical ideas, not pressure. It can help you compare careers, build a learning plan, and explore new possibilities.
            </p>

            <div className="mt-6 space-y-3">
              {starterQuestions.map((question) => (
                <button key={question} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100">
                  {question}
                </button>
              ))}
            </div>
          </aside>

          <section className="card overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
              Current conversation
            </div>
            <div className="space-y-4 p-6">
              {conversation.map((msg, index) => (
                <div key={index} className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'student' ? 'ml-auto bg-sky-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 p-4">
              <div className="flex gap-3">
                <input type="text" className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-sky-500" placeholder="Ask about future paths, skills, or projects..." />
                <button className="primary-btn">Send</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
