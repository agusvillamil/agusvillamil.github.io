import { DownloadSimpleIcon, EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { profile, ui } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const { locale, t } = useLocale();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section container" id="contact">
      <div ref={ref} className="contact reveal">
        <h2>{t(ui.contact.title)}</h2>
        <p>{t(ui.contact.body)}</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          <EnvelopeSimpleIcon size={24} aria-hidden="true" />
          {profile.email}
        </a>
        <div className="contact-actions">
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinLogoIcon size={18} weight="bold" aria-hidden="true" />
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogoIcon size={18} weight="bold" aria-hidden="true" />
            GitHub
          </a>
          <a className="btn btn-primary" href={profile.cv[locale]} download>
            {t(ui.hero.downloadCv)}
            <DownloadSimpleIcon size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="container">
      <div className="footer">
        <p>{profile.name}, 2026</p>
        <p>{t(ui.footer.builtWith)}</p>
      </div>
    </footer>
  );
}

// Fixed column of social links on wide screens, as on m7mad.dev.
export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GithubLogoIcon size={22} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinLogoIcon size={22} />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <EnvelopeSimpleIcon size={22} />
      </a>
    </aside>
  );
}
