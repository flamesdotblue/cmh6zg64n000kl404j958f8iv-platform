import React from 'react';

const skills = [
  {
    title: 'Web & App Pentesting',
    items: ['OWASP Top 10', 'Burp Suite', 'SSTI/IDOR', 'Auth/Z flows', 'GraphQL testing'],
  },
  {
    title: 'Network & Infra',
    items: ['Nmap', 'Wireshark', 'Firewall / IDS tuning', 'VLAN segmentation', 'TLS/PKI'],
  },
  {
    title: 'Cloud Security',
    items: ['AWS IAM', 'S3/EC2 hardening', 'CIS Benchmarks', 'Container security', 'KMS'],
  },
  {
    title: 'Exploit Dev & Reverse',
    items: ['Python tooling', 'bash/powershell', 'Binary analysis', 'Mitigations', 'Memory safety'],
  },
  {
    title: 'Blue Team & DFIR',
    items: ['SIEM (Sigma/Elastic)', 'Threat hunting', 'Forensics triage', 'Incident response', 'MITRE ATT&CK'],
  },
  {
    title: 'Bug Bounty & Disclosure',
    items: ['HackerOne/Bugcrowd', 'POC crafting', 'Impact assessment', 'Responsible disclosure'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Skills</h2>
            <p className="text-neutral-400 mt-2 max-w-2xl">A practical mix of offensive research and defensive engineering—focused on measurable risk reduction.</p>
          </div>
          <a href="#credentials" className="hidden sm:inline-block text-emerald-400 hover:text-emerald-300 transition-colors">See credentials →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">{group.title}</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
