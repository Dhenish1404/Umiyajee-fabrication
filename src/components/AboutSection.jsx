import {photos as P} from '../data/photos'
import {company} from '../data/company'
const pts=['More than 25 years of fabrication experience','Based in Rajkot, Gujarat','Residential, commercial and industrial work','Apartments, buildings, residential societies and factories','Customized fabrication solutions','Quality workmanship and durable construction']
export default function AboutSection(){return(<section id="about" className="section"><div className="container two">
  <div className="collage"><img loading="lazy" src={P.gate} alt="Iron gate fabrication"/><img loading="lazy" src={P.weld} alt="Welding work"/></div>
  <div><p className="eyebrow">ABOUT US</p><h2>Craftsmanship rooted in Rajkot</h2>
  <p className="lead">{company.name} is a fabrication and metalworking business serving homes, societies and industry across Rajkot and nearby towns.</p>
  <ul className="ticks">{pts.map(t=><li key={t}>{t}</li>)}</ul></div></div></section>)}