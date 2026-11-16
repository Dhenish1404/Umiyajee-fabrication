import {motion} from 'framer-motion'
import {ShieldCheck} from 'lucide-react'
import {company} from '../data/company'
export default function WhyChooseUs(){return(<section className="section"><div className="container">
  <p className="eyebrow">WHY CHOOSE US</p><h2>Built on experience</h2>
  <div className="grid why">{company.why.map(([t,d],i)=><motion.div className="why-item" key={t} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
    <ShieldCheck/><h3>{t}</h3><p>{d}</p></motion.div>)}</div></div></section>)}
