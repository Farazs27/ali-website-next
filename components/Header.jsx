"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/behandelingen", label: "Behandelingen" },
  { href: "/contact", label: "Route & contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="container">
        <nav className={`nav${open ? " is-open" : ""}`} id="nav">
          <Link className="nav__brand" href="/" aria-label="Samen Mondzorg — Home">
            <Logo />
            <span className="brandmark">
              <span className="b1">samen</span>
              <span className="b2">M O N D Z O R G</span>
            </span>
          </Link>

          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <Link className={isActive(l.href) ? "is-active" : ""} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mobile-only">
              <Link href="/afspraak">Afspraak maken</Link>
            </li>
          </ul>

          <div className="nav__cta">
            <Link
              className={`btn btn--primary btn--small${
                pathname === "/afspraak" ? " is-active" : ""
              }`}
              href="/afspraak"
            >
              Afspraak maken
            </Link>
          </div>

          <button
            className="nav__toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
