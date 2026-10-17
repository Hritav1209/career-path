import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const lastMessage = messages[messages.length - 1]?.content || 'I want to explore my options.';
    const lower = String(lastMessage).toLowerCase();

    const fallback =
      lower.includes('business') && lower.includes('technology')
        ? 'A strong mix of business and technology can lead to product management, business analysis, digital marketing, operations, and fintech work. Start by learning problem-solving, spreadsheets, and a bit of digital tools or coding.'
        : lower.includes('design') && lower.includes('science')
          ? 'Design and science together can point to UX research, product design, biomedical design, environmental innovation, and science communication. Try small beginner projects and compare a few related careers.'
          : lower.includes('no idea') || lower.includes('dont know') || lower.includes('not sure')
            ? 'Uncertainty is completely normal. A good next step is to explore a few broad areas rather than force one career choice. Try a quick quiz, compare a few profiles, and pick one small project or skill to test.'
            : lower.includes('compare')
              ? 'A good comparison looks at what the work involves, the skills needed, the learning routes, and the kind of environment you enjoy. Compare at least two careers and look at one real project in each area.'
              : lower.includes('project')
                ? 'Start with a small project that matches your interests. For example, a beginner website, a poster or design mockup, a science mini-project, or a community issue brief can tell you a lot.'
                : 'That is a useful starting point. Let us explore a few possibilities, compare them clearly, and pick one low-pressure experiment to test your interest.';

    return NextResponse.json({
      role: 'mentor',
      content: fallback,
      source: process.env.OPENAI_API_KEY ? 'ai-provider' : 'fallback-rule-based',
    });
  } catch (error) {
    return NextResponse.json({
      role: 'mentor',
      content: 'I am having trouble responding right now. Please try again or ask a simpler question.',
      source: 'fallback-rule-based',
    }, { status: 200 });
  }
}
