import { questionBank } from '@/data/careers';

const dimensionMap: Record<string, number> = {
  technology: 1,
  engineering: 1,
  business: 1,
  design: 1,
  media: 1,
  health: 1,
  science: 1,
  policy: 1,
  service: 1,
  environment: 1,
  data: 1,
  practical: 1,
  creativity: 1,
  communication: 1,
  leadership: 1,
  people: 1,
  math: 1,
  sports: 1,
  curiosity: 1,
  learning: 1,
  experimentation: 1,
  growth: 1,
  exploration: 1,
  workstyle: 1,
  path: 1,
};

export function computeQuizResults(answers: Record<string, string | string[] | number | undefined>) {
  const scores: Record<string, number> = {};

  for (const q of questionBank) {
    const answer = answers[q.id];
    if (answer === undefined || answer === null || answer === '') continue;

    const weight = 1;
    const dimension = q.dimension ?? 'exploration';
    const previous = scores[dimension] ?? 0;

    if (q.type === 'scale') {
      const numeric = Number(answer) || 0;
      scores[dimension] = previous + numeric * weight;
    } else if (q.type === 'single') {
      const numeric = Number(answer) || 0;
      scores[dimension] = previous + numeric * weight;
    } else if (q.type === 'multi') {
      const arr = Array.isArray(answer) ? answer : [answer];
      scores[dimension] = previous + arr.length * weight;
    }
  }

  const normalized = Object.fromEntries(
    Object.entries(scores).map(([key, value]) => [key, value / Math.max(1, Object.keys(dimensionMap).includes(key) ? 1 : 1)])
  );

  const topDimensions = Object.entries(normalized)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([key, value]) => ({ key, value }));

  return {
    topDimensions,
    summary: topDimensions.length
      ? `Your responses suggest you are especially drawn to ${topDimensions.map((d) => d.key).join(', ')}. This is a starting point, not a fixed prediction.`
      : 'This is only a preliminary read. Keep exploring the full career library and compare more than one path.',
  };
}
