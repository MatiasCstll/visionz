/* ════════════════════════════════════════════════════
   JUEGOS — Editá solo las propiedades de cada juego:
   
   img         → portada: aparece en la card de la grilla
                 y en el banner de la página de detalle
                 Rutas locales: 'imagenes/gta.jpg'
                 URLs externas: 'https://...'
   
   screenshots → array de 3 imágenes para la sección
                 "Capturas de pantalla" dentro del detalle
                 Si dejás '' en un slot → muestra un placeholder
                 Si ponés una URL/ruta → muestra la imagen
                 Al hacer click en una imagen se abre un
                 lightbox con navegación (← →)
════════════════════════════════════════════════════ */
let GAMES = [
  {
    id:'gta', title:'GTA San Andreas', short:'GTA',
    genre:'accion', genreLabel:'Acción', year:2004, dev:'Rockstar Games',
    rating:'9.5', size:'3.6 GB', version:'1.0 Original', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://e0.pxfuel.com/wallpapers/903/128/desktop-wallpaper-gta-san-andreas-wp-v9-ryder-cj-smoke.jpg',
    screenshots:[
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-07.jpg',  // ← reemplazá con tu imagen: 'imagenes/gta_ss1.jpg' o URL
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-03.jpg',  // ← screenshot 2
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-08.jpg',  // ← screenshot 3
    ],
    desc:'GTA San Andreas es uno de los juegos de mundo abierto más icónicos. Seguís la historia de Carl "CJ" Johnson que regresa a Los Santos tras la muerte de su madre. El mapa incluye tres ciudades enormes con libertad total para explorar, cientos de misiones y actividades secundarias.',
    cardDesc:'Mundo abierto épico. Libertad total en Los Santos.',
    link:'https://exe.io/matiascstll', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256MB'},{l:'CPU',v:'1 Ghz Pentium III ó AMD Athlon'},{l:'GPU',v:'64MB Video Card (Geforce 3 ó superior)'},{l:'Disco',v:'3.6 GB'},{l:'SO',v:'Microsoft Windows 2000/XP'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'minecraft', title:'Minecraft', short:'MC',
    genre:'sandbox', genreLabel:'Sandbox', year:2011, dev:'Mojang Studios',
    rating:'9.8', size:'1.2 GB', version:'Todas las versiones', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://acf.geeknetic.es/imgri/imagenes/noticias/2019/17832-minecraft-playstation-4-muestra.jpg?f=webp',
    screenshots:[
      'https://i.redd.it/1n8h7b0r4iv41.jpg',  // ← screenshot 1
      'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/3f/Beta.png/revision/latest?cb=20110711205506',  // ← screenshot 2
      'https://external-preview.redd.it/minecraft-4k-resolution-keeping-it-cool-v0-HtGMBw9x80toP8MQbAP0LLI2A4aH6s5UYhLfdnwZ-JM.jpg?width=640&crop=smart&auto=webp&s=a3066ded4fe7a958ad7fa583a1a4d34d436bdd75',  // ← screenshot 3
    ],
    desc:'Minecraft es el juego de sandbox más vendido de la historia. Construí estructuras, explorá biomas infinitos, sobreviví a la noche y enfrentá criaturas únicas. Modo creativo sin límites y modo supervivencia desafiante.',
    cardDesc:'Bloques infinitos. Creá, sobreviví, explorá.',
    link:'https://exe.io/Minecraft-TodaslasVersiones', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-3210 / AMD A8-7600 (o equivalente)'},{l:'GPU',v:'HD Graphics 4000 / AMD Radeon R5 (OpenGL 4.4)'},{l:'Disco',v:'1.5 GB'},{l:'SO',v:'Windows 10/11'},{l:'Java',v:'Java 8+'}]
  },
  {
    id:'cs16', title:'Counter-Strike 1.6', short:'CS',
    genre:'fps', genreLabel:'FPS', year:2000, dev:'Valve Corporation',
    rating:'9.2', size:'600 MB', version:'v48 Completo', lang:'Español', platform:'PC',
    cov:'cov-cs',
    img:'https://e0.pxfuel.com/wallpapers/843/828/desktop-wallpaper-counter-strike-1-6-pc-game-full-version-from-online-to-here-fantastic-this-shooting-video-game-pla-video-game-posters-game-counter-cs-1-6.jpg',
    screenshots:[
      'https://i.ytimg.com/vi/oIoueckSEtU/maxresdefault.jpg',  // ← screenshot 1
      'https://images.steamusercontent.com/ugc/938128623125307932/9E80F16DFF36539DE56DCC4212F66565BBD2C25E/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',  // ← screenshot 2
      'https://i.ytimg.com/vi/ipwcpPhc0dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLChzjIl2EWUnBMC1M4G1mb3N30wyQ',  // ← screenshot 3
    ],
    desc:'Counter-Strike 1.6 es el shooter táctico más icónico de todos los tiempos. Terroristas contra contraterroristas en mapas clásicos como de_dust2, cs_assault. Un juego que definió el género FPS competitivo.',
    cardDesc:'El shooter táctico que definió una generación.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'800 MHz'},{l:'GPU',v:'32 MB'},{l:'Disco',v:'600 MB'},{l:'SO',v:'Windows XP, Vista, 7, 8, 10 o superior'},{l:'Red',v:'Recomendada'}]
  },
  {
    id:'pes2021', title:'PES 2021', short:'PES',
    genre:'deportes', genreLabel:'Deportes', year:2020, dev:'Konami',
    rating:'8.7', size:'8.5 GB', version:'Edición Temporada', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://e1.pxfuel.com/desktop-wallpaper/761/74/desktop-wallpaper-watch-ubisoft-s-e3-2017-press-conference-livestream-right-here-dualshockers-pes-21.jpg',
    screenshots:[
      'https://d2r9epyceweg5n.cloudfront.net/stores/002/714/093/rte/pes21_05.jpg',  // ← screenshot 1
      'https://playmania438.com.ar/wp-content/uploads/2021/05/maxresdefault.jpg',  // ← screenshot 2
      'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc8fj6.jpg',  // ← screenshot 3
    ],
    desc:'PES 2021 es la entrega definitiva de fútbol de simulación. Con el mejor control de balón, física realista y modos como Master League y myClub. Incluye las mejores ligas y equipos del mundo.',
    cardDesc:'Fútbol de simulación. El control de balón perfecto.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-3470 / AMD FX 4350'},{l:'GPU',v:'NVIDIA GTX 670 / AMD Radeon HD 7870'},{l:'Disco',v:'40 GB de espacio disponible'},{l:'SO',v:'Windows 8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'re4', title:'Resident Evil 4', short:'RE4',
    genre:'terror', genreLabel:'Terror', year:2005, dev:'Capcom',
    rating:'9.7', size:'7.7 GB', version:'HD Project', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://e0.pxfuel.com/wallpapers/691/697/desktop-wallpaper-resident-evil-iphone-resident-evil-4-iphone.jpg',
    screenshots:[
      'https://assetsio.gnwcdn.com/-1540566508823.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',  // ← screenshot 1
      'https://cl2.buscafs.com/www.levelup.com/public/uploads/images/160529.jpg',  // ← screenshot 2
      'https://gaming-cdn.com/images/products/6530/screenshot/resident-evil-4-5-6-pack-pc-steam-wallpaper-3.jpg?v=1751027155',  // ← screenshot 3
    ],
    desc:'Leon S. Kennedy viaja a un remoto pueblo de España para rescatar a la hija del presidente. Con una cámara sobre el hombro que revolucionó los shooters, combate intenso y atmósfera opresiva. Una obra maestra absoluta.',
    cardDesc:'Tensión pura. Leon S. Kennedy en su peor pesadilla.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel® Core™2 Duo 2,4 GHz o superior, AMD Athlon™ X2 2,8 GHz o superior'},{l:'GPU',v:'256 MB NVIDIA® GeForce® 8800GTS o superior, ATI Radeon™ HD 4850 o superior'},{l:'Disco',v:' 15 GB de espacio disponible'},{l:'SO',v:'Windows XP o superior'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'cod4', title:'Call of Duty Modern Warfare 4', short:'COD',
    genre:'fps', genreLabel:'FPS', year:2007, dev:'Infinity Ward',
    rating:'9.4', size:'6.0 GB', version:'Modern Warfare', lang:'Español', platform:'PC',
    cov:'cov-cod',
    img:'https://e1.pxfuel.com/desktop-wallpaper/588/161/desktop-wallpaper-call-of-duty-call-of-duty-4-modern-warfare-games-cod-4.jpg',
    screenshots:[
      'https://wallpapers.com/images/high/callof-duty-modern-warfare-combat-scene-lx5cd57r1pr9k4o1.webp',  // ← screenshot 1
      'https://wallpapers.com/images/high/modern-warfare-eiffel-tower-defense-tm92kksnvfq69izi.webp',  // ← screenshot 2
      'https://cdn.mobygames.com/promos/6680579-call-of-duty-4-modern-warfare-screenshot-xbox-360-single-player-.jpg',  // ← screenshot 3
    ],
    desc:'Call of Duty 4: Modern Warfare cambió para siempre los shooters en primera persona. Campaña cinematográfica y multijugador competitivo adictivo que marcó una era y sentó las bases de los CoD modernos.',
    cardDesc:'El FPS que cambió todo. Campaña épica y multi brutal.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'P4 2.4GHz'},{l:'GPU',v:'nVidia 6600GT'},{l:'Disco',v:'6 GB'},{l:'SO',v:'Windows XP+'},{l:'DirectX',v:'v9.0c'}]
  },
];

