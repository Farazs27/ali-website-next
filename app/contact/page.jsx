import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Route & contact",
  description: "Bezoek Samen Mondzorg in Amsterdam-Noord. Adres, openingstijden en bereikbaarheid.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Bezoek ons</span>
          <h1>Route &amp; contact</h1>
          <p>We zitten in een rustige zijstraat van de Van der Pekstraat, op vijf minuten lopen van metrostation Noorderpark. Welkom!</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="info-grid">

            <div className="info-card">
              <span className="eyebrow">Adres</span>
              <h4>Samen Mondzorg</h4>
              <p>Van der Pekstraat 21<br/>1031 CR Amsterdam-Noord<br/>Nederland</p>
              <p style={{ marginTop: "18px" }}>
                <a className="btn btn--ghost btn--small" href="https://www.google.com/maps/dir/?api=1&destination=Van+der+Pekstraat+21+1031+CR+Amsterdam" target="_blank" rel="noopener">Routebeschrijving →</a>
              </p>
            </div>

            <div className="info-card">
              <span className="eyebrow">Openingstijden</span>
              <ul className="hours">
                <li><span>Maandag</span><span>08:00 – 17:30</span></li>
                <li><span>Dinsdag</span><span>08:00 – 19:30</span></li>
                <li><span>Woensdag</span><span>08:00 – 17:30</span></li>
                <li><span>Donderdag</span><span>08:00 – 19:30</span></li>
                <li><span>Vrijdag</span><span>08:00 – 16:00</span></li>
                <li><span>Zaterdag</span><span className="closed">Gesloten</span></li>
                <li><span>Zondag</span><span className="closed">Gesloten</span></li>
              </ul>
            </div>

            <div className="info-card">
              <span className="eyebrow">Telefoon &amp; e-mail</span>
              <h4>+31 (0)20 444 0000</h4>
              <p><a href="tel:+31204440000">Bel ons direct</a> — bij voorkeur tussen 08:30 en 16:00.<br/>Voor spoedgevallen buiten openingstijden: bel het inspreeknummer voor instructies.</p>
              <p><a href="mailto:hallo@samenmondzorg.nl">hallo@samenmondzorg.nl</a></p>
            </div>

            <div className="info-card">
              <span className="eyebrow">Bereikbaarheid</span>
              <h4>Metro, fiets &amp; auto</h4>
              <p><strong>Metro:</strong> lijn 52, halte Noorderpark (5 min lopen).</p>
              <p><strong>Fiets:</strong> stalling voor de deur.</p>
              <p><strong>Auto:</strong> betaald parkeren in de wijk; oplaadpalen op 2 min lopen.</p>
            </div>

          </div>

          <div className="map">
            <iframe
              loading="lazy"
              title="Locatie Samen Mondzorg"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.910%2C52.388%2C4.928%2C52.398&layer=mapnik&marker=52.393%2C4.919"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="row-between">
            <div className="head">
              <span className="eyebrow">Vraag</span>
              <h2>Stuur ons een bericht</h2>
              <p>Niet dringend? Vul dan onderstaand formulier in en we reageren binnen één werkdag.</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
