import React from 'react';

const groups = [
  {
    name: 'OWASP Foundation',
    role: 'Community Member / Local Chapter Contributor',
    link: 'https://owasp.org/',
  },
  {
    name: 'HackerOne / Bugcrowd',
    role: 'Responsible Disclosure Researcher',
    link: 'https://www.hackerone.com/',
  },
  {
    name: 'DEF CON Groups (DCG)',
    role: 'Meetups, workshops, and CTF participation',
    link: 'https://defcongroups.org/',
  },
  {
    name: 'SANS Blue Team Community',
    role: 'Threat hunting and DFIR knowledge sharing',
    link: 'https://www.sans.org/',
  },
  {
    name: 'Red Team Village',
    role: 'Offensive security training and labs',
    link: 'https://redteamvillage.io/',
  },
];

export default function Memberships() {
  return (
    <section id="memberships" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Member Of</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">
            Communities and programs aligned with ethical hacking, coordinated disclosure, and security education.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <a
              key={g.name}
              href={g.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/30 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white group-hover:text-emerald-300 transition-colors">{g.name}</p>
                  <p className="text-sm text-neutral-400 mt-1">{g.role}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">Learn more</span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-6">
          Note: This portfolio promotes ethical security work. It does not represent or endorse illegal groups or activities.
        </p>
      </div>
    </section>
  );
}