/* ── STATE ── */
let currentUser=null, currentFilter='todos', lbImages=[], lbIndex=0;

/* ── STORAGE HELPERS ── */
const getUsers   =()=>{try{return JSON.parse(localStorage.getItem('vz_users')||'[]')}catch{return[]}};
const saveUsers  =u=>localStorage.setItem('vz_users',JSON.stringify(u));
const getSession =()=>{try{return JSON.parse(localStorage.getItem('vz_session')||'null')}catch{return null}};
const saveSession=u=>localStorage.setItem('vz_session',JSON.stringify(u));
const clearSess  =()=>localStorage.removeItem('vz_session');

/* ── STATS STORAGE ── */
const getViews    =()=>{try{return JSON.parse(localStorage.getItem('vz_views')||'{}')}catch{return{}}};
const saveViews   =v=>localStorage.setItem('vz_views',JSON.stringify(v));
const getDownloads=()=>{try{return JSON.parse(localStorage.getItem('vz_dlcount')||'{}')}catch{return{}}};
const saveDownloads=d=>localStorage.setItem('vz_dlcount',JSON.stringify(d));
const getRatings  =()=>{try{return JSON.parse(localStorage.getItem('vz_ratings')||'{}')}catch{return{}}};
const saveRatings =r=>localStorage.setItem('vz_ratings',JSON.stringify(r));
const getUserRatings=()=>{try{return JSON.parse(localStorage.getItem('vz_user_ratings')||'{}')}catch{return{}}};
const saveUserRatings=r=>localStorage.setItem('vz_user_ratings',JSON.stringify(r));
const getProfile  =uid=>{try{return JSON.parse(localStorage.getItem('vz_profile_'+uid)||'{}')}catch{return{}}};
const saveProfile2=(uid,p)=>localStorage.setItem('vz_profile_'+uid,JSON.stringify(p));
const getUserDl   =uid=>{try{return JSON.parse(localStorage.getItem('vz_udl_'+uid)||'[]')}catch{return[]}};
const saveUserDl  =(uid,d)=>localStorage.setItem('vz_udl_'+uid,JSON.stringify(d));

