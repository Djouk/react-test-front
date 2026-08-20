import './App.css'
import { focusAreas, profile, projectHighlights } from './content/profile'

function App() {
  const sortedLinks = [...profile.links].sort(
    (current, next) => current.displayOrder - next.displayOrder
  )

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__content">
          <p className="eyebrow">Personal profile</p>
          <h1 id="page-title">{profile.fullName}</h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__actions" aria-label="Primary links">
            {sortedLinks.map((link) => (
              <a key={link.id} className="button-link" href={link.url}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="hero__panel" aria-label="Profile summary">
          <p className="hero__panel-label">Currently focused on</p>
          <ul>
            <li>Typed frontend foundations</li>
            <li>AdonisJS API contracts</li>
            <li>Cloudflare-ready deployment paths</li>
          </ul>
          {profile.location ? (
            <p className="hero__location">Based in {profile.location}</p>
          ) : null}
        </aside>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="section__header">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Practical systems, clear boundaries.</h2>
        </div>
        <div className="project-grid">
          {projectHighlights.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <p className="project-card__outcome">{project.outcome}</p>
              <ul className="tag-list" aria-label={`${project.title} stack`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.href ? (
                <a className="text-link" href={project.href}>
                  View project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split" aria-labelledby="focus-title">
        <div className="section__header">
          <p className="eyebrow">Technical focus</p>
          <h2 id="focus-title">Built for simple starts and steady growth.</h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article key={area.id} className="focus-item">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Follow the build as it grows.</h2>
          <p>
            The profile is intentionally small and direct: a place for work,
            technical focus, and a clear way to find Diogo online.
          </p>
        </div>
        <div className="contact-band__links" aria-label="Contact links">
          {sortedLinks.map((link) => (
            <a key={link.id} className="text-link" href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
