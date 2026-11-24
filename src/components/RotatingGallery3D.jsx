import {useRef,useState,useMemo,useEffect,useCallback} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {ChevronLeft,ChevronRight} from 'lucide-react'
import {gallery} from '../data/projects'

const N=gallery.length, STEP=0.56, R=5.2      // angle between panels, wheel radius
const reduced=typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches

/** One hanging "cloth" panel on the wheel; transform/opacity driven from shared state. */
function Panel({i,src,st}){
  const mesh=useRef(),mat=useRef()
  const tex=useMemo(()=>new THREE.TextureLoader().load(src,t=>{
  t.colorSpace=THREE.SRGBColorSpace
  const ia=t.image.width/t.image.height, pa=1.8/2.4      // image vs panel aspect
  if(ia>pa){t.repeat.set(pa/ia,1);t.offset.set((1-pa/ia)/2,0)}   // crop sides (cover-fit)
  else{t.repeat.set(1,ia/pa);t.offset.set(0,(1-ia/pa)/2)}
  t.needsUpdate=true}),[src])
  const geo=useMemo(()=>new THREE.PlaneGeometry(1.8,2.4,10,14),[])
  const base=useMemo(()=>geo.attributes.position.array.slice(),[geo])
  useEffect(()=>()=>{tex.dispose();geo.dispose()},[tex,geo])
  useFrame(({clock})=>{
    const s=st.current
    let d=((i-s.pos)%N+N)%N; if(d>N/2)d-=N        // signed distance from active slot
    const m=mesh.current,ad=Math.abs(d)
    m.visible=ad<2.9; if(!m.visible)return
    const a=d*STEP
    m.position.set(Math.sin(a)*R,Math.sin(clock.elapsedTime*.8+i)*.04,Math.cos(a)*R-R)
    m.rotation.y=a                                  // faces outward like Ferris-wheel cabins
    m.scale.setScalar(1+Math.max(0,1-ad)*.2)
    mat.current.opacity=Math.max(0,1-Math.pow(ad/2.9,1.6))
    mat.current.color.setScalar(1-Math.min(ad,1)*.4)
    if(!reduced){                                   // cloth-like ripple, stronger while moving
      const p=geo.attributes.position.array,t=clock.elapsedTime,amp=.03+Math.min(Math.abs(s.vel)*6,.2)
      for(let j=0;j<p.length;j+=3){const x=base[j],y=base[j+1]
        p[j+2]=Math.sin(y*1.8+t*1.6+i)*amp*(1.1-ad*.2)+x*s.vel*(y+1.2)*.9}
      geo.attributes.position.needsUpdate=true
    }
  })
  return(<mesh ref={mesh} geometry={geo}><meshBasicMaterial ref={mat} map={tex} transparent side={THREE.DoubleSide} depthWrite={false}/></mesh>)
}

/** Eases the wheel position toward the target (interpolation, no sudden jumps). */
function Rig({st}){useFrame((_,dt)=>{const s=st.current,k=1-Math.exp(-dt*(reduced?14:5));const n=s.pos+(s.target-s.pos)*k;s.vel=(n-s.pos)/Math.max(dt,.001)*.06;s.pos=n})}

export default function RotatingGallery3D(){
  const wrap=useRef(),st=useRef({pos:0,target:0,vel:0}),[active,setActive]=useState(0)
  const go=useCallback(dir=>{const s=st.current;s.target+=dir;setActive((((Math.round(s.target))%N)+N)%N)},[])
  useEffect(()=>{
    const el=wrap.current;let acc=0,lock=0,x0=null
    const wheel=e=>{e.preventDefault();acc+=e.deltaY||e.deltaX;const now=performance.now()
      if(Math.abs(acc)>50&&now>lock){go(acc>0?1:-1);acc=0;lock=now+320}}
    const down=e=>{x0=e.clientX}
    const up=e=>{if(x0==null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>35)go(dx<0?1:-1)}
    el.addEventListener('wheel',wheel,{passive:false});el.addEventListener('pointerdown',down);window.addEventListener('pointerup',up)
    return()=>{el.removeEventListener('wheel',wheel);el.removeEventListener('pointerdown',down);window.removeEventListener('pointerup',up)}
  },[go])
  return(
    <div className="gallery" ref={wrap} role="region" aria-label="Fabrication work gallery">
      <Canvas dpr={[1,1.5]} camera={{position:[0,0,6.2],fov:40}} gl={{antialias:true,powerPreference:'low-power',alpha:true}}>
        <Rig st={st}/>{gallery.map((g,i)=><Panel key={i} i={i} src={g.src} st={st}/>)}
      </Canvas>
      <button className="g-arrow l" onClick={()=>go(-1)} aria-label="Previous"><ChevronLeft/></button>
      <button className="g-arrow r" onClick={()=>go(1)} aria-label="Next"><ChevronRight/></button>
      <div className="g-label" aria-live="polite">{String(active+1).padStart(2,'0')} / {N} — {gallery[active].label}</div>
    </div>)
}