/* ── TRACK VIEW ── */
function trackView(id){
  const v=getViews(); v[id]=(v[id]||0)+1; saveViews(v);
}

/* ── TRACK DOWNLOAD ── */
function trackDownload(game){
  // contador global
  const d=getDownloads(); d[game.id]=(d[game.id]||0)+1; saveDownloads(d);
  // historial del usuario logueado
  if(currentUser){
    const hist=getUserDl(currentUser.id);
    hist.unshift({id:game.id,title:game.title,img:game.img||'',cov:game.cov,date:new Date().toISOString()});
    // máximo 50 entradas, sin duplicados consecutivos
    const deduped=hist.filter((x,i)=>i===0||x.id!==hist[i-1].id).slice(0,50);
    saveUserDl(currentUser.id,deduped);
  }
  renderTopDownloaded();
}

/* ── EYE TOGGLE ── */
function togglePass(inputId,btn){
  const inp=document.getElementById(inputId);
  if(inp.type==='password'){inp.type='text';btn.textContent='🙈';}
  else{inp.type='password';btn.textContent='👁';}
}

/* ── STAR RATING ── */
function renderStarRating(gameId){
  const ratings=getRatings();
  const userRatings=getUserRatings();
  const data=ratings[gameId]||{sum:0,count:0};
  const avg=data.count>0?(data.sum/data.count).toFixed(1):null;
  const userKey=currentUser?`${currentUser.id}_${gameId}`:null;
  const myRating=userKey?userRatings[userKey]||0:0;

  // promedio y conteo
  document.getElementById('dStarAvg').textContent=avg||'—';
  document.getElementById('dStarCount').textContent=
    data.count>0?`${data.count} calificaci${data.count===1?'ón':'ones'}`:'Sin calificaciones aún';

  // estrellas de display (promedio)
  const disp=document.getElementById('dStarsDisplay');
  disp.innerHTML='';
  for(let i=1;i<=5;i++){
    const s=document.createElement('span');
    s.className='star'+(avg&&i<=Math.round(parseFloat(avg))?' filled':'');
    s.textContent='★';
    disp.appendChild(s);
  }

  // tu calificación / prompt
  const yr=document.getElementById('dYourRating');
  const rp=document.getElementById('dRatePrompt');
  if(!currentUser){
    yr.innerHTML='';
    rp.innerHTML=`<button onclick="openModal('login')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;font-family:'Barlow',sans-serif;padding:0">Iniciá sesión para calificar</button>`;
  } else if(myRating>0){
    yr.innerHTML=`Tu calificación: <span>${'★'.repeat(myRating)}${'☆'.repeat(5-myRating)}</span>
      <button onclick="clearMyRating('${gameId}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:.7rem;margin-left:.5rem;font-family:'Barlow',sans-serif">✕ quitar</button>`;
    rp.innerHTML='';
  } else {
    yr.innerHTML='Calificá este juego:';
    rp.innerHTML=buildRateStars(gameId);
  }
}

function buildRateStars(gameId){
  let html='<div class="stars-display" style="margin-top:.4rem">';
  for(let i=1;i<=5;i++){
    html+=`<span class="star" onclick="rateGame('${gameId}',${i})"
      onmouseover="hoverStars(${i})" onmouseout="resetStars('${gameId}')">★</span>`;
  }
  return html+'</div>';
}

function hoverStars(n){
  const stars=document.getElementById('dRatePrompt').querySelectorAll('.star');
  stars.forEach((s,i)=>s.classList.toggle('filled',i<n));
}
function resetStars(gameId){
  const stars=document.getElementById('dRatePrompt').querySelectorAll('.star');
  stars.forEach(s=>s.classList.remove('filled'));
}

function rateGame(gameId,value){
  if(!currentUser){openModal('login');return;}
  const ratings=getRatings();
  const userRatings=getUserRatings();
  const key=`${currentUser.id}_${gameId}`;
  const prev=userRatings[key]||0;
  const data=ratings[gameId]||{sum:0,count:0};

  if(prev>0){data.sum-=prev;data.count--;} // quitar voto anterior
  data.sum+=value; data.count++;
  userRatings[key]=value;

  // actualizar rating del juego en GAMES array
  const g=GAMES.find(x=>x.id===gameId);
  if(g) g.rating=(data.sum/data.count).toFixed(1);

  saveRatings({...getRatings(),[gameId]:data});
  saveUserRatings(userRatings);
  renderStarRating(gameId);
  renderGrid(GAMES); // actualizar cards
  toast('¡Gracias por calificar! ⭐','success');
}

