import { ArrowDownIcon, DownloadSimpleIcon } from "@phosphor-icons/react";
import { profile, ui } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
  const { locale, t } = useLocale();
  const { typed, done } = useTypewriter(profile.name);

  return (
    <section className="hero container" id="top">
      <div className="hero-text">
        <h1 className="hero-name">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden="true">
            <span className="prompt">&gt;</span> {typed}
            <span className={`cursor${done ? " is-idle" : ""}`} />
          </span>
        </h1>
        <p className="hero-intro">{t(ui.hero.intro)}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            {t(ui.hero.viewProjects)}
            <ArrowDownIcon size={18} weight="bold" aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href={profile.cv[locale]} download>
            {t(ui.hero.downloadCv)}
            <DownloadSimpleIcon size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="photo-frame">
          {profile.photo ? (
            <img src={profile.photo} alt={t(ui.hero.photoAlt)} width={480} height={600} />
          ) : (
            // Placeholder until the real photo is added in content.ts.
            <span className="photo-placeholder" aria-hidden="true">
              AV
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
