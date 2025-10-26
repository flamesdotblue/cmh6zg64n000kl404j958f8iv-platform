import React from 'react';

const certificates = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    org: 'EC-Council',
    year: '2023',
  },
  {
    name: 'CompTIA Security+',
    org: 'CompTIA',
    year: '2022',
  },
  {
    name: 'AWS Certified Security – Specialty',
    org: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'PNPT (Practical Network Penetration Tester)',
    org: 'TCM Security',
    year: '2024',
  },
];

const achievements = [
  {
    title: 'Top 1% researcher on private bug bounty programs',
    meta: '2024 • High/critical findings across multiple assets',
  },
  {
    title: 'Built internal red team lab for continuous testing',
    meta: '2023 • Automated adversary emulation & reporting',
  },
  {
    title: 'Published secure-by-default CI/CD hardening guide',
    meta: '2023 • Adopted by multiple product teams',
  },
  {
    title: 'CTF podium finishes (web, forensics, crypto)',
    meta: '2022–2024 • Local and online competitions',
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Certificates</h2>
            <p className="text-neutral-400 mt-2">Industry-recognized credentials that back practical experience.</p>
            <div className="mt-6 space-y-4">
              {certificates.map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="font-medium text-white">{c.name}</p>
                    <p className="text-sm text-neutral-400">{c.org}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Achievements</h2>
            <p className="text-neutral-400 mt-2">Highlights from responsible security research and enablement.</p>
            <ol className="mt-6 space-y-4">
              {achievements.map((a, idx) => (
                <li key={a.title} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p className="text-white font-medium">{a.title}</p>
                  <p className="text-sm text-neutral-400">{a.meta}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
