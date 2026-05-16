import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Logo size={32} className="" />
                <span style={{ fontFamily: "var(--serif)", fontSize: "2rem" }}>samen</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  marginTop: "6px",
                }}
              >
                M O N D Z O R G
              </div>
            </div>
            <p className="tag">
              Persoonlijke mondzorg in Amsterdam Noord — een gezonde mond, een mooie glimlach.
            </p>
          </div>

          <div>
            <h5>Adres</h5>
            <p>
              Van der Pekstraat 21
              <br />
              1031 CR Amsterdam-Noord
            </p>
            <p>
              <Link href="/contact">Route bekijken →</Link>
            </p>
          </div>

          <div>
            <h5>Openingstijden</h5>
            <ul>
              <li>Ma — Do · 08:00 – 17:30</li>
              <li>Vrijdag · 08:00 – 16:00</li>
              <li>Za — Zo · Gesloten</li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="tel:+31204440000">+31 (0)20 444 0000</a>
              </li>
              <li>
                <a href="mailto:hallo@samenmondzorg.nl">hallo@samenmondzorg.nl</a>
              </li>
              <li>
                <Link href="/afspraak">Afspraak maken</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Samen Mondzorg · KvK 00000000</span>
          <span>
            <a href="#">Privacy</a> · <a href="#">Algemene voorwaarden</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
