import type { CSSProperties } from "react";
import { profile, terminal, ui, type Locale } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

type Value = (typeof terminal)[number]["value"];

function resolve(value: Value, locale: Locale): string | string[] {
  if (Array.isArray(value)) return value;
  return value[locale];
}

function Literal({ value }: { value: string | string[] }) {
  if (typeof value === "string") return <span className="t-string">"{value}"</span>;
  return (
    <span>
      <span className="t-punct">[</span>
      {value.map((item, i) => (
        <span key={item}>
          <span className="t-string">"{item}"</span>
          {i < value.length - 1 && <span className="t-punct">, </span>}
        </span>
      ))}
      <span className="t-punct">]</span>
    </span>
  );
}

// "About me" written as a console session, in the spirit of justinchi.me.
export function Terminal() {
  const { locale, t } = useLocale();
  const ref = useReveal<HTMLDivElement>();

  const contact = [
    { label: "email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ];
  const lines = terminal.length + 1;

  return (
    <section className="container about" aria-label={t(ui.about.label)}>
      <div ref={ref} className="terminal reveal">
        <div className="terminal-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>agustin.ts</p>
        </div>
        <div className="terminal-body">
          {terminal.map((line, i) => (
            <div className="t-line" key={line.key} style={{ "--line": i } as CSSProperties}>
              <p className="t-cmd">
                <span className="prompt">&gt;</span> agustin.{line.key}
              </p>
              <p className="t-out">
                <Literal value={resolve(line.value, locale)} />
              </p>
            </div>
          ))}
          <div className="t-line" style={{ "--line": lines - 1 } as CSSProperties}>
            <p className="t-cmd">
              <span className="prompt">&gt;</span> agustin.contact
            </p>
            <p className="t-out">
              <span className="t-punct">[</span>
              {contact.map((item, i) => (
                <span key={item.label}>
                  <a className="t-string t-link" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    "{item.label}"
                  </a>
                  {i < contact.length - 1 && <span className="t-punct">, </span>}
                </span>
              ))}
              <span className="t-punct">]</span>
            </p>
          </div>
          <p className="t-cmd t-line" style={{ "--line": lines } as CSSProperties} aria-hidden="true">
            <span className="prompt">&gt;</span> <span className="cursor cursor-sm" />
          </p>
        </div>
      </div>
    </section>
  );
}
