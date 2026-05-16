import Link from "next/link";

export const metadata = {
  title: "Behandelingen",
  description:
    "Van halfjaarlijkse controle tot esthetische tandheelkunde. Bekijk al onze behandelingen bij Samen Mondzorg.",
};

export default function BehandelingenPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Onze zorg</span>
          <h1>Behandelingen</h1>
          <p>
            Van preventieve controle tot esthetische tandheelkunde — we bieden
            complete mondzorg voor het hele gezin, in een rustige en moderne
            omgeving.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="treat-grid">
            <article className="treat-card">
              <span className="num">01 — Preventie</span>
              <h3>Periodieke controle</h3>
              <p>
                Twee keer per jaar nemen we de tijd om je gebit grondig te
                onderzoeken. We sporen problemen vroeg op en adviseren over
                verzorging.
              </p>
              <span className="more">Halfjaarlijks · 30 min</span>
            </article>
            <article className="treat-card">
              <span className="num">02 — Hygiëne</span>
              <h3>Mondhygiëne</h3>
              <p>
                Onze mondhygiënisten verwijderen tandsteen en aanslag, en leren
                je hoe je je gebit thuis optimaal verzorgt.
              </p>
              <span className="more">45 — 60 min</span>
            </article>
            <article className="treat-card">
              <span className="num">03 — Restauratief</span>
              <h3>Vullingen</h3>
              <p>
                Tand­kleurige composietvullingen — onzichtbaar en duurzaam. We
                werken nauwkeurig en met minimale boortijd.
              </p>
              <span className="more">30 — 60 min</span>
            </article>
            <article className="treat-card">
              <span className="num">04 — Endodontologie</span>
              <h3>Wortelkanaal­behandelingen</h3>
              <p>
                Comfortabele wortelkanaalbehandelingen onder lokale verdoving,
                zodat je je tand kunt behouden.
              </p>
              <span className="more">60 — 90 min</span>
            </article>
            <article className="treat-card">
              <span className="num">05 — Prothetiek</span>
              <h3>Kronen &amp; bruggen</h3>
              <p>
                Hoogwaardige porseleinen kronen en bruggen, op maat gemaakt voor
                een natuurlijke uitstraling.
              </p>
              <span className="more">Meerdere bezoeken</span>
            </article>
            <article className="treat-card">
              <span className="num">06 — Esthetisch</span>
              <h3>Bleken</h3>
              <p>
                Veilig en effectief tandenbleken op kantoor of met
                thuisbleeklepels — voor een stralende glimlach.
              </p>
              <span className="more">60 — 90 min</span>
            </article>
            <article className="treat-card">
              <span className="num">07 — Esthetisch</span>
              <h3>Facings</h3>
              <p>
                Dunne porseleinen schilfers die kleur, vorm of stand van je
                voortanden corrigeren — voor een harmonieuze glimlach.
              </p>
              <span className="more">Meerdere bezoeken</span>
            </article>
            <article className="treat-card">
              <span className="num">08 — Implantologie</span>
              <h3>Implantaten</h3>
              <p>
                Een vaste oplossing voor een ontbrekende tand of meerdere tanden
                — comfortabel, esthetisch en duurzaam.
              </p>
              <span className="more">Op verwijzing</span>
            </article>
            <article className="treat-card">
              <span className="num">09 — Jongste patiënten</span>
              <h3>Kindertandheelkunde</h3>
              <p>
                Een rustige introductie aan de tandarts voor kinderen vanaf 2
                jaar. Met spel en uitleg op kindniveau.
              </p>
              <span className="more">15 — 30 min</span>
            </article>
          </div>

          <div className="cta-banner" style={{ marginTop: "60px" }}>
            <div>
              <h2>Niet zeker welke behandeling je nodig hebt?</h2>
              <p>
                Boek een vrijblijvende intake en we kijken samen wat past bij
                jouw situatie.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link
                className="btn btn--ghost"
                style={{ background: "var(--white)", color: "var(--sage-deep)" }}
                href="/afspraak"
              >
                Plan een intake →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
