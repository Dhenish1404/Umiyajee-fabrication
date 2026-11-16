import {useState} from 'react'
import {X} from 'lucide-react'
import {projects,categories} from '../data/projects'
export default function ProjectsSection(){
  const [cat,setCat]=useState('All'),[box,setBox]=useState(null)
  const list=cat==='All'?projects:projects.filter(p=>p.cat===cat)
  return(<section id="projects" className="section"><div className="container">
    <p className="eyebrow">OUR PROJECTS</p><h2>Selected work</h2>
    <div className="tabs">{categories.map(c=><button key={c} className={c===cat?'on':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
    <div className="masonry">{list.map(p=><button className="m-item" key={p.title} onClick={()=>setBox(p)}><img loading="lazy" src={p.img} alt={p.title}/><span>{p.title}</span></button>)}</div></div>
    {box&&<div className="lightbox" onClick={()=>setBox(null)} role="dialog"><button aria-label="Close"><X/></button><img src={box.img} alt={box.title}/></div>}
  </section>)}
