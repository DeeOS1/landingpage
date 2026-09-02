const leagues = [
  { logo: '/assets/Premier League 2.png', name: 'Premier League', country: 'Англия', className: 'premier' },
  { logo: '/assets/La Liga.png', name: 'La Liga', country: 'Испания', className: 'laliga' },
  { logo: '/assets/Bundesliga.webp', name: 'Bundesliga', country: 'Германия', className: 'bundesliga' },
  { logo: '/assets/Serie A.png', name: 'Serie A', country: 'Италия', className: 'seriea' },
  { logo: '/assets/Ligue1_logo 1.png', name: 'Ligue 1', country: 'Франция', className: 'ligue1' },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="background-glow" aria-hidden="true" />

      <div className="page-shell">
        <header className="brand" aria-label="Tennisi">
          <img className="brand-logo" src="/assets/logo.png" alt="Tennisi" />
        </header>

        <section className="hero" aria-labelledby="main-title">
          <div className="hero-copy">
            <h1 id="main-title">
              <span>Европейская</span>
              <strong>футбольная</strong>
              <span>неделя</span>
            </h1>

            <p className="lead">Топ-5 европейских лиг. Новая неделя — новые шансы.</p>

            <div className="offer" aria-label="Условия акции">
              <article className="jackpot-card">
                <strong>25 000</strong>
                <span>фрибетов каждую неделю</span>
              </article>

              <article className="places-card">
                <strong>60</strong>
                <span>призовых<br />мест</span>
              </article>
            </div>

            <a className="cta" href="https://tennisi.tj/2026/">Участвовать</a>
          </div>
        </section>

        <section className="leagues" id="leagues" aria-label="Пять европейских лиг">
          {leagues.map((league) => (
            <article className="league" key={league.name}>
              <span className={`league-logo-wrap ${league.className}`}>
                <img className="league-logo" src={league.logo} alt={`${league.name} logo`} />
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
