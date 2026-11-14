import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Phone, Menu, X, Sun, Snowflake, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openingHours, pub } from '@/data/pub';
import { facadeDesktop, facadeMobile } from '@/lib/pub-images';
import garden from '@/assets/garden-table.jpg';
import interior from '@/assets/pub-interior.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Ahoj ze Žernovníku | Pohostinství U Zvěřinů & zahrádka Ahoj' },
    { name: 'description', content: 'Zastavte se v Pohostinství U Zvěřinů a na zahrádce Ahoj v Žernovníku. Zimní a letní otevírací doba, nabídka, telefon a cesta k nám.' },
    { property: 'og:title', content: 'Ahoj ze Žernovníku | Pohostinství U Zvěřinů' },
    { property: 'og:description', content: 'V létě na zahrádce, v zimě v pohostinství. Žernovník 10 — otevírací doba, nabídka a kontakt.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const navigation = [ ['O nás', '#o-nas'], ['Nabídka', '#nabidka'], ['Otevírací doba', '#oteviraci-doba'], ['Kontakt', '#kontakt'] ];

const StarRule = () => <div className="star-rule" aria-hidden="true"><Star size={14} fill="currentColor" strokeWidth={0} /></div>;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#obsah">Přejít na obsah</a>
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand" href="#" aria-label="Ahoj — úvod"><span className="brand-name">AHOJ<span className="text-primary">.</span></span><span className="brand-note">POHOSTINSTVÍ U ZVĚŘINŮ<br />ŽERNOVNÍK</span></a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">{navigation.map(([name, href]) => <a key={href} href={href} className="nav-link">{name}</a>)}<a className="header-phone" href={pub.phoneHref}><Phone size={15} />{pub.phone}</a></nav>
        <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? 'Zavřít nabídku' : 'Otevřít nabídku'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav page-width" aria-label="Mobilní navigace">{navigation.map(([name, href]) => <a key={href} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}
    </header>
    <main id="obsah">
      <section className="page-width" aria-labelledby="intro-title">
        <div className="intro">
          <div><div className="eyebrow"><MapPin size={14} /> Žernovník · kousek od Černé Hory</div><h1 id="intro-title">Ahoj <span>ze Žernovníku</span></h1></div>
          <div className="intro-description"><p>Pohostinství U Zvěřinů & zahrádka Ahoj.<br />V létě venku, v zimě v teple. A vždycky rádi spolu.</p><div className="flex flex-wrap gap-3"><Button asChild variant="pub" size="pub"><a href="#oteviraci-doba">Otevírací doba <ArrowDown /></a></Button><Button asChild variant="pubOutline" size="pub"><a href={pub.mapHref} target="_blank" rel="noopener noreferrer">Jak se k nám dostat <ArrowUpRight /></a></Button></div></div>
        </div>
        <picture><source media="(max-width: 640px)" srcSet={facadeMobile} /><img className="hero-photo" src={facadeDesktop} width={1920} height={656} fetchPriority="high" alt="Skutečná dřevěná fasáda zahrádky Ahoj s ručním nápisem AHOJ, zavěšeným kolem a kamennou zdí." /></picture>
        <p className="photo-caption"><MapPin size={13} /> Tady nás najdete. Žernovník 10.</p>
      </section>
      <section id="oteviraci-doba" className="page-width hours-section" aria-labelledby="hours-title">
        <div className="section-heading"><div><div className="eyebrow">Kdy se zastavit</div><h2 id="hours-title">Otevírací doba</h2><StarRule /></div><p>Každé roční období má u nás své místo.</p></div>
        <div className="hours-grid">{openingHours.map(season => <article className="hours-panel" key={season.id}><div className="season-heading">{season.id === 'winter' ? <Snowflake size={27} strokeWidth={1.4} /> : <Sun size={28} strokeWidth={1.4} />}<div><h3>{season.name}</h3><p>{season.note}</p></div></div><p className="season-period">{season.period}</p><table aria-label={`${season.name} — ${season.period}`}><tbody>{season.rows.map(row => <tr key={row.days}><th scope="row">{row.days}</th><td className={row.closed ? 'closed' : undefined}>{row.time}</td></tr>)}</tbody></table></article>)}</div>
      </section>
      <section id="o-nas" className="about-section" aria-labelledby="about-title"><div className="page-width editorial-grid"><div className="editorial-copy"><div className="eyebrow">Pohostinství U Zvěřinů & zahrádka Ahoj</div><h2 id="about-title">Na chvíli zpomalit.<br />A dát si spolu řeč.</h2><StarRule /><p className="lead">Zastavte se u nás po výletě nebo jen tak na kus řeči.</p><p>Najdete nás v Žernovníku, kousek od Černé Hory. V létě vás přivítá venkovní zahrádka Ahoj — příjemná zastávka při procházce nebo cestě na kole po okolí.</p><p>Když se ochladí, přesuneme se do pohostinství. Místo venkovního posezení si užijete chvíli v teple uvnitř.</p></div><figure><img className="editorial-photo" src={garden} alt="Půllitr na venkovním dřevěném stole v odpoledním světle — ilustrační fotografie." loading="lazy" width={1200} height={800} /><figcaption className="illustration-note">Ilustrační fotografie · atmosféra letního posezení</figcaption></figure></div></section>
      <section id="nabidka" className="offer-section" aria-labelledby="offer-title"><div className="page-width editorial-grid"><figure><img className="editorial-photo" src={interior} alt="Jednoduchý dřevěný stůl a židle v hospodském interiéru — ilustrační fotografie." loading="lazy" width={1200} height={800} /><figcaption className="illustration-note">Ilustrační fotografie · atmosféra pohostinství</figcaption></figure><div className="editorial-copy"><div className="eyebrow">Co si dát</div><h2 id="offer-title">Něco na žízeň,<br />chvíle pro sebe.</h2><StarRule /><p>Na původním webu najdete točené pivo Černá Hora, limonádu, víno, kávu i čaj.</p><div className="offer-list"><div className="offer-row"><span>Černá Hora Ležák <small>· 0,5 l</small></span><strong>40 Kč</strong></div><div className="offer-row"><span>Točená limonáda <small>· 0,5 l</small></span><strong>25 Kč</strong></div><div className="offer-row"><span>Čaj <small>· 0,3 l</small></span><strong>25 Kč</strong></div></div><p className="offer-source">Ceny podle ceníku na původním webu. Aktuální platnost a nabídku jídel vám rádi potvrdíme telefonicky.</p><Button asChild variant="pubOutline" size="pub"><a href={pub.phoneHref}><Phone /> Zeptat se na nabídku</a></Button></div></div></section>
      <section id="kontakt" className="contact-section" aria-labelledby="contact-title"><div className="page-width contact-grid"><div><div className="eyebrow">Těšíme se na vás</div><h2 id="contact-title">Tak zase u nás. Ahoj!</h2><StarRule /><p>Pohostinství U Zvěřinů<br />& zahrádka Ahoj</p></div><div><h3>KDE NÁS NAJDETE</h3><p>{pub.address}<br />{pub.locality}</p><Button asChild variant="pubOutline" size="pub"><a href={pub.mapHref} target="_blank" rel="noopener noreferrer"><MapPin /> Navigovat do mapy <ArrowUpRight /></a></Button></div><div><h3>OZVĚTE SE NÁM</h3><p><a className="contact-link" href={pub.phoneHref}>{pub.phone}</a><br /><a className="contact-link" href={`mailto:${pub.email}`}>{pub.email}</a></p><Button asChild variant="pub" size="pub"><a href={pub.phoneHref}><Phone /> Zavolat</a></Button></div></div></section>
    </main>
    <footer className="site-footer"><div className="page-width footer-inner"><span className="footer-brand">AHOJ.</span><p>Pohostinství U Zvěřinů & zahrádka Ahoj · Žernovník</p><p>Malá hospoda. Obyčejně hezké chvíle.</p></div></footer>
  </>;
}
