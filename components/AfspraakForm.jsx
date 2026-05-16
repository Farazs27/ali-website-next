"use client";

import { useState } from "react";
import Link from "next/link";

export default function AfspraakForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="confirm-card">
        <div className="check">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6E7565" strokeWidth="2"><path d="M3 12l4 4L21 4"/></svg>
        </div>
        <h2>Dankjewel!</h2>
        <p>We hebben je aanvraag ontvangen. Je hoort meestal binnen één werkdag van ons via e-mail of telefoon.</p>
        <p><Link className="btn btn--ghost" href="/">Terug naar home →</Link></p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="voornaam">Voornaam</label>
        <input id="voornaam" type="text" required placeholder="Anna" />
      </div>
      <div className="field">
        <label htmlFor="achternaam">Achternaam</label>
        <input id="achternaam" type="text" required placeholder="de Vries" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mailadres</label>
        <input id="email" type="email" required placeholder="naam@voorbeeld.nl" />
      </div>
      <div className="field">
        <label htmlFor="tel">Telefoon</label>
        <input id="tel" type="tel" required placeholder="06 …" />
      </div>

      <div className="field">
        <label htmlFor="patient">Ik ben…</label>
        <select id="patient">
          <option>Nieuwe patiënt</option>
          <option>Bestaande patiënt</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="treat">Type afspraak</label>
        <select id="treat">
          <option>Kennismakingsgesprek (gratis)</option>
          <option>Halfjaarlijkse controle</option>
          <option>Mondhygiëne</option>
          <option>Vulling / kleine behandeling</option>
          <option>Esthetische behandeling</option>
          <option>Anders / weet ik nog niet</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="datum">Voorkeursdatum</label>
        <input id="datum" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="dagdeel">Dagdeel</label>
        <select id="dagdeel">
          <option>Ochtend (08:00 – 12:00)</option>
          <option>Middag (12:00 – 17:00)</option>
          <option>Avond (di / do, 17:00 – 19:30)</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor="opm">Opmerkingen (optioneel)</label>
        <textarea id="opm" placeholder="Bijv. tandartsangst, lopende behandeling elders, of een specifieke klacht…"></textarea>
      </div>

      <div className="full" style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn btn--primary" type="submit">Afspraak aanvragen</button>
        <span style={{ fontSize: ".85rem", color: "var(--muted)" }}>Je krijgt binnen één werkdag een bevestiging.</span>
      </div>
    </form>
  );
}
