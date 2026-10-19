import { Contact, Footer, SocialRail } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Terminal } from "./components/Terminal";
import { LocaleProvider } from "./hooks/useLocale";

export default function App() {
  return (
    <LocaleProvider>
      <div className="backdrop" aria-hidden="true" />
      <Nav />
      <SocialRail />
      <main>
        <Hero />
        <Terminal />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
