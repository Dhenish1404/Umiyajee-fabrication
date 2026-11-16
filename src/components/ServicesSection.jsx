import {Wrench} from 'lucide-react'
import {services} from '../data/services'
export default function ServicesSection(){return(<section id="services" className="section dark"><div className="container">
  <p className="eyebrow">SERVICES</p><h2>What we fabricate</h2>
  <div className="grid cards">{services.map(s=><article className="card" key={s.title}>
    <img loading="lazy" src={s.img} alt={s.title}/><div className="card-body"><Wrench size={18}/><h3>{s.title}</h3><p>{s.desc}</p></div></article>)}</div></div></section>)}
