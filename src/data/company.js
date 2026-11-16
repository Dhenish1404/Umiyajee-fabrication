// EDIT ALL BUSINESS DETAILS HERE. No component hard-codes them.
export const company={
 name:'Umiyajee Fabrication',
 contactPerson:'[YOUR NAME]',
 phone:'+91 XXXXX XXXXX', phoneRaw:'91XXXXXXXXXX',      // digits only, for tel: and wa.me
 whatsappRaw:'91XXXXXXXXXX',
 address:'[YOUR BUSINESS ADDRESS], Rajkot, Gujarat, India.',
 mapEmbedUrl:'',   // paste Google Maps "Embed a map" src URL here
 years:'25+',
 tagline:"RAJKOT'S TRUSTED FABRICATION SERVICES",
 headline:['Strong Structures.','Perfect Finishing.','Built to Last.'],
 intro:'With over 25 years of experience, Umiyajee Fabrication provides reliable iron fabrication, welding, aluminium shade work, and customized metal fabrication solutions for residential, commercial, and industrial projects.',
 primaryAreas:['University Road','Sadhu Vaswani Road','Raiya Road','Patidar Chowk','Parimal Society'],
 otherAreas:['Metoda','Shapar','Chotila','Dhrol'],
 nav:[['Home','#home'],['About Us','#about'],['Services','#services'],['Our Projects','#projects'],['Contact Us','#contact']],
 why:[['25+ Years of Experience','Decades of fabrication work'],['Residential & Industrial Expertise','Homes, societies, factories'],['Customized Fabrication','Made to your measurements'],['Strong, Durable Workmanship','Built to last'],['Large-Scale Project Experience','Sheds, buildings and societies'],['Reliable Customer Service','Clear communication, on-time work']]
}
export const waLink=(text='Hello, I would like a quote.')=>`https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(text)}`