function clearMyRating(gameId){
  const ratings=getRatings();
  const userRatings=getUserRatings();
  const key=`${currentUser.id}_${gameId}`;
  const prev=userRatings[key]||0;
  if(!prev)return;
  const data=ratings[gameId]||{sum:0,count:0};
  data.sum-=prev; data.count=Math.max(0,data.count-1);
  delete userRatings[key];
  const g=GAMES.find(x=>x.id===gameId);
  if(g) g.rating=data.count>0?(data.sum/data.count).toFixed(1):'—';
  saveRatings({...getRatings(),[gameId]:data});
  saveUserRatings(userRatings);
  renderStarRating(gameId);
  renderGrid(GAMES);
  toast('Calificación removida.','info');
}

/* ── TOP DESCARGADOS ── */
function renderTopDownloaded(){
  const dlCounts=getDownloads();
  const sorted=[...GAMES]
    .map(g=>({...g,dlCount:dlCounts[g.id]||0}))
    .filter(g=>g.dlCount>0)
    .sort((a,b)=>b.dlCount-a.dlCount)
    .slice(0,6);

  const sec=document.getElementById('topSection');
  const list=document.getElementById('topList');
  if(!list)return;

  if(!sorted.length){sec.style.display='none';return;}
  sec.style.display='';
  list.innerHTML='';
  const rankClass=['gold','silver','bronze'];
  sorted.forEach((g,i)=>{
    const item=document.createElement('div');
    item.className='top-item';
    item.innerHTML=`
      <div class="top-rank ${rankClass[i]||''}">${i+1}</div>
      <div class="top-thumb ${g.cov}">${g.img?`<img src="${g.img}" alt="${g.title}">`:''+g.short}</div>
      <div class="top-info">
        <div class="top-name">${g.title}</div>
        <div class="top-meta">${g.genreLabel} · ${g.year}</div>
      </div>
      <div class="top-dl-count">↓ ${g.dlCount}</div>`;
    item.onclick=()=>showGame(g.id);
    list.appendChild(item);
  });
}

/* ── PERFIL ── */
function renderPerfil(){
  if(!currentUser){goPage('home');return;}
  const prof=getProfile(currentUser.id);
  const users=getUsers();
  const userData=users.find(u=>u.id===currentUser.id)||{};
  const joined=userData.joined?new Date(userData.joined):new Date();

  // avatar
  const ab=document.getElementById('pfAvatarBig');
  if(prof.avatar){ab.innerHTML=`<img src="${prof.avatar}" alt="avatar">`;ab.style.background='none';}
  else{ab.innerHTML=currentUser.username.charAt(0).toUpperCase();ab.style.background='';}

  document.getElementById('pfUsername').textContent=prof.displayName||currentUser.username;
  document.getElementById('pfSince').textContent='Miembro desde '+joined.toLocaleDateString('es-AR',{year:'numeric',month:'long'});
  document.getElementById('pfName').value=prof.displayName||currentUser.username;
  document.getElementById('pfLocation').value=prof.location||'';
  document.getElementById('pfBio').value=prof.bio||'';

  // stats
  const hist=getUserDl(currentUser.id);
  const rated=Object.keys(getUserRatings()).filter(k=>k.startsWith(currentUser.id+'_')).length;
  document.getElementById('pfStatDl').textContent=hist.length;
  document.getElementById('pfStatRated').textContent=rated;
  document.getElementById('pfStatMember').textContent=joined.getFullYear();
}

