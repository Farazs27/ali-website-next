import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: { absolute: "Samen Mondzorg — tandarts in Amsterdam Noord" },
  description:
    "Persoonlijke mondzorg in Amsterdam Noord. Een gezonde mond, een mooie glimlach. Welkom bij Samen Mondzorg.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="eyebrow">Tandartspraktijk Amsterdam Noord</span>
            <h1>
              Een gezonde mond,<br/><em>een mooie glimlach.</em>
            </h1>
            <p>Persoonlijke mondzorg met aandacht voor jou en je gezin. Welkom bij Samen Mondzorg in Amsterdam-Noord — waar zorg, rust en kwaliteit samenkomen.</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/afspraak">Afspraak maken</Link>
              <Link className="btn btn--ghost" href="/over-ons">Meer over ons <span className="arrow">→</span></Link>
            </div>
          </div>
          <div className="hero__media">
            <Image
              src="/images/hero-reception.png"
              alt="Receptie van Samen Mondzorg in Amsterdam-Noord, sage groene balie met hanglampen"
              width={1200}
              height={900}
              priority
              fetchPriority="high"
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section--tight">
        <div className="container">
          <div className="svc">
            <Link className="svc__card" href="/afspraak">
              <span className="svc__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>
                </svg>
              </span>
              <h4>Afspraak maken</h4>
              <p>Plan eenvoudig online of bel ons direct.</p>
            </Link>
            <Link className="svc__card" href="/behandelingen">
              <span className="svc__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 4c-3 0-5 1-7 1-2 0-3 2-3 4 0 4 2 7 3 9 1 2 2 5 3 5 2 0 2-4 4-4s2 4 4 4c1 0 2-3 3-5 1-2 3-5 3-9 0-2-1-4-3-4-2 0-4-1-7-1z"/>
                </svg>
              </span>
              <h4>Onze behandelingen</h4>
              <p>Van controle tot esthetische tandheelkunde.</p>
            </Link>
            <Link className="svc__card" href="/over-ons">
              <span className="svc__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="10" r="2.6"/>
                  <path d="M3 19c1-3 3.5-4 6-4s5 1 6 4M14 18c.6-1.6 2-2.4 3.8-2.4 1.4 0 2.6.6 3.2 2"/>
                </svg>
              </span>
              <h4>Over ons</h4>
              <p>Leer ons team en onze aanpak kennen.</p>
            </Link>
            <Link className="svc__card" href="/contact">
              <span className="svc__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.4"/>
                </svg>
              </span>
              <h4>Route &amp; contact</h4>
              <p>Goed bereikbaar — Amsterdam-Noord.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME SPLIT */}
      <section className="section">
        <div className="container split split--reverse">
          <div className="split__text">
            <span className="eyebrow">Welkom bij Samen Mondzorg</span>
            <h2>
              Zorg voor elkaar,<br/><em>zorg voor je mond.</em>
            </h2>
            <p>Bij Samen Mondzorg geloven we dat een fijne tandartservaring begint met rust, ruimte en oprechte aandacht. Onze moderne praktijk in Amsterdam-Noord biedt persoonlijke begeleiding voor het hele gezin — van het allereerste controlebezoek tot complexe behandelingen.</p>
            <p>Of je nu komt voor een halfjaarlijkse controle, mondhygiëne, een vulling of een esthetische behandeling: we nemen de tijd voor jou en leggen alles duidelijk uit.</p>
            <div className="hero__actions" style={{ marginTop: "18px" }}>
              <Link className="btn btn--primary" href="/behandelingen">Onze behandelingen</Link>
            </div>
          </div>
          <div className="split__media">
            <Image
              src="/images/treatment-room.png"
              alt="Behandelkamer met sage groene stoel en uitzicht op Amsterdamse grachtenpanden"
              width={1200}
              height={1500}
              loading="lazy"
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section>
        <div className="container">
          <div className="values">
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-8.8 1.5A5.5 5.5 0 0 0 3.2 4.6c-2 2-2 5.4 0 7.5l8.8 8.7 8.8-8.7c2-2.1 2-5.4 0-7.5z"/></svg>
              <h4>Persoonlijk</h4>
              <p>Tijd en aandacht voor iedere patiënt.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 12l4 4L21 4"/></svg>
              <h4>Kwaliteit</h4>
              <p>Erkend, modern en transparant.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <h4>Snel terecht</h4>
              <p>Korte wachttijden en avondopeningen.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/><circle cx="12" cy="8" r="4"/></svg>
              <h4>Gezinspraktijk</h4>
              <p>Voor kinderen, jongeren en volwassenen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL SPLIT */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Image
              src="/images/clinic-detail.png"
              alt="Wachthoek met linnen bank, plant en minimalistische tekening van een glimlach"
              width={1200}
              height={1500}
              loading="lazy"
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="split__text">
            <span className="eyebrow">Onze praktijk</span>
            <h2>Een plek waar je <em>graag</em> binnenkomt.</h2>
            <p>We hebben onze praktijk bewust ontworpen als een rustige, lichte omgeving. Warme materialen, natuurlijke kleuren en planten — zodat je je vanaf het moment dat je binnenkomt op je gemak voelt.</p>
            <p>Modern instrumentarium en strenge hygiënerichtlijnen zorgen voor veilige, comfortabele zorg op het hoogste niveau.</p>
            <div className="hero__actions" style={{ marginTop: "18px" }}>
              <Link className="btn btn--ghost" href="/contact">Bezoek ons <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Klaar voor een nieuwe glimlach?</h2>
              <p>Maak vandaag nog een afspraak voor een kennismaking of intake.</p>
            </div>
            <div className="cta-banner__actions">
              <Link className="btn btn--ghost" href="/contact">Bel ons</Link>
              <Link className="btn btn--ghost" style={{ background: "var(--white)", color: "var(--sage-deep)" }} href="/afspraak">Afspraak maken →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
