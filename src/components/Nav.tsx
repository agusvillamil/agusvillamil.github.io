import { ui } from "../content";
import { useLocale } from "../hooks/useLocale";

const sections = ["projects", "experience", "skills", "contact"] as const;

export function Nav() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a className="nav-logo" href="#top">
          ~/agustin
        </a>
        <nav aria-label={locale === "en" ? "Main" : "Principal"}>
          <ul className="nav-links">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t(ui.nav[id])}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lang-toggle" role="group" aria-label={t(ui.nav.switchTo)}>
          {(["en", "es"] as const).map((code) => (
            <button
              key={code}
              type="button"
              aria-pressed={locale === code}
              onClick={() => setLocale(code)}
              lang={code}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
