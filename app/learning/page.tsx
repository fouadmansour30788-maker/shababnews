'use client';

import { Code2, Cpu, GraduationCap, BookOpen, PenLine, Languages, Wallet, Palette, TrendingUp, type LucideIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';

const resources: { cat: string; Icon: LucideIcon; title: string; desc: string; url: string }[] = [
  { cat: 'Coding', Icon: Code2, title: 'freeCodeCamp', desc: 'Free full-stack web development certifications.', url: 'https://www.freecodecamp.org' },
  { cat: 'Coding', Icon: Cpu, title: 'CS50 by Harvard', desc: "The world's most popular intro to computer science.", url: 'https://cs50.harvard.edu' },
  { cat: 'Courses', Icon: GraduationCap, title: 'Coursera', desc: 'University courses, many free to audit, with certificates.', url: 'https://www.coursera.org' },
  { cat: 'Courses', Icon: BookOpen, title: 'Khan Academy', desc: 'Free lessons in math, science and test prep.', url: 'https://www.khanacademy.org' },
  { cat: 'Exams', Icon: PenLine, title: 'SAT Practice', desc: 'Official free SAT prep with Khan Academy.', url: 'https://www.khanacademy.org/sat' },
  { cat: 'Language', Icon: Languages, title: 'Duolingo', desc: 'Practice English, French and more — free.', url: 'https://www.duolingo.com' },
  { cat: 'Scholarships', Icon: Wallet, title: 'Edraak', desc: 'Arabic-language MOOCs and skills courses.', url: 'https://www.edraak.org' },
  { cat: 'Design', Icon: Palette, title: 'Figma Learn', desc: 'Master UI/UX design with free tutorials.', url: 'https://www.figma.com/resources/learn-design/' },
  { cat: 'Career', Icon: TrendingUp, title: 'LinkedIn Learning', desc: 'Professional skills, often free via universities.', url: 'https://www.linkedin.com/learning' },
];

const cats = ['Coding', 'Courses', 'Exams', 'Language', 'Career', 'Design', 'Scholarships'];

export default function LearningPage() {
  return (
    <>
      <PageHeader
        kicker="Grow"
        title="Learning"
        subtitle="Hand-picked free resources to learn, prepare for exams, and build skills that employers want."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <span key={c} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.06} className="perspective h-full">
              <Tilt max={9} className="h-full">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-teal/40"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <r.Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="mt-6 text-[10px] font-bold uppercase tracking-wider text-teal-bright">{r.cat}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text transition-colors group-hover:text-teal-bright">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{r.desc}</p>
                  <span className="mt-auto pt-5 text-sm font-medium text-teal-bright opacity-0 transition group-hover:opacity-100">
                    Start learning →
                  </span>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
