export default function HomePage() {
  return (
    <main className="home">
      {/* Header */}
      <header className="home__header">
        <div className="home__brand">MyApp</div>

        <nav className="home__nav">
          <a href="#about" className="home__link">About</a>
          <a href="#features" className="home__link">Features</a>
          <a href="#contact" className="home__link">Contact</a>
        </nav>

        <a className="home__cta" href="#contact">Get Started</a>
      </header>

      {/* Hero */}
      <section className="home__hero">
        <div className="home__heroText">
          <p className="home__badge">Graduation Project</p>
          <h1 className="home__title">
            Build an interactive experience with Web + AI + 3D
          </h1>
          <p className="home__subtitle">
            This is the home page template. You can replace the text with your project story and sections.
          </p>

          <div className="home__buttons">
            <a className="btn btn--primary" href="#features">Explore Features</a>
            <a className="btn btn--ghost" href="#about">Learn More</a>
          </div>

          <div className="home__stats">
            <div className="stat">
              <div className="stat__num">3</div>
              <div className="stat__label">Main Modules</div>
            </div>
            <div className="stat">
              <div className="stat__num">2</div>
              <div className="stat__label">Teams</div>
            </div>
            <div className="stat">
              <div className="stat__num">1</div>
              <div className="stat__label">Platform</div>
            </div>
          </div>
        </div>

        {/* Visual box (مكان تحطي فيه Spline/صورة/3D لاحقاً) */}
        <div className="home__heroVisual" aria-label="Visual placeholder">
          <div className="visualCard">
            <div className="visualCard__top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="visualCard__body">
              <p className="visualCard__hint">Put your 3D / Spline here later</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section__title">About the project</h2>
        <p className="section__text">
          Write a short paragraph about your concept, story, and what the user can do on the website.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h2 className="section__title">Features</h2>

        <div className="grid">
          <article className="card">
            <h3 className="card__title">Interactive Web</h3>
            <p className="card__text">Pages, smooth UI, and dynamic components.</p>
          </article>

          <article className="card">
            <h3 className="card__title">AI Chat</h3>
            <p className="card__text">A chatbot that guides users through the story.</p>
          </article>

          <article className="card">
            <h3 className="card__title">3D Experience</h3>
            <p className="card__text">Embed Spline or 3D models for immersion.</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section--contact">
        <h2 className="section__title">Contact</h2>

        <form className="form">
          <label className="form__row">
            <span className="form__label">Name</span>
            <input className="form__input" placeholder="Your name" />
          </label>

          <label className="form__row">
            <span className="form__label">Email</span>
            <input className="form__input" placeholder="example@email.com" />
          </label>

          <label className="form__row">
            <span className="form__label">Message</span>
            <textarea className="form__input form__textarea" placeholder="Write your message..." />
          </label>

          <button className="btn btn--primary" type="button">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__text">© {new Date().getFullYear()} MyApp — All rights reserved.</p>
      </footer>
    </main>
  );
}