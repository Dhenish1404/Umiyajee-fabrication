import {MapPin} from 'lucide-react'
import {company} from '../data/company'
const Tag=({t,c})=><li><MapPin size={14}/>{t}{c?', Rajkot':''}</li>
export default function ServiceAreas(){return(<section className="section dark"><div className="container">
  <p className="eyebrow">SERVICE AREAS</p><h2>Where we work</h2>
  <p className="lead">We undertake residential, commercial and industrial projects across Rajkot and surrounding locations.</p>
  <h3>Primary areas</h3><ul className="chips">{company.primaryAreas.map(a=><Tag key={a} t={a} c/>)}</ul>
  <h3>Also serving</h3><ul className="chips">{company.otherAreas.map(a=><Tag key={a} t={a}/>)}</ul></div></section>)}
