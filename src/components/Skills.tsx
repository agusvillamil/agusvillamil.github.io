import type { CSSProperties } from "react";
import { skills, ui, type SkillGroup } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

function Group({ group, index }: { group: SkillGroup; index: number }) {
  const { t } = useLocale();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="skill-group reveal" style={{ "--stagger": index % 3 } as CSSProperties}>
      <h3>{t(group.name)}</h3>
      <ul className="tags tags-lg">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const { t } = useLocale();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="section container" id="skills">
      <div ref={headRef} className="section-head reveal">
        <h2>{t(ui.skills.title)}</h2>
      </div>
      <div className="skill-grid">
        {skills.map((group, i) => (
          <Group key={group.name.en} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
