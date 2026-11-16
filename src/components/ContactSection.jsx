import {useState} from 'react'
import {Phone,MessageCircle} from 'lucide-react'
import {company,waLink} from '../data/company'
import {services} from '../data/services'
export default function ContactSection(){
  const [f,setF]=useState({name:'',phone:'',service:services[0].title,msg:''})
  const set=k=>e=>setF({...f,[k]:e.target.value})
  // Frontend-only: nothing is sent to a server. Submit opens WhatsApp with the details pre-filled.
  const submit=e=>{e.preventDefault();window.open(waLink(`Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\n${f.msg}`),'_blank')}
  return(<section id="contact" className="section dark"><div className="container two">
   <div><p className="eyebrow">CONTACT US</p><h2>Request a quote</h2>
    <p><b>{company.name}</b><br/>Contact: {company.contactPerson}<br/>Phone: {company.phone}<br/>WhatsApp: {company.phone}<br/>{company.address}</p>
    <div className="cta"><a className="btn btn-primary" href={`tel:+${company.phoneRaw}`}><Phone size={16}/>Call Now</a><a className="btn btn-ghost" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={16}/>WhatsApp</a></div>
    <div className="map">{company.mapEmbedUrl?<iframe title="Map" src={company.mapEmbedUrl} loading="lazy"/>:<span>Google Maps placeholder — set mapEmbedUrl in data/company.js</span>}</div></div>
   <form onSubmit={submit}><input required placeholder="Name" value={f.name} onChange={set('name')}/><input required type="tel" placeholder="Phone Number" value={f.phone} onChange={set('phone')}/>
    <select value={f.service} onChange={set('service')}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select>
    <textarea rows="4" placeholder="Message" value={f.msg} onChange={set('msg')}/>
    <button className="btn btn-primary">Send via WhatsApp</button><small>This form does not store or submit data to any server; it opens WhatsApp with your message.</small></form></div></section>)}
