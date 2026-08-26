import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  ApprovedShieldReactor,
  ApprovedVPilotBrand,
} from "./ApprovedVPilotBrand";

const menus = [
  {
    to: "/frameworks",
    name: "Frameworks",
    cols: [
      [
        "ProdSecOps",
        "Production infrastructure security governed through 5D intelligence, RISM, workflow and SecLabs.",
      ],
      [
        "ProdSecApps",
        "Product-security engineering from architecture and code through release and runtime.",
      ],
    ],
  },
  {
    to: "/solutions",
    name: "Solutions",
    cols: [
      [
        "PUDICA 5D Intelligence",
        "Integrated intelligence correlating signals, state, consequence, authority and evidence.",
      ],
      [
        "ART Pilot",
        "Automated risk treatment with state matching, proving, rollback and assurance.",
      ],
    ],
  },
  {
    to: "/services",
    name: "Services",
    cols: [
      [
        "Security Operations",
        "Detection, remediation, incident response and identity governance.",
      ],
      [
        "Offensive Security",
        "VAPT, red team, application security, API, mobile and cloud testing.",
      ],
      [
        "GRC and Resilience",
        "ISO/IEC 27001, privacy, continuity, recovery and assurance.",
      ],
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeNavigation = () => setOpen(false);

  return (
    <header className="header v46-approved-header">
      <Link to="/" aria-label="V Pilot home" onClick={closeNavigation}>
        <ApprovedVPilotBrand compact />
      </Link>

      <nav className={open ? "open" : ""}>
        <NavLink to="/" onClick={closeNavigation}>
          Home
        </NavLink>

        {menus.map((menu) => (
          <div className="navitem" key={menu.name}>
            <NavLink to={menu.to} onClick={closeNavigation}>
              {menu.name}
            </NavLink>

            <div className={menu.cols.length === 3 ? "mega wide" : "mega"}>
              {menu.cols.map(([title, description]) => (
                <Link to={menu.to} key={title} onClick={closeNavigation}>
                  <span>ENTERPRISE CAPABILITY</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <b>
                    Explore capability
                    <ArrowRight aria-hidden="true" />
                  </b>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <NavLink to="/5pilot-ops" onClick={closeNavigation}>
          5Pilot Ops
        </NavLink>

        <NavLink to="/contact" onClick={closeNavigation}>
          Contact
        </NavLink>

        <Link className="navcta" to="/contact" onClick={closeNavigation}>
          Executive briefing
          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="v46-approved-footer">
      <div className="footer-container shell">
        <div className="footer-brand">
          <ApprovedVPilotBrand inverted />

          <p>
            <strong>Leadership in Cyber Operations.</strong>
            <br />
            We build, pilot and secure the digital future through integrated
            intelligence, governed security and resilient operations.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h5>Frameworks</h5>
            <Link to="/frameworks">ProdSecOps</Link>
            <Link to="/frameworks">ProdSecApps</Link>
            <a
              href="https://prodsecops.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              prodsecops.com
            </a>
            <a
              href="https://prodsecapps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              prodsecapps.com
            </a>
          </div>

          <div className="footer-col">
            <h5>Solutions</h5>
            <Link to="/solutions">PUDICA 5D Intelligence</Link>
            <Link to="/solutions">ART Pilot</Link>
            <Link to="/5pilot-ops">5Pilot Ops</Link>
            <a
              href="https://pudica.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              pudica.io
            </a>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <Link to="/services">Security Operations</Link>
            <Link to="/services">Offensive Security</Link>
            <Link to="/services">GRC and Privacy</Link>
            <Link to="/services">Resilience and DFIR</Link>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin aria-hidden="true" />
                <span>
                  Suite no12, PulseBay 64, Subbiah Salai, Opposite to railway
                  station, Puducherry - 605001
                </span>
              </div>

              <a className="footer-contact-item" href="tel:+919442331700">
                <Phone aria-hidden="true" />
                <span>094423 31700</span>
              </a>

              <a
                className="footer-contact-item"
                href="mailto:enquiry@vpilot.org"
              >
                <Mail aria-hidden="true" />
                <span>enquiry@vpilot.org</span>
              </a>
            </div>

            <Link to="/contact">Contact and Careers</Link>
          </div>
        </div>
      </div>

      <div className="footer-ecosystem shell">
        <a href="https://vpilot.org" target="_blank" rel="noopener noreferrer">
          vpilot.org
        </a>
        <a
          href="https://prodsecops.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          prodsecops.com
        </a>
        <a
          href="https://prodsecapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          prodsecapps.com
        </a>
        <a href="https://5pilot.com" target="_blank" rel="noopener noreferrer">
          5pilot.com
        </a>
        <a href="https://pudica.io" target="_blank" rel="noopener noreferrer">
          pudica.io
        </a>
      </div>

      <div className="footer-bottom shell">
        <span>© 2026 V Pilot Cyber Solutions LLP. All rights reserved.</span>
        <span>
          Integrated Intelligence. Governed Security. Resilient Business.
        </span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="home-hero shell">
      <div className="hero-copy">
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>

        <div className="actions">
          <Link className="primary" to="/contact">
            Start a conversation
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="secondary" to="/">
            Return home
          </Link>
        </div>
      </div>

      {children || <ApprovedShieldReactor />}
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta shell">
      <div>
        <span>EXECUTIVE DISCOVERY WORKSHOP</span>
        <h2>Define the right security operating model for your business.</h2>
        <p>
          Map priority services, threat context, authoritative data, decision
          roles, recovery objectives and measurable outcomes.
        </p>
      </div>

      <Link className="primary" to="/contact">
        Start a conversation
        <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  );
}

export function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
