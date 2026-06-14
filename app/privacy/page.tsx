import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Privacy Policy · Shabab News' };

const sections = [
  {
    h: 'Information we collect',
    p: 'When you create an account, we collect your name and email address. If you use our tools (CV Builder, Portfolio Builder, Grade Calculator), the data you enter stays in your browser unless you choose to save it to your account.',
  },
  {
    h: 'How we use your information',
    p: 'We use your information to provide and improve the Shabab News experience — to personalize content, save your progress, and keep you informed about universities, events and opportunities relevant to you.',
  },
  {
    h: 'The AI assistant',
    p: 'Messages you send to Farah, our AI assistant, are processed to generate responses. We do not use your conversations to identify you, and we do not sell your data.',
  },
  {
    h: 'Data security',
    p: 'Your account is secured through Firebase Authentication. We apply industry-standard measures to protect your information, though no system can be guaranteed completely secure.',
  },
  {
    h: 'Your rights',
    p: 'You can update or delete your account at any time from your profile page. Deleting your account permanently removes your stored profile data.',
  },
  {
    h: 'Contact',
    p: 'Questions about this policy? Reach the Shabab News team through the contact details on our About page.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy Policy" subtitle="Last updated: 2026. Your privacy matters to us." />
      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-semibold text-text">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
