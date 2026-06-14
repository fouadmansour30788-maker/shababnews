'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

interface Course {
  id: number;
  name: string;
  score: string;
  credits: string;
}

function gpaFromScore(s: number) {
  if (s >= 93) return 4.0;
  if (s >= 90) return 3.7;
  if (s >= 87) return 3.3;
  if (s >= 83) return 3.0;
  if (s >= 80) return 2.7;
  if (s >= 77) return 2.3;
  if (s >= 73) return 2.0;
  if (s >= 70) return 1.7;
  if (s >= 60) return 1.0;
  return 0;
}

let nextId = 4;

export default function GradeCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Course 1', score: '', credits: '3' },
    { id: 2, name: 'Course 2', score: '', credits: '3' },
    { id: 3, name: 'Course 3', score: '', credits: '3' },
  ]);

  const update = (id: number, field: keyof Course, value: string) =>
    setCourses((c) => c.map((x) => (x.id === id ? { ...x, [field]: value } : x)));

  const add = () => setCourses((c) => [...c, { id: nextId++, name: `Course ${c.length + 1}`, score: '', credits: '3' }]);
  const remove = (id: number) => setCourses((c) => c.filter((x) => x.id !== id));

  const result = useMemo(() => {
    let totalCredits = 0;
    let weightedScore = 0;
    let weightedGpa = 0;
    courses.forEach((c) => {
      const s = parseFloat(c.score);
      const cr = parseFloat(c.credits);
      if (!isNaN(s) && !isNaN(cr) && cr > 0) {
        totalCredits += cr;
        weightedScore += s * cr;
        weightedGpa += gpaFromScore(s) * cr;
      }
    });
    if (totalCredits === 0) return null;
    const avg = weightedScore / totalCredits;
    return {
      avg,
      gpa: weightedGpa / totalCredits,
      avg20: (avg / 100) * 20,
      totalCredits,
    };
  }, [courses]);

  return (
    <>
      <PageHeader
        kicker="Tool"
        title="Grade calculator"
        subtitle="Enter your course scores and credits to project your weighted average, GPA (4.0) and Lebanese /20 average."
      />

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div className="space-y-3">
          <div className="hidden grid-cols-[1fr_90px_80px_40px] gap-3 px-1 text-xs uppercase tracking-wider text-muted sm:grid">
            <span>Course</span>
            <span>Score /100</span>
            <span>Credits</span>
            <span />
          </div>
          {courses.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3 rounded-xl border border-line bg-surface p-3 sm:grid-cols-[1fr_90px_80px_40px] sm:bg-transparent sm:p-0"
            >
              <input
                value={c.name}
                onChange={(e) => update(c.id, 'name', e.target.value)}
                className="col-span-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text outline-none focus:border-teal-bright sm:col-span-1"
              />
              <input
                type="number"
                value={c.score}
                onChange={(e) => update(c.id, 'score', e.target.value)}
                placeholder="—"
                className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text outline-none focus:border-teal-bright"
              />
              <input
                type="number"
                value={c.credits}
                onChange={(e) => update(c.id, 'credits', e.target.value)}
                className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text outline-none focus:border-teal-bright"
              />
              <button
                onClick={() => remove(c.id)}
                className="rounded-lg border border-line text-muted transition hover:border-magenta hover:text-magenta"
              >
                ✕
              </button>
            </motion.div>
          ))}
          <button
            onClick={add}
            className="w-full rounded-xl border border-dashed border-line py-3 text-sm font-medium text-muted transition hover:border-teal-bright hover:text-teal-bright"
          >
            + Add course
          </button>
        </div>

        <div className="h-fit rounded-2xl border border-line bg-surface p-7 md:sticky md:top-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">Your result</p>
          {result ? (
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-display text-6xl font-bold text-gradient">{result.avg.toFixed(1)}%</p>
                <p className="mt-1 text-sm text-muted">Weighted average · {result.totalCredits} credits</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-bg-soft p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">GPA (4.0)</p>
                  <p className="mt-1 font-display text-2xl font-bold text-text">{result.gpa.toFixed(2)}</p>
                </div>
                <div className="rounded-xl border border-line bg-bg-soft p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Average /20</p>
                  <p className="mt-1 font-display text-2xl font-bold text-text">{result.avg20.toFixed(1)}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">Enter at least one score to see your average.</p>
          )}
        </div>
      </section>
    </>
  );
}
