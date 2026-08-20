import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="app-shell__content" aria-labelledby="page-title">
        <p className="app-shell__eyebrow">Frontend foundation</p>
        <h1 id="page-title" className="app-shell__title">
          Diogo de Andrade
        </h1>
        <p className="app-shell__copy">
          Vite, React, and TypeScript are ready for the personal profile
          experience. The full presentation layout and email signup flow will be
          added in follow-up cards.
        </p>
        <ul className="app-shell__meta" aria-label="Project foundation">
          <li>Vite</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Cloudflare Pages ready</li>
        </ul>
      </section>
    </main>
  )
}

export default App
