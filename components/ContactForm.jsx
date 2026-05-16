"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Bedankt — we nemen contact op binnen één werkdag.");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="naam">Naam</label>
        <input id="naam" name="naam" type="text" required placeholder="Voor- en achternaam" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mailadres</label>
        <input id="email" name="email" type="email" required placeholder="naam@voorbeeld.nl" />
      </div>
      <div className="field">
        <label htmlFor="tel">Telefoon (optioneel)</label>
        <input id="tel" name="tel" type="tel" placeholder="06 …" />
      </div>
      <div className="field">
        <label htmlFor="onderw">Onderwerp</label>
        <select id="onderw" name="onderw">
          <option>Algemene vraag</option>
          <option>Nieuwe patiënt</option>
          <option>Behandeling</option>
          <option>Verzekering &amp; tarieven</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="bericht">Bericht</label>
        <textarea id="bericht" name="bericht" required placeholder="Vertel kort waar je vraag over gaat…"></textarea>
      </div>
      <div className="full" style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn btn--primary" type="submit">Verstuur bericht</button>
        <span style={{ fontSize: ".85rem", color: "var(--muted)" }}>We reageren binnen één werkdag.</span>
      </div>
    </form>
  );
}