function handleAvatarUpload(e){
  const file=e.target.files[0]; if(!file)return;
  if(file.size>2*1024*1024){toast('La imagen debe ser menor a 2MB.','error');return;}
  const reader=new FileReader();
  reader.onload=ev=>{
    const prof=getProfile(currentUser.id);
    prof.avatar=ev.target.result;
    saveProfile2(currentUser.id,prof);
    renderPerfil();
    // actualizar avatar en header
    const ab=document.getElementById('avatarBtn');
    ab.innerHTML=`<img src="${ev.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    toast('Foto actualizada ✅','success');
  };
  reader.readAsDataURL(file);
}

function saveProfile(){
  if(!currentUser)return;
  const prof=getProfile(currentUser.id);
  prof.displayName=document.getElementById('pfName').value.trim()||currentUser.username;
  prof.location=document.getElementById('pfLocation').value.trim();
  prof.bio=document.getElementById('pfBio').value.trim();
  saveProfile2(currentUser.id,prof);
  document.getElementById('pfUsername').textContent=prof.displayName;
  document.getElementById('udName').textContent=prof.displayName;
  toast('Perfil actualizado ✅','success');
}

/* ── MIS DESCARGAS ── */
function renderDescargas(){
  if(!currentUser){goPage('home');return;}
  const hist=getUserDl(currentUser.id);
  const cont=document.getElementById('dlHistoryContainer');
  if(!hist.length){
    cont.innerHTML=`<div class="descargas-empty"><h3>Todavía no descargaste nada</h3><p>Explorá el catálogo y empezá a descargar tus juegos favoritos.</p></div>`;
    return;
  }
  cont.innerHTML='<div class="dl-history">'+hist.map(h=>{
    const g=GAMES.find(x=>x.id===h.id);
    const dateStr=new Date(h.date).toLocaleDateString('es-AR',{day:'2-digit',month:'short',year:'numeric'});
    const thumbHtml=h.img
      ?`<img src="${h.img}" alt="${h.title}">`
      :`<div style="width:100%;height:100%;background:var(--card);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:.65rem;color:rgba(255,255,255,.2)" class="${h.cov||''}">${h.title.substring(0,3).toUpperCase()}</div>`;
    return `<div class="dl-hist-item" onclick="showGame('${h.id}')">
      <div class="dl-hist-thumb">${thumbHtml}</div>
      <div class="dl-hist-info">
        <div class="dl-hist-name">${h.title}</div>
        <div class="dl-hist-date">Descargado el ${dateStr}</div>
      </div>
      ${g&&g.link!=='LINK_DEL_JUEGO'?`<a href="${g.link}" target="_blank" onclick="event.stopPropagation()" class="dl-hist-again">↓ Descargar de nuevo</a>`:''}
    </div>`;
  }).join('')+'</div>';
}

/* ── DYNAMIC DATES ── */
function updateDynamicDates(){
  const now=new Date();
  const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const mes=meses[now.getMonth()];
  const anio=now.getFullYear();
  const el=document.getElementById('novMes');
  if(el) el.textContent=`${mes} ${anio}`;
  // footer copyright
  document.querySelectorAll('.footer-year').forEach(e=>e.textContent=anio);
}

/* ── REFRESH HEADER with avatar ── */
function refreshHeaderAvatar(){
  if(!currentUser)return;
  const prof=getProfile(currentUser.id);
  if(prof.avatar){
    const ab=document.getElementById('avatarBtn');
    ab.innerHTML=`<img src="${prof.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
  }
  if(prof.displayName) document.getElementById('udName').textContent=prof.displayName;
}


/* ── INIT ── */
window.addEventListener('DOMContentLoaded',()=>{
  ensureAdmin(); renderGrid(GAMES); renderNovedades(); updateStats();
  updateDynamicDates();
  renderTopDownloaded();
  const s=getSession(); if(s){currentUser=s;refreshHeader();refreshHeaderAvatar();}
  document.getElementById('searchInput').addEventListener('input',onSearch);
  document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();});
  document.addEventListener('click',e=>{
    if(!document.getElementById('searchInput').closest('.search-wrap').contains(e.target))closeSearch();
    if(!document.getElementById('userArea').contains(e.target))closeDD();
  });
  document.getElementById('authModal').addEventListener('click',e=>{if(e.target===document.getElementById('authModal'))closeModal();});
  document.getElementById('lightbox').addEventListener('click',e=>{if(e.target===document.getElementById('lightbox'))closeLightbox();});
  document.addEventListener('keydown',e=>{
    if(document.getElementById('lightbox').classList.contains('open')){
      if(e.key==='ArrowLeft')lbNav(-1);
      if(e.key==='ArrowRight')lbNav(1);
      if(e.key==='Escape')closeLightbox();
    }
  });
});

function ensureAdmin(){
  const u=getUsers();
  if(!u.find(x=>x.isAdmin)){u.push({id:1,username:'admin',email:'admin@visionz.com',password:btoa('admin123'),isAdmin:true,joined:new Date().toISOString()});saveUsers(u);}
}

function updateStats(){
  const u=getUsers();
  document.getElementById('statUsers').textContent=u.length;
  document.getElementById('statGames').textContent=GAMES.length+'+';
  const a=document.getElementById('aStatUsers'),b=document.getElementById('aStatJuegos'),c=document.getElementById('aStatAdmins');
  if(a)a.textContent=u.length; if(b)b.textContent=GAMES.length; if(c)c.textContent=u.filter(x=>x.isAdmin).length;
}

/* ── PAGES ── */
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+name); if(!t)return;
  t.classList.add('active');
  document.documentElement.scrollTop=0; document.body.scrollTop=0;
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  if(name==='home')document.querySelectorAll('nav button')[0].classList.add('active');
  if(name==='novedades')document.querySelectorAll('nav button')[2].classList.add('active');
  if(name==='admin'){updateStats();renderAdminUsers();}
  if(name==='perfil'){renderPerfil();}
  if(name==='descargas'){renderDescargas();}
}

