import {photos as P} from './photos'
export const gallery=[
 ['Custom Iron Gates',P.gate],['Iron Windows',P.window],['Aluminium Patara Shades',P.shade],
 ['Factory Sheds',P.shed],['Balcony Railings',P.railing],['Decorative Jhulas',P.jhula],
 ['Clothes Drying Stands',P.drying],['Industrial Welding',P.weld],
 ['Residential Societies',P.society],['Commercial Structures',P.structure]
].map(([label,src])=>({label,src}))

export const categories=['All','Residential Projects','Apartment and Society Projects','Factory and Industrial Sheds','Commercial Projects','Custom Fabrication']

// ADD PROJECTS HERE: p(category, title, image)
const p=(cat,title,img)=>({cat,title,img})
export const projects=[
 p('Residential Projects','Home Main Gate',P.gate),
 p('Residential Projects','Window Grills',P.window),
 p('Apartment and Society Projects','Society Gate & Canopy',P.society),
 p('Apartment and Society Projects','Balcony Railing',P.railing),
 p('Factory and Industrial Sheds','Industrial Shed',P.shed),
 p('Factory and Industrial Sheds','Aluminium Patara Shed',P.shade),
 p('Commercial Projects','Commercial Iron Structure',P.structure),
 p('Custom Fabrication','Garden Jhula',P.jhula),
 p('Custom Fabrication','Clothes Drying Stand',P.drying),
 p('Custom Fabrication','Industrial Welding',P.weld)]