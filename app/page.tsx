const leagues = [
  { mark: 'PL', name: 'Premier League', country: 'Англия', className: 'premier' },
  { mark: 'LL', name: 'La Liga', country: 'Испания', className: 'laliga' },
  { mark: 'BL', name: 'Bundesliga', country: 'Германия', className: 'bundesliga' },
  { mark: 'A', name: 'Serie A', country: 'Италия', className: 'seriea' },
  { mark: 'L1', name: 'Ligue 1', country: 'Франция', className: 'ligue1' },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="background-glow" aria-hidden="true" />

      <div className="page-shell">
        <header className="brand" aria-label="Tennisi">
          <span className="brand-word">TENNISI</span>
          <span className="brand-badge">tj</span>
        </header>

        <section className="hero" aria-labelledby="main-title">
          <div className="hero-copy">
            <h1 id="main-title">
              <span>Европейская</span>
              <strong>футбольная</strong>
              <span>неделя</span>
            </h1>

            <p className="lead">Топ-5 европейских лиг. Новая неделя — новые шансы.</p>

            <div className="benefits" aria-label="Условия акции">
              <article className="benefit-card">
                <span className="benefit-icon trophy" aria-hidden="true">♜</span>
                <p><strong>25 000</strong><span>фрибетов<br />каждую неделю</span></p>
              </article>

              <article className="benefit-card">
                <span className="benefit-icon star" aria-hidden="true">☆</span>
                <p><strong>60</strong><span>призовых мест</span></p>
              </article>
            </div>

            <a className="cta" href="#leagues">Участвовать</a>
          </div>
        </section>

        <section className="leagues" id="leagues" aria-label="Пять европейских лиг">
          {leagues.map((league) => (
            <article className="league" key={league.name}>
              <span className={`league-mark ${league.className}`} aria-hidden="true">
                {league.mark}
              </span>
              <p>
                <strong>{league.name}</strong>
                <span>{league.country}</span>
              </p>
            </article>
          ))}
        </section>

        <footer>Акция от Tennisi.tj <span aria-hidden="true">•</span> 18+</footer>
      </div>
    </main>
  );
}
