import {motion} from 'framer-motion'
import RotatingGallery3D from './RotatingGallery3D'
import {company} from '../data/company'
export default function HeroSection(){
  return(<section id="home" className="hero"><div className="container hero-grid">
    <div className="hero-gallery"><RotatingGallery3D/></div>
    <motion.div className="hero-text" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <p className="eyebrow">{company.tagline}</p>
      <h1>{company.headline.map(l=><span key={l}>{l}</span>)}</h1>
      <p className="lead">{company.intro}</p>
      <div className="cta"><a className="btn btn-primary" href="#projects">Explore Our Work</a><a className="btn btn-ghost" href="#contact">Contact Us</a></div>
      <div className="exp"><strong>{company.years}</strong><span>Years of Experience</span></div>
    </motion.div></div></section>)
}
