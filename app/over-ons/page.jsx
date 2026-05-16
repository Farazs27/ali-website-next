import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Over ons",
  description: "Leer ons team kennen. Persoonlijke mondzorg met aandacht voor jou — in hart van Amsterdam-Noord.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Over ons</span>
          <h1>Een praktijk met <em>karakter</em>.</h1>
          <p>Wij zijn Samen Mondzorg — een team van betrokken tandartsen en mondhygiënisten in Amsterdam-Noord, met aandacht voor de mens achter het gebit.</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container split">
          <div className="split__media">
            <Image
              src="/images/clinic-detail.png"
              alt="Wachthoek met linnen bank en plant in praktijk Samen Mondzorg"
              width={1200}
              height={1500}
              loading="lazy"
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="split__text">
            <span className="eyebrow">Onze filosofie</span>
            <h2>Zorg met aandacht,<br/><em>zonder haast.</em></h2>
            <p>Bij Samen Mondzorg geloven we dat goede mondzorg begint met écht luisteren. We nemen ruim de tijd voor een eerste kennismaking, zodat we elkaar leren kennen voordat we beginnen met behandelen.</p>
            <p>Onze praktijk is bewust kleinschalig ingericht. Vaste gezichten, een vast team — zodat je vertrouwen kan opbouwen en weet wat je krijgt.</p>
            <p>We werken volgens de nieuwste richtlijnen, met moderne apparatuur, en blijven onszelf scholen om altijd zorg op het hoogste niveau te kunnen bieden.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-between">
            <div className="head">
              <span className="eyebrow">Het team</span>
              <h2>Wie je tegenkomt bij ons</h2>
            </div>
            <p style={{ maxWidth: "36ch", margin: 0 }}>Ervaren professionals die werken vanuit dezelfde gedachte: rust, kwaliteit en oprechte aandacht.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <span className="avatar">EM</span>
              <h4>Eline Meijer</h4>
              <div className="role">Tandarts &amp; oprichter</div>
              <p>BIG-geregistreerd. Gespecialiseerd in esthetische tandheelkunde en restauratieve zorg. Tien jaar ervaring in Amsterdam.</p>
            </div>
            <div className="team-card">
              <span className="avatar">JV</span>
              <h4>Jasper Visser</h4>
              <div className="role">Tandarts</div>
              <p>BIG-geregistreerd. Bijzondere interesse in endodontologie (wortelkanaalbehandelingen) en pijnbestrijding.</p>
            </div>
            <div className="team-card">
              <span className="avatar">SD</span>
              <h4>Sara de Jong</h4>
              <div className="role">Mondhygiënist</div>
              <p>Speciaal opgeleid in preventieve zorg, parodontologie en het begeleiden van angstige patiënten.</p>
            </div>
            <div className="team-card">
              <span className="avatar">NV</span>
              <h4>Nadia van Dam</h4>
              <div className="role">Praktijkmanager</div>
              <p>Eerste aanspreekpunt voor afspraken, verzekering en al je vragen over de praktijk.</p>
            </div>
            <div className="team-card">
              <span className="avatar">TS</span>
              <h4>Thomas Smit</h4>
              <div className="role">Tandartsassistent</div>
              <p>Zorgt dat behandelingen soepel en steriel verlopen, en helpt je op je gemak voelen tijdens een bezoek.</p>
            </div>
            <div className="team-card">
              <span className="avatar">LK</span>
              <h4>Lisa Koster</h4>
              <div className="role">Tandartsassistent</div>
              <p>Begeleidt vooral onze jongere patiënten — met geduld, uitleg en een geruststellende lach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="values">
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-8.8 1.5A5.5 5.5 0 0 0 3.2 4.6c-2 2-2 5.4 0 7.5l8.8 8.7 8.8-8.7c2-2.1 2-5.4 0-7.5z"/></svg>
              <h4>Persoonlijk</h4>
              <p>Vaste gezichten, geen wisselende tandartsen.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 12l4 4L21 4"/></svg>
              <h4>Transparant</h4>
              <p>Heldere offertes, geen verrassingen achteraf.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <h4>Goed bereikbaar</h4>
              <p>Avondopeningen en korte wachttijden.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/><circle cx="12" cy="8" r="4"/></svg>
              <h4>Voor iedereen</h4>
              <p>Kinderen, gezinnen, angstige patiënten — welkom.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Benieuwd of we bij elkaar passen?</h2>
              <p>Plan een kennismakingsgesprek — geheel vrijblijvend en zonder kosten.</p>
            </div>
            <div className="cta-banner__actions">
              <Link className="btn btn--ghost" href="/contact">Bel ons</Link>
              <Link className="btn btn--ghost" style={{ background: "var(--white)", color: "var(--sage-deep)" }} href="/afspraak">Kennismaken →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
