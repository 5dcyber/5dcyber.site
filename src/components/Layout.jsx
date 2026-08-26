import{useEffect,useState}from'react';import{Link,NavLink,useLocation}from'react-router-dom';import{ArrowRight,Menu,X,MapPin,Phone,Mail}from'lucide-react';import logo from'../assets/logo.jpg';
export function Brand(){return <div className="brand"><img src={logo} alt="V Pilot shield"/><span className="word"><b><i>V</i> Pil<span className="compass"><u/><em/></span>t</b><small>CYBER SOLUTIONS LLP</small></span></div>}
const menus=[{to:'/frameworks',name:'Frameworks',cols:[['ProdSecOps','Production infrastructure security governed through 5D intelligence, RISM, workflow and SecLabs.'],['ProdSecApps','Product-security engineering from architecture and code through release and runtime.']]},{to:'/solutions',name:'Solutions',cols:[['PUDICA 5D Intelligence','Integrated intelligence correlating signals, state, consequence, authority and evidence.'],['ART Pilot','Automated risk treatment with state matching, proving, rollback and assurance.']]},{to:'/services',name:'Services',cols:[['Security Operations','Detection, remediation, incident response and identity governance.'],['Offensive Security','VAPT, red team, AppSec, API, mobile and cloud testing.'],['GRC and Resilience','ISO 27001, privacy, continuity, recovery and assurance.']]}];
export function Header(){const[o,setO]=useState(false);return <header className="header v46-approved-header"><Link to="/" aria-label="V Pilot home"><ApprovedVPilotBrand compact/></Link><nav className={o?'open':''}><NavLink to="/" onClick={()=>setO(false)}>Home</NavLink>{menus.map(m=><div className="navitem" key={m.name}><NavLink to={m.to} onClick={()=>setO(false)}>{m.name}</NavLink><div className={`mega ${m.cols.length===3?'wide':''}`}>{m.cols.map(([t,p])=><Link to={m.to} key={t}><span>ENTERPRISE CAPABILITY</span><h3>{t}</h3><p>{p}</p><b>Explore capability <ArrowRight/></b></Link>)}</div></div>)}<NavLink to="/5pilot-ops" onClick={()=>setO(false)}>5Pilot Ops</NavLink><NavLink to="/contact" onClick={()=>setO(false)}>Contact</NavLink><Link className="navcta" to="/contact">Executive briefing <ArrowRight/></Link></nav></header>}
export function Footer(){return <footer>
  <div className="footer-brand">
    <ApprovedVPilotBrand inverted />

    <p>
      Leadership in Cyber Operations.
      We build, pilot and secure the
      digital future.
    </p>
  </div>
</footer>
export function PageHero({eyebrow,title,text,children}){return <section className="home-hero shell"><div className="hero-copy"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="actions"><Link className="primary" to="/contact">Start a conversation <ArrowRight/></Link><Link className="secondary" to="/">Return home</Link></div></div>{children}<ApprovedShieldReactor /></section>}
export function CTA(){return <section className="cta shell"><div><span>EXECUTIVE DISCOVERY WORKSHOP</span><h2>Define the right security operating model for your business.</h2><p>Map priority services, threat context, authoritative data, decision roles, recovery objectives and measurable outcomes.</p></div><Link className="primary" to="/contact">Start a conversation <ArrowRight/></Link></section>}
export function ScrollTop(){const{pathname}=useLocation();useEffect(()=>window.scrollTo({top:0,behavior:'instant'}),[pathname]);return null}