/* ── GRID ── */
function renderGrid(games,containerId='gamesGrid'){
  const grid=document.getElementById(containerId); if(!grid)return;
  grid.innerHTML='';
  if(!games.length){grid.innerHTML=`<div class="no-results"><h3>Sin resultados</h3><p>No encontramos juegos con ese filtro.</p></div>`;return;}
  games.forEach((g,i)=>{
    const d=document.createElement('div');
    d.className='game-card'; d.style.animationDelay=`${i*.06}s`;
    const badge=g.isNew?`<span class="c-badge new">Nuevo</span>`:g.hot?`<span class="c-badge hot">Popular</span>`:`<span class="c-badge">${g.genreLabel}</span>`;
    const coverHtml=g.img?`<img src="${g.img}" alt="${g.title}" class="cover-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:'' ;
    d.innerHTML=`${coverHtml}<div class="cover-ph ${g.cov}" style="${g.img?'display:none':''}">${g.short}</div>${badge}<span class="c-rating">★ ${g.rating}</span><div class="c-title-bar"><h2>${g.title}</h2><div class="c-yr">${g.year} · ${g.dev}</div></div><div class="c-hover"><h2>${g.title}</h2><p>${g.cardDesc}</p><span class="c-cta">Ver juego →</span></div>`;
    d.onclick=()=>showGame(g.id);
    grid.appendChild(d);
  });
}

/* ── FILTER ── */
function setFilter(genre,btn){
  currentFilter=genre;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const names={todos:'Todos los juegos',accion:'Acción',sandbox:'Sandbox',fps:'FPS',deportes:'Deportes',terror:'Terror'};
  document.getElementById('gridLabel').textContent=names[genre]||'Juegos';
  renderGrid(genre==='todos'?GAMES:GAMES.filter(g=>g.genre===genre));
  closeSearch();
}

/* ── NOVEDADES ── */
function renderNovedades(){
  const featured=[...GAMES].sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating)).slice(0,3);
  const ng=document.getElementById('novGrid'); if(!ng)return;
  ng.innerHTML='';
  featured.forEach((g,i)=>{
    const d=document.createElement('div');
    d.className='nov-card'+(i===0?' nov-big':'');
    const imgHtml=g.img?`<img src="${g.img}" alt="${g.title}" onerror="this.remove()">`: '';
    d.innerHTML=`<div class="nov-cover ${i===0?'':'tall'} ${g.cov}">${imgHtml}<span>${g.short}</span></div><div class="nov-info"><span class="nov-badge ${g.isNew?'':'upd'}">${g.isNew?'Nuevo':'Destacado'}</span><div class="nov-title">${g.title}</div><div class="nov-desc">${g.cardDesc}</div></div>`;
    d.onclick=()=>showGame(g.id);
    ng.appendChild(d);
  });
  const newer=[...GAMES].filter(g=>g.isNew||g.hot);
  renderGrid(newer.length?newer:GAMES.slice(0,4),'novAllGrid');
}

/* ── GAME DETAIL ── */
function showGame(id){
  const g=GAMES.find(x=>x.id===id); if(!g)return;

  // Registrar visita
  trackView(id);

  // Banner
  document.getElementById('dBg').className=`ghb-bg ${g.cov}`;
  document.getElementById('dArt').textContent=g.short;
  const ex=document.getElementById('dBannerImg'); if(ex)ex.remove();
  if(g.img){
    const img=document.createElement('img');
    img.id='dBannerImg'; img.src=g.img; img.className='ghb-bg-img'; img.alt=g.title;
    document.getElementById('dBg').appendChild(img);
    document.getElementById('dArt').style.display='none';
  } else { document.getElementById('dArt').style.display=''; }

  document.getElementById('dBread').textContent=g.title;
  document.getElementById('dTitle').textContent=g.title;
  document.getElementById('dDesc').textContent=g.desc;
  document.getElementById('dMeta').innerHTML=`<span class="m-badge">${g.genreLabel}</span><span class="m-badge b2">${g.dev}</span><span class="m-rat">★ ${g.rating}</span><span class="m-txt">${g.year} · PC</span>`;
  document.getElementById('dReqs').innerHTML=g.reqs.map(r=>`<div class="req-item"><div class="req-l">${r.l}</div><div class="req-v">${r.v}</div></div>`).join('');
  document.getElementById('dInfo').innerHTML=[{l:'Versión',v:g.version},{l:'Tamaño',v:g.size},{l:'Idioma',v:g.lang},{l:'Plataforma',v:g.platform}].map(r=>`<div class="dl-line"><span>${r.l}</span><span>${r.v}</span></div>`).join('');

  // Calificación de usuarios
  renderStarRating(id);

  // Screenshots
  lbImages=(g.screenshots||[]).filter(s=>s&&s.trim()!=='');
  const ssBox=document.getElementById('dScreenshots');
  ssBox.innerHTML='';
  const ssLabels=['Screenshot 1','Screenshot 2','Screenshot 3'];
  (g.screenshots||['','','']).forEach((src,idx)=>{
    const item=document.createElement('div');
    item.className='ss-item';
    if(src&&src.trim()!==''){
      item.classList.add('has-img');
      item.innerHTML=`<img src="${src}" alt="Screenshot ${idx+1}" onerror="this.parentElement.className='ss-item';this.parentElement.innerHTML='<div class=ss-placeholder><span>🖼️</span>${ssLabels[idx]}</div>'">`;
      const lbIdx=lbImages.indexOf(src);
      item.onclick=()=>openLightbox(lbIdx);
    } else {
      item.innerHTML=`<div class="ss-placeholder"><span>🖼️</span>${ssLabels[idx]}</div>`;
    }
    ssBox.appendChild(item);
  });

  // Botón de descarga — trackea la descarga al hacer click
  const btn=document.getElementById('dlBtn'), note=document.getElementById('dlNote');
  btn.onclick=null; btn.classList.remove('locked');
  if(g.link!=='LINK_DEL_JUEGO'){
    btn.href=g.link; btn.target='_blank';
    btn.textContent='↓ Descargar gratis';
    btn.onclick=()=>trackDownload(g);
    note.innerHTML=currentUser
      ? `Como: <strong style="color:var(--text)">${currentUser.username}</strong>`
      : `<span style="color:var(--green)">✓ Descarga gratuita · Sin registro</span>`;
  } else {
    btn.href='#'; btn.classList.add('locked');
    btn.textContent='⏳ Próximamente';
    note.innerHTML=`<span style="color:var(--muted)">Link de descarga en preparación</span>`;
  }
  goPage('game');
}

/* ── LIGHTBOX ── */
function openLightbox(index){
  if(!lbImages.length)return;
  lbIndex=index;
  document.getElementById('lbImg').src=lbImages[lbIndex];
  document.getElementById('lbCounter').textContent=`${lbIndex+1} / ${lbImages.length}`;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open');}
function lbNav(dir){
  lbIndex=(lbIndex+dir+lbImages.length)%lbImages.length;
  document.getElementById('lbImg').src=lbImages[lbIndex];
  document.getElementById('lbCounter').textContent=`${lbIndex+1} / ${lbImages.length}`;
}

/* ── SEARCH ── */
function onSearch(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  const dd=document.getElementById('searchDD');
  if(!q){dd.classList.remove('open');return;}
  const res=GAMES.filter(g=>g.title.toLowerCase().includes(q)||g.genreLabel.toLowerCase().includes(q)||g.dev.toLowerCase().includes(q));
  dd.innerHTML='';
  if(!res.length){dd.innerHTML=`<div class="search-empty">Sin resultados para "<strong>${q}</strong>"</div>`;}
  else res.forEach(g=>{
    const btn=document.createElement('button');
    btn.className='sri';
    btn.innerHTML=`<div class="sri-thumb ${g.cov}">${g.short}</div><div><div class="sri-name">${g.title}</div><div class="sri-genre">${g.genreLabel} · ${g.year}</div></div><span style="color:var(--gold);font-size:.78rem;margin-left:auto">★ ${g.rating}</span>`;
    btn.onclick=()=>{closeSearch();showGame(g.id);};
    dd.appendChild(btn);
  });
  dd.classList.add('open');
}
function closeSearch(){document.getElementById('searchDD').classList.remove('open');document.getElementById('searchInput').value='';}

/* ── MODAL ── */
function openModal(tab='login'){clearErrs();document.getElementById('mSuccess').classList.remove('show');document.getElementById('fLogin').classList.remove('hidden');document.getElementById('fRegister').classList.add('hidden');document.getElementById('authModal').classList.add('open');switchTab(tab);}
function closeModal(){document.getElementById('authModal').classList.remove('open');clearErrs();['lEmail','lPass','rUser','rEmail','rPass','rPass2'].forEach(id=>{const el=document.getElementById(id);if(el){el.value='';el.classList.remove('err-field');}});document.getElementById('mSuccess').classList.remove('show');}
function switchTab(tab){clearErrs();const isL=tab==='login';document.getElementById('tabL').classList.toggle('active',isL);document.getElementById('tabR').classList.toggle('active',!isL);document.getElementById('fLogin').classList.toggle('hidden',!isL);document.getElementById('fRegister').classList.toggle('hidden',isL);document.getElementById('mSuccess').classList.remove('show');}
function clearErrs(){document.querySelectorAll('.fg-err').forEach(e=>e.classList.remove('show'));document.querySelectorAll('.err-field').forEach(e=>e.classList.remove('err-field'));const ge=document.getElementById('gErr');ge.classList.remove('show');ge.textContent='';}
function showGErr(msg){const ge=document.getElementById('gErr');ge.textContent=msg;ge.classList.add('show');}
function fErr(inputId,errId,msg){document.getElementById(inputId).classList.add('err-field');const e=document.getElementById(errId);if(msg)e.textContent=msg;e.classList.add('show');return true;}
function doLogin(){
  clearErrs();
  const email=document.getElementById('lEmail').value.trim(),pass=document.getElementById('lPass').value;
  let err=false;
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('lEmail','lEmailErr','Email inválido.');
  if(!pass)err=fErr('lPass','lPassErr','Ingresá tu contraseña.')||err;
  if(err)return;
  const users=getUsers(),user=users.find(u=>u.email.toLowerCase()===email.toLowerCase());
  if(!user){showGErr('No existe cuenta con ese email.');return;}
  if(user.password!==btoa(pass)){showGErr('Contraseña incorrecta.');return;}
  loginOk(user);
}
function doRegister(){
  clearErrs();
  const username=document.getElementById('rUser').value.trim(),email=document.getElementById('rEmail').value.trim(),pass=document.getElementById('rPass').value,pass2=document.getElementById('rPass2').value;
  let err=false;
  if(username.length<3)err=fErr('rUser','rUserErr','Mínimo 3 caracteres.');
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('rEmail','rEmailErr','Email inválido.')||err;
  if(pass.length<6)err=fErr('rPass','rPassErr','Mínimo 6 caracteres.')||err;
  if(pass!==pass2)err=fErr('rPass2','rPass2Err','Las contraseñas no coinciden.')||err;
  if(err)return;
  const users=getUsers();
  if(users.find(u=>u.email.toLowerCase()===email.toLowerCase())){showGErr('Ya existe cuenta con ese email.');return;}
  if(users.find(u=>u.username.toLowerCase()===username.toLowerCase())){showGErr('Ese usuario ya está en uso.');return;}
  const nu={id:Date.now(),username,email,password:btoa(pass),isAdmin:false,joined:new Date().toISOString()};
  users.push(nu);saveUsers(users);updateStats();
  document.getElementById('fRegister').classList.add('hidden');
  document.getElementById('mSuccessMsg').textContent='¡Cuenta creada!';
  document.getElementById('mSuccessSub').textContent=`Bienvenido/a, ${username} 🎮`;
  document.getElementById('mSuccess').classList.add('show');
  setTimeout(()=>loginOk(nu),1800);
}
function loginOk(user){currentUser={id:user.id,username:user.username,email:user.email,isAdmin:user.isAdmin};saveSession(currentUser);refreshHeader();refreshHeaderAvatar();closeModal();toast(`¡Bienvenido/a, ${user.username}! 🎮`,'success');}
function refreshHeader(){
  document.getElementById('authBtns').classList.add('hidden');
  document.getElementById('userArea').classList.remove('hidden');
  document.getElementById('avatarBtn').textContent=currentUser.username.charAt(0).toUpperCase();
  document.getElementById('udName').textContent=currentUser.username;
  document.getElementById('udEmail').textContent=currentUser.email;
  const ab=document.getElementById('udAdminBadge'),ai=document.querySelector('.admin-only');
  if(currentUser.isAdmin){ab.classList.remove('hidden');ai.classList.remove('hidden');}
  else{ab.classList.add('hidden');ai.classList.add('hidden');}
}
function toggleDD(){document.getElementById('userDD').classList.toggle('open');}
function closeDD(){document.getElementById('userDD').classList.remove('open');}
function logout(){const name=currentUser?.username||'';currentUser=null;clearSess();document.getElementById('authBtns').classList.remove('hidden');document.getElementById('userArea').classList.add('hidden');closeDD();toast(`Hasta luego, ${name}! 👋`,'info');goPage('home');}

/* ── ADMIN ── */
function renderAdminUsers(){
  const users=getUsers(),tbody=document.getElementById('adminUsersTbody');if(!tbody)return;
  tbody.innerHTML='';
  users.forEach((u,i)=>{tbody.innerHTML+=`<tr><td style="color:var(--muted)">${i+1}</td><td><strong style="color:var(--white)">${u.username}</strong></td><td>${u.email}</td><td>${new Date(u.joined).toLocaleDateString('es-AR')}</td><td><span class="tbl-badge ${u.isAdmin?'admin':'ok'}">${u.isAdmin?'Admin':'Usuario'}</span></td><td><button class="admin-btn danger" onclick="deleteUser(${u.id})">Eliminar</button></td></tr>`;});
  if(!users.length)tbody.innerHTML='<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:1.5rem">No hay usuarios.</td></tr>';
}
function deleteUser(id){if(!confirm('¿Eliminar este usuario?'))return;saveUsers(getUsers().filter(u=>u.id!==id));renderAdminUsers();updateStats();toast('Usuario eliminado.','info');}
function adminAddGame(){
  const title=document.getElementById('af-title').value.trim(),dev=document.getElementById('af-dev').value.trim();
  const year=parseInt(document.getElementById('af-year').value)||2024,genre=document.getElementById('af-genre').value;
  const version=document.getElementById('af-version').value.trim()||'1.0',size=document.getElementById('af-size').value.trim()||'N/D';
  const rating=document.getElementById('af-rating').value.trim()||'8.0',link=document.getElementById('af-link').value.trim()||'LINK_DEL_JUEGO';
  const cardesc=document.getElementById('af-cardesc').value.trim(),desc=document.getElementById('af-desc').value.trim();
  if(!title||!dev||!desc){toast('Completá título, desarrolladora y descripción.','error');return;}
  const gl={accion:'Acción',fps:'FPS',sandbox:'Sandbox',deportes:'Deportes',terror:'Terror',aventura:'Aventura',rpg:'RPG'};
  const cm={accion:'cov-gta',fps:'cov-cs',sandbox:'cov-mc',deportes:'cov-pes',terror:'cov-re',aventura:'cov-mc',rpg:'cov-cod'};
  GAMES.push({id:title.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')+'-'+Date.now(),title,dev,year,genre,genreLabel:gl[genre]||genre,short:title.substring(0,4).toUpperCase(),rating,size,version,lang:'Español',platform:'PC',cov:cm[genre]||'cov-gta',img:'',screenshots:['','',''],desc:desc||'Descripción no disponible.',cardDesc:cardesc||desc.substring(0,60)+'...',link,hot:false,isNew:true,reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2 GHz'},{l:'GPU',v:'512 MB'},{l:'Disco',v:size},{l:'SO',v:'Windows 7+'},{l:'DirectX',v:'v11'}]});
  updateStats();renderGrid(GAMES);renderNovedades();
  document.getElementById('adminSuccess').classList.add('show');
  setTimeout(()=>document.getElementById('adminSuccess').classList.remove('show'),3000);
  toast(`"${title}" agregado ✅`,'success');clearAdminForm();
}
function clearAdminForm(){['af-title','af-dev','af-year','af-version','af-size','af-rating','af-link','af-cardesc','af-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});}

/* ── TOAST ── */
function toast(msg,type='info'){
  const c=document.getElementById('toastCont'),t=document.createElement('div');
  t.className=`toast ${type}`;
  t.innerHTML=`<span>${{success:'✅',error:'❌',info:'ℹ️'}[type]||'ℹ️'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>{t.style.transition='opacity .4s';t.style.opacity='0';setTimeout(()=>t.remove(),400);},3500);
}