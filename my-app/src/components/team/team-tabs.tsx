"use client";

import { useState } from "react";
import { teamTabs } from "@/lib/team";
import type { TeamMember } from "@/lib/types";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="team-card">
      <div className="team-card__avatar">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>
      <div className="team-card__content">
        <h4 className="team-card__name">{member.name}</h4>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__affiliation">{member.affiliation}</p>
        {(member.linkedin || member.email) && (
          <div className="team-card__social">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card__social-link"
                aria-label={`${member.name} on LinkedIn`}
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            )}
            {member.email && (
              <a
                href={member.email}
                className="team-card__social-link"
                aria-label={`Email ${member.name}`}
              >
                <i className="fa-solid fa-envelope" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Port of the `.team-tab-content` panel switcher from
 * `assets/js/pages/team.js`, which toggled `.active` classes on hidden panels.
 */
export function TeamTabs() {
  const [active, setActive] = useState(teamTabs[0].id);
  const tab = teamTabs.find((item) => item.id === active) ?? teamTabs[0];
  const isRepresentatives = tab.id === "representatives";

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Left Sidebar Navigation */}
      <aside className="w-full md:w-1/4 shrink-0">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 font-serif">
          Team
        </h2>
        <nav className="team-sidebar" id="team-nav">
          {teamTabs.map((item) => (
            <button
              type="button"
              key={item.id}
              data-tab={item.id}
              className={`tab-link team-nav-btn${active === item.id ? " active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Right Content Area */}
      <div className="w-full md:w-3/4">
        <div id={tab.id} className="team-tab-content active">
          <div className="team-grid">
            {tab.members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

          {isRepresentatives && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <a
                href="https://forms.gle/csSUtYrEL4mw6QnJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-sharp inline-flex"
              >
                Be a College Representative
                <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}