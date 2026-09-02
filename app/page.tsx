'use client';

import { type FormEvent, useRef } from 'react';

const leagues = [
  { logo: '/assets/Premier League 2.png', name: 'Premier League', country: 'Англия', className: 'premier' },
  { logo: '/assets/La Liga.png', name: 'La Liga', country: 'Испания', className: 'laliga' },
  { logo: '/assets/Bundesliga.webp', name: 'Bundesliga', country: 'Германия', className: 'bundesliga' },
  { logo: '/assets/Serie A.png', name: 'Serie A', country: 'Италия', className: 'seriea' },
  { logo: '/assets/Ligue1_logo 1.png', name: 'Ligue 1', country: 'Франция', className: 'ligue1' },
];

export default function Home() {
  const registrationDialog = useRef<HTMLDialogElement>(null);

  const openRegistration = () => registrationDialog.current?.showModal();
  const closeRegistration = () => registrationDialog.current?.close();

  const continueRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.assign('https://tennisi.tj/mtg2/cgi/free.Welcome?lang=rus');
  };

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

            <button className="cta" type="button" onClick={openRegistration}>Участвовать</button>
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

      <dialog
        className="registration-dialog"
        ref={registrationDialog}
        aria-labelledby="registration-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeRegistration();
        }}
      >
        <button className="dialog-close" type="button" onClick={closeRegistration} aria-label="Закрыть форму">
          ×
        </button>

        <header className="registration-header">
          <h2 id="registration-title">Регистрация</h2>
          <p>Шаг 1 из 3</p>
        </header>

        <form className="registration-form" onSubmit={continueRegistration}>
          <label className="form-field">
            <span>Номер телефона</span>
            <span className="phone-field">
              <span className="phone-flag" aria-hidden="true">🇹🇯</span>
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+(992)-999-999-999"
                aria-label="Номер телефона"
                required
              />
            </span>
          </label>

          <label className="form-field">
            <span>Имя</span>
            <input name="firstName" type="text" autoComplete="given-name" placeholder="Обязательное поле*" required />
          </label>

          <label className="form-field">
            <span>Фамилия</span>
            <input name="lastName" type="text" autoComplete="family-name" placeholder="Обязательное поле*" required />
          </label>

          <label className="form-field">
            <span>Дата рождения</span>
            <input
              name="birthDate"
              type="text"
              inputMode="numeric"
              autoComplete="bday"
              placeholder="ДД.ММ.ГГГГ"
              pattern={'[0-9]{2}\\.[0-9]{2}\\.[0-9]{4}'}
              title="Введите дату в формате ДД.ММ.ГГГГ"
              required
            />
          </label>

          <label className="consent-field">
            <input name="consent" type="checkbox" required />
            <span>
              Настоящим даю свое согласие на обработку персональных данных, подтверждаю, что ознакомлен и полностью
              согласен с <a href="https://tennisi.tj/" target="_blank" rel="noreferrer">Правилами азартной игры</a>,{' '}
              <a href="https://tennisi.tj/" target="_blank" rel="noreferrer">Правилами приёма ставок и выплаты выигрышей</a>.
            </span>
          </label>

          <button className="registration-submit" type="submit">Продолжить</button>

          <p className="login-prompt">
            Уже есть аккаунт?{' '}
            <a href="https://tennisi.tj/mtg2/cgi/free.Welcome?lang=rus">Войти</a>
          </p>
        </form>
      </dialog>
    </main>
  );
}
