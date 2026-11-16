import {ph} from './images'
export const gallery=['Custom Iron Gates','Iron Windows','Aluminium Patara Shades','Factory Sheds','Balcony Railings','Decorative Jhulas','Clothes Drying Stands','Industrial Welding','Residential Societies','Commercial Structures']
 .map((label,i)=>({label,src:ph(label,600,800,20+i*6)}))
export const categories=['All','Residential Projects','Apartment and Society Projects','Factory and Industrial Sheds','Commercial Projects','Custom Fabrication']
// ADD PROJECTS HERE: p(category, title, imageHeight). Swap ph(...) for real imports.
const p=(cat,title,h)=>({cat,title,img:ph(title,700,h)})
export const projects=[
 p('Residential Projects','Home Main Gate',500),p('Residential Projects','Window Grills',700),
 p('Apartment and Society Projects','Society Railings',600),p('Apartment and Society Projects','Parking Shade',500),
 p('Factory and Industrial Sheds','Factory Shed',650),p('Factory and Industrial Sheds','Steel Frame',500),
 p('Commercial Projects','Shop Structure',600),p('Custom Fabrication','Garden Jhula',700)]
