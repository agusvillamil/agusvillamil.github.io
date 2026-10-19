import type { CSSProperties } from "react";
import { ArrowUpRightIcon, CodeIcon, GameControllerIcon, WaveformIcon } from "@phosphor-icons/react";
import { projects, ui, type LinkKind, type Project } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

const linkIcons: Record<LinkKind, typeof ArrowUpRightIcon> = {
  live: ArrowUpRightIcon,
  code: CodeIcon,
  play: GameControllerIcon,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`card reveal${project.featured ? " card-featured" : ""}`}
      style={{ "--stagger": project.featured ? 0 : (index + 1) % 2 } as CSSProperties}
    >
      <div className="card-media">
        {project.image ? (
          <img
            src={project.image.src}
            alt={t(project.image.alt)}
            width={1280}
            height={800}
            loading={project.featured ? "eager" : "lazy"}
            decoding="async"
            className={project.image.pixelated ? "is-pixelated" : undefined}
          />
        ) : (
          // No screenshot yet: show an icon on a tinted panel instead of a fake UI.
          <div className="card-cover" aria-hidden="true">
            <WaveformIcon size={72} weight="light" />
          </div>
        )}
      </div>
      <div className="card-body">
        <p className="card-meta">
          <span>{t(project.kind)}</span>
          <span>{project.year}</span>
        </p>
        <h3 className="card-title">{t(project.title)}</h3>
        <p className="card-summary">{t(project.summary)}</p>
        <ul className="tags" aria-label="Stack">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <div className="card-links">
            {project.links.map((link) => {
              const Icon = linkIcons[link.kind];
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {t(ui.projects.links[link.kind])}
                  <Icon size={16} weight="bold" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLocale();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="section container" id="projects">
      <div ref={headRef} className="section-head reveal">
        <h2>{t(ui.projects.title)}</h2>
        <p>{t(ui.projects.intro)}</p>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
