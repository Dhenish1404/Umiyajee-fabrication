// Illustrated stand-ins for real photos. Each label is matched to a drawing (gate, jhula, shed...).
// To use a real photo: import it from src/assets/images and use it instead of ph('...').
const L=(a,b,c,d,k='m')=>`<line class="${k}" x1="${a}" y1="${b}" x2="${c}" y2="${d}"/>`
const R=(x,y,w,h,k='m')=>`<rect class="${k}" x="${x}" y="${y}" width="${w}" height="${h}"/>`
const C=(x,y,r,k='c')=>`<circle class="${k}" cx="${x}" cy="${y}" r="${r}"/>`
const rng=(a,b,s)=>{const o=[];for(let i=a;i<=b;i+=s)o.push(i);return o}
const art={
 gate:()=>R(80,230,34,400)+R(486,230,34,400)+rng(130,270,20).map(x=>L(x,300,x,600)+L(x+170+20,300,x+170+20,600)).join('')+[300,450,600].map(y=>L(114,y,486,y)).join('')+`<path class="c" d="M114 300Q300 190 486 300"/>`+C(210,375,28)+C(390,375,28)+L(300,230,300,600,'c'),
 window:()=>R(130,230,340,340)+R(146,246,308,308)+[243,357].map(x=>L(x,246,x,554)).join('')+[343,457].map(y=>L(146,y,454,y)).join('')+C(300,400,34)+C(300,400,10),
 shade:()=>L(110,420,110,650)+L(490,420,490,650)+L(200,380,200,650)+L(400,340,400,650)+L(80,330,520,260,'c')+L(80,370,520,300,'c')+rng(0,10,1).map(i=>L(80+i*44,330-i*6.4,80+i*44,370-i*6.4)).join('')+L(60,650,540,650),
 shed:()=>L(120,650,120,400)+L(480,650,480,400)+L(120,400,300,270,'c')+L(300,270,480,400,'c')+L(300,270,300,400)+L(120,400,480,400)+L(210,335,210,400)+L(390,335,390,400)+L(120,400,300,330)+L(300,330,480,400)+rng(150,450,50).map(x=>L(x,650,x,420,'m2')).join('')+L(60,650,540,650),
 railing:()=>L(120,560,480,300,'c')+L(120,680,480,420)+rng(150,450,30).map(x=>{const t=560-(x-120)*260/360;return L(x,t,x,t+120)}).join('')+L(120,560,120,680)+L(480,300,480,420),
 jhula:()=>L(150,220,450,220,'c')+L(150,220,100,650)+L(450,220,500,650)+L(250,220,250,470)+L(350,220,350,470)+R(215,470,170,26,'c')+L(215,470,215,400)+L(385,470,385,400)+L(215,400,385,400)+L(60,650,540,650),
 drying:()=>L(200,650,200,280)+L(400,650,400,280)+L(150,650,250,650)+L(350,650,450,650)+[280,350,420,490].map(y=>L(200,y,400,y)).join('')+R(215,357,50,110,'c')+R(300,357,70,70,'c')+R(240,287,60,56,'c'),
 weld:()=>R(100,540,190,40)+R(310,540,190,40)+L(440,250,330,500,'c')+L(432,244,452,256,'c')+rng(0,7,1).map(i=>{const a=Math.PI*(1+i/7);return L(300+14*Math.cos(a),540+14*Math.sin(a),300+80*Math.cos(a),540+80*Math.sin(a),'c')}).join('')+L(60,580,540,580),
 society:()=>[[110,360,150,280],[270,260,170,380],[450,420,60,220]].map(([x,y,w,h])=>R(x,y,w,h)+rng(y+30,y+h-90,50).map(yy=>rng(x+20,x+w-40,40).map(xx=>R(xx,yy,20,26)).join('')).join('')).join('')+R(250,600,100,40,'c')+L(60,640,540,640),
 structure:()=>L(100,300,500,300,'c')+L(100,420,500,420,'c')+rng(100,500,50).map((x,i)=>L(x,300,x,420)+(x<500?L(x,i%2?420:300,x+50,i%2?300:420):'')).join('')+L(100,420,100,650)+L(500,420,500,650)+L(60,650,540,650)}
const pick=l=>{l=l.toLowerCase();return/gate/.test(l)?'gate':/window/.test(l)?'window':/shade|patara|parking/.test(l)?'shade':/shed|factory/.test(l)?'shed':/rail|balcony|stair/.test(l)?'railing':/jhula|swing/.test(l)?'jhula':/drying|clothes/.test(l)?'drying':/weld|workshop/.test(l)?'weld':/society|societ|residential/.test(l)?'society':'structure'}
export const ph=(label,w=600,h=800,hue=24)=>'data:image/svg+xml;utf8,'+encodeURIComponent(
`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d4146"/><stop offset="1" stop-color="#1a1c1f"/></linearGradient></defs><style>.m,.m2,.c{fill:none;stroke-linecap:round;stroke-linejoin:round}.m{stroke:#d3d7dc;stroke-width:7}.m2{stroke:#8b9097;stroke-width:4}.c{stroke:#c8672a;stroke-width:7}</style><rect width="600" height="800" fill="url(#g)"/><g transform="translate(0,${(hue%7)*3})">${art[pick(label)]()}</g><text x="300" y="740" fill="#e8e8e8" font-family="sans-serif" font-size="28" text-anchor="middle" letter-spacing="2">${label.toUpperCase().replace(/&/g,'&amp;')}</text></svg>`)
