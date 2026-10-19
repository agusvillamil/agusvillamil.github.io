import { jobs, ui, type Job } from "../content";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

function JobRow({ job }: { job: Job }) {
  const { t } = useLocale();
  const ref = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} className="job reveal">
      <p className="job-period">{t(job.period)}</p>
      <div>
        <h3 className="job-role">{t(job.role)}</h3>
        <p className="job-org">{t(job.org)}</p>
        <p className="job-detail">{t(job.detail)}</p>
      </div>
    </li>
  );
}

export function Experience() {
  const { t } = useLocale();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="section container" id="experience">
      <div ref={headRef} className="section-head reveal">
        <h2>{t(ui.experience.title)}</h2>
      </div>
      <ol className="jobs">
        {jobs.map((job) => (
          <JobRow key={job.org.en + job.period.en} job={job} />
        ))}
      </ol>
    </section>
  );
}
