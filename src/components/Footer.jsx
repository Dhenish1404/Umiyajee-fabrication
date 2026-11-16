import {MessageCircle,Facebook,Instagram} from 'lucide-react'
import {company,waLink} from '../data/company'
export default function Footer(){return(<footer className="footer"><div className="container fgrid">
 <div><div className="brand"><span className="logo-slot">LOGO</span>{company.name}</div><p>Iron fabrication, welding and metal structures in Rajkot, Gujarat.</p></div>
 <div><h4>Quick Links</h4>{company.nav.map(([l,h])=><a key={h} href={h}>{l}</a>)}</div>
 <div><h4>Contact</h4><p>{company.phone}<br/>{company.address}</p>
  <div className="social"><a href={waLink()} aria-label="WhatsApp"><MessageCircle size={18}/></a><a href="#" aria-label="Facebook"><Facebook size={18}/></a><a href="#" aria-label="Instagram"><Instagram size={18}/></a></div></div></div>
 <p className="copy">© {new Date().getFullYear()} {company.name}. All rights reserved.</p></footer>)}
