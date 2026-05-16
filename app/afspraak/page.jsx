import AfspraakForm from "@/components/AfspraakForm";

export const metadata = {
  title: "Afspraak maken",
  description: "Maak online een afspraak bij Samen Mondzorg in Amsterdam-Noord. Snel, eenvoudig en in vertrouwde handen.",
};

export default function AfspraakPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Afspraak maken</span>
          <h1>Plan je <em>bezoek</em></h1>
          <p>Vertel ons kort wie je bent en wanneer het uitkomt — we bevestigen je afspraak meestal binnen één werkdag.</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <AfspraakForm />
            </div>

            <aside>
              <div className="info-card" style={{ marginBottom: "18px" }}>
                <span className="eyebrow">Liever bellen?</span>
                <h4>+31 (0)20 444 0000</h4>
                <p>Onze receptie staat op werkdagen voor je klaar tussen 08:00 en 17:00.</p>
                <p><a className="btn btn--primary btn--small" href="tel:+31204440000">Bel ons direct</a></p>
              </div>
              <div className="info-card" style={{ marginBottom: "18px" }}>
                <span className="eyebrow">Spoedgeval</span>
                <h4>Acute pijn of trauma?</h4>
                <p>Bel ons direct. Buiten openingstijden krijg je instructies via ons inspreeknummer voor spoedhulp in Amsterdam.</p>
              </div>
              <div className="info-card">
                <span className="eyebrow">Vergoeding</span>
                <h4>Verzekering</h4>
                <p>We hebben contracten met alle grote zorgverzekeraars en hanteren standaardtarieven van de Nederlandse Zorgautoriteit (NZa).</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="values">
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <h4>Snelle bevestiging</h4>
              <p>Reactie binnen één werkdag.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 12l4 4L21 4"/></svg>
              <h4>Geen wachtlijst</h4>
              <p>Voor nieuwe patiënten meestal binnen 2 weken terecht.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-8.8 1.5A5.5 5.5 0 0 0 3.2 4.6c-2 2-2 5.4 0 7.5l8.8 8.7 8.8-8.7c2-2.1 2-5.4 0-7.5z"/></svg>
              <h4>Eerste kennismaking gratis</h4>
              <p>Geheel vrijblijvend voor nieuwe patiënten.</p>
            </div>
            <div className="values__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
              <h4>Avondopeningen</h4>
              <p>Op dinsdag en donderdag tot 19:30.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
