import {useState,useEffect} from 'react'
import {Menu,X,MessageCircle} from 'lucide-react'
import {company,waLink} from '../data/company'
export default function Header(){
  const [open,setOpen]=useState(false),[solid,setSolid]=useState(false)
  useEffect(()=>{const f=()=>setSolid(scrollY>20);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
  return(<header className={'header'+(solid?' solid':'')}><div className="container bar">
    <a href="#home" className="brand"><span className="logo-slot" aria-hidden>LOGO</span><span>{company.name}</span></a>
    <nav className={open?'open':''}>{company.nav.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{l}</a>)}
      <a className="btn btn-primary sm" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={16}/>Get a Quote</a></nav>
    <button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></header>)
}
