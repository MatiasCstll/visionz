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

   Opcionales:
   banner      → imagen horizontal para el detalle y el carrusel
   descEn / cardDescEn → descripciones en inglés
   trailer     → tráiler del detalle: número de video de Steam
                 ('256768283'), un link a un .mp4, o 'yt:ID' de YouTube
   update      → link del Update / parche del juego. Aparece como un
                 botón chico debajo de "Descargar" (solo si lo ponés)
   nivel       → requisitos 'bajo', 'medio' o 'alto'. Si no lo ponés
                 se calcula solo por la RAM (≤2 GB bajo, ≤6 GB medio,
                 más de 6 GB alto)
════════════════════════════════════════════════════ */
let GAMES = [
  {
    id:'gta', title:'GTA San Andreas', short:'GTA',
    genre:'accion', genreLabel:'Acción', year:2004, dev:'Rockstar Games',
    rating:'9.5', size:'3.6 GB', version:'1.0 Original', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/12120/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/12120/library_hero.jpg',
    screenshots:[
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-07.jpg',
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-03.jpg',
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-08.jpg',
    ],
    desc:'GTA San Andreas es uno de los juegos de mundo abierto más icónicos. Seguís la historia de Carl "CJ" Johnson que regresa a Los Santos tras la muerte de su madre. El mapa incluye tres ciudades enormes con libertad total para explorar, cientos de misiones y actividades secundarias.',
    descEn:"GTA San Andreas is one of the most iconic open-world games ever made. You follow Carl \"CJ\" Johnson as he returns to Los Santos after his mother's death. The map spans three huge cities with total freedom to explore, hundreds of missions and side activities.",
    cardDesc:'Mundo abierto épico. Libertad total en Los Santos.',
    cardDescEn:'Epic open world. Total freedom in Los Santos.',
    link:'https://exe.io/matiascstll', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256MB'},{l:'CPU',v:'1 Ghz Pentium III ó AMD Athlon'},{l:'GPU',v:'64MB Video Card (Geforce 3 ó superior)'},{l:'Disco',v:'3.6 GB'},{l:'SO',v:'Microsoft Windows 2000/XP'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'minecraft', title:'Minecraft', short:'MC',
    genre:'sandbox', genreLabel:'Sandbox', year:2011, dev:'Mojang Studios',
    rating:'9.8', size:'1.2 GB', version:'1.12.2', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://acf.geeknetic.es/imgri/imagenes/noticias/2019/17832-minecraft-playstation-4-muestra.jpg?f=webp',
    screenshots:[
      'https://i.redd.it/1n8h7b0r4iv41.jpg',
      'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/3f/Beta.png/revision/latest?cb=20110711205506',
      'https://external-preview.redd.it/minecraft-4k-resolution-keeping-it-cool-v0-HtGMBw9x80toP8MQbAP0LLI2A4aH6s5UYhLfdnwZ-JM.jpg?width=640&crop=smart&auto=webp&s=a3066ded4fe7a958ad7fa583a1a4d34d436bdd75',
    ],
    desc:'Minecraft es el juego de sandbox más vendido de la historia. Construí estructuras, explorá biomas infinitos, sobreviví a la noche y enfrentá criaturas únicas. Modo creativo sin límites y modo supervivencia desafiante.',
    descEn:'Minecraft is the best-selling sandbox game in history. Build structures, explore endless biomes, survive the night and face unique creatures. A limitless creative mode and a challenging survival mode.',
    cardDesc:'Bloques infinitos. Creá, sobreviví, explorá.',
    cardDescEn:'Infinite blocks. Create, survive, explore.',
    link:'https://exe.io/Minecraft-TodaslasVersiones', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-3210 / AMD A8-7600 (o equivalente)'},{l:'GPU',v:'HD Graphics 4000 / AMD Radeon R5 (OpenGL 4.4)'},{l:'Disco',v:'1.5 GB'},{l:'SO',v:'Windows 10/11'},{l:'Java',v:'Java 8+'}]
  },
  {
    id:'cs16', title:'Counter-Strike 1.6', short:'CS',
    genre:'fps', genreLabel:'FPS', year:2000, dev:'Valve Corporation',
    rating:'9.2', size:'600 MB', version:'v48 Completo', lang:'Español', platform:'PC',
    cov:'cov-cs',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/10/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/10/library_hero.jpg',
    screenshots:[
      'https://i.ytimg.com/vi/oIoueckSEtU/maxresdefault.jpg',
      'https://images.steamusercontent.com/ugc/938128623125307932/9E80F16DFF36539DE56DCC4212F66565BBD2C25E/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      'https://i.ytimg.com/vi/ipwcpPhc0dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLChzjIl2EWUnBMC1M4G1mb3N30wyQ',
    ],
    desc:'Counter-Strike 1.6 es el shooter táctico más icónico de todos los tiempos. Terroristas contra contraterroristas en mapas clásicos como de_dust2, cs_assault. Un juego que definió el género FPS competitivo.',
    descEn:'Counter-Strike 1.6 is the most iconic tactical shooter of all time. Terrorists versus counter-terrorists on classic maps like de_dust2 and cs_assault. A game that defined competitive FPS.',
    cardDesc:'El shooter táctico que definió una generación.',
    cardDescEn:'The tactical shooter that defined a generation.',
    link:'https://exe.io/Count3Strlk316v', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'800 MHz'},{l:'GPU',v:'32 MB'},{l:'Disco',v:'600 MB'},{l:'SO',v:'Windows XP, Vista, 7, 8, 10 o superior'},{l:'Red',v:'Recomendada'}]
  },
  {
    id:'pes2021', title:'PES 2021', short:'PES',
    genre:'deportes', genreLabel:'Deportes', year:2020, dev:'Konami',
    rating:'8.7', size:'8.5 GB', version:'Edición Temporada', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1259970/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1259970/library_hero.jpg',
    screenshots:[
      'https://d2r9epyceweg5n.cloudfront.net/stores/002/714/093/rte/pes21_05.jpg',
      'https://playmania438.com.ar/wp-content/uploads/2021/05/maxresdefault.jpg',
      'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc8fj6.jpg',
    ],
    trailer:'256803629',
    desc:'PES 2021 es la entrega definitiva de fútbol de simulación. Con el mejor control de balón, física realista y modos como Master League y myClub. Incluye las mejores ligas y equipos del mundo.',
    descEn:'PES 2021 is the definitive football simulation entry. The best ball control, realistic physics and modes like Master League and myClub. Features the best leagues and teams in the world.',
    cardDesc:'Fútbol de simulación. El control de balón perfecto.',
    cardDescEn:'Football simulation. Perfect ball control.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-3470 / AMD FX 4350'},{l:'GPU',v:'NVIDIA GTX 670 / AMD Radeon HD 7870'},{l:'Disco',v:'40 GB de espacio disponible'},{l:'SO',v:'Windows 8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'re4', title:'Resident Evil 4', short:'RE4',
    genre:'terror', genreLabel:'Terror', year:2005, dev:'Capcom',
    rating:'9.7', size:'7.7 GB', version:'HD Project', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/254700/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/254700/library_hero.jpg',
    screenshots:[
      'https://assetsio.gnwcdn.com/-1540566508823.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
      'https://cl2.buscafs.com/www.levelup.com/public/uploads/images/160529.jpg',
      'https://gaming-cdn.com/images/products/6530/screenshot/resident-evil-4-5-6-pack-pc-steam-wallpaper-3.jpg?v=1751027155',
    ],
    trailer:'2030736',
    desc:'Leon S. Kennedy viaja a un remoto pueblo de España para rescatar a la hija del presidente. Con una cámara sobre el hombro que revolucionó los shooters, combate intenso y atmósfera opresiva. Una obra maestra absoluta.',
    descEn:"Leon S. Kennedy travels to a remote village in Spain to rescue the president's daughter. With an over-the-shoulder camera that revolutionized shooters, intense combat and an oppressive atmosphere. An absolute masterpiece.",
    cardDesc:'Tensión pura. Leon S. Kennedy en su peor pesadilla.',
    cardDescEn:"Pure tension. Leon S. Kennedy's worst nightmare.",
    link:'https://exe.io/ReSiindet3VILv', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel® Core™2 Duo 2,4 GHz o superior, AMD Athlon™ X2 2,8 GHz o superior'},{l:'GPU',v:'256 MB NVIDIA® GeForce® 8800GTS o superior, ATI Radeon™ HD 4850 o superior'},{l:'Disco',v:' 15 GB de espacio disponible'},{l:'SO',v:'Windows XP o superior'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'cod4', title:'Call of Duty Modern Warfare 4', short:'COD',
    genre:'fps', genreLabel:'FPS', year:2007, dev:'Infinity Ward',
    rating:'9.4', size:'6.0 GB', version:'Modern Warfare', lang:'Español', platform:'PC',
    cov:'cov-cod',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/7940/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/7940/library_hero.jpg',
    screenshots:[
      'https://wallpapers.com/images/high/callof-duty-modern-warfare-combat-scene-lx5cd57r1pr9k4o1.webp',
      'https://wallpapers.com/images/high/modern-warfare-eiffel-tower-defense-tm92kksnvfq69izi.webp',
      'https://cdn.mobygames.com/promos/6680579-call-of-duty-4-modern-warfare-screenshot-xbox-360-single-player-.jpg',
    ],
    trailer:'998',
    desc:'Call of Duty 4: Modern Warfare cambió para siempre los shooters en primera persona. Campaña cinematográfica y multijugador competitivo adictivo que marcó una era y sentó las bases de los CoD modernos.',
    descEn:'Call of Duty 4: Modern Warfare changed first-person shooters forever. A cinematic campaign and addictive competitive multiplayer that defined an era and laid the foundation for modern CoD.',
    cardDesc:'El FPS que cambió todo. Campaña épica y multi brutal.',
    cardDescEn:'The FPS that changed everything. Epic campaign, brutal MP.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'P4 2.4GHz'},{l:'GPU',v:'nVidia 6600GT'},{l:'Disco',v:'6 GB'},{l:'SO',v:'Windows XP+'},{l:'DirectX',v:'v9.0c'}]
  },
    {
    id:'nfsmw', title:'Need for Speed: Most Wanted', short:'NFSMW',
    genre:'conducción', genreLabel:'Conducción', year:2005, dev:'Electronic Arts',
    rating:'9.3', size:'2.79 GB', version:'v1.3', lang:'Español', platform:'PC',
    cov:'cov-nfsmw',
    img:'https://static.wikia.nocookie.net/nfs/images/7/76/NFSMW_Boxart.jpg/revision/latest?cb=20200127230308&path-prefix=es',
    screenshots:[
      'https://preview.redd.it/nfs-most-wanted-2005-x360-graphics-tweaks-on-pc-v0-9xqqn5ak9zja1.png?width=1080&crop=smart&auto=webp&s=fbdce2e77917cb936670a73ce6dee6c95a859bfd',
      'https://m.media-amazon.com/images/M/MV5BMWI3YmY1OGEtYmEzMC00MDI0LWI3ZjYtZDQyZTA4ZTVhNGViXkEyXkFqcGc@._V1_.jpg',
      'https://images.steamusercontent.com/ugc/2431257256130088664/A895D2724A09B5084041D221BDA3BEDD7700E598/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    ],
    desc:'Need for Speed: Most Wanted es un juego de carreras arcade que combina velocidad, persecuciones policiales y una historia dentro del mundo ilegal de las carreras callejeras. Lanzado en 2005 por EA Black Box y Electronic Arts, es uno de los títulos más icónicos de la saga.',
    descEn:'Need for Speed: Most Wanted is an arcade racer that blends speed, police chases and a story set in the world of illegal street racing. Released in 2005 by EA Black Box and Electronic Arts, it is one of the most iconic games in the series.',
    cardDesc:'Corré, escapá y convertite en el más buscado.',
    cardDescEn:'Race, escape and become the most wanted.',
    link:'https://exe.io/matiascstll', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256MB'},{l:'CPU',v:'1.4 GHz'},{l:'GPU',v:'32 MB VRAM (ATI Radeon 7500 o superior)'},{l:'Disco',v:'3 GB'},{l:'SO',v:'Windows XP o superior'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ════════ JUEGOS NUEVOS ════════
     Las portadas (img) vienen de Steam. Si alguna no carga,
     se muestra el placeholder de color automáticamente.
     Reemplazá 'LINK_DEL_JUEGO' por tu link acortado y
     completá los screenshots cuando los tengas. */

  /* ── RPG ── */
  {
    id:'witcher3', title:'The Witcher 3: Wild Hunt', short:'W3',
    genre:'rpg', genreLabel:'RPG', year:2015, dev:'CD Projekt RED',
    rating:'9.8', size:'50 GB', version:'Game of the Year', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg',
    ],
    desc:'The Witcher 3: Wild Hunt es considerado uno de los mejores RPG de la historia. Sos Geralt de Rivia, un cazador de monstruos que busca a su hija adoptiva en un mundo abierto enorme, lleno de decisiones morales, contratos de caza y una historia épica. La edición GOTY incluye las expansiones Hearts of Stone y Blood and Wine.',
    descEn:'The Witcher 3: Wild Hunt is considered one of the best RPGs ever made. You are Geralt of Rivia, a monster hunter searching for his adopted daughter in a huge open world full of moral choices, hunting contracts and an epic story. The GOTY edition includes the Hearts of Stone and Blood and Wine expansions.',
    cardDesc:'El RPG definitivo. Geralt en un mundo oscuro y enorme.',
    cardDescEn:'The definitive RPG. Geralt in a dark, massive world.',
    link:'https://linksterr.com/r/egcdrw/', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i5-2500K / AMD Phenom II X4 940'},{l:'GPU',v:'NVIDIA GTX 660 / AMD Radeon HD 7870'},{l:'Disco',v:'50 GB'},{l:'SO',v:'Windows 7/8/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'skyrim', title:'The Elder Scrolls V: Skyrim', short:'TES',
    genre:'rpg', genreLabel:'RPG', year:2011, dev:'Bethesda',
    rating:'9.5', size:'12 GB', version:'Special Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/489830/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/489830/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_d64b646612ab1402bdda8e400672aa0dbcb352ea.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_b6bb6f79278505b3f48567f08c21f7a0eb171c68.1920x1080.jpg',
    ],
    trailer:'256672927',
    desc:'Skyrim es el RPG de mundo abierto por excelencia. Sos el Sangre de Dragón, el único capaz de absorber las almas de los dragones que regresaron a Tamriel. Explorá montañas, mazmorras y ciudades, unite a gremios y armá tu personaje como quieras. Miles de mods disponibles.',
    descEn:'Skyrim is the ultimate open-world RPG. You are the Dragonborn, the only one able to absorb the souls of the dragons that have returned to Tamriel. Explore mountains, dungeons and cities, join guilds and build your character however you like. Thousands of mods available.',
    cardDesc:'Dragones, magia y libertad total en Tamriel.',
    cardDescEn:'Dragons, magic and total freedom in Tamriel.',
    link:'https://linksterr.com/r/syyzmh/', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-750 / AMD Phenom II X4-945'},{l:'GPU',v:'NVIDIA GTX 470 1GB / AMD HD 7870 2GB'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows 7/8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'falloutnv', title:'Fallout: New Vegas', short:'FNV',
    genre:'rpg', genreLabel:'RPG', year:2010, dev:'Obsidian Entertainment',
    rating:'9.3', size:'10 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/22380/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/22380/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_62f8d0b006935ff6de7fe276f713e7d15e579bc9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_ec8a28942fcb5cb15718f949ab81124932a5084d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_f703adcb9aa1d718a39288adf7d2e1b4dc0e568a.1920x1080.jpg',
    ],
    desc:'En el desierto de Mojave post-apocalíptico, sos un mensajero al que dieron por muerto. Recorré New Vegas, elegí entre facciones enfrentadas y definí el destino de la región. Una de las mejores historias y sistemas de diálogo de la saga.',
    descEn:'In the post-apocalyptic Mojave Desert, you are a courier left for dead. Travel through New Vegas, choose between warring factions and decide the fate of the region. One of the best stories and dialogue systems in the series.',
    cardDesc:'Post-apocalipsis en el desierto de Mojave.',
    cardDescEn:'Post-apocalypse in the Mojave Desert.',
    link:'https://linksterr.com/r/vsktn0/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Dual Core 2.0 GHz'},{l:'GPU',v:'NVIDIA GeForce 6 / ATI X1300 (256 MB)'},{l:'Disco',v:'10 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'darksouls', title:'Dark Souls Remastered', short:'DS',
    genre:'rpg', genreLabel:'RPG', year:2018, dev:'FromSoftware',
    rating:'9.2', size:'8 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.1920x1080.jpg',
    ],
    trailer:'256717685',
    desc:'El clásico que creó un género. Dark Souls te lleva a Lordran, un reino en ruinas lleno de enemigos implacables y jefes memorables. Combate exigente, mundo interconectado y una sensación de logro como ningún otro juego. Versión remasterizada a 60 FPS.',
    descEn:'The classic that created a genre. Dark Souls takes you to Lordran, a ruined kingdom full of relentless enemies and memorable bosses. Demanding combat, an interconnected world and a sense of achievement like no other game. Remastered version at 60 FPS.',
    cardDesc:'Morí, aprendé, volvé a intentarlo. El RPG más desafiante.',
    cardDescEn:'Die, learn, try again. The most challenging RPG.',
    link:'https://linksterr.com/r/zlp972/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i5-2300 / AMD FX-6300'},{l:'GPU',v:'NVIDIA GTX 460 / AMD Radeon HD 6870'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── FPS ── */
  {
    id:'hl2', title:'Half-Life 2', short:'HL2',
    genre:'fps', genreLabel:'FPS', year:2004, dev:'Valve Corporation',
    rating:'9.6', size:'6.5 GB', version:'Completo + Episodios', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/220/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/220/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_47b4105b396de408cb8b6b4f358c69e5e2a62dae.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_0e499071a60a20b24149ad65a8edb769250f2921.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_ffb00abd45012680e4f209355ec81f961b6dd1fb.1920x1080.jpg',
    ],
    trailer:'257074217',
    desc:'Gordon Freeman vuelve en City 17, una ciudad bajo el control de la Alianza. Half-Life 2 revolucionó los FPS con su motor de física, la Gravity Gun y una narrativa sin cortes. Un clásico obligatorio que sigue vigente.',
    descEn:'Gordon Freeman returns in City 17, a city under the control of the Combine. Half-Life 2 revolutionized FPS games with its physics engine, the Gravity Gun and seamless storytelling. A must-play classic that still holds up.',
    cardDesc:'Gordon Freeman y la Gravity Gun. Un clásico eterno.',
    cardDescEn:'Gordon Freeman and the Gravity Gun. A timeless classic.',
    link:'https://exe.io/H4lfL1f32', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'1.7 GHz'},{l:'GPU',v:'DirectX 8.1 compatible'},{l:'Disco',v:'6.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.1'}]
  },
  {
    id:'farcry3', title:'Far Cry 3', short:'FC3',
    genre:'fps', genreLabel:'FPS', year:2012, dev:'Ubisoft Montreal',
    rating:'9.0', size:'15 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/220240/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/220240/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/91ca9b48ef5a3095281cd7eceb40d2daeffb0454/ss_91ca9b48ef5a3095281cd7eceb40d2daeffb0454.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/d2cc64ad335dd754966a8a41e755be44ecf9d5df/ss_d2cc64ad335dd754966a8a41e755be44ecf9d5df.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/1c4a54582fefd79dbc5fa0bd81d20a5ab66ad4e3/ss_1c4a54582fefd79dbc5fa0bd81d20a5ab66ad4e3.1920x1080.jpg',
    ],
    trailer:'2028177',
    desc:'Jason Brody queda atrapado en una isla tropical controlada por piratas y el inolvidable Vaas. Mundo abierto, caza, sigilo y acción explosiva en uno de los shooters más queridos de la década.',
    descEn:'Jason Brody is stranded on a tropical island controlled by pirates and the unforgettable Vaas. Open world, hunting, stealth and explosive action in one of the most beloved shooters of the decade.',
    cardDesc:'¿Te dije alguna vez la definición de locura?',
    cardDescEn:'Did I ever tell you the definition of insanity?',
    link:'https://linksterr.com/r/86wbsz/', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo E6700 / AMD Athlon64 X2 6000+'},{l:'GPU',v:'512 MB DirectX 9.0c'},{l:'Disco',v:'15 GB'},{l:'SO',v:'Windows 7/8/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'bioshock', title:'BioShock Remastered', short:'BIO',
    genre:'fps', genreLabel:'FPS', year:2016, dev:'2K Games',
    rating:'9.4', size:'25 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/409710/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/409710/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_bb9c564381c11357a51f1579c6337fba90ead10f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_fefcc94c6f10da7009cf07cf877e5d5937ebfb45.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_04e04ae694f8b077e7f03906f7fa813823b5fd4e.1920x1080.jpg',
    ],
    desc:'Bajo el océano se esconde Rapture, una utopía que se convirtió en pesadilla. Combiná armas y plásmidos para sobrevivir a los Splicers y los Big Daddies en un FPS con una de las mejores historias jamás contadas.',
    descEn:'Beneath the ocean lies Rapture, a utopia turned nightmare. Combine weapons and plasmids to survive the Splicers and Big Daddies in an FPS with one of the greatest stories ever told.',
    cardDesc:'Rapture te espera bajo el mar. ¿Quisieras...?',
    cardDescEn:'Rapture awaits beneath the sea. Would you kindly...?',
    link:'https://linksterr.com/r/6skjpm/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo E4600'},{l:'GPU',v:'NVIDIA GT 240 / AMD HD 4670 (512 MB)'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── ACCIÓN ── */
  {
    id:'maxpayne', title:'Max Payne', short:'MP',
    genre:'accion', genreLabel:'Acción', year:2001, dev:'Remedy Entertainment',
    rating:'9.1', size:'800 MB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/12140/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/12140/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003256.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003257.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003258.1920x1080.jpg',
    ],
    desc:'Max Payne es un policía de Nueva York que perdió todo. En una noche de tormenta de nieve se lanza a una venganza contra la mafia y una droga misteriosa. El juego que popularizó el bullet time y la narrativa estilo novela negra.',
    descEn:'Max Payne is a New York cop who lost everything. On a snowstorm night he sets out for revenge against the mob and a mysterious drug. The game that popularized bullet time and noir-style storytelling.',
    cardDesc:'Bullet time y venganza en Nueva York.',
    cardDescEn:'Bullet time and revenge in New York.',
    link:'https://linksterr.com/r/c1ey6r/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256 MB'},{l:'CPU',v:'450 MHz'},{l:'GPU',v:'16 MB DirectX 8'},{l:'Disco',v:'800 MB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.0'}]
  },
  {
    id:'batmanac', title:'Batman: Arkham City', short:'BAT',
    genre:'accion', genreLabel:'Acción', year:2011, dev:'Rocksteady Studios',
    rating:'9.4', size:'18 GB', version:'Game of the Year', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/200260/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/200260/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_31e817088eb23c1373410e3ea70a933ffbb8dbab.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_52f74c49e620871e78d09185d22f89a98438cfe4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_8ff38eebd84802a8f9baf8a6be73bb7803f47ee2.1920x1080.jpg',
    ],
    trailer:'81216',
    desc:'Arkham City es una prisión gigante en el corazón de Gotham. Batman enfrenta al Joker, Two-Face, el Pingüino y muchos más en un mundo abierto con el sistema de combate freeflow que marcó una época.',
    descEn:'Arkham City is a giant prison in the heart of Gotham. Batman faces the Joker, Two-Face, the Penguin and many more in an open world with the freeflow combat system that defined an era.',
    cardDesc:'Sé Batman. Gotham entera es tu campo de batalla.',
    cardDescEn:'Be the Batman. All of Gotham is your battlefield.',
    link:'https://linksterr.com/r/top0xc/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 4800+'},{l:'GPU',v:'NVIDIA 8800 / ATI 3850 (512 MB)'},{l:'Disco',v:'18 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'gow', title:'God of War', short:'GOW',
    genre:'accion', genreLabel:'Acción', year:2022, dev:'Santa Monica Studio',
    rating:'9.7', size:'70 GB', version:'PC Edition', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg',
    ],
    trailer:'256864004',
    desc:'Kratos deja atrás su pasado griego y vive en las tierras nórdicas junto a su hijo Atreus. Juntos emprenden un viaje para cumplir la última voluntad de su esposa. Combate brutal con el Hacha Leviatán y una historia emotiva.',
    descEn:"Kratos leaves his Greek past behind and lives in the Norse lands with his son Atreus. Together they set out on a journey to fulfill his wife's last wish. Brutal combat with the Leviathan Axe and an emotional story.",
    cardDesc:'Kratos y Atreus en la mitología nórdica.',
    cardDescEn:'Kratos and Atreus in Norse mythology.',
    link:'https://linksterr.com/r/oeo7ke/', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-2500K / AMD Ryzen 3 1200'},{l:'GPU',v:'NVIDIA GTX 960 4GB / AMD R9 290X 4GB'},{l:'Disco',v:'70 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── AVENTURA ── */
  {
    id:'tombraider', title:'Tomb Raider', short:'TR',
    genre:'aventura', genreLabel:'Aventura', year:2013, dev:'Crystal Dynamics',
    rating:'9.0', size:'12 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/203160/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/203160/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_65861a8ea2efcb01fca8aa4b1233663bb053ab54.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_cd920308517efb19c11b44e251af89e40fb412d5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_8f34a87469f3a0c73049cbd0469bdff6e3d22713.1920x1080.jpg',
    ],
    trailer:'256663323',
    desc:'El origen de Lara Croft. Tras un naufragio, una joven Lara queda varada en una isla misteriosa y debe convertirse en una sobreviviente. Exploración, tumbas, escalada y combate en un reinicio espectacular de la saga.',
    descEn:'The origin of Lara Croft. After a shipwreck, a young Lara is stranded on a mysterious island and must become a survivor. Exploration, tombs, climbing and combat in a spectacular reboot of the series.',
    cardDesc:'El nacimiento de una sobreviviente: Lara Croft.',
    cardDescEn:'The birth of a survivor: Lara Croft.',
    link:'https://exe.io/T0mbR4id3r60TY', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Dual Core Intel / AMD 1.8 GHz'},{l:'GPU',v:'DirectX 9 (512 MB)'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'ac2', title:"Assassin's Creed II", short:'AC2',
    genre:'aventura', genreLabel:'Aventura', year:2009, dev:'Ubisoft Montreal',
    rating:'9.3', size:'8 GB', version:'Deluxe', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/33230/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/33230/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_dd6a4d319cda32c24a4e16a0a62908e82673f458.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_ef44b9f703f71acfdeb728a497390d397084ee35.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_d3967a58038cc5e59332bb0043ab1ca343112bc6.1920x1080.jpg',
    ],
    trailer:'5365',
    desc:'Ezio Auditore da Firenze busca venganza en la Italia del Renacimiento. Recorré Florencia y Venecia, conocé a Leonardo da Vinci y convertite en un maestro asesino. Para muchos, el mejor de toda la saga.',
    descEn:'Ezio Auditore da Firenze seeks revenge in Renaissance Italy. Roam Florence and Venice, meet Leonardo da Vinci and become a master assassin. For many, the best in the entire series.',
    cardDesc:'Ezio Auditore y la Italia del Renacimiento.',
    cardDescEn:'Ezio Auditore and Renaissance Italy.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1.5 GB'},{l:'CPU',v:'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 64 2.4 GHz'},{l:'GPU',v:'256 MB DirectX 9.0'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0'}]
  },
  {
    id:'portal2', title:'Portal 2', short:'P2',
    genre:'aventura', genreLabel:'Aventura', year:2011, dev:'Valve Corporation',
    rating:'9.7', size:'8 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/620/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/620/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_f3f6787d74739d3b2ec8a484b5c994b3d31ef325.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_6a4f5afdaa98402de9cf0b59fed27bab3256a6f4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_0cdd90fafc160b52d08b303d205f9fd4e83cf164.1920x1080.jpg',
    ],
    trailer:'5787',
    desc:'Chell despierta en los laboratorios de Aperture Science y GLaDOS sigue ahí. Resolvé puzzles con la pistola de portales en una campaña llena de humor y un cooperativo para dos jugadores brillante.',
    descEn:'Chell wakes up in the Aperture Science labs and GLaDOS is still there. Solve puzzles with the portal gun in a campaign full of humor and a brilliant two-player co-op.',
    cardDesc:'Puzzles con portales y el humor de GLaDOS.',
    cardDescEn:"Portal puzzles and GLaDOS's humor.",
    link:'https://linksterr.com/r/4pty6t/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.0 GHz / AMD Athlon 64 X2'},{l:'GPU',v:'DirectX 9 (128 MB)'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── CONDUCCIÓN ── */
  {
    id:'nfsu2', title:'Need for Speed: Underground 2', short:'NFSU2',
    genre:'conducción', genreLabel:'Conducción', year:2004, dev:'Electronic Arts',
    rating:'9.2', size:'2.5 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://www.giantbomb.com/a/uploads/original/0/5872/191788-nfsug2box.jpg',
    screenshots:[
      'https://www.giantbomb.com/a/uploads/original/0/8737/234763-nfsu2_03.jpg',
      'https://www.giantbomb.com/a/uploads/original/0/4745/323327-s23919_ps2_1.jpg',
      'https://www.giantbomb.com/a/uploads/original/0/4745/323328-s23919_ps2_2.jpg',
    ],
    desc:'Need for Speed Underground 2 lleva el tuning y las carreras callejeras a Bayview, una ciudad abierta para recorrer de noche. Personalizá tu auto al máximo con neones, kits de carrocería y vinilos. Un clásico que marcó a toda una generación.',
    descEn:'Need for Speed Underground 2 takes tuning and street racing to Bayview, an open city to roam at night. Customize your car to the max with neons, body kits and vinyls. A classic that shaped a whole generation.',
    cardDesc:'Tuning, neones y carreras nocturnas en Bayview.',
    cardDescEn:'Tuning, neons and night races in Bayview.',
    link:'https://exe.io/N33df0r5p33dUnd3rgr0und2', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'256 MB'},{l:'CPU',v:'Pentium III 933 MHz'},{l:'GPU',v:'32 MB DirectX 9'},{l:'Disco',v:'2.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'nfshp', title:'Need for Speed: Hot Pursuit Remastered', short:'NFSHP',
    genre:'conducción', genreLabel:'Conducción', year:2020, dev:'Criterion Games',
    rating:'8.6', size:'30 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1328660/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1328660/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_d4bf9f107a31fd5088f2cfa811381bd00b64310c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_849818f935c563a87dcb8e1468774c9719f8137c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_ac6b43bb488664c12101dd0b7bf3b544b508abc1.1920x1080.jpg',
    ],
    trailer:'256808880',
    desc:'Persecuciones a toda velocidad en Seacrest County. Jugá como corredor o como policía, con autos exóticos, armas de persecución y gráficos remasterizados. Incluye todo el contenido descargable original.',
    descEn:'High-speed pursuits in Seacrest County. Play as a racer or a cop, with exotic cars, pursuit tech and remastered graphics. Includes all the original downloadable content.',
    cardDesc:'Corredor o policía. Persecuciones a fondo.',
    cardDescEn:'Racer or cop. Full-throttle pursuits.',
    link:'https://linksterr.com/r/y48rpz/', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-3570 / AMD FX-6350'},{l:'GPU',v:'NVIDIA GTX 660 / AMD Radeon HD 7850'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── ESTRATEGIA ── */
  {
    id:'aoe2', title:'Age of Empires II', short:'AOE2',
    genre:'estrategia', genreLabel:'Estrategia', year:2019, dev:'Forgotten Empires',
    rating:'9.5', size:'30 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/813780/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/813780/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_ab2692aa33171bc61378dd59efa89e2ff86e02a6.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_1033024a26f0a7ed277865201aed9bb471b54320.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_83253675c7af3ad5f3f2c1dc2c43c667000e0c4a.1920x1080.jpg',
    ],
    trailer:'256753456',
    desc:'El rey de la estrategia en tiempo real. Construí tu civilización, recolectá recursos, armá ejércitos y conquistá a tus rivales a lo largo de mil años de historia. La Definitive Edition trae gráficos 4K, nuevas civilizaciones y campañas.',
    descEn:'The king of real-time strategy. Build your civilization, gather resources, raise armies and conquer your rivals across a thousand years of history. The Definitive Edition brings 4K graphics, new civilizations and campaigns.',
    cardDesc:'Mil años de historia. Construí, conquistá, dominá.',
    cardDescEn:'A thousand years of history. Build, conquer, rule.',
    link:'https://exe.io/AGEOFEMPIRESGOLDEDITION', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo / AMD Athlon 64 X2 5600+'},{l:'GPU',v:'NVIDIA GeForce GT 420 / AMD HD 5450'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'aom', title:'Age of Mythology', short:'AOM',
    genre:'estrategia', genreLabel:'Estrategia', year:2014, dev:'Ensemble Studios',
    rating:'9.1', size:'3 GB', version:'Extended Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/266840/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/266840/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_cdd67c84e356692c6304f479a28a111ac207f12d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_8cd2910cdd8001dd5de2c884a85eb27529a6329d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_c4a186273ae304a51f22c6fc4a480a717799f833.1920x1080.jpg',
    ],
    trailer:'2031737',
    desc:'Estrategia en tiempo real con dioses y criaturas mitológicas. Elegí entre griegos, egipcios, nórdicos y atlantes, invocá poderes divinos y mandá minotauros, cíclopes y titanes a la batalla.',
    descEn:'Real-time strategy with gods and mythological creatures. Choose between Greeks, Egyptians, Norse and Atlanteans, call down divine powers and send minotaurs, cyclopes and titans into battle.',
    cardDesc:'Dioses, titanes y mitología en guerra.',
    cardDescEn:'Gods, titans and mythology at war.',
    link:'https://exe.io/4g30fMyth0l0gi', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo / AMD 1.8 GHz'},{l:'GPU',v:'DirectX 9 (256 MB)'},{l:'Disco',v:'3 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── PELEA ── */
  {
    id:'tekken7', title:'Tekken 7', short:'T7',
    genre:'pelea', genreLabel:'Pelea', year:2017, dev:'Bandai Namco',
    rating:'9.0', size:'60 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/389730/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/389730/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_d92a558644ad60ae5814fc4d2bbaebc5abf62fa3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_40faa5ba39563cb899f1ab2ddd2afbf8b451d52f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_ed3246605518907954918eb06e90705249be77d6.1920x1080.jpg',
    ],
    trailer:'256807403',
    desc:'El final de la saga Mishima. Tekken 7 combina el combate 3D clásico con nuevas mecánicas como Rage Arts y Power Crush. Más de 30 personajes, modo historia cinemático y online competitivo.',
    descEn:'The end of the Mishima saga. Tekken 7 combines classic 3D fighting with new mechanics like Rage Arts and Power Crush. Over 30 characters, a cinematic story mode and competitive online play.',
    cardDesc:'La guerra de los Mishima llega a su fin.',
    cardDescEn:'The Mishima war comes to an end.',
    link:'https://exe.io/T3kk3n7', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i3-4160 / AMD equivalente'},{l:'GPU',v:'NVIDIA GTX 660'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 7/8/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'mkx', title:'Mortal Kombat XL', short:'MKXL',
    genre:'pelea', genreLabel:'Pelea', year:2015, dev:'NetherRealm Studios',
    rating:'8.8', size:'40 GB', version:'XL Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/307780/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/307780/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_b2030dd6da12f3d366fa076dddf899d2190ea33e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_03f7f4582a1036cbcbca1a4c87e14c7831b5f424.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_1f002ef5eb037c81e92bcbc29306fc91d4b6d26f.1920x1080.jpg',
    ],
    trailer:'2037015',
    desc:'Peleas brutales, Fatalities y Brutalities. Mortal Kombat X trae tres variantes de combate por personaje, un modo historia con nuevos guerreros y la edición XL con todos los personajes extra como Predator, Alien y Jason.',
    descEn:'Brutal fights, Fatalities and Brutalities. Mortal Kombat X brings three combat variations per character, a story mode with new warriors and the XL edition with every bonus character like Predator, Alien and Jason.',
    cardDesc:'¡Finish him! Fatalities y combate brutal.',
    cardDescEn:'Finish him! Fatalities and brutal combat.',
    link:'https://linksterr.com/r/74x5kc/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'3 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 965'},{l:'GPU',v:'NVIDIA GTX 460 / AMD Radeon HD 5850'},{l:'Disco',v:'40 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'sf4', title:'Ultra Street Fighter IV', short:'SF4',
    genre:'pelea', genreLabel:'Pelea', year:2014, dev:'Capcom',
    rating:'8.9', size:'8 GB', version:'Ultra', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/45760/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/45760/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_28d926b012977ea4aed7bef9455409b6817b4314.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_97b7bc50b6b29616b7eb5be03ae8b83eebfd83c5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_387c57ccb3d4b2203df6595f751390b9d95596ee.1920x1080.jpg',
    ],
    trailer:'2033898',
    desc:'La versión definitiva de Street Fighter IV con 44 luchadores, todos los escenarios y modos. Ryu, Ken, Chun-Li y compañía en el juego de pelea 2D que revivió el género.',
    descEn:'The definitive version of Street Fighter IV with 44 fighters and every stage and mode. Ryu, Ken, Chun-Li and company in the 2D fighting game that revived the genre.',
    cardDesc:'Hadouken! 44 luchadores clásicos.',
    cardDescEn:'Hadouken! 44 classic fighters.',
    link:'https://linksterr.com/r/rm3tm5/', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.0 GHz'},{l:'GPU',v:'NVIDIA GeForce 8600 / ATI Radeon HD 3600'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── TERROR ── */
  {
    id:'l4d2', title:'Left 4 Dead 2', short:'L4D2',
    genre:'terror', genreLabel:'Terror', year:2009, dev:'Valve Corporation',
    rating:'9.3', size:'13 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/550/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/550/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.1920x1080.jpg',
    ],
    trailer:'5952',
    desc:'Cuatro sobrevivientes contra hordas de infectados en el sur de Estados Unidos. Cooperativo para 4 jugadores, infectados especiales, armas cuerpo a cuerpo y el Director IA que hace cada partida distinta.',
    descEn:'Four survivors against hordes of infected in the American South. 4-player co-op, special infected, melee weapons and the AI Director that makes every run different.',
    cardDesc:'Cooperativo zombie para 4. Nunca dos partidas iguales.',
    cardDescEn:'Zombie co-op for 4. No two games alike.',
    link:'https://exe.io/Left4De4d2', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Pentium 4 3.0 GHz'},{l:'GPU',v:'DirectX 9 (128 MB)'},{l:'Disco',v:'13 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'outlast', title:'Outlast', short:'OUT',
    genre:'terror', genreLabel:'Terror', year:2013, dev:'Red Barrels',
    rating:'8.7', size:'5 GB', version:'+ Whistleblower', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/238320/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/238320/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_de19e8b1f41d9594bf64d02424a0ec5046c733f5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_1b4cc24b78f404c69fa18d42e5d5b00873c8852f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_c629aed2b6d7751222acb9bef1022338f9bc6b03.1920x1080.jpg',
    ],
    trailer:'2029178',
    desc:'Un periodista entra al Mount Massive Asylum para investigar a una corporación. Sin armas, solo con una cámara de visión nocturna, tenés que correr y esconderte. Uno de los juegos de terror más intensos que existen.',
    descEn:'A journalist enters Mount Massive Asylum to investigate a corporation. With no weapons, only a night-vision camera, you have to run and hide. One of the most intense horror games out there.',
    cardDesc:'Sin armas. Solo una cámara y el miedo.',
    cardDescEn:'No weapons. Just a camera and fear.',
    link:'https://exe.io/0utI4st', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.2 GHz / AMD Athlon X2 2.7 GHz'},{l:'GPU',v:'NVIDIA GeForce 9800 / ATI Radeon HD 3xxx (512 MB)'},{l:'Disco',v:'5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ════════ JUEGOS AGREGADOS (tanda 2) ════════
     Portada (img), banner del detalle y capturas sacadas de Steam.
     Reemplazá 'LINK_DEL_JUEGO' por tu link acortado. */
  /* ── ACCIÓN ── */
  {
    id:'gta5', title:'Grand Theft Auto V Enhanced', short:'GTAV',
    genre:'accion', genreLabel:'Acción', year:2025, dev:'Rockstar North',
    rating:'9.7', size:'105 GB', version:'Enhanced', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg',
    ],
    trailer:'257109786',
    desc:'Michael, Franklin y Trevor son tres criminales muy distintos que terminan unidos por una serie de golpes cada vez más arriesgados. Los Santos y el condado de Blaine forman uno de los mundos abiertos más grandes y detallados jamás creados, con autos, aviones, misiones secundarias y el modo GTA Online. La versión Enhanced suma ray tracing, mejores gráficos y tiempos de carga mucho más rápidos.',
    descEn:'Michael, Franklin and Trevor are three very different criminals pulled together by a series of increasingly risky heists. Los Santos and Blaine County make up one of the largest and most detailed open worlds ever made, packed with cars, planes, side missions and GTA Online. The Enhanced version adds ray tracing, improved graphics and much faster loading times.',
    cardDesc:'Tres criminales, un golpe perfecto y Los Santos.',
    cardDescEn:'Three criminals, one perfect heist, all of Los Santos.',
    link:'https://linksterr.com/r/qr6683/', hot:true, isNew:false,
    update:'https://linksterr.com/r/hu76js/',
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i7-4770 / AMD FX-9590'},{l:'GPU',v:'GTX 1630 4GB / Radeon RX 6400 4GB'},{l:'Disco',v:'105 GB SSD'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'gta4', title:'GTA IV', short:'GTAIV',
    genre:'accion', genreLabel:'Acción', year:2008, dev:'Rockstar North',
    rating:'9.0', size:'22 GB', version:'Complete Edition', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/12210/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/12210/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/0000006360.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/0000006361.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/0000006362.1920x1080.jpg',
    ],
    desc:'Niko Bellic llega a Liberty City buscando empezar de cero, pero termina metido en el mundo de la mafia. La Complete Edition incluye el juego original y los episodios The Lost and Damned y The Ballad of Gay Tony. Física realista, una historia madura y una ciudad viva.',
    descEn:'Niko Bellic arrives in Liberty City looking for a fresh start but ends up deep in the criminal underworld. The Complete Edition includes the original game plus The Lost and Damned and The Ballad of Gay Tony. Realistic physics, a mature story and a living city.',
    cardDesc:'Niko Bellic y el sueño americano en Liberty City.',
    cardDescEn:'Niko Bellic chases the American dream in Liberty City.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1.5 GB'},{l:'CPU',v:'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 2.4 GHz'},{l:'GPU',v:'NVIDIA 7900 256MB / ATI X1900 256MB'},{l:'Disco',v:'22 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'gtavc', title:'GTA Vice City', short:'GTAVC',
    genre:'accion', genreLabel:'Acción', year:2002, dev:'Rockstar North',
    rating:'9.4', size:'915 MB', version:'Original', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/12110/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/12110/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/0000003313.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/0000003314.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/0000003315.1920x1080.jpg',
    ],
    desc:'Tommy Vercetti sale de prisión y llega a Vice City, una ciudad inspirada en la Miami de los años 80. Traicionado en su primer negocio, decide construir su propio imperio criminal. Una banda sonora legendaria, autos, motos y helicópteros en uno de los GTA más queridos.',
    descEn:'Tommy Vercetti gets out of prison and lands in Vice City, a town inspired by 1980s Miami. Betrayed on his first deal, he sets out to build his own criminal empire. A legendary soundtrack, cars, bikes and helicopters in one of the most beloved GTA games.',
    cardDesc:'Neón, música ochentosa y Tommy Vercetti.',
    cardDescEn:'Neon lights, 80s hits and Tommy Vercetti.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'128 MB'},{l:'CPU',v:'Intel Pentium III 800 MHz / AMD Athlon 800 MHz'},{l:'GPU',v:'32 MB DirectX 9'},{l:'Disco',v:'915 MB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0'}]
  },
  {
    id:'rdr2', title:'Red Dead Redemption 2', short:'RDR2',
    genre:'accion', genreLabel:'Acción', year:2019, dev:'Rockstar Games',
    rating:'9.8', size:'150 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg',
    ],
    trailer:'256768248',
    desc:'Estados Unidos, 1899. Arthur Morgan y la banda de Van der Linde huyen de la ley tras un golpe que salió mal. Un mundo abierto gigantesco y lleno de detalles, con caza, pesca, duelos, robos y una de las historias más emotivas de los videojuegos. Incluye Red Dead Online.',
    descEn:'America, 1899. Arthur Morgan and the Van der Linde gang are on the run after a robbery gone wrong. A massive, incredibly detailed open world with hunting, fishing, duels, heists and one of the most moving stories in gaming. Red Dead Online included.',
    cardDesc:'Arthur Morgan y el fin del Lejano Oeste.',
    cardDescEn:'Arthur Morgan and the end of the Wild West.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-2500K / AMD FX-6300'},{l:'GPU',v:'GTX 770 2GB / Radeon R9 280 3GB'},{l:'Disco',v:'150 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'mafia2', title:'Mafia II: Definitive Edition', short:'MAF2',
    genre:'accion', genreLabel:'Acción', year:2020, dev:'Hangar 13',
    rating:'9.0', size:'50 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1030830/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1030830/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030830/ss_d29c8180a12271dd692e5601af95a82c0e016b98.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030830/ss_f6d60fcb54fce33e1365861d472508a7f6350d2a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030830/ss_dc2a279273bd3f92401bda589e3220f119c40dcb.1920x1080.jpg',
    ],
    trailer:'256785635',
    desc:'Vito Scaletta vuelve de la Segunda Guerra Mundial y se mete en la mafia de Empire Bay para pagar las deudas de su familia. Una historia de gánsteres al estilo de las películas clásicas, ahora remasterizada en 4K con todos los DLC incluidos.',
    descEn:"Vito Scaletta returns from World War II and joins the Empire Bay mob to pay off his family's debts. A gangster story straight out of classic movies, now remastered in 4K with every DLC included.",
    cardDesc:'Vito Scaletta y la mafia de los años 40 y 50.',
    cardDescEn:'Vito Scaletta and the mob of the 40s and 50s.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel i5-2500K / AMD FX-8120'},{l:'GPU',v:'GTX 660 2GB / Radeon HD 7870 2GB'},{l:'Disco',v:'50 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'maxpayne3', title:'Max Payne 3', short:'MP3',
    genre:'accion', genreLabel:'Acción', year:2012, dev:'Rockstar Studios',
    rating:'9.0', size:'35 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/204100/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/204100/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/204100/ss_84fc2ba217ce04ec4b782f9f5ccc09d20980f220.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/204100/ss_b442d79fbc45be2cb773d3de6f7b40fa5f126588.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/204100/ss_4ae054ce0dd3563aea20d8f76630ea4caff878d2.1920x1080.jpg',
    ],
    trailer:'81721',
    desc:'Años después de Nueva York, Max Payne trabaja como guardaespaldas de una familia millonaria en São Paulo. Cuando secuestran a la esposa de su jefe, todo se desmorona. Tiroteos cinematográficos, bullet time mejorado y una narrativa oscura con el sello de Rockstar.',
    descEn:"Years after New York, Max Payne works as a bodyguard for a wealthy family in São Paulo. When his boss's wife is kidnapped, everything falls apart. Cinematic gunfights, improved bullet time and a dark story with Rockstar's signature style.",
    cardDesc:'Max vuelve, más roto que nunca, en São Paulo.',
    cardDescEn:'Max is back and more broken than ever, in São Paulo.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Dual Core 2.4 GHz / AMD Dual Core 2.6 GHz'},{l:'GPU',v:'NVIDIA 8600 GT 512MB / Radeon HD 3400'},{l:'Disco',v:'35 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'dmc5', title:'Devil May Cry 5', short:'DMC5',
    genre:'accion', genreLabel:'Acción', year:2019, dev:'Capcom',
    rating:'9.2', size:'35 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/601150/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/601150/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_4410bada2565843dae693b03ac3a50256ff5dd66.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_4ce180ed8979a51c72de51f985e9e9ba13500508.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/ss_e2be70565f94a7f6c392cccddce08c67f2f87612.1920x1080.jpg',
    ],
    trailer:'256814529',
    desc:'Un árbol demoníaco gigante aparece en Red Grave City y Nero, Dante y el misterioso V tienen que detener la invasión. Combate frenético y estiloso, combos infinitos y un rango de estilo que premia cada movimiento. La acción hack and slash en su máxima expresión.',
    descEn:'A giant demonic tree sprouts in Red Grave City and Nero, Dante and the mysterious V must stop the invasion. Frantic, stylish combat, endless combos and a style meter that rewards every move. Hack and slash action at its finest.',
    cardDesc:'Dante, Nero y V contra un ejército demoníaco.',
    cardDescEn:'Dante, Nero and V against a demon army.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4460 / AMD FX-6300'},{l:'GPU',v:'GTX 760 / Radeon R7 260x (2 GB)'},{l:'Disco',v:'35 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'spiderman', title:"Marvel's Spider-Man Remastered", short:'SPM',
    genre:'accion', genreLabel:'Acción', year:2022, dev:'Insomniac Games',
    rating:'9.4', size:'75 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfe778bf6d66e952e4acd4e1f926f7615b609ddf.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_427677cf78195df94702f0a963cd9eaeb9d8935a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfba6f2477bfa42be69ddfdffbd421d3943d20bf.1920x1080.jpg',
    ],
    trailer:'256900369',
    desc:'Peter Parker lleva ocho años como Spider-Man y tiene que enfrentar a Mister Negativo, Kingpin y una lista de villanos clásicos. Recorré Manhattan colgándote de las telarañas con un sistema de movimiento increíble y un combate ágil. Incluye la expansión La ciudad que nunca duerme.',
    descEn:'Peter Parker has been Spider-Man for eight years and must face Mister Negative, Kingpin and a roster of classic villains. Swing across Manhattan with an amazing traversal system and fluid combat. Includes The City That Never Sleeps expansion.',
    cardDesc:'Columpiate por Nueva York como Peter Parker.',
    cardDescEn:'Swing through New York as Peter Parker.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i3-4160'},{l:'GPU',v:'GTX 950 / Radeon RX 470'},{l:'Disco',v:'75 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'sekiro', title:'Sekiro: Shadows Die Twice', short:'SKR',
    genre:'accion', genreLabel:'Acción', year:2019, dev:'FromSoftware',
    rating:'9.5', size:'25 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.1920x1080.jpg',
    ],
    trailer:'256806899',
    desc:'En el Japón feudal de la era Sengoku, un shinobi conocido como Lobo busca venganza y rescatar a su joven señor. Combate de espadas basado en desviar golpes, un brazo prostético con herramientas y la posibilidad de resucitar. Ganador del premio a Juego del Año 2019.',
    descEn:'In the Sengoku era of feudal Japan, a shinobi known as Wolf seeks revenge and to rescue his young lord. Sword combat built around deflecting attacks, a prosthetic arm full of tools and the ability to resurrect. Winner of Game of the Year 2019.',
    cardDesc:'Un shinobi, una katana y duelos a muerte.',
    cardDescEn:'One shinobi, one katana, deadly duels.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-2100 / AMD FX-6300'},{l:'GPU',v:'GTX 760 / Radeon HD 7950'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'cuphead', title:'Cuphead', short:'CUP',
    genre:'accion', genreLabel:'Acción', year:2017, dev:'Studio MDHR',
    rating:'9.1', size:'4 GB', version:'+ The Delicious Last Course', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_e3096a5555cb77d88db165c83d5ef3a24af1354a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_483fb089be0093beeef03525276803a9ca4f66a1.1920x1080.jpg',
    ],
    trailer:'256894191',
    desc:'Cuphead y Mugman perdieron una apuesta con el Diablo y ahora tienen que cobrar las deudas de sus almas. Un run and gun centrado en jefes, dibujado a mano al estilo de los dibujos animados de los años 30, con jazz en vivo. Difícil, hermoso y se puede jugar de a dos.',
    descEn:'Cuphead and Mugman lost a bet with the Devil and now must collect soul debts to pay him back. A boss-focused run and gun hand-drawn in the style of 1930s cartoons, with live jazz. Tough, gorgeous and playable in local co-op.',
    cardDesc:'Jefes imposibles con estilo de dibujo animado de los 30.',
    cardDescEn:'Brutal bosses in 1930s cartoon style.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'3 GB'},{l:'CPU',v:'Intel Core 2 Duo E8400 / AMD Athlon 64 X2 6000+'},{l:'GPU',v:'GeForce 9600 GT / AMD HD 3870 512MB'},{l:'Disco',v:'4 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v11'}]
  },

  /* ── FPS ── */
  {
    id:'css', title:'Counter-Strike: Source', short:'CSS',
    genre:'fps', genreLabel:'FPS', year:2004, dev:'Valve Corporation',
    rating:'9.0', size:'4.5 GB', version:'v34 Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/240/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/240/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/240/0000000027.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/240/0000000028.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/240/0000000029.1920x1080.jpg',
    ],
    desc:'Counter-Strike: Source trae el clásico táctico de terroristas contra antiterroristas al motor Source, con física, mejores gráficos y los mapas de siempre como de_dust2 y cs_office. Ideal para jugar en red con amigos y en servidores de la comunidad.',
    descEn:'Counter-Strike: Source brings the classic terrorists vs. counter-terrorists tactical shooter to the Source engine, with physics, better graphics and timeless maps like de_dust2 and cs_office. Perfect for LAN parties and community servers.',
    cardDesc:'El CS de siempre con el motor de Half-Life 2.',
    cardDescEn:'Classic CS rebuilt on the Half-Life 2 engine.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'1.7 GHz'},{l:'GPU',v:'DirectX 8.1 (64 MB)'},{l:'Disco',v:'4.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'hl1', title:'Half-Life', short:'HL',
    genre:'fps', genreLabel:'FPS', year:1998, dev:'Valve Corporation',
    rating:'9.4', size:'1 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/70/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/70/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/70/0000002354.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/70/0000002343.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/70/0000002342.1920x1080.jpg',
    ],
    desc:'Gordon Freeman es un científico de Black Mesa cuando un experimento sale terriblemente mal y abre un portal a otra dimensión. El FPS que cambió para siempre la forma de contar historias en los videojuegos, sin cortes y en primera persona de principio a fin.',
    descEn:'Gordon Freeman is a Black Mesa scientist when an experiment goes horribly wrong and opens a portal to another dimension. The FPS that forever changed storytelling in games, told seamlessly in first person from start to finish.',
    cardDesc:'Donde empezó todo: Black Mesa y Gordon Freeman.',
    cardDescEn:'Where it all began: Black Mesa and Gordon Freeman.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'96 MB'},{l:'CPU',v:'500 MHz'},{l:'GPU',v:'16 MB Video'},{l:'Disco',v:'1 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v7.0'}]
  },
  {
    id:'cod2', title:'Call of Duty 2', short:'COD2',
    genre:'fps', genreLabel:'FPS', year:2005, dev:'Infinity Ward',
    rating:'9.0', size:'4 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2630/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2630/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2630/0000000696.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2630/0000000692.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2630/0000000693.1920x1080.jpg',
    ],
    desc:'Peleá en la Segunda Guerra Mundial como soldado ruso, británico y estadounidense en campañas por Stalingrado, el norte de África y Normandía. Batallas intensas, aliados que pelean a tu lado y un multijugador clásico que sigue teniendo servidores activos.',
    descEn:'Fight through World War II as Russian, British and American soldiers in campaigns across Stalingrad, North Africa and Normandy. Intense battles, allies fighting by your side and a classic multiplayer that still has active servers.',
    cardDesc:'La Segunda Guerra Mundial como nunca la viviste.',
    cardDescEn:'World War II like you have never lived it.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'Intel Pentium 4 1.4 GHz / AMD Athlon XP 1700+'},{l:'GPU',v:'64 MB DirectX 9'},{l:'Disco',v:'4 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'mw2', title:'Call of Duty: Modern Warfare 2', short:'MW2',
    genre:'fps', genreLabel:'FPS', year:2009, dev:'Infinity Ward',
    rating:'9.3', size:'12 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/10180/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/10180/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10180/ss_51a130e076354ed7aa025fda1ef9ba62c3ed767a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10180/ss_9a8893322d2e4718bb3ad762fa2d9deb07a012a6.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10180/ss_5e5937d034aeec6baad838229c2466165e4e0950.1920x1080.jpg',
    ],
    trailer:'5470',
    desc:'La secuela de Modern Warfare lleva la guerra de Makarov a todo el mundo, desde las montañas de Afganistán hasta las calles de Washington. Una campaña explosiva, el modo cooperativo Spec Ops y uno de los multijugadores más recordados de la saga.',
    descEn:'The sequel to Modern Warfare takes the war against Makarov around the globe, from the mountains of Afghanistan to the streets of Washington. An explosive campaign, the Spec Ops co-op mode and one of the most iconic multiplayers in the series.',
    cardDesc:'La Task Force 141 y el capitán Price están de vuelta.',
    cardDescEn:'Task Force 141 and Captain Price are back.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'1 GB'},{l:'CPU',v:'Intel Pentium 4 3.2 GHz / AMD Athlon 64 3200+'},{l:'GPU',v:'NVIDIA 6600GT 256MB / ATI Radeon 1600XT'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'bo1', title:'Call of Duty: Black Ops', short:'BO1',
    genre:'fps', genreLabel:'FPS', year:2010, dev:'Treyarch',
    rating:'9.1', size:'12 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/42700/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/42700/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42700/ss_f6e1e6377f0b41e34575dc9d73e62784b2395731.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42700/ss_8cc1d7d93af1bf0e87ff3d04bddc59b359471235.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42700/ss_e3ad24dd02143ffbbbf17467fde104b462c9120e.1920x1080.jpg',
    ],
    trailer:'5908',
    desc:'Alex Mason es un agente de operaciones encubiertas durante la Guerra Fría, y sus recuerdos esconden un secreto que puede cambiar la historia. Campaña llena de giros, multijugador con mejoras de armas y el famoso modo Zombies con el mapa Kino der Toten.',
    descEn:'Alex Mason is a black ops agent during the Cold War, and his memories hide a secret that could change history. A twist-filled campaign, multiplayer with weapon upgrades and the famous Zombies mode featuring Kino der Toten.',
    cardDesc:'Guerra Fría, operaciones secretas y Zombies.',
    cardDescEn:'Cold War black ops and Zombies.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo E6600 / AMD Phenom X3 8750'},{l:'GPU',v:'NVIDIA 8600GT 256MB / ATI Radeon X1950Pro'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'bf4', title:'Battlefield 4', short:'BF4',
    genre:'fps', genreLabel:'FPS', year:2013, dev:'DICE',
    rating:'9.0', size:'30 GB', version:'Premium Edition', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1238860/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1238860/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238860/ss_8cd5ec2e4bf1986bc01265db93f184e38e3b1236.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238860/ss_03f32767fd67f15723ffcd68c92e425265a0ca3d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238860/ss_006c4f68fb8389d8753bb87ba6a37903591d1ec1.1920x1080.jpg',
    ],
    trailer:'256787502',
    desc:'Batallas masivas de hasta 64 jugadores con tanques, aviones, helicópteros y barcos. El sistema Levolution permite derrumbar edificios enteros y cambiar el mapa en plena partida. La Premium Edition incluye todas las expansiones con mapas y armas extra.',
    descEn:'Massive battles for up to 64 players with tanks, jets, helicopters and boats. The Levolution system lets you bring down entire buildings and reshape the map mid-match. The Premium Edition includes every expansion with extra maps and weapons.',
    cardDesc:'Guerra total para 64 jugadores con mapas destructibles.',
    cardDescEn:'All-out 64-player war with destructible maps.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.8 GHz'},{l:'GPU',v:'GeForce 8800 GT 512MB / Radeon HD 3870'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'farcry4', title:'Far Cry 4', short:'FC4',
    genre:'fps', genreLabel:'FPS', year:2014, dev:'Ubisoft Montreal',
    rating:'8.9', size:'30 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/298110/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/298110/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/298110/703b3e3ba281a4b7e9594b790cc1c8d9cd26790b/ss_703b3e3ba281a4b7e9594b790cc1c8d9cd26790b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/298110/80837f83feb636e6747a9ddc24bee20003c714d0/ss_80837f83feb636e6747a9ddc24bee20003c714d0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/298110/994c96b823374e576cb5d6513f8a976c1a41efc8/ss_994c96b823374e576cb5d6513f8a976c1a41efc8.1920x1080.jpg',
    ],
    trailer:'2035525',
    desc:'Ajay Ghale viaja a Kyrat, una región del Himalaya gobernada por el carismático y despiadado Pagan Min. Mundo abierto con montañas, templos, girocópteros, elefantes de guerra y un cooperativo para dos jugadores. Más grande y más loco que Far Cry 3.',
    descEn:'Ajay Ghale travels to Kyrat, a Himalayan region ruled by the charismatic and ruthless Pagan Min. An open world of mountains, temples, gyrocopters, war elephants and two-player co-op. Bigger and crazier than Far Cry 3.',
    cardDesc:'Kyrat, elefantes y el excéntrico Pagan Min.',
    cardDescEn:'Kyrat, war elephants and the eccentric Pagan Min.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 955'},{l:'GPU',v:'GTX 460 / Radeon HD 5850 (1 GB)'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'doometernal', title:'DOOM Eternal', short:'DOOM',
    genre:'fps', genreLabel:'FPS', year:2020, dev:'id Software',
    rating:'9.3', size:'80 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_4f93a7c5003d49cb32f6c0c6e547452b284580a0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_7e6a2148321c8024285e3924903d8897cac95358.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_af3b43c4be0029b52ceefaf55ebe1918e2cb3471.1920x1080.jpg',
    ],
    trailer:'257182101',
    desc:'Las legiones del infierno invadieron la Tierra y solo el Doom Slayer puede detenerlas. Combate brutal y velocísimo, con motosierra, lanzallamas y la Crucible Blade, y una banda sonora metalera que te pone a mil. El FPS de acción más intenso de los últimos años.',
    descEn:"Hell's armies have invaded Earth and only the Doom Slayer can stop them. Brutal, lightning-fast combat with chainsaw, flame belch and the Crucible Blade, backed by a metal soundtrack that never lets up. The most intense action FPS in years.",
    cardDesc:'Rip and tear: el Doom Slayer contra el infierno.',
    cardDescEn:'Rip and tear: the Doom Slayer versus Hell.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5 3.3 GHz / AMD Ryzen 3 3.1 GHz'},{l:'GPU',v:'GTX 1050 Ti 4GB / Radeon R9 280 3GB'},{l:'Disco',v:'80 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'API',v:'Vulkan'}]
  },
  {
    id:'borderlands2', title:'Borderlands 2', short:'BL2',
    genre:'fps', genreLabel:'FPS', year:2012, dev:'Gearbox Software',
    rating:'9.0', size:'13 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_6734eaa79dcd0fe53971fbd50d20b5d0d45f4809.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_2f27a18562fbf4a91943c3968b35db5ac1caf5ad.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_c20610ab476bfe99172df77fe84f579d91e45a2b.1920x1080.jpg',
    ],
    trailer:'2029699',
    desc:'Un shooter con elementos de rol donde cazás botín en el planeta Pandora para derrotar al Handsome Jack. Elegí entre varias clases, juntá millones de armas generadas al azar y jugá en cooperativo hasta con cuatro amigos. La GOTY incluye todas las campañas extra.',
    descEn:'A role-playing shooter where you hunt for loot across the planet Pandora to take down Handsome Jack. Pick a class, collect millions of randomly generated guns and play co-op with up to four friends. The GOTY edition includes every extra campaign.',
    cardDesc:'Millones de armas, humor y cooperativo en Pandora.',
    cardDescEn:'Millions of guns, humor and co-op on Pandora.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2.4 GHz Dual Core'},{l:'GPU',v:'NVIDIA 8500 / ATI Radeon HD 2600'},{l:'Disco',v:'13 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'metroexodus', title:'Metro Exodus', short:'MTX',
    genre:'fps', genreLabel:'FPS', year:2019, dev:'4A Games',
    rating:'9.0', size:'59 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/412020/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/412020/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/ss_f0297eacbfb4266f311a8cb4137e4ef8b7cdd00b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/ss_bd875dbf865e70cda73a7cd6b132cadacfdb768b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/ss_7ef17676a804b0d646c38583ba0f68f33b3f3d9e.1920x1080.jpg',
    ],
    trailer:'256833673',
    desc:'Artyom deja los túneles del metro de Moscú y emprende un viaje en el tren Aurora por una Rusia devastada por la guerra nuclear. Mezcla de shooter y supervivencia con zonas abiertas, mutantes, crafteo y un ciclo de día y noche. Un viaje atmosférico de un año entero.',
    descEn:'Artyom leaves the Moscow metro tunnels and sets off on the Aurora train across a Russia devastated by nuclear war. A blend of shooter and survival with open areas, mutants, crafting and a day-night cycle. An atmospheric journey spanning a whole year.',
    cardDesc:'Escapá de Moscú en tren por la Rusia post-nuclear.',
    cardDescEn:'Flee Moscow by train across post-nuclear Russia.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4440'},{l:'GPU',v:'GTX 670 / GTX 1050 / Radeon HD 7870'},{l:'Disco',v:'59 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── RPG ── */
  {
    id:'fallout4', title:'Fallout 4', short:'FO4',
    genre:'rpg', genreLabel:'RPG', year:2015, dev:'Bethesda Game Studios',
    rating:'9.2', size:'30 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/377160/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/377160/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg',
    ],
    trailer:'256658080',
    desc:'Sos el único sobreviviente del Refugio 111 y salís a un Boston devastado por la guerra nuclear buscando a tu hijo. Explorá la Commonwealth, armá asentamientos, modificá armas y servoarmaduras y elegí entre facciones. La GOTY incluye los seis DLC como Far Harbor.',
    descEn:'You are the sole survivor of Vault 111, stepping out into a nuclear-ravaged Boston to find your son. Explore the Commonwealth, build settlements, mod weapons and power armor and choose between factions. The GOTY edition includes all six DLCs like Far Harbor.',
    cardDesc:'Salí del Refugio 111 y reconstruí Boston.',
    cardDescEn:'Leave Vault 111 and rebuild Boston.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-2300 / AMD Phenom II X4 945'},{l:'GPU',v:'GTX 550 Ti 2GB / Radeon HD 7870 2GB'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'fallout3', title:'Fallout 3', short:'FO3',
    genre:'rpg', genreLabel:'RPG', year:2008, dev:'Bethesda Game Studios',
    rating:'9.2', size:'7 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/22370/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/22370/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22370/ss_87fb57e11912a692f29614f88411d0db2cba405a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22370/ss_d770133d0a0c1b9b73fa31f20f29fe6617b73cfb.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22370/ss_2405f21839a5cec01918a5f6fe7cae0b80422107.1920x1080.jpg',
    ],
    trailer:'5523',
    desc:'Naciste en el Refugio 101, pero un día tu padre se escapa y salís a buscarlo al Yermo Capital, lo que queda de Washington tras la guerra nuclear. Sistema V.A.T.S., decisiones morales con consecuencias y cinco expansiones incluidas en la edición GOTY.',
    descEn:'You were born in Vault 101, but one day your father escapes and you head out to find him in the Capital Wasteland, what is left of Washington after nuclear war. V.A.T.S. combat, moral choices with real consequences and five expansions in the GOTY edition.',
    cardDesc:'El Yermo Capital te espera fuera del Refugio 101.',
    cardDescEn:'The Capital Wasteland awaits outside Vault 101.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1 GB'},{l:'CPU',v:'Intel Pentium 4 2.4 GHz'},{l:'GPU',v:'NVIDIA 6800 / ATI X850 (256 MB)'},{l:'Disco',v:'7 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'eldenring', title:'Elden Ring', short:'ER',
    genre:'rpg', genreLabel:'RPG', year:2022, dev:'FromSoftware',
    rating:'9.7', size:'60 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg',
    ],
    trailer:'256860537',
    desc:'Creado por FromSoftware junto a George R. R. Martin, Elden Ring te lleva a las Tierras Intermedias para convertirte en el Señor del Círculo. Un mundo abierto enorme lleno de secretos, jefes legendarios, magia e invocaciones, con montura y total libertad para explorar.',
    descEn:'Created by FromSoftware with George R. R. Martin, Elden Ring takes you to the Lands Between to become the Elden Lord. A vast open world full of secrets, legendary bosses, sorcery and summons, with a mount and total freedom to explore.',
    cardDesc:'Las Tierras Intermedias y el mejor souls en mundo abierto.',
    cardDescEn:'The Lands Between: the ultimate open-world souls.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'12 GB'},{l:'CPU',v:'Intel Core i5-8400 / AMD Ryzen 3 3300X'},{l:'GPU',v:'GTX 1060 3GB / Radeon RX 580 4GB'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'ds3', title:'Dark Souls III', short:'DS3',
    genre:'rpg', genreLabel:'RPG', year:2016, dev:'FromSoftware',
    rating:'9.4', size:'25 GB', version:'The Fire Fades Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1c0fa39091901496d77cf4cecfea4ffb056d6452.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1318a04ef11d87f38aebe6d47a96124f8f888ca8.1920x1080.jpg',
    ],
    trailer:'256663134',
    desc:'Las llamas se apagan y el mundo cae en ruinas. Como Latente, tenés que devolver a los Señores de la Ceniza a sus tronos en el reino de Lothric. Combate más rápido, jefes increíbles y un diseño de niveles brillante. Incluye las expansiones Ashes of Ariandel y The Ringed City.',
    descEn:'The flames are fading and the world is falling into ruin. As the Unkindled, you must return the Lords of Cinder to their thrones in the kingdom of Lothric. Faster combat, incredible bosses and brilliant level design. Includes Ashes of Ariandel and The Ringed City.',
    cardDesc:'El cierre épico de la trilogía Souls.',
    cardDescEn:'The epic finale of the Souls trilogy.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-2100 / AMD FX-6300'},{l:'GPU',v:'GTX 750 Ti / Radeon HD 7950'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'masseffect', title:'Mass Effect Legendary Edition', short:'MELE',
    genre:'rpg', genreLabel:'RPG', year:2021, dev:'BioWare',
    rating:'9.3', size:'120 GB', version:'Legendary Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_3cfdbd8a5d94f9005d33ba17bb6b163dc458ddf7.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_4e226eb092381ba6c4ea9c164a1d18574c993a8a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_8994024759b1e6afb09a99381637c8b6fb4e4075.1920x1080.jpg',
    ],
    trailer:'256836016',
    desc:'La trilogía Mass Effect remasterizada en 4K con más de 40 DLC. Sos el comandante Shepard y tenés que reunir una tripulación para salvar la galaxia de los Segadores. Tus decisiones se arrastran de un juego al otro y definen el destino de tus compañeros.',
    descEn:'The Mass Effect trilogy remastered in 4K with over 40 DLCs. You are Commander Shepard, assembling a crew to save the galaxy from the Reapers. Your choices carry over from game to game and decide the fate of your squad.',
    cardDesc:'La trilogía completa del comandante Shepard.',
    cardDescEn:"Commander Shepard's complete trilogy.",
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-3570 / AMD FX-8350'},{l:'GPU',v:'GTX 760 / Radeon 7970 (2 GB)'},{l:'Disco',v:'120 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'cyberpunk', title:'Cyberpunk 2077', short:'CP77',
    genre:'rpg', genreLabel:'RPG', year:2020, dev:'CD Projekt RED',
    rating:'9.1', size:'70 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_0e64170751e1ae20ff8fdb7001a8892fd48260e7.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_af2804aa4bf35d4251043744412ce3b359a125ef.1920x1080.jpg',
    ],
    trailer:'257081132',
    desc:'Sos V, un mercenario que busca un implante único que guarda la clave de la inmortalidad, y con él la conciencia de Johnny Silverhand. Explorá Night City, una megalópolis futurista llena de bandas, corporaciones y misiones. La Ultimate Edition incluye la expansión Phantom Liberty.',
    descEn:'You are V, a mercenary chasing a one-of-a-kind implant that holds the key to immortality, along with the mind of Johnny Silverhand. Explore Night City, a futuristic megalopolis of gangs, corporations and gigs. The Ultimate Edition includes the Phantom Liberty expansion.',
    cardDesc:'Night City, implantes y Keanu Reeves.',
    cardDescEn:'Night City, cyberware and Keanu Reeves.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'12 GB'},{l:'CPU',v:'Intel Core i7-6700 / AMD Ryzen 5 1600'},{l:'GPU',v:'GTX 1060 6GB / Radeon RX 580 8GB'},{l:'Disco',v:'70 GB SSD'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'bg3', title:"Baldur's Gate 3", short:'BG3',
    genre:'rpg', genreLabel:'RPG', year:2023, dev:'Larian Studios',
    rating:'9.8', size:'150 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg',
    ],
    trailer:'256987424',
    desc:"Basado en Dungeons & Dragons, Baldur's Gate 3 te pone a juntar un grupo de aventureros mientras un parásito te consume desde adentro. Combate por turnos, decisiones que cambian todo y cooperativo online. Ganador del premio a Juego del Año 2023.",
    descEn:"Based on Dungeons & Dragons, Baldur's Gate 3 has you gather a party of adventurers while a parasite consumes you from within. Turn-based combat, choices that change everything and online co-op. Winner of Game of the Year 2023.",
    cardDesc:'El RPG del año: D&D con libertad absoluta.',
    cardDescEn:'Game of the Year: D&D with total freedom.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-4690 / AMD FX 8350'},{l:'GPU',v:'GTX 970 / Radeon RX 480 (4 GB)'},{l:'Disco',v:'150 GB SSD'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'oblivion', title:'The Elder Scrolls IV: Oblivion', short:'TES4',
    genre:'rpg', genreLabel:'RPG', year:2006, dev:'Bethesda Game Studios',
    rating:'9.1', size:'4.6 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/22330/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/22330/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009037.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009038.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22330/0000009039.1920x1080.jpg',
    ],
    trailer:'5286',
    desc:'El emperador fue asesinado y las puertas de Oblivion se abren por toda la provincia de Cyrodiil. Libertad total para unirte a gremios, explorar mazmorras y forjar tu propio camino. La GOTY incluye las expansiones Knights of the Nine y Shivering Isles.',
    descEn:'The Emperor has been assassinated and the gates of Oblivion open across the province of Cyrodiil. Total freedom to join guilds, explore dungeons and forge your own path. The GOTY edition includes Knights of the Nine and Shivering Isles.',
    cardDesc:'Cerrá las puertas de Oblivion y salvá Cyrodiil.',
    cardDescEn:'Close the gates of Oblivion and save Cyrodiil.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'Intel Pentium 4 2 GHz'},{l:'GPU',v:'128 MB DirectX 9'},{l:'Disco',v:'4.6 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'mhw', title:'Monster Hunter: World', short:'MHW',
    genre:'rpg', genreLabel:'RPG', year:2018, dev:'Capcom',
    rating:'9.1', size:'52 GB', version:'+ Iceborne', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_6b4986a37c7b5c185a796085c002febcdd5357b5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_0dfb20f6f09c196bfc317bd517dc430ed6e6a2a4.1920x1080.jpg',
    ],
    trailer:'256769022',
    desc:'Viajá al Nuevo Mundo como cazador y enfrentate a criaturas enormes en ecosistemas vivos. Rastreá, cazá, conseguí materiales y fabricá armas y armaduras cada vez más poderosas. Catorce tipos de armas y cooperativo para cuatro jugadores. Incluye la expansión Iceborne.',
    descEn:'Travel to the New World as a hunter and take on huge creatures in living ecosystems. Track, hunt, gather materials and craft ever more powerful weapons and armor. Fourteen weapon types and four-player co-op. Includes the Iceborne expansion.',
    cardDesc:'Cazá monstruos gigantes en el Nuevo Mundo.',
    cardDescEn:'Hunt giant monsters in the New World.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4460 / AMD FX-6300'},{l:'GPU',v:'GTX 760 / Radeon R7 260x'},{l:'Disco',v:'52 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── AVENTURA ── */
  {
    id:'acbro', title:"Assassin's Creed Brotherhood", short:'ACB',
    genre:'aventura', genreLabel:'Aventura', year:2011, dev:'Ubisoft Montreal',
    rating:'9.1', size:'8 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/48190/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/48190/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48190/ss_412a6e71dcafa32ba9165d329cbd97e8669e0df4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48190/ss_b5fd8f198c7fdaa80e064039abc5b38238a5cef0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48190/ss_69a80289cc74d51d1edd016c1fbf9766ea63126b.1920x1080.jpg',
    ],
    trailer:'80643',
    desc:'La historia de Ezio Auditore continúa en Roma, el corazón del poder de los Borgia. Reclutá y entrená tu propia hermandad de asesinos, recuperá la ciudad barrio por barrio y descubrí los secretos de la Manzana del Edén. Incluye un multijugador original.',
    descEn:"Ezio Auditore's story continues in Rome, the heart of Borgia power. Recruit and train your own brotherhood of assassins, reclaim the city district by district and uncover the secrets of the Apple of Eden. Includes a unique multiplayer mode.",
    cardDesc:'Ezio y su hermandad contra los Borgia en Roma.',
    cardDescEn:'Ezio and his brotherhood take on the Borgia in Rome.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1.5 GB'},{l:'CPU',v:'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 2.4 GHz'},{l:'GPU',v:'256 MB DirectX 9 (Shader Model 3.0)'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'acblackflag', title:"Assassin's Creed IV: Black Flag", short:'AC4',
    genre:'aventura', genreLabel:'Aventura', year:2013, dev:'Ubisoft Montreal',
    rating:'9.3', size:'30 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/242050/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/242050/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/ss_82453694854272967e6f7c2147ff86f62a2b1408.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/ss_afb6f91bc96b51d0684bb4cbec4389b49dcb96db.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/ss_c2ad7f22e27b8ffab2a896e543a82fc8f6e9a1a7.1920x1080.jpg',
    ],
    trailer:'2030349',
    desc:"Edward Kenway es un pirata en la época dorada de la piratería en el Caribe. Navegá con tu barco, el Jackdaw, abordá galeones, buscá tesoros y explorá islas paradisíacas. Para muchos, el mejor Assassin's Creed gracias a su espectacular combate naval.",
    descEn:"Edward Kenway is a pirate in the golden age of Caribbean piracy. Sail your ship, the Jackdaw, board galleons, hunt for treasure and explore paradise islands. For many fans the best Assassin's Creed, thanks to its spectacular naval combat.",
    cardDesc:'Piratas, abordajes y el Caribe a toda vela.',
    cardDescEn:'Pirates, boarding battles and the Caribbean at full sail.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Quad Q8400 / AMD Athlon II X4 620'},{l:'GPU',v:'NVIDIA GTX 260 / Radeon HD 4870'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'acorigins', title:"Assassin's Creed Origins", short:'ACO',
    genre:'aventura', genreLabel:'Aventura', year:2017, dev:'Ubisoft Montreal',
    rating:'9.0', size:'42 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/582160/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/582160/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/ss_1a0ab42e93e51c48ad9a6bda7f408958e09a43b0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/ss_c4a4545f51c6836ac11c31427944fc7df813edfb.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/ss_7edc3de6db0e6391158863f766c334c6eab1dbaa.1920x1080.jpg',
    ],
    trailer:'256686955',
    desc:'Viajá al Antiguo Egipto como Bayek, un medjay que busca venganza y termina fundando la Hermandad de los Asesinos. Un mundo abierto gigante con pirámides, desiertos y el delta del Nilo, nuevo combate estilo RPG y misiones con faraones y dioses.',
    descEn:'Travel to Ancient Egypt as Bayek, a Medjay seeking revenge who ends up founding the Brotherhood of Assassins. A huge open world of pyramids, deserts and the Nile delta, new RPG-style combat and quests with pharaohs and gods.',
    cardDesc:'El origen de la Hermandad en el Antiguo Egipto.',
    cardDescEn:'The birth of the Brotherhood in Ancient Egypt.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i5-2400s / AMD FX-6350'},{l:'GPU',v:'GTX 660 / Radeon R9 270 (2 GB)'},{l:'Disco',v:'42 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'rottr', title:'Rise of the Tomb Raider', short:'ROTTR',
    genre:'aventura', genreLabel:'Aventura', year:2016, dev:'Crystal Dynamics',
    rating:'9.1', size:'25 GB', version:'20 Year Celebration', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/391220/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/391220/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391220/ss_4ef0868ecfc6b19bc1af18b88cabe33fe8147cf7.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391220/ss_be8bcd75e7dbf8cf7d8c861e15c12211b39f160d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391220/ss_3b46aa127290e6ad2f62c125096bf5e901458ad6.1920x1080.jpg',
    ],
    trailer:'256659136',
    desc:'Lara Croft sigue los pasos de su padre hasta Siberia en busca de la ciudad perdida de Kitezh y el secreto de la inmortalidad. Tumbas desafiantes, sigilo, caza y crafteo en paisajes nevados espectaculares. La edición 20 aniversario incluye todos los DLC.',
    descEn:"Lara Croft follows in her father's footsteps to Siberia, searching for the lost city of Kitezh and the secret of immortality. Challenging tombs, stealth, hunting and crafting across spectacular snowy landscapes. The 20 Year Celebration includes every DLC.",
    cardDesc:'Lara busca la fuente de la inmortalidad en Siberia.',
    cardDescEn:'Lara searches for the source of immortality in Siberia.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i3-2100 / AMD FX-4100'},{l:'GPU',v:'GTX 650 2GB / Radeon HD 7770 2GB'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'uncharted', title:'Uncharted: Legacy of Thieves Collection', short:'UNCH',
    genre:'aventura', genreLabel:'Aventura', year:2022, dev:'Naughty Dog',
    rating:'9.3', size:'126 GB', version:'Uncharted 4 + The Lost Legacy', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/e59420593825cddd6c5718561b1ffa44d4086f4d/ss_e59420593825cddd6c5718561b1ffa44d4086f4d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/1bb804eb1e1ac1b23840c977586c8f9c2c0393a8/ss_1bb804eb1e1ac1b23840c977586c8f9c2c0393a8.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/074469c3a7070c2a821ae984705276028ebf34c2/ss_074469c3a7070c2a821ae984705276028ebf34c2.1920x1080.jpg',
    ],
    trailer:'256910607',
    desc:'Incluye Uncharted 4: El desenlace del ladrón y Uncharted: El legado perdido. Nathan Drake vuelve al mundo de los cazadores de tesoros para buscar el botín del pirata Henry Avery, con persecuciones, tiroteos y escaladas dignas de una película de acción.',
    descEn:"Includes Uncharted 4: A Thief's End and Uncharted: The Lost Legacy. Nathan Drake returns to treasure hunting in search of pirate Henry Avery's fortune, with chases, gunfights and climbing worthy of a blockbuster movie.",
    cardDesc:'Nathan Drake en su última gran aventura.',
    cardDescEn:"Nathan Drake's final great adventure.",
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-4430 / AMD Ryzen 3 1200'},{l:'GPU',v:'GTX 960 4GB / Radeon R9 290X 4GB'},{l:'Disco',v:'126 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'tlou', title:'The Last of Us Part I', short:'TLOU',
    genre:'aventura', genreLabel:'Aventura', year:2023, dev:'Naughty Dog',
    rating:'9.4', size:'100 GB', version:'Remake', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_3f1805ecddafacee7f61f87cb8e4624435a83ee3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_89fffc2857dcae29dee2a09f1be33d745610e19d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_8cd55ab975b2e47f4d4d9a0da4ae6948040ef807.1920x1080.jpg',
    ],
    trailer:'256936971',
    desc:'Veinte años después de una pandemia que convirtió a la gente en infectados, Joel tiene que escoltar a Ellie, una chica de 14 años, a través de unos Estados Unidos en ruinas. Remake completo de la obra maestra de Naughty Dog. Incluye la precuela Left Behind.',
    descEn:"Twenty years after a pandemic turned people into the Infected, Joel must escort Ellie, a 14-year-old girl, across a ruined United States. A full remake of Naughty Dog's masterpiece. Includes the Left Behind prequel.",
    cardDesc:'Joel y Ellie cruzan unos Estados Unidos devastados.',
    cardDescEn:'Joel and Ellie cross a devastated America.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'16 GB'},{l:'CPU',v:'Intel Core i7-4770K / AMD Ryzen 5 1500X'},{l:'GPU',v:'GTX 970 4GB / Radeon RX 470 4GB'},{l:'Disco',v:'100 GB SSD'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'hollowknight', title:'Hollow Knight', short:'HK',
    genre:'aventura', genreLabel:'Aventura', year:2017, dev:'Team Cherry',
    rating:'9.6', size:'9 GB', version:'Voidheart Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg',
    ],
    trailer:'256679401',
    desc:'Explorá Hallownest, un reino subterráneo de insectos en ruinas, en este metroidvania dibujado a mano. Más de 130 enemigos, 30 jefes desafiantes, habilidades nuevas para desbloquear caminos y una banda sonora preciosa. Incluye todas las expansiones gratuitas.',
    descEn:'Explore Hallownest, a ruined underground kingdom of insects, in this hand-drawn metroidvania. Over 130 enemies, 30 challenging bosses, new abilities that open new paths and a beautiful soundtrack. Includes every free expansion.',
    cardDesc:'Un reino de insectos en ruinas lleno de secretos.',
    cardDescEn:'A ruined kingdom of insects full of secrets.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-3240 / AMD FX-4300'},{l:'GPU',v:'GTX 560 Ti / Radeon HD 7750 (1 GB)'},{l:'Disco',v:'9 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'horizon', title:'Horizon Zero Dawn', short:'HZD',
    genre:'aventura', genreLabel:'Aventura', year:2020, dev:'Guerrilla Games',
    rating:'9.2', size:'100 GB', version:'Complete Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_d09106060fb7de8bf342c23df18b14debc8a15a3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_271f850eec3f96b22aa17be35b948268e0771c7f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_15f5759c441e4e5f51e1a8ee333e4ab9df9aa783.1920x1080.jpg',
    ],
    trailer:'256899640',
    desc:'En un futuro lejano, la humanidad volvió a vivir en tribus y las máquinas con forma de animales dominan la Tierra. Sos Aloy, una cazadora experta que busca descubrir su pasado. Arco, trampas y estrategia para derribar máquinas gigantes. Incluye The Frozen Wilds.',
    descEn:'In the distant future, humanity lives in tribes again and animal-like machines rule the Earth. You are Aloy, a skilled hunter searching for her past. Use bows, traps and strategy to take down giant machines. Includes The Frozen Wilds.',
    cardDesc:'Aloy contra dinosaurios robot en un mundo salvaje.',
    cardDescEn:'Aloy versus robot dinosaurs in a wild world.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-2500K / AMD FX-6300'},{l:'GPU',v:'GTX 780 3GB / Radeon R9 290 4GB'},{l:'Disco',v:'100 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'hogwarts', title:'Hogwarts Legacy', short:'HOG',
    genre:'aventura', genreLabel:'Aventura', year:2023, dev:'Avalanche Software',
    rating:'9.0', size:'85 GB', version:'Deluxe Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg',
    ],
    trailer:'256930504',
    desc:'Sos un estudiante de quinto año en Hogwarts a fines del siglo XIX, con la capacidad de dominar una magia antigua. Aprendé hechizos, prepará pociones, volá en escoba y explorá el castillo, Hogsmeade y las Tierras Altas. Un mundo abierto para fans de Harry Potter.',
    descEn:'You are a fifth-year student at Hogwarts in the late 1800s with the ability to wield an ancient magic. Learn spells, brew potions, fly on a broom and explore the castle, Hogsmeade and the Highlands. An open world for every Harry Potter fan.',
    cardDesc:'Viví tu propia historia en Hogwarts en el siglo XIX.',
    cardDescEn:'Live your own story at Hogwarts in the 1800s.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'16 GB'},{l:'CPU',v:'Intel Core i5-6600 / AMD Ryzen 5 1400'},{l:'GPU',v:'GTX 960 4GB / Radeon RX 470 4GB'},{l:'Disco',v:'85 GB SSD'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'crash', title:'Crash Bandicoot N. Sane Trilogy', short:'CRASH',
    genre:'aventura', genreLabel:'Aventura', year:2018, dev:'Vicarious Visions',
    rating:'9.0', size:'30 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/731490/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/731490/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/731490/ss_66d4bf28161b1c7a5a78f579bcea05a0785f2c50.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/731490/ss_931f13ad19753ac5d491bc55e31ec9e2181ca637.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/731490/ss_312f4dbd137af1b36c3572aaa79349db6dd841a2.1920x1080.jpg',
    ],
    trailer:'256720063',
    desc:'Crash Bandicoot vuelve con sus tres primeras aventuras totalmente remasterizadas: Crash Bandicoot, Cortex Strikes Back y Warped. Saltá, girá y rompé cajas para frenar los planes del Dr. Neo Cortex. La nostalgia de PlayStation con gráficos modernos.',
    descEn:'Crash Bandicoot returns with his first three adventures fully remastered: Crash Bandicoot, Cortex Strikes Back and Warped. Jump, spin and smash crates to stop Dr. Neo Cortex. PlayStation nostalgia with modern graphics.',
    cardDesc:'Los tres Crash clásicos de PlayStation, remasterizados.',
    cardDescEn:'The three classic PlayStation Crash games, remastered.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 965'},{l:'GPU',v:'GTX 660 2GB / Radeon HD 7850 2GB'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── CONDUCCIÓN ── */
  {
    id:'nfsmw2012', title:'Need for Speed: Most Wanted (2012)', short:'NFSMW12',
    genre:'conducción', genreLabel:'Conducción', year:2012, dev:'Criterion Games',
    rating:'8.8', size:'20 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1262560/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1262560/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262560/ss_82adddc724f99986dafdfe5f713de45e12a4ece5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262560/ss_4292ba4d468883bb13c619330229047f9ab197f7.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262560/ss_6b9c3c8cdf2a6a1c03a9525e3e09b1db23643cac.1920x1080.jpg',
    ],
    trailer:'256789460',
    desc:'Criterion reinventa Most Wanted en Fairhaven, una ciudad abierta donde todos los autos están para que los encuentres y los manejes. Persecuciones policiales, saltos, choques espectaculares y la lista de los 10 corredores más buscados que tenés que derrotar.',
    descEn:'Criterion reimagines Most Wanted in Fairhaven, an open city where every car is out there to find and drive. Police chases, jumps, spectacular crashes and a list of the 10 most wanted racers to take down.',
    cardDesc:'Convertite en el más buscado de Fairhaven.',
    cardDescEn:'Become the most wanted driver in Fairhaven.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.7 GHz'},{l:'GPU',v:'512 MB DirectX 10.1 (GeForce 8800 / Radeon 3000)'},{l:'Disco',v:'20 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v10.1'}]
  },
  {
    id:'nfsheat', title:'Need for Speed Heat', short:'NFSH',
    genre:'conducción', genreLabel:'Conducción', year:2019, dev:'Ghost Games',
    rating:'8.7', size:'50 GB', version:'Deluxe Edition', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/ss_4127c58a6a10124b4ba28375ec937a977aba37fc.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/ss_6994870577a41882c458cd00d852d8092116c81c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/ss_1f752c037d7cbab2e1658f36d5c76d11e91e4fec.1920x1080.jpg',
    ],
    trailer:'256823664',
    desc:'En Palm City corrés de día en eventos oficiales para ganar plata, y de noche en carreras callejeras para ganar reputación mientras escapás de una policía corrupta. Tuning profundo, personalización visual al máximo y una ciudad inspirada en Miami.',
    descEn:'In Palm City you race official events by day to earn cash, and hit the streets at night to build rep while escaping a corrupt police force. Deep tuning, extensive visual customization and a Miami-inspired city.',
    cardDesc:'De día carreras legales, de noche ilegales.',
    cardDescEn:'Legal races by day, street races by night.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'AMD FX-6350 / Intel Core i5-3570'},{l:'GPU',v:'GTX 760 / Radeon R9 280x'},{l:'Disco',v:'50 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'nfsrivals', title:'Need for Speed Rivals', short:'NFSR',
    genre:'conducción', genreLabel:'Conducción', year:2013, dev:'Ghost Games',
    rating:'8.3', size:'30 GB', version:'Complete Edition', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1262600/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1262600/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262600/ss_973335e826e450b176fdc5e54c003ffbdf48a8c2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262600/ss_25ed9eea91e7d3d582eebc4d3df2a03cbc4ac295.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262600/ss_e8801aa10a3a3089d34672a7e28bcb9d711c8d46.1920x1080.jpg',
    ],
    trailer:'256787680',
    desc:'Elegí ser corredor o policía en Redview County, un mundo abierto donde las persecuciones pueden empezar en cualquier momento. Gadgets como pulsos electromagnéticos y bloqueos, autos exóticos y un modo en línea que mezcla a todos los jugadores en el mismo mapa.',
    descEn:'Choose to be a racer or a cop in Redview County, an open world where pursuits can break out at any moment. Gadgets like EMPs and roadblocks, exotic cars and an online mode that drops every player into the same map.',
    cardDesc:'Corredor o policía en Redview County.',
    cardDescEn:'Racer or cop in Redview County.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.8 GHz'},{l:'GPU',v:'GeForce 8800 GT / Radeon 3870 (512 MB)'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'fh5', title:'Forza Horizon 5', short:'FH5',
    genre:'conducción', genreLabel:'Conducción', year:2021, dev:'Playground Games',
    rating:'9.4', size:'110 GB', version:'Premium Edition', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_cf56e25a0290556ba83229eb0ab370d10be0407c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_00f0090174380eeaf8753bd3d1028b6772c3aebf.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.1920x1080.jpg',
    ],
    trailer:'256875134',
    desc:'Forza Horizon 5 te lleva a un México enorme y vibrante, con desiertos, selvas, ciudades coloniales y un volcán activo. Cientos de autos reales, estaciones que cambian el mapa, eventos espectaculares y juego en línea con amigos. El mejor juego de carreras arcade de la actualidad.',
    descEn:'Forza Horizon 5 takes you to a huge, vibrant Mexico with deserts, jungles, colonial towns and an active volcano. Hundreds of real cars, seasons that change the map, spectacular events and online play with friends. The best arcade racing game around.',
    cardDesc:'El festival Horizon llega a México.',
    cardDescEn:'The Horizon Festival comes to Mexico.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-4460 / AMD Ryzen 3 1200'},{l:'GPU',v:'GTX 970 / Radeon RX 470'},{l:'Disco',v:'110 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'burnout', title:'Burnout Paradise Remastered', short:'BRN',
    genre:'conducción', genreLabel:'Conducción', year:2018, dev:'Criterion Games',
    rating:'8.8', size:'8 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1238080/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1238080/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238080/ss_99a41070a24edee74d8d1cad94bf390a427978aa.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238080/ss_0ede399d2c0a7ad1bd4416bef9a4da22f840df75.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238080/ss_c584613cd8b78f2395783b911631898ec44a6eda.1920x1080.jpg',
    ],
    trailer:'256786307',
    desc:'Paradise City es tu patio de juegos: carreras, choques espectaculares, saltos imposibles y takedowns contra rivales en un mundo abierto sin tiempos de carga. La versión remasterizada incluye todos los DLC, como la isla Big Surf y las motos.',
    descEn:'Paradise City is your playground: races, spectacular crashes, impossible jumps and takedowns against rivals in a seamless open world. The remastered version includes every DLC, including Big Surf Island and bikes.',
    cardDesc:'Choques, saltos y destrucción en Paradise City.',
    cardDescEn:'Crashes, jumps and carnage in Paradise City.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel i3 2120 / AMD Phenom II X4 965'},{l:'GPU',v:'GT 450 / Radeon HD 5750'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'ets2', title:'Euro Truck Simulator 2', short:'ETS2',
    genre:'conducción', genreLabel:'Conducción', year:2012, dev:'SCS Software',
    rating:'9.2', size:'25 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/227300/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/227300/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9/ss_e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/edbff61a062a49d1d97269e53b8afbffde05bb24/ss_edbff61a062a49d1d97269e53b8afbffde05bb24.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/c610d985eb21cc22c26507b53cd843cfa0b3a00d/ss_c610d985eb21cc22c26507b53cd843cfa0b3a00d.1920x1080.jpg',
    ],
    trailer:'256882174',
    desc:'Recorré Europa al volante de camiones reales llevando cargas entre decenas de ciudades. Empezá como chofer, comprá tus propios camiones, contratá conductores y armá una empresa de transporte. Relajante, adictivo y con miles de mods de la comunidad.',
    descEn:'Travel across Europe behind the wheel of real trucks, hauling cargo between dozens of cities. Start as a driver, buy your own trucks, hire drivers and build a transport company. Relaxing, addictive and backed by thousands of community mods.',
    cardDesc:'Manejá camiones por toda Europa y armá tu empresa.',
    cardDescEn:'Drive trucks across Europe and build your company.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-6400 / AMD Ryzen 3 1200'},{l:'GPU',v:'GTX 660 / Radeon RX 460 (2 GB)'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'assetto', title:'Assetto Corsa', short:'AC',
    genre:'conducción', genreLabel:'Conducción', year:2014, dev:'Kunos Simulazioni',
    rating:'8.9', size:'15 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/244210/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/244210/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/ss_cc532907a14b12117825c609b9c941768ce87e51.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/ss_b97afb7a10ad6455c01d0e2a191e105007cf7504.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/ss_131963607a54afaf64688397d9742af37149148d.1920x1080.jpg',
    ],
    trailer:'256704206',
    desc:'Uno de los simuladores de manejo más realistas, con física avanzada, autos con licencia oficial y circuitos escaneados con láser como Monza, Spa y Nürburgring. Ideal para jugar con volante y con una comunidad de mods enorme que agrega cientos de autos y pistas.',
    descEn:'One of the most realistic driving simulators, with advanced physics, officially licensed cars and laser-scanned circuits like Monza, Spa and the Nürburgring. Ideal with a wheel, backed by a huge modding community that adds hundreds of cars and tracks.',
    cardDesc:'Simulación de manejo pura con autos y pistas reales.',
    cardDescEn:'Pure driving simulation with real cars and tracks.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'AMD Athlon X2 2.8 GHz / Intel Core 2 Duo 2.4 GHz'},{l:'GPU',v:'DirectX 10.1 (Radeon HD 6450 / GeForce GT 460)'},{l:'Disco',v:'15 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'flatout2', title:'FlatOut 2', short:'FO2',
    genre:'conducción', genreLabel:'Conducción', year:2006, dev:'Bugbear Entertainment',
    rating:'8.9', size:'3 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2990/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2990/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990/0000001055.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990/0000001056.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2990/0000001057.1920x1080.jpg',
    ],
    desc:'Carreras salvajes donde vale todo: chocá a tus rivales, destruí el escenario y usá el nitro para ganar. Incluye los famosos minijuegos donde lanzás al piloto por el parabrisas para hacer strikes de bowling o saltos de altura. Un clásico de los cibers.',
    descEn:'Wild races where anything goes: smash your rivals, wreck the scenery and use nitro to win. Includes the famous stunt mini-games where you launch your driver through the windshield for bowling strikes or high jumps. A LAN-party classic.',
    cardDesc:'Carreras de demolición y el piloto volando por el aire.',
    cardDescEn:'Demolition racing with drivers flying through the air.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256 MB'},{l:'CPU',v:'Intel Pentium 4 2.0 GHz'},{l:'GPU',v:'64 MB DirectX 9'},{l:'Disco',v:'3 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'beamng', title:'BeamNG.drive', short:'BNG',
    genre:'conducción', genreLabel:'Conducción', year:2015, dev:'BeamNG',
    rating:'9.0', size:'60 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/284160/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/284160/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/284160/ss_ae4c258e6f13ddf00ee8e72be8bd0b0fc5e67801.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/284160/ss_50b8ba7ff80d50af3bd6b1b4e326849555a952a2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/284160/ss_e55bbb37fa7208d720d15e69c23c8d932283b4fe.1920x1080.jpg',
    ],
    trailer:'257056227',
    desc:'BeamNG.drive simula cada parte de los vehículos en tiempo real, así que cada choque, salto o vuelco se ve y se siente real. Mapas abiertos, cientos de vehículos, escenarios y un editor para crear lo que quieras. Ideal para experimentar y para los fans de los mods.',
    descEn:'BeamNG.drive simulates every part of each vehicle in real time, so every crash, jump or rollover looks and feels real. Open maps, hundreds of vehicles, scenarios and an editor to build anything. Perfect for experimenting and for modding fans.',
    cardDesc:'La física de choques más realista que existe.',
    cardDescEn:'The most realistic crash physics ever made.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'16 GB'},{l:'CPU',v:'AMD Ryzen 5 1600 / Intel Core i5-8400'},{l:'GPU',v:'GTX 1060 6GB / Radeon RX 570'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── ESTRATEGIA ── */
  {
    id:'aoe3', title:'Age of Empires III', short:'AOE3',
    genre:'estrategia', genreLabel:'Estrategia', year:2020, dev:"World's Edge",
    rating:'9.0', size:'42 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/933110/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/933110/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/933110/893b00f551ac2ff8f0d117a142faebb242f2bfd4/ss_893b00f551ac2ff8f0d117a142faebb242f2bfd4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/933110/0ce49006f59004b0afd9488471a20b15b7543f49/ss_0ce49006f59004b0afd9488471a20b15b7543f49.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/933110/136a60d55135896794d172808c57f7d689bd73a7/ss_136a60d55135896794d172808c57f7d689bd73a7.1920x1080.jpg',
    ],
    trailer:'256798809',
    desc:'Liderá una potencia europea o una nación nativa durante la colonización de América. Armá tu ciudad, enviá cartas desde tu metrópolis y conquistá el Nuevo Mundo. La Definitive Edition trae gráficos 4K, nuevas civilizaciones como incas y suecos y todas las expansiones.',
    descEn:'Lead a European power or a native nation through the colonization of the Americas. Build your town, ship cards from your home city and conquer the New World. The Definitive Edition adds 4K graphics, new civilizations like the Inca and Swedes, and every expansion.',
    cardDesc:'La colonización de América en tiempo real.',
    cardDescEn:'The colonization of the Americas in real time.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i3-2105'},{l:'GPU',v:'GeForce GT 430 / Radeon HD 5570'},{l:'Disco',v:'42 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'aoe4', title:'Age of Empires IV', short:'AOE4',
    genre:'estrategia', genreLabel:'Estrategia', year:2021, dev:'Relic Entertainment',
    rating:'9.0', size:'50 GB', version:'Anniversary Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/ss_2ae5b5a2a779c31e3acae486ec359b0d9087bc8c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/ss_5384805fa5d365b069f197498269fabd7143cb4c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1466860/ss_4da9632574ab355b1a581190c262d21a1d3248ba.1920x1080.jpg',
    ],
    trailer:'256913281',
    desc:'La saga de estrategia más famosa regresa con civilizaciones únicas como los mongoles, los ingleses y los chinos, cada una con su propio estilo de juego. Campañas históricas con documentales, asedios con armas de pólvora y un multijugador competitivo muy activo.',
    descEn:'The most famous strategy series returns with unique civilizations like the Mongols, English and Chinese, each with its own playstyle. Historical campaigns with documentaries, gunpowder sieges and a very active competitive multiplayer.',
    cardDesc:'La saga vuelve con batallas medievales épicas.',
    cardDescEn:'The saga returns with epic medieval battles.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-6300U / AMD Ryzen 5 2400G'},{l:'GPU',v:'Intel HD 520 / Radeon RX Vega 11'},{l:'Disco',v:'50 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'aoe1', title:'Age of Empires', short:'AOE',
    genre:'estrategia', genreLabel:'Estrategia', year:2019, dev:'Forgotten Empires',
    rating:'8.8', size:'20 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1017900/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1017900/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1017900/ss_8eb2a7b1ebeb669f107c4af1afb1118f2d8a8e5f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1017900/ss_934c6edd764cb8d3cbf91c636d472ff60e244ec3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1017900/ss_bfd3d1e91f386b53f92aba8340faa31260d43e1b.1920x1080.jpg',
    ],
    trailer:'256759482',
    desc:'El primer Age of Empires totalmente remasterizado: llevá a tu civilización desde la Edad de Piedra hasta la Edad de Hierro. Egipcios, griegos, babilonios y más, con gráficos 4K, música renovada, nuevas mejoras de interfaz y multijugador en línea.',
    descEn:'The original Age of Empires fully remastered: guide your civilization from the Stone Age to the Iron Age. Egyptians, Greeks, Babylonians and more, with 4K graphics, a re-recorded soundtrack, interface upgrades and online multiplayer.',
    cardDesc:'El clásico que empezó todo, remasterizado en 4K.',
    cardDescEn:'The classic that started it all, remastered in 4K.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i5 / AMD Dual Core 1.8 GHz'},{l:'GPU',v:'DirectX 11 (Intel HD 4000)'},{l:'Disco',v:'20 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'civ5', title:"Sid Meier's Civilization V", short:'CIV5',
    genre:'estrategia', genreLabel:'Estrategia', year:2010, dev:'Firaxis Games',
    rating:'9.2', size:'8 GB', version:'Complete Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/8930/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/8930/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8930/ss_7082faf1b0941ddbc4ba9dab5807a9b5e77d72f9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8930/ss_e6f9ef54f06ffebc9445d8b29d8d2054fa3185d4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8930/ss_aa383406a5f2979598b543d8f272d3ac145e357a.1920x1080.jpg',
    ],
    trailer:'5690',
    desc:'Guiá a tu civilización desde la prehistoria hasta la era espacial. Fundá ciudades, investigá tecnologías, negociá con otros líderes y ganá por conquista, ciencia, cultura o diplomacia. La Complete Edition incluye Gods & Kings y Brave New World.',
    descEn:'Guide your civilization from prehistory to the space age. Found cities, research technologies, negotiate with other leaders and win through conquest, science, culture or diplomacy. The Complete Edition includes Gods & Kings and Brave New World.',
    cardDesc:'Un turno más... y construí un imperio eterno.',
    cardDescEn:'Just one more turn... and build an everlasting empire.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 2.0 GHz'},{l:'GPU',v:'ATI HD2600 XT / NVIDIA 7900 GS (256 MB)'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'civ6', title:"Sid Meier's Civilization VI", short:'CIV6',
    genre:'estrategia', genreLabel:'Estrategia', year:2016, dev:'Firaxis Games',
    rating:'9.1', size:'17 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/289070/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/289070/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_12cc6e1f4084de5bc0f66bfdbe3aaf3e59388b53.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_6c4a3cfb61f1a9677cf2ac549c2816a4e651f741.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_b2bf12299c38214fe520af0f724a6349d17ed330.1920x1080.jpg',
    ],
    trailer:'256672694',
    desc:'La entrega más completa de Civilization: las ciudades ahora se expanden por el mapa con distritos especializados. Investigá, comerciá, hacé guerra o ganá por religión. La Gold Edition incluye la expansión Rise and Fall y varios paquetes de civilizaciones.',
    descEn:'The most complete Civilization yet: cities now sprawl across the map with specialized districts. Research, trade, wage war or win through religion. The Gold Edition includes the Rise and Fall expansion and several civilization packs.',
    cardDesc:'Ciudades que se expanden por el mapa y líderes icónicos.',
    cardDescEn:'Cities that sprawl across the map and iconic leaders.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3 2.5 GHz / AMD Phenom II 2.6 GHz'},{l:'GPU',v:'1 GB (Radeon 5570 / GeForce 450 / Intel HD 530)'},{l:'Disco',v:'17 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'cnc', title:'Command & Conquer Remastered Collection', short:'CNC',
    genre:'estrategia', genreLabel:'Estrategia', year:2020, dev:'Petroglyph',
    rating:'9.0', size:'32 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1213210/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1213210/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1213210/ss_5fff8207ed5ffdfef6c36290a9b32f97e9bffb42.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1213210/ss_77f4464527f8c4e01bccb9e94c2af485e3dd0e08.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1213210/ss_75277c48e5a23a9aca86789a364b4d3a5394e5fa.1920x1080.jpg',
    ],
    trailer:'256787918',
    desc:'Los dos clásicos de la estrategia en tiempo real, Tiberian Dawn y Red Alert, remasterizados en 4K con todas sus expansiones. Más de 7 horas de música remasterizada por Frank Klepacki, videos restaurados y multijugador en línea renovado.',
    descEn:'Two real-time strategy classics, Tiberian Dawn and Red Alert, remastered in 4K with every expansion. Over 7 hours of music remastered by Frank Klepacki, restored cutscenes and revamped online multiplayer.',
    cardDesc:'C&C y Red Alert remasterizados en 4K.',
    cardDescEn:'C&C and Red Alert remastered in 4K.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo E4600 / AMD Athlon 64 X2 6400'},{l:'GPU',v:'GeForce GT 420 / Radeon HD 5570'},{l:'Disco',v:'32 GB'},{l:'SO',v:'Windows 8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'romer', title:'Total War: Rome Remastered', short:'ROME',
    genre:'estrategia', genreLabel:'Estrategia', year:2021, dev:'Creative Assembly',
    rating:'8.7', size:'45 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/885970/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/885970/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/885970/ss_94607ef2db813d4f5c493ec57ff631a8327b00ef.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/885970/ss_b6eb84ba1301caa65a5ffccc568c0cd0c5fe80f0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/885970/ss_6db1660ca0f4429fd8027669136a01949171063d.1920x1080.jpg',
    ],
    trailer:'256832225',
    desc:'El legendario Rome: Total War remasterizado en 4K. Manejá tu imperio en un mapa por turnos y dirigí batallas en tiempo real con miles de soldados. Incluye las expansiones Barbarian Invasion y Alexander, y 16 facciones nuevas para jugar.',
    descEn:'The legendary Rome: Total War remastered in 4K. Run your empire on a turn-based map and command real-time battles with thousands of soldiers. Includes the Barbarian Invasion and Alexander expansions, plus 16 newly playable factions.',
    cardDesc:'Conquistá el mundo antiguo con legiones romanas.',
    cardDescEn:'Conquer the ancient world with Roman legions.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel i3 / AMD FX-4000'},{l:'GPU',v:'GTX 600 / Radeon HD 7000 (1 GB)'},{l:'Disco',v:'45 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'stronghold', title:'Stronghold Crusader HD', short:'SHC',
    genre:'estrategia', genreLabel:'Estrategia', year:2002, dev:'Firefly Studios',
    rating:'9.0', size:'850 MB', version:'HD', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/40970/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/40970/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40970/ss_b2da292b97471df65e7db87ef15b84ae53799be0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40970/ss_9b06199ee9165fff5cb5fe682c2cbb41016afaaf.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40970/ss_85a9e4eea5b61ffa0adbfcb434c98aa7fc9361ce.1920x1080.jpg',
    ],
    trailer:'2029619',
    desc:'El clásico de los cibers: construí castillos, administrá la economía y defendete de los asedios en las Cruzadas. Enfrentate a señores como el Lobo, el Sultán y Ricardo Corazón de León en el modo escaramuza. La versión HD soporta resoluciones modernas.',
    descEn:'An internet café classic: build castles, manage your economy and hold off sieges during the Crusades. Face lords like the Wolf, the Sultan and Richard the Lionheart in skirmish mode. The HD version supports modern resolutions.',
    cardDesc:'Construí tu castillo y resistí asedios en las Cruzadas.',
    cardDescEn:'Build your castle and survive sieges in the Crusades.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'Intel Pentium 4 1.6 GHz'},{l:'GPU',v:'64 MB DirectX 8.1'},{l:'Disco',v:'850 MB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.1'}]
  },
  {
    id:'pvz', title:'Plants vs. Zombies', short:'PVZ',
    genre:'estrategia', genreLabel:'Estrategia', year:2009, dev:'PopCap Games',
    rating:'9.3', size:'65 MB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/3590/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/3590/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008150.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008151.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008152.1920x1080.jpg',
    ],
    trailer:'900829',
    desc:'Una horda de zombies quiere entrar a tu casa y tu única defensa son las plantas de tu jardín. Lanzaguisantes, girasoles, nueces y cerezas explosivas en un tower defense adictivo, con modo aventura, minijuegos, puzzles y modo supervivencia. Para todas las edades.',
    descEn:'A horde of zombies wants into your house and your only defense is your garden. Peashooters, sunflowers, wall-nuts and cherry bombs in an addictive tower defense with adventure mode, mini-games, puzzles and survival. Fun for all ages.',
    cardDesc:'Defendé tu casa de los zombies con plantas.',
    cardDescEn:'Defend your home from zombies with plants.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'1 GB'},{l:'CPU',v:'1.2 GHz'},{l:'GPU',v:'128 MB Video'},{l:'Disco',v:'65 MB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.0'}]
  },

  /* ── PELEA ── */
  {
    id:'mk11', title:'Mortal Kombat 11', short:'MK11',
    genre:'pelea', genreLabel:'Pelea', year:2019, dev:'NetherRealm Studios',
    rating:'9.2', size:'60 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/976310/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/976310/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_e5cd8debd74027dbfafd9729fc32986a63393333.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_4fa4fd2ea1b7ff6c6b699dc9eb717986f80845a4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_aa70f659fe14e3c07033474249096b60c17021b3.1920x1080.jpg',
    ],
    trailer:'256813084',
    desc:'Kronika, la guardiana del tiempo, quiere reescribir la historia y junta a los luchadores del pasado y del presente. Combate brutal con Fatal Blows, Fatalities y personalización de equipamiento. La Ultimate Edition incluye Aftermath y todos los personajes extra.',
    descEn:'Kronika, keeper of time, wants to rewrite history and brings together fighters from past and present. Brutal combat with Fatal Blows, Fatalities and gear customization. The Ultimate Edition includes Aftermath and every bonus fighter.',
    cardDesc:'Fatalities, viajes en el tiempo y Kronika.',
    cardDescEn:'Fatalities, time travel and Kronika.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 965'},{l:'GPU',v:'GTX 670 / GTX 1050 / Radeon HD 7950'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'sf6', title:'Street Fighter 6', short:'SF6',
    genre:'pelea', genreLabel:'Pelea', year:2023, dev:'Capcom',
    rating:'9.2', size:'60 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.1920x1080.jpg',
    ],
    desc:'Street Fighter 6 trae el sistema Drive, controles modernos para principiantes y un modo World Tour donde creás tu propio luchador y recorrés Metro City. Ryu, Chun-Li, Ken y nuevas caras en el juego de pelea más completo de Capcom.',
    descEn:"Street Fighter 6 introduces the Drive System, modern controls for newcomers and a World Tour mode where you create your own fighter and explore Metro City. Ryu, Chun-Li, Ken and new faces in Capcom's most complete fighting game.",
    cardDesc:'La saga de pelea más famosa en su mejor versión.',
    cardDescEn:'The most famous fighting series at its best.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-7500 / AMD Ryzen 3 1200'},{l:'GPU',v:'GTX 1060 6GB / Radeon RX 580 4GB'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'dbfz', title:'Dragon Ball FighterZ', short:'DBFZ',
    genre:'pelea', genreLabel:'Pelea', year:2018, dev:'Arc System Works',
    rating:'9.0', size:'6 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/678950/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/678950/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/ss_3d48baf2e7aaf087afbab1c4268637df528eb2c8.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/ss_1702e9bc7ba4ce2dce2555c8d63612aafb5c757a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/ss_3f18dbe6561ea68c5acb055e3eaa97f480022c24.1920x1080.jpg',
    ],
    trailer:'256827868',
    desc:'El juego de pelea de Dragon Ball que parece el anime de verdad. Armá equipos de tres luchadores como Goku, Vegeta, Cell y Broly, con combos aéreos, ataques especiales y escenas dramáticas. Creado por Arc System Works, los genios de Guilty Gear.',
    descEn:'The Dragon Ball fighter that truly looks like the anime. Build teams of three fighters like Goku, Vegeta, Cell and Broly, with air combos, super attacks and dramatic finishes. Made by Arc System Works, the masters behind Guilty Gear.',
    cardDesc:'Peleas 3 contra 3 que parecen el anime.',
    cardDescEn:'3v3 fights that look straight out of the anime.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'AMD FX-4350 / Intel Core i5-3470'},{l:'GPU',v:'Radeon HD 6870 / GTX 650 Ti (1 GB)'},{l:'Disco',v:'6 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'naruto4', title:'Naruto Shippuden: Ultimate Ninja Storm 4', short:'NUNS4',
    genre:'pelea', genreLabel:'Pelea', year:2016, dev:'CyberConnect2',
    rating:'8.9', size:'40 GB', version:'Road to Boruto', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/349040/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/349040/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/349040/ss_61a26c1cd4f6ec0fe8635156d8239b9903f7da4f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/349040/ss_053f86d775e5b4ebfc0eb1d8ae42754c66d25130.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/349040/ss_4f91876c2dbcc95cd32fdf3d9cf68895737b33ef.1920x1080.jpg',
    ],
    trailer:'256660477',
    desc:'Reviví la Cuarta Gran Guerra Ninja y el desenlace de la historia de Naruto y Sasuke con batallas espectaculares y escenas fieles al anime. Más de 100 personajes jugables. La edición Road to Boruto agrega la historia de Boruto y nuevos luchadores.',
    descEn:"Relive the Fourth Great Ninja War and the finale of Naruto and Sasuke's story through spectacular battles and anime-faithful scenes. Over 100 playable characters. The Road to Boruto edition adds Boruto's story and new fighters.",
    cardDesc:'La Cuarta Gran Guerra Ninja y el final de Naruto.',
    cardDescEn:"The Fourth Great Ninja War and Naruto's finale.",
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo 3.0 GHz / AMD Athlon 64 X2 6400+'},{l:'GPU',v:'1 GB Video'},{l:'Disco',v:'40 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'injustice2', title:'Injustice 2', short:'INJ2',
    genre:'pelea', genreLabel:'Pelea', year:2017, dev:'NetherRealm Studios',
    rating:'8.9', size:'52 GB', version:'Legendary Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/627270/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/627270/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/627270/ss_5d23a78b6a43cc6cea92166b101bd28351030f59.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/627270/ss_6c134ed979e8abf86364bf4a3d32e35dde16b696.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/627270/ss_297cb766d40b263bd630ac48abb3fafc6a221987.1920x1080.jpg',
    ],
    trailer:'256711523',
    desc:'Batman, Superman, la Mujer Maravilla y los villanos de DC se enfrentan en peleas brutales de los creadores de Mortal Kombat. Sistema de equipamiento que cambia la apariencia y habilidades de cada personaje y un modo historia cinematográfico. Incluye todos los DLC.',
    descEn:"Batman, Superman, Wonder Woman and DC's villains clash in brutal fights from the makers of Mortal Kombat. A gear system that changes each character's look and abilities, plus a cinematic story mode. Includes every DLC.",
    cardDesc:'Los héroes de DC se enfrentan entre sí.',
    cardDescEn:'DC heroes go head-to-head.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 965'},{l:'GPU',v:'GTX 670 / GTX 1050 / Radeon HD 7950'},{l:'Disco',v:'52 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'tekken8', title:'Tekken 8', short:'T8',
    genre:'pelea', genreLabel:'Pelea', year:2024, dev:'Bandai Namco Studios',
    rating:'9.2', size:'100 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_62e6ec252bc1a641e8e42dba07f23631d5da85e6.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_99dabe34abc0f92adc39d7099908c9540be7eb3f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_bbd38a5fe748ec966cbc85ffcd4931f0f2da8ffd.1920x1080.jpg',
    ],
    trailer:'256961348',
    desc:'La saga Mishima continúa con Jin Kazama enfrentando a su padre, Kazuya. Tekken 8 apuesta por la agresividad con el nuevo sistema Heat, gráficos en Unreal Engine 5, 32 personajes y el modo Arcade Quest para aprender a jugar desde cero.',
    descEn:'The Mishima saga continues as Jin Kazama faces his father, Kazuya. Tekken 8 rewards aggression with the new Heat system, Unreal Engine 5 graphics, 32 characters and an Arcade Quest mode to learn from scratch.',
    cardDesc:'Jin contra Kazuya: la pelea más agresiva de la saga.',
    cardDescEn:'Jin vs. Kazuya: the most aggressive Tekken yet.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-6600K / AMD Ryzen 5 1600'},{l:'GPU',v:'GTX 1050 Ti / Radeon R9 380X'},{l:'Disco',v:'100 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'xenoverse2', title:'Dragon Ball Xenoverse 2', short:'DBX2',
    genre:'pelea', genreLabel:'Pelea', year:2016, dev:'Dimps',
    rating:'8.8', size:'12 GB', version:'Deluxe Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/454650/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/454650/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/454650/ss_d38e04f3f4278fb2bf0dd5be4587d1577f8e53a0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/454650/ss_412fe476f8d59c6d6c6b2b8da97f2ea4fd4b5356.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/454650/ss_1bc6848427f580686e56fc659c937ea108beef51.1920x1080.jpg',
    ],
    trailer:'256673245',
    desc:'Creá tu propio guerrero eligiendo entre saiyajin, terrícola, namekiano, majin o la raza de Freezer, y unite a la Patrulla del Tiempo para corregir la historia de Dragon Ball. Ciudad central con otros jugadores, misiones paralelas y un montón de personajes.',
    descEn:"Create your own warrior from Saiyan, Earthling, Namekian, Majin or Frieza's race and join the Time Patrol to fix Dragon Ball history. A hub city full of other players, parallel quests and a huge roster.",
    cardDesc:'Creá tu guerrero y protegé la historia de Dragon Ball.',
    cardDescEn:'Create your warrior and protect Dragon Ball history.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i5-3570 / AMD Ryzen 5 1600'},{l:'GPU',v:'GT 1030 / Radeon HD 7770'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'kof2002', title:'The King of Fighters 2002 UM', short:'KOF',
    genre:'pelea', genreLabel:'Pelea', year:2015, dev:'SNK',
    rating:'9.0', size:'2 GB', version:'Unlimited Match', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/222440/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/222440/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/222440/ss_82d257b8f8665c9a86b1368ab1da04889694349e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/222440/ss_74018f6e5cfcd52b5c7c1443f49e5be25bb819ad.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/222440/ss_3270c6c0cdb13cefc586955264b83111615bb431.1920x1080.jpg',
    ],
    trailer:'256817399',
    desc:'La versión definitiva del clásico de los fichines, con más de 60 luchadores como Kyo, Iori, Terry y Mai. Peleas 3 contra 3, sistema MAX2 y modo desafío. Incluye juego en línea con rollback para enfrentarte a jugadores de todo el mundo.',
    descEn:'The definitive version of the arcade classic, with over 60 fighters like Kyo, Iori, Terry and Mai. Three-on-three battles, the MAX2 system and challenge mode. Includes rollback online play to face players worldwide.',
    cardDesc:'El KOF de los fichines, con más de 60 luchadores.',
    cardDescEn:'The arcade KOF classic with over 60 fighters.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core i5 2.0 GHz'},{l:'GPU',v:'GeForce GTX 560'},{l:'Disco',v:'2 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── TERROR ── */
  {
    id:'re2', title:'Resident Evil 2 Remake', short:'RE2',
    genre:'terror', genreLabel:'Terror', year:2019, dev:'Capcom',
    rating:'9.5', size:'26 GB', version:'Remake', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/ss_1392581cd29817e44099cf05416b70ffb159c58b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/ss_153bd5afa0b45e74b0242a3805dc29aab9f1685e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/ss_cb998634747b70bbcf2dba34a2aef34808d039bf.1920x1080.jpg',
    ],
    desc:'El remake del clásico de 1998. Leon S. Kennedy, en su primer día como policía, y Claire Redfield, que busca a su hermano, quedan atrapados en Raccoon City en pleno brote zombie. Cámara sobre el hombro, gráficos realistas y el implacable Mr. X persiguiéndote.',
    descEn:'The remake of the 1998 classic. Rookie cop Leon S. Kennedy and Claire Redfield, searching for her brother, are trapped in Raccoon City during a zombie outbreak. Over-the-shoulder camera, realistic graphics and the relentless Mr. X on your tail.',
    cardDesc:'Leon y Claire en una Raccoon City infestada.',
    cardDescEn:'Leon and Claire in an infested Raccoon City.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4460 / AMD FX-6300'},{l:'GPU',v:'GTX 960 / Radeon RX 460'},{l:'Disco',v:'26 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'re3', title:'Resident Evil 3 Remake', short:'RE3',
    genre:'terror', genreLabel:'Terror', year:2020, dev:'Capcom',
    rating:'8.8', size:'45 GB', version:'Remake', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/952060/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/952060/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_77eda710487b89293f109cf7dcf96b4ffab0d1a1.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_ef618256720e6e665f4b8b5dd11726a561e0b16e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_34f01910d65fb171a27e058cb74623c0eb53ba69.1920x1080.jpg',
    ],
    trailer:'256770136',
    desc:'Jill Valentine intenta escapar de Raccoon City mientras el Nemesis, un arma biológica imparable, la persigue sin descanso. Remake del clásico de PlayStation con acción intensa, esquives perfectos y gráficos de última generación. Incluye el multijugador Resistance.',
    descEn:'Jill Valentine tries to escape Raccoon City while Nemesis, an unstoppable bioweapon, hunts her down. A remake of the PlayStation classic with intense action, perfect dodges and cutting-edge graphics. Includes the Resistance multiplayer.',
    cardDesc:'Jill Valentine escapa del Nemesis.',
    cardDescEn:'Jill Valentine runs from Nemesis.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4460 / AMD FX-6300'},{l:'GPU',v:'GTX 960 / Radeon RX 460'},{l:'Disco',v:'45 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'re7', title:'Resident Evil 7: Biohazard', short:'RE7',
    genre:'terror', genreLabel:'Terror', year:2017, dev:'Capcom',
    rating:'9.2', size:'24 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/418370/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/418370/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_d07fd9fca3644350782356667ce78d436c574680.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_93663d90ead22ac9481b7c75eaea57509cdf41cb.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_4ba2efde83e86ad41dd962b6802c45029efbe75d.1920x1080.jpg',
    ],
    trailer:'256665613',
    desc:'Ethan Winters llega a una granja abandonada de Luisiana buscando a su esposa desaparecida y se encuentra con la perturbadora familia Baker. La saga vuelve al terror puro en primera persona, con recursos escasos y mucha tensión. La Gold Edition incluye todos los DLC.',
    descEn:'Ethan Winters arrives at an abandoned Louisiana plantation looking for his missing wife and meets the disturbing Baker family. The series returns to pure first-person horror with scarce resources and nonstop tension. The Gold Edition includes every DLC.',
    cardDesc:'La familia Baker te espera en Luisiana.',
    cardDescEn:'The Baker family is waiting in Louisiana.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-4460 / AMD FX-6300'},{l:'GPU',v:'GTX 960 / Radeon RX 460'},{l:'Disco',v:'24 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'re8', title:'Resident Evil Village', short:'RE8',
    genre:'terror', genreLabel:'Terror', year:2021, dev:'Capcom',
    rating:'9.1', size:'45 GB', version:'Gold Edition', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_d25704b01be292d1337df4fea0fba2aab322b58a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_8113ec993ec474055c4cdce5ee86f91f7cf6663f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_50283e6df9d2f3f24ff4a1a36a94ae307e21cee8.1920x1080.jpg',
    ],
    trailer:'256825272',
    desc:'Ethan Winters busca a su hija secuestrada en un misterioso pueblo de Europa del Este dominado por criaturas y por la imponente Lady Dimitrescu. Terror y acción en primera persona con castillos, lobos y mucho misterio. La Gold Edition incluye Shadows of Rose.',
    descEn:'Ethan Winters searches for his kidnapped daughter in a mysterious Eastern European village ruled by creatures and the towering Lady Dimitrescu. First-person horror and action with castles, lycans and plenty of mystery. The Gold Edition includes Shadows of Rose.',
    cardDesc:'Lady Dimitrescu y un pueblo maldito.',
    cardDescEn:'Lady Dimitrescu and a cursed village.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'AMD Ryzen 3 1200 / Intel Core i5-7500'},{l:'GPU',v:'GTX 1050 Ti 4GB / Radeon RX 560 4GB'},{l:'Disco',v:'45 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'re4r', title:'Resident Evil 4 Remake', short:'RE4R',
    genre:'terror', genreLabel:'Terror', year:2023, dev:'Capcom',
    rating:'9.6', size:'60 GB', version:'Remake', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_59d1b19964cc532213df92c8287b75a0bffeb33c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_ab807f8ad9e968a620777caf483cb6020367b9ee.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_0442f7fb4327d79802c2db8ea8d23d228a28d896.1920x1080.jpg',
    ],
    trailer:'256998126',
    desc:'El remake de una de las mejores aventuras de la historia. Leon S. Kennedy viaja a un pueblo de España para rescatar a Ashley, la hija del presidente, y se enfrenta a los Ganados. Gráficos modernos, parry con cuchillo, sigilo y una historia ampliada.',
    descEn:"The remake of one of the greatest adventures ever made. Leon S. Kennedy travels to a village in Spain to rescue Ashley, the president's daughter, and faces the Ganados. Modern graphics, knife parries, stealth and an expanded story.",
    cardDesc:'Leon vuelve al pueblo, más aterrador que nunca.',
    cardDescEn:'Leon returns to the village, scarier than ever.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'AMD Ryzen 3 1200 / Intel Core i5-7500'},{l:'GPU',v:'GTX 1050 Ti 4GB / Radeon RX 560 4GB'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'deadspace', title:'Dead Space', short:'DSP',
    genre:'terror', genreLabel:'Terror', year:2008, dev:'EA Redwood Shores',
    rating:'9.1', size:'7.5 GB', version:'Original', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/17470/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/17470/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17470/0000006481.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17470/0000006482.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17470/0000006483.1920x1080.jpg',
    ],
    trailer:'5163',
    desc:'Isaac Clarke, un ingeniero, llega a la nave minera USG Ishimura y la encuentra infestada de necromorfos, cadáveres convertidos en monstruos. Para sobrevivir tenés que desmembrarlos con herramientas de trabajo. Sin interfaz en pantalla y con una atmósfera aterradora.',
    descEn:'Engineer Isaac Clarke reaches the mining ship USG Ishimura and finds it overrun by necromorphs, corpses turned into monsters. To survive you must dismember them with mining tools. No on-screen HUD and a terrifying atmosphere.',
    cardDesc:'Terror en el espacio: cortá los miembros de los necromorfos.',
    cardDescEn:"Horror in space: cut off the necromorphs' limbs.",
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1 GB'},{l:'CPU',v:'2.8 GHz'},{l:'GPU',v:'256 MB DirectX 9.0c (Shader 3.0)'},{l:'Disco',v:'7.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'amnesia', title:'Amnesia: The Dark Descent', short:'AMN',
    genre:'terror', genreLabel:'Terror', year:2010, dev:'Frictional Games',
    rating:'8.7', size:'3 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/57300/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/57300/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57300/ss_2bf5b6775bbc3857f0b607cb298885c5f3651556.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57300/ss_db5cf1ca6aa0198d45b9ea892c202bd2bb451e74.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57300/ss_b27b47bb43ebd1ab3b26e3d74cf2db088e928a6d.1920x1080.jpg',
    ],
    trailer:'901419',
    desc:'Daniel despierta en un castillo prusiano sin recordar nada y con una sola certeza: algo lo está cazando. Sin armas para defenderte, solo podés esconderte, huir y resolver puzzles mientras la oscuridad te hace perder la cordura. Un clásico del terror indie.',
    descEn:'Daniel wakes up in a Prussian castle with no memory and one certainty: something is hunting him. With no weapons, you can only hide, run and solve puzzles while the darkness eats away at your sanity. An indie horror classic.',
    cardDesc:'Sin armas, en la oscuridad y perdiendo la cordura.',
    cardDescEn:'No weapons, in the dark, losing your sanity.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2.0 GHz'},{l:'GPU',v:'Radeon X1000 / GeForce 6'},{l:'Disco',v:'3 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'outlast2', title:'Outlast 2', short:'OUT2',
    genre:'terror', genreLabel:'Terror', year:2017, dev:'Red Barrels',
    rating:'8.6', size:'30 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/414700/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/414700/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/414700/ss_391bfd739898fd31ec7fa0c0b7658f18b7202286.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/414700/ss_69427df3942114a8e0c598e03fc88112f65f7fdc.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/414700/ss_0b3a895b08f4a77e89cb970911c0b0fd213afa4e.1920x1080.jpg',
    ],
    trailer:'256683630',
    desc:'Blake Langermann, un camarógrafo, busca a su esposa en una zona rural de Arizona dominada por un culto religioso que espera el fin del mundo. Igual que en el primero, no tenés armas: solo una cámara con visión nocturna y tus piernas para escapar.',
    descEn:'Cameraman Blake Langermann searches for his wife in rural Arizona, ruled by a religious cult awaiting the end of the world. Just like the first game, you have no weapons: only a night-vision camera and your legs to escape.',
    cardDesc:'Un culto fanático en el desierto de Arizona.',
    cardDescEn:'A fanatical cult in the Arizona desert.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-530'},{l:'GPU',v:'GTX 260 / Radeon HD 4870 (1 GB)'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'dyinglight', title:'Dying Light', short:'DL',
    genre:'terror', genreLabel:'Terror', year:2015, dev:'Techland',
    rating:'9.0', size:'40 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/239140/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/239140/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/ss_a3771358b8eb4ea4c8f99c5850711f55b87804de.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/ss_1f0dc94f46fa1a953827188188887f6a12911ec2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/ss_488226f013287012e0feaed2fb7799dbe038fd00.1920x1080.jpg',
    ],
    trailer:'257022021',
    desc:'En la ciudad de Harran, en cuarentena por un virus zombie, sos Kyle Crane, un agente que se mueve por los techos con parkour. De día cazás y conseguís recursos, pero de noche aparecen los infectados más peligrosos. Cooperativo para cuatro y todas las expansiones incluidas.',
    descEn:'In the quarantined city of Harran, you are Kyle Crane, an agent who moves across rooftops with parkour. By day you scavenge and fight, but at night the deadliest infected come out. Four-player co-op with every expansion included.',
    cardDesc:'Parkour de día, sobrevivir de noche.',
    cardDescEn:'Parkour by day, survive by night.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i5-2500 / AMD FX-8320'},{l:'GPU',v:'GTX 560 / Radeon HD 6870 (1 GB)'},{l:'Disco',v:'40 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── DEPORTES ── */
  {
    id:'fc25', title:'EA Sports FC 25', short:'FC25',
    genre:'deportes', genreLabel:'Deportes', year:2024, dev:'EA Canada',
    rating:'8.5', size:'100 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ss_857b4aaf3c10b2a886d60f029f32b2f86d968311.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ss_aeeea35bf96fad387b97befd9a5c4b9d8ee2ac1a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ss_c8460408705b54e37228cc320a2da1c19e4dc12f.1920x1080.jpg',
    ],
    trailer:'257059675',
    desc:'El fútbol de EA con más de 17.000 jugadores, 700 equipos y 120 estadios. FC 25 suma el modo Rush 5 contra 5, nuevas tácticas FC IQ y los modos de siempre como Ultimate Team, Carrera y Clubs. Incluye las mejores ligas del mundo y el fútbol femenino.',
    descEn:"EA's football game with over 17,000 players, 700 teams and 120 stadiums. FC 25 adds 5v5 Rush, the new FC IQ tactics and fan favorites like Ultimate Team, Career Mode and Clubs. Includes the world's top leagues and women's football.",
    cardDesc:'El fútbol más real con Rush 5 contra 5.',
    cardDescEn:'The most realistic football, now with 5v5 Rush.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'AMD Ryzen 5 1600 / Intel Core i5-6600K'},{l:'GPU',v:'Radeon RX 570 / GTX 1050 Ti'},{l:'Disco',v:'100 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'fifa23', title:'FIFA 23', short:'FIFA23',
    genre:'deportes', genreLabel:'Deportes', year:2022, dev:'EA Canada',
    rating:'8.6', size:'100 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/ss_35790d46d9aac68a546ccfccabc778135698778a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/ss_a51b0f81035e0b3310f45b8fbfd9e11f467a63a0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/ss_75d1340c0d96d972fef1d9c6561659090ca936ee.1920x1080.jpg',
    ],
    trailer:'256942523',
    desc:'La última entrega con el nombre FIFA trae tecnología HyperMotion2, juego cruzado entre plataformas y el Mundial de Qatar 2022 completo. Ultimate Team, modo Carrera, Volta y Pro Clubs, con miles de jugadores y las ligas más importantes del mundo.',
    descEn:"The last game under the FIFA name brings HyperMotion2 technology, cross-play and the full Qatar 2022 World Cup. Ultimate Team, Career Mode, Volta and Pro Clubs, with thousands of players and the world's biggest leagues.",
    cardDesc:'El último FIFA, con el Mundial de Qatar incluido.',
    cardDescEn:'The final FIFA, with the Qatar World Cup included.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-6600K / AMD Ryzen 5 1600'},{l:'GPU',v:'GTX 1050 Ti / Radeon RX 570'},{l:'Disco',v:'100 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'pes2018', title:'PES 2018', short:'PES18',
    genre:'deportes', genreLabel:'Deportes', year:2017, dev:'Konami',
    rating:'8.6', size:'30 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/592580/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/592580/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/592580/ss_558c7554dcc7dc052f7409af68336d5fc3fadc23.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/592580/ss_00ebd726996604dc944f8cd4c3dc5fe5e65c3ebd.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/592580/ss_fb812e1b879f387a26e8c671c9bb052622dfab65.1920x1080.jpg',
    ],
    trailer:'256685122',
    desc:'Pro Evolution Soccer 2018 se centra en el control de la pelota y en una jugabilidad estratégica y realista. Master League renovada, myClub, modo cooperativo y las licencias de clubes como el Barcelona. Ideal para los que extrañan el PES de los buenos tiempos.',
    descEn:'Pro Evolution Soccer 2018 focuses on ball control and strategic, realistic gameplay. A revamped Master League, myClub, co-op mode and licenses for clubs like Barcelona. Perfect for anyone who misses PES in its glory days.',
    cardDesc:'Control de pelota y jugabilidad de PES en su mejor momento.',
    cardDescEn:'PES ball control and gameplay at its peak.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-3450 / AMD FX 4100'},{l:'GPU',v:'GTX 650 / Radeon HD 7750'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'nba2k25', title:'NBA 2K25', short:'2K25',
    genre:'deportes', genreLabel:'Deportes', year:2024, dev:'Visual Concepts',
    rating:'8.4', size:'150 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/ss_8e3db832678488ed1003fa41cc0ef9bd74d332e5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/ss_40b45c20c14c8996000e81f697bd1d09f26ea5fd.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/ss_0d4dd0f0fdfe67d8b3c641816b53b01a6ba062a0.1920x1080.jpg',
    ],
    trailer:'257048048',
    desc:'NBA 2K25 trae la tecnología ProPLAY con animaciones de partidos reales, el modo MiCARRERA en The City, MyTEAM y MyGM para manejar una franquicia. Todos los equipos y jugadores de la NBA actual y equipos históricos legendarios.',
    descEn:'NBA 2K25 brings ProPLAY technology built from real game footage, MyCAREER in The City, MyTEAM and MyGM to run a franchise. Every current NBA team and player plus legendary classic teams.',
    cardDesc:'El básquet de la NBA más completo.',
    cardDescEn:'The most complete NBA basketball game.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i3-9100 / AMD Ryzen 3 1200'},{l:'GPU',v:'GTX 960 4GB / Radeon RX 570 4GB'},{l:'Disco',v:'150 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },
  {
    id:'rocketleague', title:'Rocket League', short:'RL',
    genre:'deportes', genreLabel:'Deportes', year:2015, dev:'Psyonix',
    rating:'9.0', size:'20 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/4fa01c320d22f31d78fd9fcb27dbd3bd8871b903/ss_4fa01c320d22f31d78fd9fcb27dbd3bd8871b903.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/23e7d4fcf10475923be9078e55b449b7fc9792d9/ss_23e7d4fcf10475923be9078e55b449b7fc9792d9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/41bd974bde088dc623fae68db333f5b8bb42700e/ss_41bd974bde088dc623fae68db333f5b8bb42700e.1920x1080.jpg',
    ],
    desc:'Fútbol con autos a reacción: saltá, volá y hacé goles imposibles en partidos rápidos de hasta 4 contra 4. Personalizá tu auto, subí en las clasificatorias o jugá modos extra como básquet y hockey. Fácil de aprender y muy difícil de dominar.',
    descEn:'Soccer with rocket-powered cars: jump, fly and score impossible goals in fast matches of up to 4v4. Customize your car, climb the ranked ladder or try extra modes like basketball and hockey. Easy to learn and very hard to master.',
    cardDesc:'Fútbol con autos turbo. Así de simple, así de adictivo.',
    cardDescEn:'Soccer with rocket-powered cars. Simple and addictive.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'2.5 GHz Dual core'},{l:'GPU',v:'GeForce 760 / Radeon R7 270X'},{l:'Disco',v:'20 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'thps', title:"Tony Hawk's Pro Skater 1 + 2", short:'THPS',
    genre:'deportes', genreLabel:'Deportes', year:2020, dev:'Vicarious Visions',
    rating:'9.1', size:'24 GB', version:'Remake', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2395210/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2395210/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2395210/ss_de7db46ee5f6164dfdb467ad1659f7981e285824.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2395210/ss_866a178397cc58e5578e39e19c2233b05528d720.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2395210/ss_ccc432a7c5c36283b40dc2460de7f0c40ad29e02.1920x1080.jpg',
    ],
    trailer:'256971669',
    desc:"Los dos primeros Tony Hawk's Pro Skater rehechos desde cero, con todos los niveles, skaters y trucos originales, más nuevos skaters, modo creador de parques y online. La misma jugabilidad adictiva y la banda sonora punk de siempre, con gráficos modernos.",
    descEn:"The first two Tony Hawk's Pro Skater games rebuilt from the ground up, with every original level, skater and trick, plus new skaters, a park creator and online play. The same addictive gameplay and classic punk soundtrack, with modern graphics.",
    cardDesc:'Los dos THPS clásicos rehechos desde cero.',
    cardDescEn:'The two classic THPS games rebuilt from scratch.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'AMD FX 6300 / Intel Core i3-4340'},{l:'GPU',v:'Radeon HD 7950 / GTX 660'},{l:'Disco',v:'24 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'fm24', title:'Football Manager 2024', short:'FM24',
    genre:'deportes', genreLabel:'Deportes', year:2023, dev:'Sports Interactive',
    rating:'8.8', size:'7 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/2252570/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/2252570/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/4cb9f481017ed9b00e797675aa506eb817759294/ss_4cb9f481017ed9b00e797675aa506eb817759294.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/ce6e4238dd12ec17f43ad48882f7a72f8e10cddf/ss_ce6e4238dd12ec17f43ad48882f7a72f8e10cddf.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/ss_b2d729b4d4ac31c6f05134ab88b2b11d61f8cac8.1920x1080.jpg',
    ],
    trailer:'256980530',
    desc:'Convertite en director técnico y manejá todo en tu club: tácticas, fichajes, entrenamientos y la relación con los jugadores y la prensa. Más de 50 países y miles de clubes reales con una base de datos enorme. El simulador de fútbol más completo que existe.',
    descEn:'Become the manager and run everything at your club: tactics, transfers, training and relationships with players and the press. Over 50 countries and thousands of real clubs in a huge database. The most complete football management sim there is.',
    cardDesc:'Dirigí a tu club favorito y llevalo a la gloria.',
    cardDescEn:'Manage your favorite club and lead it to glory.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 / AMD Athlon 64 X2'},{l:'GPU',v:'Intel GMA X4500 / GeForce 9600M GT / Radeon HD 2400'},{l:'Disco',v:'7 GB'},{l:'SO',v:'Windows 10/11 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'wwe2k23', title:'WWE 2K23', short:'WWE',
    genre:'deportes', genreLabel:'Deportes', year:2023, dev:'Visual Concepts',
    rating:'8.3', size:'80 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1942660/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1942660/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942660/ss_33c645429bb27c9f2b6593f991fe32934a5f8079.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942660/ss_b3780730ae55bdda97d4909384c9a2b8a8f26580.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942660/ss_365fce057a64c24832c9da039e66fdafeebf20d5.1920x1080.jpg',
    ],
    trailer:'256938239',
    desc:'Subite al ring con las superestrellas de la WWE en el juego de lucha libre más completo. Modo Showcase de John Cena, WarGames por primera vez, MyRISE para crear tu propia carrera y MyGM para manejar tu propia marca. Más de 200 luchadores.',
    descEn:'Step into the ring with WWE Superstars in the most complete wrestling game. A John Cena Showcase, WarGames for the first time, MyRISE to build your own career and MyGM to run your own brand. Over 200 wrestlers.',
    cardDesc:'La lucha libre de la WWE con John Cena.',
    cardDescEn:'WWE wrestling with John Cena.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-3550 / AMD FX 8150'},{l:'GPU',v:'GTX 1060 / Radeon RX 480'},{l:'Disco',v:'80 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v12'}]
  },

  /* ── SANDBOX ── */
  {
    id:'terraria', title:'Terraria', short:'TER',
    genre:'sandbox', genreLabel:'Sandbox', year:2011, dev:'Re-Logic',
    rating:'9.5', size:'200 MB', version:'1.4.4 Labor of Love', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg',
    ],
    trailer:'256785003',
    desc:'Un sandbox en 2D donde cavás, construís y peleás contra cientos de enemigos y jefes. Explorá cavernas, biomas, el infierno y el espacio, fabricá miles de objetos y construí tu propio mundo. Cooperativo en línea y una enorme cantidad de contenido gratuito.',
    descEn:'A 2D sandbox where you dig, build and battle hundreds of enemies and bosses. Explore caves, biomes, the underworld and space, craft thousands of items and build your own world. Online co-op and a massive amount of free content.',
    cardDesc:'Cavá, construí, peleá y explorá en 2D.',
    cardDescEn:'Dig, build, fight and explore in 2D.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2.5 GB'},{l:'CPU',v:'2.0 GHz'},{l:'GPU',v:'128 MB (Shader Model 2.0+)'},{l:'Disco',v:'200 MB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'gmod', title:"Garry's Mod", short:'GMOD',
    genre:'sandbox', genreLabel:'Sandbox', year:2006, dev:'Facepunch Studios',
    rating:'9.0', size:'10 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_af060d0a9aeb6598e154c9704ce250b0e63b2266.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_d314d7dba0987b3e7f49154964bda0ae74ee5161.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_3d320f333fb74413911cbc2bffae9bdda683e2ec.1920x1080.jpg',
    ],
    desc:'Un sandbox de física sin objetivos: usá objetos, personajes y herramientas del motor Source para crear lo que se te ocurra. Miles de modos de juego de la comunidad, como Trouble in Terrorist Town, Prop Hunt y DarkRP, y millones de complementos en Workshop.',
    descEn:'A physics sandbox with no goals: use props, characters and tools from the Source engine to build whatever you can imagine. Thousands of community game modes like Trouble in Terrorist Town, Prop Hunt and DarkRP, plus millions of Workshop add-ons.',
    cardDesc:'El sandbox de física donde todo es posible.',
    cardDescEn:'The physics sandbox where anything goes.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'2 GHz'},{l:'GPU',v:'1 GB VRAM'},{l:'Disco',v:'10 GB'},{l:'SO',v:'Windows 10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'stardew', title:'Stardew Valley', short:'SDV',
    genre:'sandbox', genreLabel:'Sandbox', year:2016, dev:'ConcernedApe',
    rating:'9.6', size:'500 MB', version:'1.6', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg',
    ],
    trailer:'256815967',
    desc:'Heredaste la vieja granja de tu abuelo en Pelican Town. Plantá cultivos, criá animales, pescá, explorá minas, hacete amigo de los vecinos y hasta casate. Un juego relajante y adictivo que se puede jugar en cooperativo con hasta tres amigos.',
    descEn:"You have inherited your grandfather's old farm in Pelican Town. Grow crops, raise animals, fish, explore mines, befriend the townsfolk and even get married. A relaxing, addictive game you can play in co-op with up to three friends.",
    cardDesc:'Dejá la ciudad y armá la granja de tus sueños.',
    cardDescEn:'Leave the city and build your dream farm.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2 GHz'},{l:'GPU',v:'256 MB (Shader Model 3.0)'},{l:'Disco',v:'500 MB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'sims4', title:'The Sims 4', short:'SIMS4',
    genre:'sandbox', genreLabel:'Sandbox', year:2014, dev:'Maxis',
    rating:'8.8', size:'26 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_537683e5e29c2d6d02c64aa7321dcb26166f7d82.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_2fc938d99a1e87893852cb2d2113478190607941.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_b447d6436d2d00cd5e7c170e509b2246dfc879e8.1920x1080.jpg',
    ],
    trailer:'256911304',
    desc:'Creá personas con un editor muy completo, construí la casa de tus sueños y controlá sus vidas, trabajos, relaciones y aventuras. Barrios para explorar, emociones que cambian el comportamiento de los Sims y miles de creaciones de la comunidad en la Galería.',
    descEn:'Create people with a detailed editor, build your dream home and control their lives, careers, relationships and adventures. Neighborhoods to explore, emotions that change how Sims behave and thousands of community creations in the Gallery.',
    cardDesc:'Creá Sims, construí casas y controlá sus vidas.',
    cardDescEn:'Create Sims, build homes and control their lives.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-3220 / AMD Ryzen 3 1200'},{l:'GPU',v:'GeForce 6600 / Radeon X1300 (128 MB)'},{l:'Disco',v:'26 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'rust', title:'Rust', short:'RUST',
    genre:'sandbox', genreLabel:'Sandbox', year:2018, dev:'Facepunch Studios',
    rating:'8.8', size:'45 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_271feae67943bdc141c1249aba116349397e9ba9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_e825b087b95e51c3534383cfd75ad6e8038147c3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.1920x1080.jpg',
    ],
    trailer:'256684736',
    desc:'Empezás desnudo con una piedra y una antorcha en una isla llena de jugadores. Juntá recursos, construí tu base, fabricá armas y defendete de animales, del hambre y sobre todo de otros jugadores. Alianzas, traiciones y raids en un survival multijugador implacable.',
    descEn:'You start naked with a rock and a torch on an island full of players. Gather resources, build your base, craft weapons and defend yourself from animals, hunger and above all other players. Alliances, betrayals and raids in a ruthless multiplayer survival game.',
    cardDesc:'Sobreviví desde cero contra otros jugadores.',
    cardDescEn:'Survive from nothing against other players.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'12 GB'},{l:'CPU',v:'AMD Ryzen 5 1400 / Intel Core i5-6600'},{l:'GPU',v:'GTX 1060 / Radeon RX 470'},{l:'Disco',v:'45 GB SSD'},{l:'SO',v:'Windows 10/11 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'ark', title:'ARK: Survival Evolved', short:'ARK',
    genre:'sandbox', genreLabel:'Sandbox', year:2017, dev:'Studio Wildcard',
    rating:'8.5', size:'60 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/346110/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/346110/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_2fd997a2f7151cb2187043a1f41589cc6a9ebf3a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_01cbef83fe28d64ee5a3d39a86043fb1e49abd31.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_164a92a53f9bcbb728b391fc0719f9769c2e1249.1920x1080.jpg',
    ],
    trailer:'256836250',
    desc:'Despertás en una isla misteriosa llena de dinosaurios y criaturas prehistóricas. Cazá, recolectá, construí refugios y domesticá dinosaurios para montarlos y pelear con ellos. Jugá solo o en tribus con otros jugadores. Incluye todas las expansiones de mapas.',
    descEn:'You wake up on a mysterious island teeming with dinosaurs and prehistoric creatures. Hunt, gather, build shelters and tame dinosaurs to ride and fight with. Play solo or in tribes with other players. Includes every map expansion.',
    cardDesc:'Domesticá dinosaurios y sobreviví en una isla.',
    cardDescEn:'Tame dinosaurs and survive on a mysterious island.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel Core i5-2400 / AMD FX-8320'},{l:'GPU',v:'GTX 670 2GB / Radeon HD 7870 2GB'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v10'}]
  },
  {
    id:'subnautica', title:'Subnautica', short:'SUB',
    genre:'sandbox', genreLabel:'Sandbox', year:2018, dev:'Unknown Worlds',
    rating:'9.4', size:'20 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/264710/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/264710/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_e182b6b20bb797500f9f63c561586d920d44e37c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_970a13f246e33e0df26d93baf9f8e975732adb4b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_5f2f2ea498cdc632cbffd6cf37c1a09670eb3272.1920x1080.jpg',
    ],
    trailer:'256706800',
    desc:'Tu nave se estrella en un planeta cubierto de agua y la única forma de sobrevivir es explorar sus profundidades. Juntá recursos, construí bases submarinas y submarinos, y descubrí los secretos del planeta mientras evitás a los leviatanes. Hermoso y aterrador a la vez.',
    descEn:"Your ship crashes on a water-covered planet and the only way to survive is to explore its depths. Gather resources, build underwater bases and submarines, and uncover the planet's secrets while avoiding leviathans. Beautiful and terrifying at once.",
    cardDesc:'Sobreviví bajo el océano de un planeta alienígena.',
    cardDescEn:'Survive beneath the ocean of an alien planet.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Haswell 2.5 GHz (2 cores / 4 threads)'},{l:'GPU',v:'Intel HD 4600'},{l:'Disco',v:'20 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'theforest', title:'The Forest', short:'TF',
    genre:'sandbox', genreLabel:'Sandbox', year:2018, dev:'Endnight Games',
    rating:'9.0', size:'5 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/242760/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/242760/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_8ccb821c4df3fafdf4161d77f38635441a8157f2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_53c615d49c4777144ed7359e4bf7c9eb6838cc8e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_772eebf0ce7bdb51546055a36185e8ee46e8acac.1920x1080.jpg',
    ],
    trailer:'256715589',
    desc:'Sobreviviste a un accidente de avión en una península boscosa, pero tu hijo fue secuestrado por una tribu de caníbales. Construí refugios, cazá, fabricá armas y defendete de noche mientras explorás cuevas oscuras. Survival con terror y cooperativo para hasta 8 jugadores.',
    descEn:'You survived a plane crash on a forested peninsula, but your son was taken by a tribe of cannibals. Build shelters, hunt, craft weapons and defend yourself at night while exploring dark caves. Survival horror with co-op for up to 8 players.',
    cardDesc:'Un accidente aéreo, un bosque y caníbales.',
    cardDescEn:'A plane crash, a forest and cannibals.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Dual-Core 2.4 GHz'},{l:'GPU',v:'GeForce 8800GT'},{l:'Disco',v:'5 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'valheim', title:'Valheim', short:'VAL',
    genre:'sandbox', genreLabel:'Sandbox', year:2021, dev:'Iron Gate',
    rating:'9.1', size:'1 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-mc',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/library_600x900.jpg',
    banner:'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/library_hero.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/5a31353178f635b67f0c8720ebb8a1a95b637276/ss_5a31353178f635b67f0c8720ebb8a1a95b637276.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/bc7c361dab1780543a3ceca50c8fba831e5bc8db/ss_bc7c361dab1780543a3ceca50c8fba831e5bc8db.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.1920x1080.jpg',
    ],
    desc:'Sos un guerrero vikingo caído que tiene que demostrar su valor en Valheim, un purgatorio inspirado en la mitología nórdica. Talá árboles, construí casas y barcos, navegá y derrotá a jefes legendarios. Mundos generados al azar y cooperativo para hasta 10 jugadores.',
    descEn:'You are a fallen Viking warrior who must prove yourself in Valheim, a purgatory inspired by Norse mythology. Chop trees, build longhouses and ships, sail and defeat legendary bosses. Procedurally generated worlds and co-op for up to 10 players.',
    cardDesc:'Survival vikingo cooperativo en el décimo mundo.',
    cardDescEn:'Co-op Viking survival in the tenth world.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'2.6 GHz Quad Core'},{l:'GPU',v:'GeForce GTX 950 / Radeon HD 7970'},{l:'Disco',v:'1 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
];

/* ════════════════════════════════════════════════════
   APLICACIONES — Igual que los juegos:
   img         → logo/portada de la app ('' = placeholder)
   screenshots → 3 capturas ('' = placeholder)
   link        → reemplazá 'LINK_DE_LA_APP' por tu link
   cat         → categoría (navegadores, utilidades,
                 multimedia, seguridad, diseno, desarrollo,
                 comunicacion, gaming, oficina)
════════════════════════════════════════════════════ */
const APP_CATS={
  navegadores:{label:'Navegadores',cov:'cov-nav'},
  utilidades:{label:'Utilidades',cov:'cov-util'},
  multimedia:{label:'Multimedia',cov:'cov-media'},
  seguridad:{label:'Seguridad',cov:'cov-sec'},
  diseno:{label:'Diseño',cov:'cov-design'},
  desarrollo:{label:'Desarrollo',cov:'cov-dev'},
  comunicacion:{label:'Comunicación',cov:'cov-chat'},
  gaming:{label:'Gaming',cov:'cov-gaming'},
  oficina:{label:'Oficina',cov:'cov-office'},
};
// Formato corto: [id, título, abreviatura, categoría, desarrollador, versión, tamaño, rating, descripción, descripción corta, hot, isNew, descripción EN, descripción corta EN]
let APPS = [
  ['chrome','Google Chrome','CHR','navegadores','Google','Última','120 MB','9.2','El navegador más usado del mundo. Rápido, seguro y sincronizado con tu cuenta de Google: marcadores, contraseñas y extensiones en todos tus dispositivos.','El navegador más usado del mundo.',true,false,'The world\'s most used browser. Fast, secure and synced with your Google account: bookmarks, passwords and extensions on all your devices.','The world\'s most used browser.'],
  ['firefox','Mozilla Firefox','FFX','navegadores','Mozilla','Última','90 MB','9.0','Navegador libre y de código abierto enfocado en la privacidad. Bloqueo de rastreadores incluido, miles de extensiones y gran consumo de memoria optimizado.','Libre, rápido y enfocado en tu privacidad.',false,false,'A free, open-source browser focused on privacy. Built-in tracker blocking, thousands of extensions and optimized memory usage.','Free, fast and focused on your privacy.'],
  ['brave','Brave Browser','BRV','navegadores','Brave Software','Última','110 MB','8.9','Navegador basado en Chromium que bloquea anuncios y rastreadores por defecto. Compatible con todas las extensiones de Chrome y más rápido al cargar páginas.','Bloquea anuncios y rastreadores por defecto.',false,false,'A Chromium-based browser that blocks ads and trackers by default. Compatible with every Chrome extension and faster at loading pages.','Blocks ads and trackers by default.'],
  ['operagx','Opera GX','OGX','navegadores','Opera','Última','100 MB','8.8','El navegador pensado para gamers. Limitadores de RAM, CPU y red, integración con Discord y Twitch, y personalización total de colores y sonidos.','El navegador para gamers.',true,false,'The browser built for gamers. RAM, CPU and network limiters, Discord and Twitch integration and full customization of colors and sounds.','The browser for gamers.'],
  ['winrar','WinRAR','RAR','utilidades','RARLAB','7.x','4 MB','9.1','El compresor de archivos clásico. Abre y crea archivos RAR y ZIP, y descomprime 7Z, ISO, TAR y muchos formatos más. Imprescindible para instalar juegos.','Comprimí y descomprimí RAR, ZIP y más.',true,false,'The classic file compressor. Opens and creates RAR and ZIP archives, and extracts 7Z, ISO, TAR and many more formats. Essential for installing games.','Compress and extract RAR, ZIP and more.'],
  ['7zip','7-Zip','7Z','utilidades','Igor Pavlov','24.x','2 MB','9.3','Compresor gratuito y de código abierto con una de las mejores tasas de compresión. Soporta 7z, ZIP, RAR, ISO y decenas de formatos.','Compresor libre con la mejor compresión.',false,false,'A free, open-source compressor with one of the best compression ratios. Supports 7z, ZIP, RAR, ISO and dozens of formats.','Free compressor with the best ratio.'],
  ['ccleaner','CCleaner','CCL','utilidades','Piriform','Free','60 MB','8.3','Limpiá archivos temporales, caché del navegador y programas de inicio para que tu PC funcione más rápido.','Limpiá tu PC y ganá velocidad.',false,false,'Clean temporary files, browser cache and startup programs so your PC runs faster.','Clean your PC and speed it up.'],
  ['cpuz','CPU-Z','CPU','utilidades','CPUID','2.x','3 MB','9.0','Mostrá toda la información de tu procesador, placa madre, memoria RAM y gráfica. Ideal para saber si tu PC cumple los requisitos de un juego.','Conocé el hardware de tu PC al detalle.',false,false,'Shows all the information about your processor, motherboard, RAM and graphics card. Ideal to check whether your PC meets a game\'s requirements.','Know your PC hardware in detail.'],
  ['hwmonitor','HWMonitor','HWM','utilidades','CPUID','1.x','2 MB','8.8','Monitoreá en tiempo real las temperaturas, voltajes y velocidades de ventiladores de tu PC.','Temperaturas y voltajes en tiempo real.',false,false,'Monitor your PC temperatures, voltages and fan speeds in real time.','Real-time temperatures and voltages.'],
  ['afterburner','MSI Afterburner','MSI','utilidades','MSI','4.6','50 MB','9.2','Overclock y monitoreo de tu placa de video. Mostrá FPS, temperatura y uso de GPU en pantalla mientras jugás.','Overclock y FPS en pantalla mientras jugás.',true,false,'Overclock and monitor your graphics card. Show FPS, temperature and GPU usage on screen while you play.','Overclocking and on-screen FPS while gaming.'],
  ['vlc','VLC Media Player','VLC','multimedia','VideoLAN','3.x','40 MB','9.4','Reproduce prácticamente cualquier formato de video y audio sin instalar códecs extra. Liviano, gratis y sin publicidad.','Reproduce todo. Sin códecs, sin vueltas.',true,false,'Plays virtually any video and audio format without installing extra codecs. Lightweight, free and ad-free.','Plays everything. No codecs, no hassle.'],
  ['audacity','Audacity','AUD','multimedia','Audacity Team','3.x','30 MB','8.9','Editor de audio gratuito para grabar, cortar, mezclar y aplicar efectos. Ideal para podcasts, música y limpiar ruido de grabaciones.','Grabá y editá audio gratis.',false,false,'A free audio editor to record, cut, mix and apply effects. Ideal for podcasts, music and cleaning up noise in recordings.','Record and edit audio for free.'],
  ['obs','OBS Studio','OBS','multimedia','OBS Project','30.x','130 MB','9.5','La herramienta favorita de streamers. Grabá tu pantalla y transmití en vivo a Twitch, YouTube y Kick con escenas, overlays y múltiples fuentes.','Grabá y transmití en vivo como un pro.',true,true,'The streamers\' favorite tool. Record your screen and stream live to Twitch, YouTube and Kick with scenes, overlays and multiple sources.','Record and stream live like a pro.'],
  ['handbrake','HandBrake','HBK','multimedia','HandBrake Team','1.x','25 MB','8.7','Convertí videos a cualquier formato y comprimilos sin perder calidad. Presets listos para celulares, YouTube y más.','Convertí y comprimí videos fácil.',false,false,'Convert videos to any format and compress them without losing quality. Ready-made presets for phones, YouTube and more.','Convert and compress videos easily.'],
  ['malwarebytes','Malwarebytes','MWB','seguridad','Malwarebytes','Free','250 MB','9.0','Detecta y elimina malware, adware y programas no deseados que los antivirus comunes pasan por alto.','Eliminá malware y adware.',false,false,'Detects and removes malware, adware and unwanted programs that regular antivirus software misses.','Remove malware and adware.'],
  ['avast','Avast Free Antivirus','AVS','seguridad','Avast','Free','300 MB','8.4','Antivirus gratuito con protección en tiempo real, escaneo de red Wi-Fi y modo juego para no interrumpir tus partidas.','Antivirus gratis con modo juego.',false,false,'A free antivirus with real-time protection, Wi-Fi network scanning and a game mode so your matches are never interrupted.','Free antivirus with game mode.'],
  ['bitwarden','Bitwarden','BWD','seguridad','Bitwarden Inc.','Última','80 MB','9.2','Gestor de contraseñas gratuito y de código abierto. Guardá todas tus claves cifradas y sincronizalas en todos tus dispositivos.','Todas tus contraseñas, seguras.',false,true,'A free, open-source password manager. Keep all your passwords encrypted and synced across every device.','All your passwords, safe.'],
  ['gimp','GIMP','GMP','diseno','GIMP Team','2.10','300 MB','8.6','Editor de imágenes gratuito y potente, la alternativa libre a Photoshop. Capas, máscaras, filtros y soporte para plugins.','La alternativa gratis a Photoshop.',false,false,'A free and powerful image editor, the open-source alternative to Photoshop. Layers, masks, filters and plugin support.','The free alternative to Photoshop.'],
  ['inkscape','Inkscape','INK','diseno','Inkscape Project','1.x','120 MB','8.7','Editor de gráficos vectoriales para crear logos, ilustraciones e íconos. Trabaja con SVG y exporta a PNG y PDF.','Diseño vectorial gratis.',false,false,'A vector graphics editor for creating logos, illustrations and icons. Works with SVG and exports to PNG and PDF.','Free vector design.'],
  ['canva','Canva','CNV','diseno','Canva','Desktop','200 MB','8.9','Diseñá publicaciones para redes, miniaturas de YouTube, presentaciones y más con miles de plantillas listas.','Miniaturas y posts en minutos.',true,false,'Design social posts, YouTube thumbnails, presentations and more with thousands of ready-made templates.','Thumbnails and posts in minutes.'],
  ['vscode','Visual Studio Code','VSC','desarrollo','Microsoft','Última','95 MB','9.6','El editor de código más popular. Liviano, con resaltado para todos los lenguajes, terminal integrada, Git y miles de extensiones.','El editor de código más popular.',true,false,'The most popular code editor. Lightweight, with highlighting for every language, a built-in terminal, Git and thousands of extensions.','The most popular code editor.'],
  ['git','Git','GIT','desarrollo','Git Project','2.x','60 MB','9.4','Sistema de control de versiones usado en todo el mundo. Guardá el historial de tu código y trabajá en equipo con GitHub.','Control de versiones para tu código.',false,false,'The version control system used worldwide. Keep your code history and collaborate with GitHub.','Version control for your code.'],
  ['postman','Postman','PMN','desarrollo','Postman Inc.','Última','150 MB','8.8','Probá y documentá APIs con una interfaz simple. Ideal para desarrolladores web y backend.','Probá APIs fácilmente.',false,false,'Test and document APIs with a simple interface. Ideal for web and backend developers.','Test APIs easily.'],
  ['nodejs','Node.js','NOD','desarrollo','OpenJS Foundation','LTS','30 MB','9.3','Entorno para ejecutar JavaScript fuera del navegador. Base de miles de herramientas web modernas, incluye npm.','JavaScript fuera del navegador.',false,false,'A runtime to execute JavaScript outside the browser. The foundation of thousands of modern web tools, includes npm.','JavaScript outside the browser.'],
  ['discord','Discord','DSC','comunicacion','Discord Inc.','Última','90 MB','9.3','Chat de voz, video y texto para gamers y comunidades. Creá servidores, compartí pantalla y jugá con amigos.','Voz y chat para jugar con amigos.',true,false,'Voice, video and text chat for gamers and communities. Create servers, share your screen and play with friends.','Voice and chat to play with friends.'],
  ['telegram','Telegram Desktop','TLG','comunicacion','Telegram FZ-LLC','Última','45 MB','9.0','Mensajería rápida y segura con grupos de hasta 200.000 personas, canales y envío de archivos de hasta 2 GB.','Mensajería rápida y sin límites.',false,false,'Fast, secure messaging with groups of up to 200,000 people, channels and file sharing up to 2 GB.','Fast messaging with no limits.'],
  ['zoom','Zoom','ZOM','comunicacion','Zoom Video','Última','100 MB','8.5','Videollamadas y reuniones online para trabajo o estudio. Compartí pantalla, grabá y usá fondos virtuales.','Videollamadas para trabajo y estudio.',false,false,'Video calls and online meetings for work or school. Share your screen, record and use virtual backgrounds.','Video calls for work and school.'],
  ['whatsapp','WhatsApp Desktop','WSP','comunicacion','Meta','Última','150 MB','8.7','Usá WhatsApp en tu PC con notificaciones, llamadas y videollamadas. Sincronizado con tu celular.','WhatsApp en la PC.',false,false,'Use WhatsApp on your PC with notifications, calls and video calls. Synced with your phone.','WhatsApp on your PC.'],
  /* ── Apps agregadas (tanda 2) ── */
  ['edge','Microsoft Edge','EDG','navegadores','Microsoft','Última','150 MB','8.7','El navegador de Microsoft basado en Chromium. Rápido, compatible con las extensiones de Chrome y con herramientas como pestañas verticales, modo eficiencia y lector de PDF integrado.','El navegador de Microsoft, basado en Chromium.',false,false,'Microsoft\'s Chromium-based browser. Fast, compatible with Chrome extensions and packed with tools like vertical tabs, efficiency mode and a built-in PDF reader.','Microsoft\'s Chromium-based browser.'],
  ['opera','Opera','OPR','navegadores','Opera','Última','100 MB','8.6','Navegador con VPN gratis integrada, bloqueador de anuncios, mensajeros en la barra lateral y la asistente con IA Aria.','VPN gratis y bloqueador de anuncios incluidos.',false,false,'A browser with a free built-in VPN, ad blocker, sidebar messengers and the Aria AI assistant.','Free VPN and ad blocker built in.'],
  ['vivaldi','Vivaldi','VIV','navegadores','Vivaldi Technologies','Última','110 MB','8.8','Navegador ultra personalizable: pestañas apiladas, paneles, cliente de correo, calendario y lector de feeds integrados, sin rastreo de datos.','El navegador más personalizable.',false,false,'An ultra-customizable browser: tab stacks, panels and a built-in mail client, calendar and feed reader, with no data tracking.','The most customizable browser.'],
  ['tor','Tor Browser','TOR','navegadores','The Tor Project','Última','100 MB','8.9','Navegá de forma anónima a través de la red Tor. Protege tu privacidad ocultando tu ubicación y bloqueando rastreadores y huellas digitales.','Navegación anónima y privada.',false,false,'Browse anonymously over the Tor network. Protects your privacy by hiding your location and blocking trackers and fingerprinting.','Anonymous, private browsing.'],
  ['librewolf','LibreWolf','LBW','navegadores','LibreWolf Community','Última','90 MB','8.7','Versión de Firefox enfocada en la privacidad y la seguridad: sin telemetría, con uBlock Origin incluido y configuraciones reforzadas de fábrica.','Firefox sin telemetría y con más privacidad.',false,true,'A privacy and security-focused build of Firefox: no telemetry, uBlock Origin included and hardened settings out of the box.','Firefox without telemetry, more privacy.'],
  ['everything','Everything','EVR','utilidades','voidtools','1.4','2 MB','9.4','Buscador de archivos instantáneo para Windows. Encuentra cualquier archivo o carpeta de tu PC en milisegundos mientras escribís. Liviano y gratuito.','Encontrá cualquier archivo al instante.',false,false,'Instant file search for Windows. Finds any file or folder on your PC in milliseconds as you type. Lightweight and free.','Find any file instantly.'],
  ['powertoys','PowerToys','PWT','utilidades','Microsoft','0.9x','250 MB','9.2','Herramientas oficiales de Microsoft para usuarios avanzados: FancyZones para organizar ventanas, renombrado masivo, selector de color, PowerToys Run y mucho más.','Herramientas extra para Windows, de Microsoft.',false,true,'Official Microsoft utilities for power users: FancyZones window layouts, bulk rename, color picker, PowerToys Run and much more.','Extra tools for Windows, by Microsoft.'],
  ['crystaldiskinfo','CrystalDiskInfo','CDI','utilidades','Crystal Dew World','9.x','6 MB','9.0','Revisá la salud y la temperatura de tus discos rígidos y SSD con datos S.M.A.R.T. Te avisa antes de que un disco falle para que no pierdas tus archivos.','Controlá la salud de tus discos y SSD.',false,false,'Check the health and temperature of your hard drives and SSDs using S.M.A.R.T. data. Warns you before a drive fails so you don\'t lose your files.','Monitor your drives\' health.'],
  ['rufus','Rufus','RUF','utilidades','Pete Batard','4.x','2 MB','9.5','Creá pendrives booteables a partir de imágenes ISO de Windows o Linux en pocos minutos. Portable, rapidísimo y sin instalación.','Pendrives booteables en minutos.',true,false,'Create bootable USB drives from Windows or Linux ISO images in minutes. Portable, super fast and no install required.','Bootable USB drives in minutes.'],
  ['ventoy','Ventoy','VTY','utilidades','Ventoy','1.x','15 MB','9.3','Convertí tu pendrive en un USB multiboot: copiá varias ISO y elegí cuál iniciar desde un menú, sin tener que formatear cada vez.','Varias ISO en un solo pendrive.',false,false,'Turn your USB stick into a multiboot drive: copy several ISO files and pick which one to boot from a menu, no reformatting needed.','Multiple ISOs on one USB drive.'],
  ['gpuz','GPU-Z','GPZ','utilidades','TechPowerUp','2.x','10 MB','9.0','Mostrá toda la información de tu placa de video: modelo, memoria, frecuencias, temperatura y sensores en tiempo real.','Toda la info de tu placa de video.',false,false,'Shows everything about your graphics card: model, memory, clock speeds, temperature and live sensor readings.','All the info on your graphics card.'],
  ['qbittorrent','qBittorrent','QBT','utilidades','qBittorrent Project','5.x','35 MB','9.3','Cliente de torrent libre, liviano y sin publicidad. Buscador integrado, descargas secuenciales, programador de velocidad y control remoto por web.','Cliente de torrent libre y sin publicidad.',true,false,'A free, lightweight torrent client with no ads. Built-in search, sequential downloads, speed scheduler and web remote control.','Free torrent client with no ads.'],
  ['jdownloader','JDownloader 2','JDL','utilidades','AppWork GmbH','2.x','80 MB','8.8','Gestor de descargas que acelera y organiza tus descargas de servidores como Mega, MediaFire y Google Drive. Pausá, reanudá y extraé archivos automáticamente.','Gestor de descargas para Mega, MediaFire y más.',true,false,'A download manager that speeds up and organizes downloads from hosts like Mega, MediaFire and Google Drive. Pause, resume and auto-extract files.','Download manager for Mega, MediaFire and more.'],
  ['teamviewer','TeamViewer','TMV','utilidades','TeamViewer','15.x','60 MB','8.7','Controlá otra PC a distancia por internet. Ideal para dar soporte técnico, acceder a tu computadora desde cualquier lugar o compartir archivos.','Controlá otra PC a distancia.',false,false,'Control another PC remotely over the internet. Ideal for tech support, accessing your computer from anywhere or sharing files.','Control another PC remotely.'],
  ['anydesk','AnyDesk','ANY','utilidades','AnyDesk Software','9.x','5 MB','8.8','Escritorio remoto rápido y liviano. Conectate a otra computadora con un código y manejala como si estuvieras enfrente, con muy poca latencia.','Escritorio remoto rápido y liviano.',false,false,'Fast, lightweight remote desktop. Connect to another computer with a code and control it as if you were sitting in front of it, with very low latency.','Fast, lightweight remote desktop.'],
  ['wiztree','WizTree','WZT','utilidades','Antibody Software','4.x','10 MB','9.1','Analizá qué ocupa espacio en tu disco en segundos. Muestra un mapa visual de carpetas y archivos para liberar espacio fácilmente.','Descubrí qué ocupa espacio en tu disco.',false,false,'Analyze what is taking up space on your drive in seconds. Shows a visual map of folders and files so you can free up space easily.','See what is filling up your drive.'],
  ['rainmeter','Rainmeter','RNM','utilidades','Rainmeter','4.x','5 MB','8.9','Personalizá tu escritorio con widgets y skins: relojes, clima, uso de CPU y RAM, reproductores de música y miles de temas de la comunidad.','Widgets y skins para tu escritorio.',false,false,'Customize your desktop with widgets and skins: clocks, weather, CPU and RAM usage, music players and thousands of community themes.','Widgets and skins for your desktop.'],
  ['spotify','Spotify','SPT','multimedia','Spotify AB','Última','150 MB','9.1','Escuchá millones de canciones, podcasts y audiolibros. Creá playlists, descubrí música nueva con recomendaciones personalizadas y controlá la reproducción desde el celular.','Millones de canciones y podcasts.',true,false,'Listen to millions of songs, podcasts and audiobooks. Build playlists, discover new music with personalized picks and control playback from your phone.','Millions of songs and podcasts.'],
  ['potplayer','PotPlayer','POT','multimedia','Kakao','Última','40 MB','9.2','Reproductor de video liviano y potente con soporte para casi todos los formatos, subtítulos, aceleración por hardware y un montón de opciones de configuración.','Reproductor potente con todos los códecs.',false,false,'A lightweight yet powerful video player supporting nearly every format, subtitles, hardware acceleration and tons of settings.','Powerful player with every codec.'],
  ['mpv','mpv','MPV','multimedia','mpv Project','0.3x','35 MB','8.8','Reproductor minimalista y de código abierto con excelente calidad de imagen, ideal para usuarios avanzados que buscan rendimiento y personalización por scripts.','Reproductor minimalista y de alta calidad.',false,false,'A minimalist open-source player with excellent image quality, ideal for power users who want performance and script-based customization.','Minimalist, high-quality player.'],
  ['kodi','Kodi','KOD','multimedia','XBMC Foundation','21.x','80 MB','9.0','Convertí tu PC en un centro multimedia: organizá tus películas, series, música y fotos con portadas e info automática. Compatible con miles de complementos.','Tu PC convertida en centro multimedia.',false,false,'Turn your PC into a media center: organize your movies, shows, music and photos with automatic artwork and info. Supports thousands of add-ons.','Turn your PC into a media center.'],
  ['foobar2000','foobar2000','FB2','multimedia','Peter Pawlowski','2.x','6 MB','8.9','Reproductor de música liviano y muy configurable, con soporte para FLAC, conversión de formatos, etiquetado y una interfaz totalmente personalizable.','Reproductor de música liviano y configurable.',false,false,'A lightweight, highly configurable music player with FLAC support, format conversion, tagging and a fully customizable interface.','Lightweight, configurable music player.'],
  ['stremio','Stremio','STR','multimedia','Stremio','Última','100 MB','8.6','Organizá en un solo lugar las películas y series que mirás, con seguimiento de episodios, calendario de estrenos y complementos para fuentes de contenido.','Todas tus películas y series en un lugar.',false,true,'Keep all the movies and shows you watch in one place, with episode tracking, a release calendar and add-ons for content sources.','All your movies and shows in one place.'],
  ['shotcut','Shotcut','SHC','multimedia','Meltytech','25.x','100 MB','8.6','Editor de video gratuito y de código abierto con línea de tiempo, filtros, transiciones y soporte para 4K. Una gran opción para empezar a editar.','Editor de video libre y gratuito.',false,false,'A free, open-source video editor with a timeline, filters, transitions and 4K support. A great choice to start editing.','Free, open-source video editor.'],
  ['davinci','DaVinci Resolve','DVR','multimedia','Blackmagic Design','20.x','3 GB','9.4','Editor de video profesional usado en Hollywood, con corrección de color, efectos visuales, audio y edición en una sola app. La versión gratuita es increíblemente completa.','Edición de video profesional gratis.',true,false,'A professional video editor used in Hollywood, combining color correction, visual effects, audio and editing in one app. The free version is incredibly complete.','Professional video editing for free.'],
  ['kdenlive','Kdenlive','KDN','multimedia','KDE','25.x','120 MB','8.5','Editor de video libre con edición multipista, efectos, transiciones, subtítulos y títulos animados. Ideal para videos de YouTube.','Editor de video multipista gratis.',false,false,'A free video editor with multitrack editing, effects, transitions, subtitles and animated titles. Great for YouTube videos.','Free multitrack video editor.'],
  ['capcut','CapCut','CPC','multimedia','ByteDance','Última','400 MB','8.8','Editor de video fácil de usar con plantillas, subtítulos automáticos, efectos y filtros de moda. Ideal para TikTok, Reels y Shorts.','Videos para TikTok y Reels en minutos.',true,true,'An easy video editor with templates, auto captions, effects and trending filters. Perfect for TikTok, Reels and Shorts.','TikTok and Reels videos in minutes.'],
  ['sharex','ShareX','SHX','multimedia','ShareX Team','17.x','10 MB','9.2','Capturas de pantalla y grabaciones con un atajo de teclado. Editá, anotá, hacé GIFs y subí todo automáticamente para compartir el link.','Capturas, GIFs y grabaciones de pantalla.',false,false,'Screenshots and screen recordings with one shortcut. Edit, annotate, make GIFs and upload everything automatically to share the link.','Screenshots, GIFs and screen recordings.'],
  ['winamp','Winamp','WNP','multimedia','Winamp','5.9','20 MB','8.4','El reproductor de música clásico que marcó una época, con skins, ecualizador, listas de reproducción y soporte para todos los formatos de audio.','El reproductor clásico de los 2000.',false,false,'The classic music player that defined an era, with skins, an equalizer, playlists and support for every audio format.','The classic 2000s music player.'],
  ['plex','Plex','PLX','multimedia','Plex Inc.','Última','150 MB','8.7','Armá tu propio servidor de películas, series y música y miralo desde cualquier dispositivo: tele, celular o PC, en casa o desde afuera.','Tu propio Netflix con tus archivos.',false,false,'Build your own server for movies, shows and music and stream it to any device, TV, phone or PC, at home or on the go.','Your own Netflix with your files.'],
  ['bitdefender','Bitdefender Free','BDF','seguridad','Bitdefender','Free','600 MB','9.0','Antivirus gratuito con uno de los mejores motores de detección del mundo. Protección en tiempo real, liviano y sin molestar con ventanas emergentes.','Antivirus gratis con detección de primer nivel.',false,false,'A free antivirus with one of the best detection engines in the world. Real-time protection, lightweight and free of nagging pop-ups.','Free antivirus with top-tier detection.'],
  ['kaspersky','Kaspersky Free','KSP','seguridad','Kaspersky','Free','300 MB','8.8','Protección gratuita contra virus, ransomware y phishing con escaneo en tiempo real y análisis de archivos y enlaces sospechosos.','Protección gratis contra virus y ransomware.',false,false,'Free protection against viruses, ransomware and phishing with real-time scanning and analysis of suspicious files and links.','Free protection from viruses and ransomware.'],
  ['avg','AVG AntiVirus Free','AVG','seguridad','Avast Software','Free','350 MB','8.3','Antivirus gratuito con protección en tiempo real, escudo web y de correo y análisis de rendimiento de la PC.','Antivirus gratis con escudo web.',false,false,'A free antivirus with real-time protection, web and email shields and PC performance scans.','Free antivirus with web shield.'],
  ['avira','Avira Free Security','AVR','seguridad','Avira','Free','250 MB','8.5','Antivirus gratis con VPN limitada, gestor de contraseñas y herramientas para optimizar la PC y actualizar tus programas.','Antivirus, VPN y optimizador gratis.',false,false,'A free antivirus with a limited VPN, password manager and tools to optimize your PC and update your software.','Free antivirus, VPN and optimizer.'],
  ['adwcleaner','AdwCleaner','ADW','seguridad','Malwarebytes','8.x','8 MB','9.1','Elimina adware, barras de herramientas, programas no deseados y secuestradores del navegador en un par de clics. No necesita instalación.','Eliminá adware y barras molestas.',false,false,'Removes adware, toolbars, unwanted programs and browser hijackers in a couple of clicks. No installation needed.','Remove adware and pesky toolbars.'],
  ['protonvpn','Proton VPN','PVN','seguridad','Proton AG','Última','90 MB','9.0','VPN suiza con plan gratuito sin límite de datos y sin publicidad. Política estricta de no registros y cifrado fuerte para proteger tu conexión.','VPN gratis sin límite de datos.',true,false,'A Swiss VPN with a free plan that has no data cap and no ads. Strict no-logs policy and strong encryption to protect your connection.','Free VPN with no data cap.'],
  ['windscribe','Windscribe','WSB','seguridad','Windscribe','Última','60 MB','8.6','VPN con 10 GB gratis por mes, bloqueador de anuncios y rastreadores (R.O.B.E.R.T.) y servidores en más de 10 países.','VPN con 10 GB gratis por mes.',false,false,'A VPN with 10 GB free per month, an ad and tracker blocker (R.O.B.E.R.T.) and servers in more than 10 countries.','VPN with 10 GB free per month.'],
  ['keepassxc','KeePassXC','KPX','seguridad','KeePassXC Team','2.x','40 MB','9.1','Gestor de contraseñas libre y sin conexión: guardá tus claves en una base cifrada en tu propia PC, con generador de contraseñas y autocompletado.','Contraseñas cifradas en tu propia PC.',false,false,'A free, offline password manager: store your passwords in an encrypted database on your own PC, with a password generator and auto-type.','Encrypted passwords on your own PC.'],
  ['veracrypt','VeraCrypt','VCR','seguridad','IDRIX','1.26','35 MB','9.0','Cifrá discos, particiones o pendrives completos para que nadie pueda leer tus archivos sin la contraseña. Libre y de código abierto.','Cifrá discos y pendrives completos.',false,false,'Encrypt entire drives, partitions or USB sticks so no one can read your files without the password. Free and open source.','Encrypt entire drives and USB sticks.'],
  ['krita','Krita','KRT','diseno','Krita Foundation','5.x','120 MB','9.2','Programa de dibujo y pintura digital profesional y gratuito, con pinceles increíbles, capas, animación cuadro a cuadro y soporte para tabletas gráficas.','Dibujo y pintura digital profesional gratis.',false,false,'A free, professional digital drawing and painting program with amazing brushes, layers, frame-by-frame animation and graphics tablet support.','Free pro digital painting.'],
  ['blender','Blender','BLD','diseno','Blender Foundation','4.x','350 MB','9.6','Suite 3D completa y gratuita: modelado, escultura, animación, renderizado, efectos visuales y edición de video. Usado en películas y videojuegos.','Modelado y animación 3D gratis.',true,false,'A complete, free 3D suite: modeling, sculpting, animation, rendering, visual effects and video editing. Used in films and games.','Free 3D modeling and animation.'],
  ['paintnet','Paint.NET','PNT','diseno','dotPDN','5.x','80 MB','8.8','Editor de imágenes simple pero potente para Windows, con capas, efectos, ajustes y plugins. Mucho más que el Paint y mucho más fácil que Photoshop.','Edición de fotos fácil para Windows.',false,false,'A simple yet powerful image editor for Windows, with layers, effects, adjustments and plugins. Much more than Paint and much easier than Photoshop.','Easy photo editing for Windows.'],
  ['figma','Figma','FIG','diseno','Figma Inc.','Desktop','150 MB','9.3','Diseñá interfaces, prototipos y logos en equipo y en tiempo real. La herramienta favorita de los diseñadores UX/UI, con plan gratuito.','Diseño de interfaces y prototipos en equipo.',false,false,'Design interfaces, prototypes and logos together in real time. The favorite tool of UX/UI designers, with a free plan.','Team interface design and prototyping.'],
  ['affinity','Affinity','AFF','diseno','Canva','Última','1 GB','9.0','Suite de diseño profesional que combina edición de fotos, ilustración vectorial y maquetación en una sola app, ahora gratis.','Diseño profesional: fotos, vectores y maquetación.',false,true,'A professional design suite that combines photo editing, vector illustration and page layout in one app, now free.','Pro design: photos, vectors and layout.'],
  ['lunacy','Lunacy','LUN','diseno','Icons8','Última','200 MB','8.5','Editor de diseño gráfico gratuito con íconos, fotos e ilustraciones incluidas, herramientas con IA y compatibilidad con archivos de Sketch.','Diseño gráfico gratis con recursos incluidos.',false,false,'A free graphic design editor with built-in icons, photos and illustrations, AI tools and Sketch file support.','Free graphic design with built-in assets.'],
  ['medibang','MediBang Paint','MDB','diseno','MediBang','Última','100 MB','8.6','Programa gratuito para dibujar manga y cómics, con pinceles, tramas, plantillas de viñetas y fuentes incluidas. Liviano y fácil de usar.','Dibujá manga y cómics gratis.',false,false,'A free program for drawing manga and comics, with brushes, screentones, panel templates and built-in fonts. Lightweight and easy to use.','Draw manga and comics for free.'],
  ['freecad','FreeCAD','FCD','diseno','FreeCAD Team','1.x','500 MB','8.4','Modelado 3D paramétrico libre para ingeniería, arquitectura y diseño de piezas para impresión 3D.','CAD 3D paramétrico libre.',false,false,'Free parametric 3D modeling for engineering, architecture and designing parts for 3D printing.','Free parametric 3D CAD.'],
  ['python','Python','PY','desarrollo','Python Software Foundation','3.x','30 MB','9.6','El lenguaje de programación más popular del mundo. Fácil de aprender y usado en inteligencia artificial, análisis de datos, automatización y desarrollo web.','El lenguaje más popular del mundo.',true,false,'The world\'s most popular programming language. Easy to learn and used in artificial intelligence, data analysis, automation and web development.','The world\'s most popular language.'],
  ['visualstudio','Visual Studio Community','VS','desarrollo','Microsoft','2022','3 GB','9.2','Entorno de desarrollo completo de Microsoft para C#, C++, .NET y desarrollo de videojuegos con Unity. La edición Community es gratuita.','IDE completo para C#, C++ y .NET.',false,false,'Microsoft\'s full development environment for C#, C++, .NET and Unity game development. The Community edition is free.','Full IDE for C#, C++ and .NET.'],
  ['intellij','IntelliJ IDEA','IJ','desarrollo','JetBrains','Última','900 MB','9.3','El IDE más potente para Java y Kotlin, con autocompletado inteligente, refactorización y herramientas integradas.','El mejor IDE para Java y Kotlin.',false,false,'The most powerful IDE for Java and Kotlin, with smart code completion, refactoring and built-in tools.','The best IDE for Java and Kotlin.'],
  ['sublime','Sublime Text','SUB','desarrollo','Sublime HQ','4.x','20 MB','9.0','Editor de código rapidísimo y elegante, con edición de múltiples cursores, búsqueda potente y miles de paquetes.','Editor de código rápido y elegante.',false,false,'A blazing-fast, elegant code editor with multiple cursors, powerful search and thousands of packages.','Fast, elegant code editor.'],
  ['notepadpp','Notepad++','NPP','desarrollo','Don Ho','8.x','5 MB','9.2','Editor de texto y código liviano para Windows, con resaltado de sintaxis para decenas de lenguajes, pestañas y plugins.','Bloc de notas con superpoderes.',true,false,'A lightweight text and code editor for Windows, with syntax highlighting for dozens of languages, tabs and plugins.','Notepad with superpowers.'],
  ['githubdesktop','GitHub Desktop','GHD','desarrollo','GitHub','Última','150 MB','8.9','Usá Git y GitHub sin comandos: hacé commits, cambiá de rama y subí tus proyectos con una interfaz simple.','Git y GitHub sin comandos.',false,false,'Use Git and GitHub without the command line: commit, switch branches and push your projects with a simple interface.','Git and GitHub without commands.'],
  ['docker','Docker Desktop','DCK','desarrollo','Docker Inc.','Última','600 MB','8.8','Creá y ejecutá contenedores en tu PC para desarrollar aplicaciones que funcionan igual en cualquier entorno.','Contenedores para desarrollo.',false,false,'Build and run containers on your PC to develop applications that behave the same in any environment.','Containers for development.'],
  ['xampp','XAMPP','XMP','desarrollo','Apache Friends','8.x','160 MB','8.7','Servidor web local con Apache, MySQL/MariaDB, PHP y Perl listo para usar. Ideal para aprender y probar sitios web.','Servidor web local en un clic.',false,false,'A ready-to-use local web server with Apache, MySQL/MariaDB, PHP and Perl. Ideal for learning and testing websites.','Local web server in one click.'],
  ['androidstudio','Android Studio','AS','desarrollo','Google','Última','1.2 GB','9.0','El entorno oficial para crear apps de Android, con emulador, editor visual de interfaces y herramientas de depuración.','Creá apps para Android.',false,false,'The official environment for building Android apps, with an emulator, visual layout editor and debugging tools.','Build apps for Android.'],
  ['unity','Unity','UNY','desarrollo','Unity Technologies','6.x','3 GB','9.0','Motor de videojuegos para crear juegos 2D y 3D para PC, celulares y consolas. Gran comunidad, tutoriales y Asset Store.','Creá tus propios videojuegos 2D y 3D.',false,false,'A game engine for building 2D and 3D games for PC, mobile and consoles. Huge community, tutorials and an Asset Store.','Make your own 2D and 3D games.'],
  ['godot','Godot Engine','GDT','desarrollo','Godot Foundation','4.x','100 MB','9.2','Motor de videojuegos libre y liviano para 2D y 3D, con su propio lenguaje GDScript, fácil de aprender. Sin regalías ni licencias.','Motor de juegos libre y liviano.',false,true,'A free, lightweight 2D and 3D game engine with its own easy-to-learn GDScript language. No royalties or licenses.','Free, lightweight game engine.'],
  ['unreal','Unreal Engine','UE','desarrollo','Epic Games','5.x','40 GB','9.3','El motor gráfico de última generación detrás de Fortnite y muchos juegos AAA. Gratis para empezar, con Nanite, Lumen y Blueprints sin código.','El motor de los juegos AAA.',false,false,'The next-gen engine behind Fortnite and many AAA games. Free to start, with Nanite, Lumen and no-code Blueprints.','The engine behind AAA games.'],
  ['filezilla','FileZilla','FZ','desarrollo','Tim Kosse','3.x','12 MB','8.8','Cliente FTP y SFTP gratuito para subir y bajar archivos de tu servidor o hosting con una interfaz simple de arrastrar y soltar.','Subí archivos a tu hosting por FTP.',false,false,'A free FTP and SFTP client to upload and download files from your server or hosting with a simple drag-and-drop interface.','Upload files to your hosting via FTP.'],
  ['teams','Microsoft Teams','TMS','comunicacion','Microsoft','Última','150 MB','8.2','Chat, videollamadas y reuniones para trabajo, escuela o amigos. Compartí archivos y pantalla, con integración con Office.','Reuniones y chat para trabajo y escuela.',false,false,'Chat, video calls and meetings for work, school or friends. Share files and your screen with Office integration.','Meetings and chat for work and school.'],
  ['slack','Slack','SLK','comunicacion','Salesforce','Última','120 MB','8.7','Mensajería para equipos organizada en canales, con llamadas, integraciones con cientos de apps y búsqueda en todo el historial.','Mensajería para equipos de trabajo.',false,false,'Team messaging organized into channels, with calls, integrations with hundreds of apps and full history search.','Messaging for work teams.'],
  ['signal','Signal','SGN','comunicacion','Signal Foundation','Última','140 MB','9.1','Mensajería con cifrado de extremo a extremo en todos los mensajes y llamadas. Sin publicidad ni rastreo. Se sincroniza con tu celular.','Mensajería privada y cifrada.',false,false,'Messaging with end-to-end encryption on every message and call. No ads, no tracking. Syncs with your phone.','Private, encrypted messaging.'],
  ['viber','Viber','VBR','comunicacion','Rakuten Viber','Última','120 MB','8.2','Mensajes, llamadas y videollamadas gratis, con grupos, stickers y llamadas a teléfonos fijos y celulares con Viber Out.','Llamadas y mensajes gratis.',false,false,'Free messages, calls and video calls, with groups, stickers and calls to landlines and mobiles with Viber Out.','Free calls and messages.'],
  ['thunderbird','Thunderbird','TBD','comunicacion','Mozilla','Última','90 MB','8.8','Cliente de correo libre de Mozilla: manejá varias cuentas de Gmail, Outlook y más en un solo lugar, con calendario y filtros.','Todos tus correos en un solo lugar.',false,false,'Mozilla\'s free email client: manage multiple Gmail, Outlook and other accounts in one place, with a calendar and filters.','All your email in one place.'],
  ['teamspeak','TeamSpeak','TS','comunicacion','TeamSpeak Systems','Última','100 MB','8.4','Chat de voz de baja latencia para gamers y clanes, con audio de alta calidad y servidores propios.','Chat de voz para clanes y gamers.',false,false,'Low-latency voice chat for gamers and clans, with high-quality audio and self-hosted servers.','Voice chat for clans and gamers.'],
  ['steam','Steam','STM','gaming','Valve','Última','5 MB','9.5','La plataforma de videojuegos más grande de PC: comprá, descargá y actualizá tus juegos, jugá con amigos y aprovechá las ofertas.','La tienda de juegos más grande de PC.',true,false,'The largest PC gaming platform: buy, download and update your games, play with friends and grab great deals.','The biggest PC game store.'],
  ['epic','Epic Games Launcher','EPC','gaming','Epic Games','Última','200 MB','8.6','Tienda y launcher de Epic Games, con juegos gratis cada semana, Fortnite, Rocket League y Unreal Engine.','Juegos gratis cada semana.',true,false,'Epic Games\' store and launcher, with free games every week, Fortnite, Rocket League and Unreal Engine.','Free games every week.'],
  ['gog','GOG Galaxy','GOG','gaming','CD Projekt','2.x','300 MB','8.7','Launcher que une tus bibliotecas de Steam, Epic, Xbox y más en un solo lugar. Juegos sin DRM y clásicos listos para correr en Windows moderno.','Todas tus bibliotecas de juegos en una.',false,false,'A launcher that brings your Steam, Epic, Xbox and other libraries into one place. DRM-free games and classics ready to run on modern Windows.','All your game libraries in one.'],
  ['eaapp','EA app','EA','gaming','Electronic Arts','Última','250 MB','7.8','La aplicación de Electronic Arts para jugar FC, Battlefield, Los Sims y Need for Speed, con EA Play y juego cruzado.','Los juegos de EA en tu PC.',false,false,'Electronic Arts\' app for playing FC, Battlefield, The Sims and Need for Speed, with EA Play and cross-play.','EA games on your PC.'],
  ['ubisoft','Ubisoft Connect','UBI','gaming','Ubisoft','Última','150 MB','7.9','Launcher de Ubisoft para Assassin\'s Creed, Far Cry y Rainbow Six, con recompensas, juego cruzado y Ubisoft+.','Los juegos de Ubisoft en tu PC.',false,false,'Ubisoft\'s launcher for Assassin\'s Creed, Far Cry and Rainbow Six, with rewards, cross-play and Ubisoft+.','Ubisoft games on your PC.'],
  ['battlenet','Battle.net','BNT','gaming','Blizzard Entertainment','Última','100 MB','8.5','Launcher de Blizzard para World of Warcraft, Diablo, Overwatch 2 y Call of Duty, con chat y lista de amigos.','Blizzard y Call of Duty en un lugar.',false,false,'Blizzard\'s launcher for World of Warcraft, Diablo, Overwatch 2 and Call of Duty, with chat and a friends list.','Blizzard and Call of Duty in one place.'],
  ['xbox','Xbox App','XBX','gaming','Microsoft','Última','150 MB','8.3','La app de Xbox para PC: jugá el catálogo de PC Game Pass, chateá con amigos y conectá tus logros de Xbox.','PC Game Pass y tus amigos de Xbox.',false,false,'The Xbox app for PC: play the PC Game Pass catalog, chat with friends and connect your Xbox achievements.','PC Game Pass and your Xbox friends.'],
  ['retroarch','RetroArch','RTA','gaming','Libretro','1.x','300 MB','9.1','Emulador todo en uno para jugar clásicos de NES, SNES, Sega, PlayStation, Nintendo 64 y muchas consolas más, con shaders y rebobinado.','Todas las consolas retro en un emulador.',true,false,'An all-in-one emulator for playing NES, SNES, Sega, PlayStation, Nintendo 64 classics and many more, with shaders and rewind.','Every retro console in one emulator.'],
  ['pcsx2','PCSX2','PS2','gaming','PCSX2 Team','2.x','30 MB','9.4','El emulador de PlayStation 2 para PC. Jugá tus clásicos de PS2 en alta resolución, con mejoras gráficas, guardado rápido y soporte para joysticks.','Emulador de PlayStation 2.',true,false,'The PlayStation 2 emulator for PC. Play your PS2 classics in high resolution, with graphic enhancements, save states and controller support.','PlayStation 2 emulator.'],
  ['ppsspp','PPSSPP','PSP','gaming','Henrik Rydgård','1.x','40 MB','9.3','Emulador de PSP rápido y liviano: jugá God of War, Tekken, GTA y más títulos de PSP en HD, incluso en PCs viejas.','Emulador de PSP en HD.',false,false,'A fast, lightweight PSP emulator: play God of War, Tekken, GTA and more PSP titles in HD, even on older PCs.','PSP emulator in HD.'],
  ['rpcs3','RPCS3','PS3','gaming','RPCS3 Team','0.0.x','30 MB','9.0','Emulador de PlayStation 3 de código abierto, capaz de correr miles de juegos de PS3 en resoluciones altas con una PC potente.','Emulador de PlayStation 3.',false,true,'An open-source PlayStation 3 emulator able to run thousands of PS3 games at high resolutions on a powerful PC.','PlayStation 3 emulator.'],
  ['nvidiaapp','NVIDIA App','NV','gaming','NVIDIA','Última','150 MB','8.8','Mantené actualizados los drivers de tu placa GeForce, optimizá los juegos con un clic, grabá con ShadowPlay y usá los filtros de juego.','Drivers y optimización para placas NVIDIA.',true,false,'Keep your GeForce drivers up to date, optimize games in one click, record with ShadowPlay and use game filters.','Drivers and tuning for NVIDIA cards.'],
  ['amdadrenalin','AMD Software: Adrenalin','AMD','gaming','AMD','Última','600 MB','8.7','Drivers y panel de control para placas de video Radeon: actualizaciones, grabación, overclock, Radeon Super Resolution y monitoreo de rendimiento.','Drivers y panel para placas Radeon.',false,false,'Drivers and control panel for Radeon graphics cards: updates, recording, overclocking, Radeon Super Resolution and performance monitoring.','Drivers and panel for Radeon cards.'],
  ['directx','DirectX End-User Runtime','DX','gaming','Microsoft','9.0c','100 MB','9.0','Instala las librerías de DirectX 9 que necesitan muchos juegos clásicos para funcionar. Soluciona errores como d3dx9_43.dll faltante.','Arreglá los errores de DLL de DirectX.',true,false,'Installs the DirectX 9 libraries many classic games need to run. Fixes errors like missing d3dx9_43.dll.','Fix DirectX DLL errors.'],
  ['vcredist','Visual C++ Redistributable','VC++','gaming','Microsoft','2015-2022','25 MB','9.0','Librerías de Microsoft que necesitan la mayoría de los juegos y programas. Instalalas si te aparece un error de MSVCP140.dll o VCRUNTIME140.dll.','Solucioná errores de MSVCP140.dll.',true,false,'Microsoft libraries most games and programs need. Install them if you get a MSVCP140.dll or VCRUNTIME140.dll error.','Fix MSVCP140.dll errors.'],
  ['curseforge','CurseForge','CF','gaming','Overwolf','Última','200 MB','8.6','Descargá e instalá mods para Minecraft, World of Warcraft, Los Sims 4 y muchos juegos más con un clic, y armá tus propios modpacks.','Mods para Minecraft y más con un clic.',false,false,'Download and install mods for Minecraft, World of Warcraft, The Sims 4 and many more games in one click, and build your own modpacks.','One-click mods for Minecraft and more.'],
  ['libreoffice','LibreOffice','LBO','oficina','The Document Foundation','25.x','350 MB','9.1','Suite de oficina libre y gratuita compatible con Word, Excel y PowerPoint: procesador de texto, planillas, presentaciones y más.','La alternativa gratis a Microsoft Office.',true,false,'A free, open-source office suite compatible with Word, Excel and PowerPoint: word processor, spreadsheets, presentations and more.','The free alternative to Microsoft Office.'],
  ['onlyoffice','ONLYOFFICE','OO','oficina','Ascensio System','9.x','300 MB','8.8','Suite de oficina gratuita con una interfaz muy parecida a Microsoft Office y excelente compatibilidad con archivos .docx, .xlsx y .pptx.','Office gratis con interfaz familiar.',false,false,'A free office suite with an interface very similar to Microsoft Office and excellent compatibility with .docx, .xlsx and .pptx files.','Free office with a familiar interface.'],
  ['wps','WPS Office','WPS','oficina','Kingsoft','Última','250 MB','8.5','Suite de oficina liviana con documentos, planillas, presentaciones y editor de PDF, compatible con los formatos de Microsoft.','Office liviano con editor de PDF.',false,false,'A lightweight office suite with documents, spreadsheets, presentations and a PDF editor, compatible with Microsoft formats.','Lightweight office with a PDF editor.'],
  ['acrobat','Adobe Acrobat Reader','PDF','oficina','Adobe','Última','500 MB','8.6','El lector de PDF más usado: abrí, imprimí, firmá y comentá documentos PDF.','Abrí, firmá y comentá PDFs.',false,false,'The most widely used PDF reader: open, print, sign and annotate PDF documents.','Open, sign and annotate PDFs.'],
  ['sumatra','SumatraPDF','SPD','oficina','Krzysztof Kowalczyk','3.x','10 MB','9.0','Lector de PDF, ePub, MOBI y cómics ultraliviano y rapidísimo. Ideal para PCs con pocos recursos.','Lector de PDF y ebooks ultraliviano.',false,false,'An ultra-light, lightning-fast reader for PDF, ePub, MOBI and comics. Perfect for low-spec PCs.','Ultra-light PDF and ebook reader.'],
  ['notion','Notion','NTN','oficina','Notion Labs','Última','150 MB','9.0','Notas, tareas, wikis y bases de datos en un solo lugar. Organizá tus estudios, proyectos y trabajo con plantillas y colaboración en tiempo real.','Notas, tareas y proyectos en un lugar.',false,false,'Notes, tasks, wikis and databases in one place. Organize your studies, projects and work with templates and real-time collaboration.','Notes, tasks and projects in one place.'],
  ['obsidian','Obsidian','OBD','oficina','Obsidian','Última','200 MB','9.1','App de notas en Markdown que guarda todo en tu PC. Conectá ideas con enlaces, visualizalas en un grafo y ampliala con miles de plugins.','Notas en Markdown conectadas entre sí.',false,true,'A Markdown note-taking app that keeps everything on your PC. Link ideas together, view them in a graph and extend it with thousands of plugins.','Linked Markdown notes.'],
  ['calibre','Calibre','CAL','oficina','Kovid Goyal','8.x','200 MB','8.9','Organizá tu biblioteca de libros electrónicos, convertí entre formatos como ePub, MOBI y PDF y pasalos a tu Kindle o lector.','Gestor de ebooks y conversor de formatos.',false,false,'Organize your ebook library, convert between formats like ePub, MOBI and PDF and send them to your Kindle or e-reader.','Ebook manager and format converter.'],
  ['dropbox','Dropbox','DBX','oficina','Dropbox Inc.','Última','150 MB','8.6','Guardá tus archivos en la nube y sincronizalos entre tu PC, celular y otras computadoras. Compartí carpetas y recuperá versiones anteriores.','Tus archivos sincronizados en la nube.',false,false,'Store your files in the cloud and sync them between your PC, phone and other computers. Share folders and restore previous versions.','Your files synced in the cloud.'],
  ['googledrive','Google Drive','GDR','oficina','Google','Última','300 MB','8.9','Google Drive para escritorio: accedé a tus archivos de Drive desde el Explorador de Windows y sincronizá carpetas automáticamente.','Tu Google Drive en el Explorador de Windows.',false,false,'Google Drive for desktop: access your Drive files from Windows Explorer and sync folders automatically.','Your Google Drive in Windows Explorer.'],
  ['anki','Anki','ANK','oficina','Ankitects','25.x','150 MB','9.0','Estudiá con tarjetas de memoria y repetición espaciada. Ideal para idiomas, medicina, exámenes y cualquier cosa que tengas que memorizar.','Estudiá con tarjetas y repetición espaciada.',false,false,'Study with flashcards and spaced repetition. Ideal for languages, medicine, exams and anything you need to memorize.','Study with spaced-repetition flashcards.'],
  ['evernote','Evernote','EVN','oficina','Bending Spoons','Última','200 MB','8.2','Tomá notas, guardá páginas web, escaneá documentos y organizá todo con etiquetas y libretas sincronizadas en todos tus dispositivos.','Notas y documentos organizados.',false,false,'Take notes, clip web pages, scan documents and organize everything with tags and notebooks synced across all your devices.','Organized notes and documents.'],
].map(a=>({
  id:a[0], title:a[1], short:a[2], cat:a[3], catLabel:APP_CATS[a[3]].label, dev:a[4],
  version:a[5], size:a[6], rating:a[7], desc:a[8], cardDesc:a[9], hot:a[10], isNew:a[11], descEn:a[12]||'', cardDescEn:a[13]||'',
  lang:'Español', platform:'Windows', license:'Gratis', cov:APP_CATS[a[3]].cov,
  img:'', screenshots:['','',''], link:'LINK_DE_LA_APP',
  reqs:[{l:'SO',v:'Windows 10/11'},{l:'RAM',v:'2 GB'},{l:'Disco',v:a[6]},{l:'Licencia',v:'Gratuita'}]
}));
/* Para ponerle imagen o link a una app, agregalo acá abajo así:
   setApp('chrome',{img:'https://...', link:'https://exe.io/...'});  */
function setApp(id,data){const a=APPS.find(x=>x.id===id);if(a)Object.assign(a,data);}

/* ── LOGOS DE LAS APPS (automáticos) ──
   [logo de Simple Icons (o '' si no hay, o una URL completa), color de la marca, sitio web oficial]
   Si una app no tiene logo en Simple Icons, se usa el ícono de su sitio web. */
const SI='https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
// Íconos a color para las marcas que no están en Simple Icons (versión fija, igual que SI)
const DI='https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@104a791794ef68b31bfecac676ddace8c223fd27/svg/';
const APP_ICONS={
  chrome:['googlechrome','4285F4','google.com/chrome'], firefox:['firefoxbrowser','FF7139','mozilla.org'],
  brave:['brave','FB542B','brave.com'], operagx:['operagx','EE2950','opera.com'],
  winrar:['','6A2C91','win-rar.com'], '7zip':['7zip','3A3A3A','7-zip.org'], ccleaner:['ccleaner','CB2D29','ccleaner.com'],
  cpuz:['','4A6FA5','cpuid.com'], hwmonitor:['','4A6FA5','cpuid.com'], afterburner:['msi','D41E1E','msi.com'],
  vlc:['vlcmediaplayer','FF8800','videolan.org'], audacity:['audacity','2A4BD7','audacityteam.org'],
  obs:['obsstudio','5A5A6A','obsproject.com'], handbrake:[DI+'handbrake.svg','C0392B','handbrake.fr'],
  malwarebytes:['malwarebytes','0D3ECC','malwarebytes.com'], avast:['avast','FF7800','avast.com'], bitwarden:['bitwarden','175DDC','bitwarden.com'],
  gimp:['gimp','7A6F55','gimp.org'], inkscape:['inkscape','3A3A3A','inkscape.org'], canva:['canva','00C4CC','canva.com'],
  vscode:['','007ACC','code.visualstudio.com'], git:['git','F05032','git-scm.com'], postman:['postman','FF6C37','postman.com'], nodejs:['nodedotjs','5FA04E','nodejs.org'],
  discord:['discord','5865F2','discord.com'], telegram:['telegram','26A5E4','telegram.org'], zoom:['zoom','0B5CFF','zoom.us'], whatsapp:['whatsapp','25D366','whatsapp.com'],
  /* Apps agregadas (tanda 2) */
  edge:[DI+'microsoft-edge.svg','0078D7','microsoft.com/edge'], opera:['opera','FF1B2D','opera.com'], vivaldi:['vivaldi','EF3939','vivaldi.com'],
  tor:['torbrowser','7D4698','torproject.org'], librewolf:['librewolf','00ACFF','librewolf.net'],
  everything:['','FF8C00','voidtools.com'], powertoys:['','0078D4','microsoft.com'], crystaldiskinfo:['','4A90D9','crystalmark.info'],
  rufus:['','2E7D32','rufus.ie'], ventoy:['','1E88E5','ventoy.net'], gpuz:['','4CAF50','techpowerup.com'], qbittorrent:['qbittorrent','2F67BA','qbittorrent.org'],
  jdownloader:['','F4A100','jdownloader.org'], teamviewer:['teamviewer','0E8EE9','teamviewer.com'], anydesk:['anydesk','EF443B','anydesk.com'],
  wiztree:['','3D8B37','diskanalyzer.com'], rainmeter:['rainmeter','19519B','rainmeter.net'],
  spotify:['spotify','1ED760','spotify.com'], potplayer:['','F5B800','potplayer.tv'], mpv:['mpv','691F69','mpv.io'], kodi:['kodi','17B2E7','kodi.tv'],
  foobar2000:['foobar2000','5A5A6A','foobar2000.org'], stremio:['stremio','685CEE','stremio.com'], shotcut:['','115C9E','shotcut.org'],
  davinci:['davinciresolve','4A6A8E','blackmagicdesign.com'], kdenlive:['kdenlive','527EB2','kdenlive.org'], capcut:['','3A3A3A','capcut.com'],
  sharex:['sharex','2885F1','getsharex.com'], winamp:['winamp','F93821','winamp.com'], plex:['plex','EBAF00','plex.tv'],
  bitdefender:['bitdefender','ED1C24','bitdefender.com'], kaspersky:['kaspersky','006D5C','kaspersky.com'], avg:['','1E4785','avg.com'],
  avira:['avira','E02027','avira.com'], adwcleaner:['','0D3ECC','malwarebytes.com'], protonvpn:['protonvpn','66DEB1','protonvpn.com'],
  windscribe:['','1A5276','windscribe.com'], keepassxc:['keepassxc','6CAC4D','keepassxc.org'], veracrypt:[DI+'vera-crypt.svg','1A5FB4','veracrypt.fr'],
  krita:['krita','3BABFF','krita.org'], blender:['blender','E87D0D','blender.org'], paintnet:['','3B77B5','getpaint.net'], figma:['figma','F24E1E','figma.com'],
  affinity:['affinity','7E4DD2','affinity.studio'], lunacy:['lunacy','179DE3','icons8.com'], medibang:['medibangpaint','00DBDE','medibangpaint.com'],
  freecad:['freecad','729FCF','freecad.org'],
  python:['python','3776AB','python.org'], visualstudio:['','5C2D91','visualstudio.microsoft.com'], intellij:['intellijidea','FE315D','jetbrains.com'],
  sublime:['sublimetext','FF9800','sublimetext.com'], notepadpp:['notepadplusplus','90E59A','notepad-plus-plus.org'], githubdesktop:['github','8250DF','desktop.github.com'],
  docker:['docker','2496ED','docker.com'], xampp:['xampp','FB7A24','apachefriends.org'], androidstudio:['androidstudio','3DDC84','developer.android.com'],
  unity:['unity','5A5A6A','unity.com'], godot:['godotengine','478CBF','godotengine.org'], unreal:['unrealengine','5A5A6A','unrealengine.com'],
  filezilla:['filezilla','BF0000','filezilla-project.org'],
  teams:[DI+'microsoft-teams.svg','6264A7','microsoft.com'], slack:['slack','4A154B','slack.com'], signal:['signal','3B45FD','signal.org'],
  viber:['viber','7360F2','viber.com'], thunderbird:['thunderbird','0A84FF','thunderbird.net'], teamspeak:['teamspeak','4B69B6','teamspeak.com'],
  steam:['steam','2A475E','store.steampowered.com'], epic:['epicgames','5A5A6A','epicgames.com'], gog:['gogdotcom','86328A','gog.com'],
  eaapp:['ea','FF4747','ea.com'], ubisoft:['ubisoft','0070FF','ubisoft.com'], battlenet:['battledotnet','148EFF','battle.net'],
  xbox:[DI+'xbox.svg','107C10','xbox.com'], retroarch:['retroarch','5A5A6A','retroarch.com'], pcsx2:['','2A4D9B','pcsx2.net'],
  ppsspp:['','33B5E5','ppsspp.org'], rpcs3:['','4A4A9A','rpcs3.net'], nvidiaapp:['nvidia','76B900','nvidia.com'], amdadrenalin:['amd','ED1C24','amd.com'],
  directx:['','0078D4','microsoft.com'], vcredist:['','5C2D91','microsoft.com'], curseforge:['curseforge','F16436','curseforge.com'],
  libreoffice:['libreoffice','18A303','libreoffice.org'], onlyoffice:['onlyoffice','FF6F3D','onlyoffice.com'], wps:['','E3352D','wps.com'],
  acrobat:['adobeacrobatreader','EC1C24','adobe.com'], sumatra:['','FFD400','sumatrapdfreader.org'], notion:['notion','5A5A6A','notion.so'],
  obsidian:['obsidian','7C3AED','obsidian.md'], calibre:['','A3672F','calibre-ebook.com'], dropbox:['dropbox','0061FF','dropbox.com'],
  googledrive:['googledrive','4285F4','google.com/drive'], anki:['anki','80C2EE','apps.ankiweb.net'], evernote:['evernote','00A82D','evernote.com'],
};
APPS.forEach(a=>{
  const ic=APP_ICONS[a.id]; if(!ic)return;
  const url=ic[0].startsWith('http');
  a.icon=url?ic[0]:ic[0]?SI+ic[0]+'.svg':'https://www.google.com/s2/favicons?domain='+ic[2]+'&sz=128';
  a.iconMono=!!ic[0]&&!url;    // los de Simple Icons son negros → se pintan de blanco
  a.color='#'+ic[1];
});
// HTML del logo de una app (para tarjetas, detalle y ranking)
function appIconHtml(a,cls='app-icon'){
  return a.icon?`<img src="${a.icon}" alt="${a.title}" class="${cls}${a.iconMono?' mono':''}" onerror="this.remove()">`:'';
}
function appBg(a){return a.color?`background:radial-gradient(circle at 50% 42%,${a.color}55 0%,${a.color}18 45%,#07090e 100%)`:'';}
// setApp('chrome',{img:'', link:''});
/* Links oficiales de descarga de cada app (página del fabricante).
   Si querés ganar con el acortador, reemplazá el link por el tuyo de exe.io. */
setApp('chrome',      {link:'https://www.google.com/chrome/'});
setApp('firefox',     {link:'https://www.mozilla.org/es-AR/firefox/new/'});
setApp('brave',       {link:'https://brave.com/download/'});
setApp('operagx',     {link:'https://www.opera.com/gx'});
setApp('winrar',      {link:'https://www.win-rar.com/download.html'});
setApp('7zip',        {link:'https://www.7-zip.org/download.html'});
setApp('ccleaner',    {link:'https://www.ccleaner.com/ccleaner/download'});
setApp('cpuz',        {link:'https://www.cpuid.com/softwares/cpu-z.html'});
setApp('hwmonitor',   {link:'https://www.cpuid.com/softwares/hwmonitor.html'});
setApp('afterburner', {link:'https://www.msi.com/Landing/afterburner/graphics-cards'});
setApp('vlc',         {link:'https://www.videolan.org/vlc/'});
setApp('audacity',    {link:'https://www.audacityteam.org/download/'});
setApp('obs',         {link:'https://obsproject.com/download'});
setApp('handbrake',   {link:'https://handbrake.fr/downloads.php'});
setApp('malwarebytes',{link:'https://www.malwarebytes.com/mwb-download'});
setApp('avast',       {link:'https://www.avast.com/free-antivirus-download'});
setApp('bitwarden',   {link:'https://bitwarden.com/download/'});
setApp('gimp',        {link:'https://www.gimp.org/downloads/'});
setApp('inkscape',    {link:'https://inkscape.org/release/'});
setApp('canva',       {link:'https://www.canva.com/download/windows/'});
setApp('vscode',      {link:'https://code.visualstudio.com/download'});
setApp('git',         {link:'https://git-scm.com/download/win'});
setApp('postman',     {link:'https://www.postman.com/downloads/'});
setApp('nodejs',      {link:'https://nodejs.org/en/download'});
setApp('discord',     {link:'https://discord.com/download'});
setApp('telegram',    {link:'https://desktop.telegram.org/'});
setApp('zoom',        {link:'https://zoom.us/download'});
setApp('whatsapp',    {link:'https://www.whatsapp.com/download'});
/* Apps agregadas (tanda 2) */
setApp('edge',        {link:'https://www.microsoft.com/edge/download'});
setApp('opera',       {link:'https://www.opera.com/download'});
setApp('vivaldi',     {link:'https://vivaldi.com/download/'});
setApp('tor',         {link:'https://www.torproject.org/download/'});
setApp('librewolf',   {link:'https://librewolf.net/installation/windows/'});
setApp('everything',  {link:'https://www.voidtools.com/downloads/'});
setApp('powertoys',   {link:'https://learn.microsoft.com/windows/powertoys/install'});
setApp('crystaldiskinfo',{link:'https://crystalmark.info/en/software/crystaldiskinfo/'});
setApp('rufus',       {link:'https://rufus.ie/'});
setApp('ventoy',      {link:'https://www.ventoy.net/en/download.html'});
setApp('gpuz',        {link:'https://www.techpowerup.com/gpuz/'});
setApp('qbittorrent', {link:'https://www.qbittorrent.org/download'});
setApp('jdownloader', {link:'https://jdownloader.org/jdownloader2'});
setApp('teamviewer',  {link:'https://www.teamviewer.com/download/'});
setApp('anydesk',     {link:'https://anydesk.com/download'});
setApp('wiztree',     {link:'https://diskanalyzer.com/download'});
setApp('rainmeter',   {link:'https://www.rainmeter.net/'});
setApp('spotify',     {link:'https://www.spotify.com/download/windows/'});
setApp('potplayer',   {link:'https://potplayer.tv/'});
setApp('mpv',         {link:'https://mpv.io/installation/'});
setApp('kodi',        {link:'https://kodi.tv/download/windows/'});
setApp('foobar2000',  {link:'https://www.foobar2000.org/download'});
setApp('stremio',     {link:'https://www.stremio.com/downloads'});
setApp('shotcut',     {link:'https://shotcut.org/download/'});
setApp('davinci',     {link:'https://www.blackmagicdesign.com/products/davinciresolve'});
setApp('kdenlive',    {link:'https://kdenlive.org/download/'});
setApp('capcut',      {link:'https://www.capcut.com/tools/desktop-video-editor'});
setApp('sharex',      {link:'https://getsharex.com/downloads'});
setApp('winamp',      {link:'https://www.winamp.com/'});
setApp('plex',        {link:'https://www.plex.tv/media-server-downloads/'});
setApp('bitdefender', {link:'https://www.bitdefender.com/en-us/consumer/free-antivirus'});
setApp('kaspersky',   {link:'https://www.kaspersky.com/free-antivirus'});
setApp('avg',         {link:'https://www.avg.com/free-antivirus-download'});
setApp('avira',       {link:'https://www.avira.com/en/free-antivirus-windows'});
setApp('adwcleaner',  {link:'https://www.malwarebytes.com/adwcleaner'});
setApp('protonvpn',   {link:'https://protonvpn.com/download'});
setApp('windscribe',  {link:'https://windscribe.com/download'});
setApp('keepassxc',   {link:'https://keepassxc.org/download/'});
setApp('veracrypt',   {link:'https://www.veracrypt.fr/en/Downloads.html'});
setApp('krita',       {link:'https://krita.org/en/download/'});
setApp('blender',     {link:'https://www.blender.org/download/'});
setApp('paintnet',    {link:'https://www.getpaint.net/download.html'});
setApp('figma',       {link:'https://www.figma.com/downloads/'});
setApp('affinity',    {link:'https://www.affinity.studio/'});
setApp('lunacy',      {link:'https://icons8.com/lunacy'});
setApp('medibang',    {link:'https://medibangpaint.com/en/pc/'});
setApp('freecad',     {link:'https://www.freecad.org/downloads.php'});
setApp('python',      {link:'https://www.python.org/downloads/'});
setApp('visualstudio',{link:'https://visualstudio.microsoft.com/vs/community/'});
setApp('intellij',    {link:'https://www.jetbrains.com/idea/download/'});
setApp('sublime',     {link:'https://www.sublimetext.com/download'});
setApp('notepadpp',   {link:'https://notepad-plus-plus.org/downloads/'});
setApp('githubdesktop',{link:'https://desktop.github.com/download/'});
setApp('docker',      {link:'https://www.docker.com/products/docker-desktop/'});
setApp('xampp',       {link:'https://www.apachefriends.org/download.html'});
setApp('androidstudio',{link:'https://developer.android.com/studio'});
setApp('unity',       {link:'https://unity.com/download'});
setApp('godot',       {link:'https://godotengine.org/download/windows/'});
setApp('unreal',      {link:'https://www.unrealengine.com/download'});
setApp('filezilla',   {link:'https://filezilla-project.org/download.php?type=client'});
setApp('teams',       {link:'https://www.microsoft.com/microsoft-teams/download-app'});
setApp('slack',       {link:'https://slack.com/downloads/windows'});
setApp('signal',      {link:'https://signal.org/download/windows/'});
setApp('viber',       {link:'https://www.viber.com/download/'});
setApp('thunderbird', {link:'https://www.thunderbird.net/download/'});
setApp('teamspeak',   {link:'https://www.teamspeak.com/en/downloads/'});
setApp('steam',       {link:'https://store.steampowered.com/about/'});
setApp('epic',        {link:'https://store.epicgames.com/download'});
setApp('gog',         {link:'https://www.gog.com/galaxy'});
setApp('eaapp',       {link:'https://www.ea.com/ea-app'});
setApp('ubisoft',     {link:'https://ubisoftconnect.com/'});
setApp('battlenet',   {link:'https://download.battle.net/'});
setApp('xbox',        {link:'https://www.xbox.com/apps/xbox-app-for-pc'});
setApp('retroarch',   {link:'https://www.retroarch.com/?page=platforms'});
setApp('pcsx2',       {link:'https://pcsx2.net/downloads'});
setApp('ppsspp',      {link:'https://www.ppsspp.org/download/'});
setApp('rpcs3',       {link:'https://rpcs3.net/download'});
setApp('nvidiaapp',   {link:'https://www.nvidia.com/en-us/software/nvidia-app/'});
setApp('amdadrenalin',{link:'https://www.amd.com/en/support/download/drivers.html'});
setApp('directx',     {link:'https://www.microsoft.com/download/details.aspx?id=35'});
setApp('vcredist',    {link:'https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist'});
setApp('curseforge',  {link:'https://www.curseforge.com/download/app'});
setApp('libreoffice', {link:'https://www.libreoffice.org/download/download-libreoffice/'});
setApp('onlyoffice',  {link:'https://www.onlyoffice.com/download-desktop.aspx'});
setApp('wps',         {link:'https://www.wps.com/download/'});
setApp('acrobat',     {link:'https://get.adobe.com/reader/'});
setApp('sumatra',     {link:'https://www.sumatrapdfreader.org/download-free-pdf-viewer'});
setApp('notion',      {link:'https://www.notion.com/desktop'});
setApp('obsidian',    {link:'https://obsidian.md/download'});
setApp('calibre',     {link:'https://calibre-ebook.com/download_windows'});
setApp('dropbox',     {link:'https://www.dropbox.com/install'});
setApp('googledrive', {link:'https://www.google.com/drive/download/'});
setApp('anki',        {link:'https://apps.ankiweb.net/'});
setApp('evernote',    {link:'https://evernote.com/download'});

/* ── STATE ── */
let currentUser=null, currentFilter='todos', lbImages=[], lbIndex=0;
let homePage=1, appsPage=1, topPage=1, currentAppsFilter='todos', topMode='juegos';
let currentTier='todos', currentSort='def', appsSort='def';   // filtros extra del catálogo
/* Juegos del carrusel del Inicio (en este orden). Cambiá los ids cuando quieras. */
const DESTACADOS=['rdr2','gta5','eldenring','re4r','witcher3'];
const PER_PAGE=12, TOP_PER_PAGE=15;
/* Tarjetas por página = siempre filas completas (antes eran 12 fijas y con 5
   columnas quedaba una fila a medias). Cuenta cuántas columnas entran igual que
   el CSS (.games-grid: tarjetas de mínimo 230px) y arma ~PER_PAGE en filas llenas. */
function gridCols(){
  const w=document.documentElement.clientWidth, m=matchMedia('(max-width:768px)').matches?32:80; // márgenes de .games-grid
  return Math.max(1,Math.floor((w-m+1.5)/231.5));
}
function perPage(){const c=gridCols();return c*Math.max(2,Math.ceil(PER_PAGE/c));}
let gridPP=0; // tarjetas por página con las que se dibujó la última vez
// Rating original de cada juego/app (para volver a él si se quitan todos los votos)
GAMES.forEach(g=>g.baseRating=g.rating); APPS.forEach(a=>a.baseRating=a.rating);

/* ════════════════════════════════════════════════════
   IDIOMA (Español / English)
   · Los textos fijos del HTML tienen data-i18n="clave": el español
     queda escrito en el HTML y el inglés sale de I18N.en.
   · Los textos que arma el JS usan t('clave') con I18N.es / I18N.en.
   · Juegos y apps: desc/cardDesc (español) y descEn/cardDescEn (inglés).
     Si falta el inglés se muestra el español.
════════════════════════════════════════════════════ */
let LANG=(()=>{try{const s=localStorage.getItem('vz_lang');if(s==='es'||s==='en')return s;}catch{}return /^en/i.test(navigator.language||'')?'en':'es';})();
const I18N={
  es:{
    'doc.title':'Visión Z — Descargas de Juegos y Aplicaciones para PC','doc.item':'{t} — Descargar gratis | Visión Z',
    'auth.login':'Ingresar','auth.register':'Registrarse',
    'g.todos':'Todos los juegos','g.accion':'Acción','g.fps':'FPS','g.rpg':'RPG','g.aventura':'Aventura','g.conducción':'Conducción','g.estrategia':'Estrategia','g.pelea':'Pelea','g.terror':'Terror','g.deportes':'Deportes','g.sandbox':'Sandbox',
    'apps.all':'Todas las aplicaciones',
    'grid.empty':'Sin resultados','grid.emptyG':'No encontramos juegos con ese filtro.','grid.emptyA':'No hay aplicaciones en esta categoría.',
    'badge.new':'Nuevo','badge.hot':'Popular','cta.game':'Ver juego →','cta.app':'Ver app →',
    'pag.prev':'‹ Anterior','pag.next':'Siguiente ›','pag.info':'Mostrando {a}–{b} de {n} {what}','pag.juegos':'juegos','pag.apps':'apps',
    'top.dl1':'descarga','top.dlN':'descargas','nov.new':'Nuevo','nov.feat':'Destacado',
    'd.backGames':'← Juegos','d.backApps':'← Aplicaciones','d.reqsMin':'Requisitos mínimos','d.reqs':'Requisitos','d.boxGame':'Descargar juego','d.boxApp':'Descargar aplicación',
    'i.version':'Versión','i.size':'Tamaño','i.lang':'Idioma','i.platform':'Plataforma','i.license':'Licencia',
    'd.dlFree':'↓ Descargar gratis','d.soon':'⏳ Próximamente','d.as':'Como:','d.noReg':'✓ Descarga gratuita · Sin registro','d.prep':'Link de descarga en preparación',
    'd.related':'Juegos relacionados','d.relatedApps':'Apps relacionadas',
    'lv.bajo':'Requisitos bajos','lv.medio':'Requisitos medios','lv.alto':'Requisitos altos',
    'sh.hot':'Populares','sh.hotSub':'Los que más se están jugando','sh.bajoSub':'Para PCs de bajos recursos (2 GB de RAM o menos)',
    'sh.medioSub':'Para PCs intermedias (de 3 a 6 GB de RAM)','sh.altoSub':'Para PC gamer (8 GB de RAM o más)',
    'sh.new':'Nuevos','sh.newSub':'Lo último que agregamos','sh.apps':'Apps esenciales','sh.appsSub':'Los programas que no pueden faltar en tu PC','sh.all':'Ver todos →',
    'hs.view':'Ver juego →',
    'sr.count1':'1 resultado','sr.countN':'{n} resultados','sr.games':'Juegos ({n})','sr.apps':'Aplicaciones ({n})','sr.all':'Ver todos los resultados ({n}) →',
    'r.none':'Sin calificaciones aún','r.count1':'{n} calificación','r.countN':'{n} calificaciones','r.login':'Iniciá sesión para calificar','r.yours':'Tu calificación:','r.remove':'✕ quitar',
    'r.rateGame':'Calificá este juego:','r.rateApp':'Calificá esta app:','r.thanks':'¡Gracias por calificar! ⭐','r.removed':'Calificación removida.',
    's.game':'Juego','s.app':'App','s.none':'Sin resultados para',
    'e.email':'Email inválido.','e.pass':'Ingresá tu contraseña.','e.user':'De 3 a 20 caracteres: letras, números, _ . -','e.pass6':'Mínimo 6 caracteres.','e.match':'Las contraseñas no coinciden.',
    'e.noServer':'Sin conexión con el servidor. Probá recargar la página.','e.resetEmail':'Escribí tu email acá y tocá de nuevo.','e.taken':'Ese usuario ya está en uso.','e.regFail':'No se pudo crear la cuenta. Probá con otro nombre de usuario.',
    'a.inUse':'Ya existe una cuenta con ese email.','a.weak':'La contraseña es muy débil (mínimo 6 caracteres).','a.notFound':'No existe cuenta con ese email.','a.wrong':'Contraseña incorrecta.',
    'a.cred':'Email o contraseña incorrectos.','a.many':'Demasiados intentos. Esperá unos minutos.','a.net':'Sin conexión. Revisá tu internet.','a.generic':'Ocurrió un error. Probá de nuevo.',
    'm.resetSent':'Te mandamos un email para cambiar la contraseña 📧','m.created':'¡Cuenta creada!','m.welcome':'¡Bienvenido/a, {n}! 🎮','m.welcomeSub':'Bienvenido/a, {n} 🎮','m.bye':'Hasta luego, {n}! 👋',
    'pf.since':'Miembro desde {d}','pf.big':'La imagen debe ser menor a 2MB.','pf.photoOk':'Foto actualizada ✅','pf.photoErr':'No se pudo leer la imagen.','pf.saved':'Perfil actualizado ✅',
    'dl.emptyT':'Todavía no descargaste nada','dl.emptyP':'Explorá el catálogo y empezá a descargar tus juegos favoritos.','dl.on':'Descargado el {d}','dl.again':'↓ Descargar de nuevo',
    'ad.only':'Solo los administradores pueden ver esta lista.','ad.loading':'Cargando...','ad.loadFail':'No se pudo cargar la lista. Revisá las reglas de Firestore.','ad.noUsers':'No hay usuarios.',
    'ad.admin':'Admin','ad.user':'Usuario','ad.delete':'Eliminar','ad.view':'Ver','ad.confirmDel':'¿Eliminar el perfil de este usuario?',
    'ad.deleted':'Perfil eliminado. Para borrar también su login, hacelo desde Firebase → Authentication.','ad.delFail':'No se pudo eliminar.',
    'ad.fill':'Completá título, desarrolladora y descripción.','ad.added':'"{t}" agregado ✅','ad.addFail':'No se pudo guardar el juego. Revisá las reglas de Firestore.',
    'ad.noReports':'No hay links caídos reportados. 🎉','ad.resolve':'✓ Resuelto','ad.resolved':'Reportes marcados como resueltos.',
    'ad.noCustom':'Todavía no agregaste juegos desde el panel.','ad.confirmDelGame':'¿Eliminar "{t}" del catálogo?','ad.gameDeleted':'Juego eliminado del catálogo.',
    'com.ph':'Escribí un comentario...','com.send':'Publicar','com.report':'⚠ Reportar link caído','com.loginMsg':'Iniciá sesión para comentar o reportar un link caído.',
    'com.empty':'Todavía no hay comentarios. ¡Sé el primero en comentar!','com.loading':'Cargando comentarios...','com.loadFail':'No se pudieron cargar los comentarios.',
    'com.offline':'Los comentarios no están disponibles sin conexión.','com.short':'El comentario es muy corto.','com.wait':'Esperá unos segundos antes de volver a comentar.',
    'com.posted':'Comentario publicado 💬','com.fail':'No se pudo publicar el comentario.','com.del':'Eliminar','com.confirmDel':'¿Eliminar este comentario?','com.deleted':'Comentario eliminado.',
    'com.tagReport':'⚠ Link caído','com.tagAdmin':'Admin',
    'rep.default':'Reporté que el link de descarga no funciona.','rep.already':'Ya reportaste este link. ¡Gracias! Lo vamos a revisar.','rep.thanks':'¡Gracias por avisar! Vamos a revisar el link. 🔧',
    'rep.fail':'No se pudo enviar el reporte.','rep.confirm':'¿Confirmás que el link de descarga de "{t}" no funciona?','rep.soon':'Este juego todavía no tiene link de descarga.',
  },
  en:{
    /* Textos fijos del HTML (data-i18n) */
    'search.ph':'Search games and apps...','nav.home':'Home','nav.games':'Games','nav.apps':'Apps','nav.top':'Most Downloaded','nav.new':"What's New",
    'ud.profile':'👤 My profile','ud.downloads':'📥 My downloads','ud.admin':'⚙️ Admin panel','ud.logout':'🚪 Log out',
    'home.eyebrow':'Your free download site','home.tagline':'The best classic games, ready to download.',
    'stat.games':'Games','stat.apps':'Apps','stat.users':'Users','stat.free':'Free','filter.genre':'Genre:','home.top':'Most downloaded',
    'nov.eyebrow':'Latest additions','nov.h1':'WHAT\'S <span class="z">NEW</span>','nov.tagline':'Latest additions and updates to the catalog.',
    'nov.title':'🔥 Highlights of <span id="novMes">this month</span>','nov.all':'All new games',
    'top.eyebrow':'Ranking','top.h1':'MOST <span class="z">DOWNLOADED</span>','top.tagline':'From most to least downloaded.','top.show':'Show:','top.games':'Games','top.apps':'Apps',
    'apps.eyebrow':'Software for your PC','apps.h1':'APPLICA<span class="z">TIONS</span>','apps.tagline':'Essential programs, free and ready to install.','apps.cat':'Category:',
    'c.todos':'All','c.navegadores':'Browsers','c.utilidades':'Utilities','c.multimedia':'Multimedia','c.seguridad':'Security','c.diseno':'Design','c.desarrollo':'Development','c.comunicacion':'Communication','c.gaming':'Gaming','c.oficina':'Office',
    'g.all':'All','d.desc':'Description','d.rating':'User rating','d.ss':'Screenshots','d.comments':'Comments','d.reportLink':'⚠ Broken link? Report it',
    'admin.title':'Admin <span>Panel</span>','admin.sub':'Manage Visión Z users, games and content',
    'admin.statGames':'Published games','admin.statUsers':'Registered users','admin.statAdmins':'Admins','admin.statReports':'Broken link reports',
    'admin.users':'Registered users','admin.reports':'Reported broken links','admin.custom':'Games added from the panel','admin.add':'Add new game',
    'th.user':'User','th.email':'Email','th.joined':'Joined','th.role':'Role','th.actions':'Actions','th.item':'Game / App','th.reports':'Reports','th.detail':'Reported by','th.last':'Last report','th.game':'Game','th.genre':'Genre','th.link':'Link',
    'admin.success':'✅ Game added to the catalog.',
    'af.title':'Game title','af.dev':'Developer','af.year':'Year','af.genre':'Genre','af.version':'Version','af.size':'Size','af.rating':'Rating (0-10)','af.link':'Download link',
    'af.img':'Cover (image URL)','af.ss':'Screenshots (one URL per line, up to 3)','af.cardesc':'Short description (card)','af.desc':'Full description',
    'af.cardescEn':'Short description in English (optional)','af.descEn':'Full description in English (optional)','af.addBtn':'+ Add game to catalog','af.clear':'Clear',
    'af.ph.title':'E.g.: Half-Life 2','af.ph.dev':'E.g.: Valve','af.ph.version':'E.g.: 1.0 Original','af.ph.size':'E.g.: 4.7 GB','af.ph.cardesc':'E.g.: Epic open world...','af.ph.desc':'Detailed description...',
    'pf.dl':'Downloads','pf.rated':'Rated games','pf.member':'Member since','pf.edit':'Edit profile','pf.name':'Username','pf.loc':'Country / City','pf.bio':'Bio',
    'pf.ph.name':'Your username','pf.ph.loc':'E.g.: Buenos Aires, AR','pf.ph.bio':'Tell us about yourself...','pf.save':'Save changes',
    'dl.title':'My <span>Downloads</span>','dl.sub':'History of everything you have downloaded.',
    'ft.contact':'Contact','ft.privacy':'Privacy','ft.rights':'© <span class="footer-year"></span> Visión Z · All rights reserved',
    'ct.title':'Con<span>tact</span>','ct.sub':'Got a question, a suggestion or want to request a game? Write to us and we will get back to you.',
    'ct.links':'<h3>Is a link not working?</h3><p>Use the <strong>“⚠ Report broken link”</strong> button on the game or app page: it is the fastest way to get it fixed.</p>',
    'ct.owner':'<h3>Do you own any of this content?</h3><p>If we published something of yours and you want it removed, email us at the same address with the link and we will review it.</p>',
    'pv.title':'Priva<span>cy</span>','pv.updated':'Last updated: October 2026',
    'pv.body':`<h3>What data we store</h3>
      <ul>
        <li><strong>If you sign up:</strong> your email, username and password. The password is handled by Firebase (Google) and we never see it.</li>
        <li><strong>Your profile:</strong> the name, country/city, bio and photo you choose to add.</li>
        <li><strong>Your activity:</strong> download history, star ratings, comments and broken link reports.</li>
        <li><strong>In your browser:</strong> your chosen language and a view counter for each game. This stays on your device only.</li>
      </ul>
      <h3>What is public</h3>
      <p>Your comments (with your username, small photo and date) can be seen by any visitor. The rest of your profile, your email and your history can only be seen by you and the site administrators.</p>
      <h3>Third-party services</h3>
      <p>We use Firebase (Google) for accounts and the database, and Google Fonts for typography. Images are loaded from Steam, jsDelivr and Google, so those services receive technical data such as your IP address. Download links take you to external sites (link shorteners and file hosts) that have their own policies and may show ads or use cookies.</p>
      <h3>Cookies</h3>
      <p>Visión Z does not use its own advertising cookies. To keep you signed in, Firebase stores data in your browser's storage.</p>
      <h3>Your rights</h3>
      <p>You can edit your profile at any time and delete your comments. If you want us to delete your account and all your data, email us at <a class="contact-mail-txt" href="#"></a>.</p>`,
    'm.tabLogin':'Log in','m.tabRegister':'Sign up','m.email':'Email','m.pass':'Password','m.forgot':'Forgot your password?','m.loginBtn':'Log in',
    'm.noAccount':"Don't have an account?",'m.registerFree':'Sign up for free','m.user':'Username','m.confirm':'Confirm password','m.createBtn':'Create account',
    'm.haveAccount':'Already have an account?','m.signIn':'Log in','m.ph.email':'you@email.com','m.ph.pass6':'At least 6 characters','m.ph.pass2':'Repeat your password',
    /* Textos que arma el JS */
    'doc.title':'Visión Z — Free PC Game and App Downloads','doc.item':'{t} — Free download | Visión Z',
    'auth.login':'Log in','auth.register':'Sign up',
    'g.todos':'All games','g.accion':'Action','g.fps':'FPS','g.rpg':'RPG','g.aventura':'Adventure','g.conducción':'Racing','g.estrategia':'Strategy','g.pelea':'Fighting','g.terror':'Horror','g.deportes':'Sports','g.sandbox':'Sandbox',
    'apps.all':'All apps',
    'grid.empty':'No results','grid.emptyG':"We couldn't find games with that filter.",'grid.emptyA':'There are no apps in this category.',
    'badge.new':'New','badge.hot':'Popular','cta.game':'View game →','cta.app':'View app →',
    'pag.prev':'‹ Previous','pag.next':'Next ›','pag.info':'Showing {a}–{b} of {n} {what}','pag.juegos':'games','pag.apps':'apps',
    'top.dl1':'download','top.dlN':'downloads','nov.new':'New','nov.feat':'Featured',
    'd.backGames':'← Games','d.backApps':'← Apps','d.reqsMin':'Minimum requirements','d.reqs':'Requirements','d.boxGame':'Download game','d.boxApp':'Download app',
    'i.version':'Version','i.size':'Size','i.lang':'Language','i.platform':'Platform','i.license':'License',
    'd.dlFree':'↓ Free download','d.soon':'⏳ Coming soon','d.as':'As:','d.noReg':'✓ Free download · No sign-up','d.prep':'Download link coming soon',
    'd.related':'Related games','d.relatedApps':'Related apps',
    'lv.bajo':'Low requirements','lv.medio':'Medium requirements','lv.alto':'High requirements',
    'sh.hot':'Popular','sh.hotSub':'The most played right now','sh.bajoSub':'For low-end PCs (2 GB of RAM or less)',
    'sh.medioSub':'For mid-range PCs (3 to 6 GB of RAM)','sh.altoSub':'For gaming PCs (8 GB of RAM or more)',
    'sh.new':'New','sh.newSub':'The latest we added','sh.apps':'Essential apps','sh.appsSub':'The programs every PC needs','sh.all':'View all →',
    'hs.view':'View game →',
    'sr.count1':'1 result','sr.countN':'{n} results','sr.games':'Games ({n})','sr.apps':'Apps ({n})','sr.all':'View all results ({n}) →',
    /* (HTML) */
    'games.eyebrow':'Full catalog','games.h1':'GA<span class="z">MES</span>','games.tagline':'Every game, with genre and requirement filters.',
    'filter.tier':'Requirements:','lv.bajoBtn':'💻 Low','lv.medioBtn':'⚙️ Medium','lv.altoBtn':'🚀 High',
    'sort.label':'Sort:','sort.def':'Featured','sort.rating':'Top rated','sort.new':'Newest','sort.az':'A - Z','sort.dl':'Most downloaded',
    'sr.eyebrow':'Search results','sr.noneT':'No results','sr.none':"We couldn't find games or apps for that search. Try another word.",
    'd.trailer':'Trailer','af.tier':'Requirements','af.tierAuto':'Automatic (based on RAM)','d.update':'⟳ Download Update',
    'r.none':'No ratings yet','r.count1':'{n} rating','r.countN':'{n} ratings','r.login':'Log in to rate','r.yours':'Your rating:','r.remove':'✕ remove',
    'r.rateGame':'Rate this game:','r.rateApp':'Rate this app:','r.thanks':'Thanks for rating! ⭐','r.removed':'Rating removed.',
    's.game':'Game','s.app':'App','s.none':'No results for',
    'e.email':'Invalid email.','e.pass':'Enter your password.','e.user':'3 to 20 characters: letters, numbers, _ . -','e.pass6':'At least 6 characters.','e.match':"Passwords don't match.",
    'e.noServer':'No connection to the server. Try reloading the page.','e.resetEmail':'Type your email here and tap again.','e.taken':'That username is already taken.','e.regFail':"Couldn't create the account. Try a different username.",
    'a.inUse':'An account with that email already exists.','a.weak':'The password is too weak (at least 6 characters).','a.notFound':'No account found with that email.','a.wrong':'Wrong password.',
    'a.cred':'Wrong email or password.','a.many':'Too many attempts. Wait a few minutes.','a.net':'No connection. Check your internet.','a.generic':'Something went wrong. Try again.',
    'm.resetSent':'We sent you an email to reset your password 📧','m.created':'Account created!','m.welcome':'Welcome, {n}! 🎮','m.welcomeSub':'Welcome, {n} 🎮','m.bye':'See you soon, {n}! 👋',
    'pf.since':'Member since {d}','pf.big':'The image must be under 2MB.','pf.photoOk':'Photo updated ✅','pf.photoErr':"Couldn't read the image.",'pf.saved':'Profile updated ✅',
    'dl.emptyT':"You haven't downloaded anything yet",'dl.emptyP':'Browse the catalog and start downloading your favorite games.','dl.on':'Downloaded on {d}','dl.again':'↓ Download again',
    'ad.only':'Only admins can see this list.','ad.loading':'Loading...','ad.loadFail':"Couldn't load the list. Check the Firestore rules.",'ad.noUsers':'No users.',
    'ad.admin':'Admin','ad.user':'User','ad.delete':'Delete','ad.view':'View','ad.confirmDel':"Delete this user's profile?",
    'ad.deleted':'Profile deleted. To also remove their login, do it from Firebase → Authentication.','ad.delFail':"Couldn't delete.",
    'ad.fill':'Fill in the title, developer and description.','ad.added':'"{t}" added ✅','ad.addFail':"Couldn't save the game. Check the Firestore rules.",
    'ad.noReports':'No broken links reported. 🎉','ad.resolve':'✓ Resolved','ad.resolved':'Reports marked as resolved.',
    'ad.noCustom':"You haven't added games from the panel yet.",'ad.confirmDelGame':'Remove "{t}" from the catalog?','ad.gameDeleted':'Game removed from the catalog.',
    'com.ph':'Write a comment...','com.send':'Post','com.report':'⚠ Report broken link','com.loginMsg':'Log in to comment or report a broken link.',
    'com.empty':'No comments yet. Be the first to comment!','com.loading':'Loading comments...','com.loadFail':"Couldn't load comments.",
    'com.offline':'Comments are unavailable offline.','com.short':'The comment is too short.','com.wait':'Wait a few seconds before commenting again.',
    'com.posted':'Comment posted 💬','com.fail':"Couldn't post the comment.",'com.del':'Delete','com.confirmDel':'Delete this comment?','com.deleted':'Comment deleted.',
    'com.tagReport':'⚠ Broken link','com.tagAdmin':'Admin',
    'rep.default':'I reported that the download link is not working.','rep.already':'You already reported this link. Thanks! We will check it.','rep.thanks':'Thanks for letting us know! We will check the link. 🔧',
    'rep.fail':"Couldn't send the report.",'rep.confirm':'Confirm that the download link for "{t}" is not working?','rep.soon':"This game doesn't have a download link yet.",
  },
};
// t('clave',{n:3}) → texto en el idioma actual (con {variables})
function t(k,v){
  let s=I18N[LANG][k]; if(s===undefined)s=I18N.es[k]; if(s===undefined)return k;
  return v?s.replace(/\{(\w+)\}/g,(m,x)=>v[x]!==undefined?v[x]:m):s;
}
const LOC=()=>LANG==='en'?'en-US':'es-AR';
const tr=(o,f)=>LANG==='en'&&o[f+'En']?o[f+'En']:o[f];                    // tr(juego,'desc')
const gl=g=>LANG==='en'?(I18N.en['g.'+g.genre]||g.genreLabel):g.genreLabel;   // género
const cl=a=>LANG==='en'?(I18N.en['c.'+a.cat]||a.catLabel):a.catLabel;         // categoría de app
const rl=l=>LANG==='en'?({Disco:'Disk',SO:'OS',Red:'Network',Licencia:'License'}[l]||l):l; // etiqueta de requisito
// Palabras sueltas en versiones/requisitos (ej: 'Completo', 'o superior')
const TV_EN=[[/de espacio disponible/g,'available space'],[/\bo superior\b/g,'or higher'],[/ ó /g,' or '],[/ o /g,' or '],[/Recomendada/g,'Recommended'],
  [/Gratuita|Gratis/g,'Free'],[/Completo/g,'Complete'],[/Edición Temporada/g,'Season Edition'],[/Edición/g,'Edition'],[/Episodios/g,'Episodes'],[/Última/g,'Latest'],[/Español/g,'Spanish']];
const tv=s=>{if(LANG!=='en'||!s)return s;let r=String(s);TV_EN.forEach(([a,b])=>r=r.replace(a,b));return r;};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); // para buscar sin tildes

// Aplica el idioma a todos los textos fijos del HTML
function applyLang(){
  document.documentElement.lang=LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el._es===undefined)el._es=el.innerHTML;          // guarda el español original
    const en=I18N.en[el.dataset.i18n], v=LANG==='en'&&en!==undefined?en:el._es;
    if(el.innerHTML!==v)el.innerHTML=v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    if(el._esPh===undefined)el._esPh=el.placeholder;
    const en=I18N.en[el.dataset.i18nPh];
    el.placeholder=LANG==='en'&&en!==undefined?en:el._esPh;
  });
  document.querySelectorAll('.lang-sw button').forEach(b=>b.classList.toggle('active',b.dataset.lang===LANG));
  updateDynamicDates(); renderContact();
}

/* ── CONTACTO ──
   El mail se arma con JS (separado en dos partes) para que los bots
   que juntan direcciones leyendo el HTML no lo encuentren tan fácil. */
const CONTACT_MAIL=['mtszqlcstll','gmail.com'];
function renderContact(){
  const m=CONTACT_MAIL.join('@');
  const btn=document.getElementById('contactMail'); if(btn){btn.href='mailto:'+m;btn.textContent='✉ '+m;}
  document.querySelectorAll('.contact-mail-txt').forEach(a=>{a.href='mailto:'+m;a.textContent=m;});
}
// Cambia de idioma y vuelve a dibujar lo que está en pantalla
function setLang(l){
  if(l===LANG||!I18N[l])return;
  LANG=l; try{localStorage.setItem('vz_lang',l)}catch{}
  if(FB)auth.languageCode=l;   // emails de Firebase (recuperar contraseña) en el mismo idioma
  const y=window.scrollY;
  applyLang();
  setFilterLabel(); setAppsLabel();
  renderSlider(); renderHome(); renderHomeGrid(); renderNovedades(); renderTopDownloaded(); renderAppsGrid(); renderTopDescargasPage();
  if(currentUser)refreshHeaderAvatar();
  const act=document.querySelector('.page.active'), p=act?act.id.slice(5):'home';
  if(p==='perfil')renderPerfil();
  if(p==='descargas')renderDescargas();
  if(p==='admin')renderAdmin();
  if(p==='buscar'&&window._searchQ)showSearchInternal(window._searchQ);
  if(p==='game'&&window._detail){
    if(window._detail.type==='app')showAppInternal(window._detail.id,true); else showGameInternal(window._detail.id,true);
  } else document.title=t('doc.title');
  if(document.getElementById('searchDD').classList.contains('open'))onSearch();
  window.scrollTo(0,y);
}

/* ════════════════════════════════════════════════════
   FIREBASE — base de datos compartida (plan gratis Spark)
   · stats/downloads → contador de descargas de todos
   · stats/ratings   → estrellas de todos
   · stats/meta      → cantidad de usuarios
   · users/{uid}     → perfil, historial y votos de cada usuario
   · usernames/{n}   → reserva de nombres de usuario
   Si Firebase no carga, la página sigue funcionando igual
   (solo sin login ni contadores).
════════════════════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "AIzaSyCKXkkQGGeTe10pAcmvvw9HBRK32v8xy1w",
  authDomain: "vision-z-5594b.firebaseapp.com",
  projectId: "vision-z-5594b",
  storageBucket: "vision-z-5594b.firebasestorage.app",
  messagingSenderId: "93493857331",
  appId: "1:93493857331:web:de2884380b0829ed76e746"
};
/* App Check (frena bots que usen tu base de datos por fuera de la página).
   Pegá entre las comillas la clave de Fraud Defense (antes reCAPTCHA Enterprise).
   La sacás de Google Cloud → Seguridad → Fraud Defense → Claves. Vacío = desactivado. */
const APPCHECK_SITE_KEY='6Le-reotAAAAAENx8aKvLCtuFMMLFm_MKFbQXFd5'.trim();
let FB=false, auth=null, db=null;
try{
  if(typeof firebase!=='undefined'){
    firebase.initializeApp(firebaseConfig);
    // En tu PC (localhost) no se activa: ahí el "modo depuración" de App Check bloquea
    // Firebase hasta registrar un token de prueba. En la página publicada sí se activa.
    const isLocal=['localhost','127.0.0.1'].includes(location.hostname);
    if(APPCHECK_SITE_KEY&&firebase.appCheck&&!isLocal){
      firebase.appCheck().activate(new firebase.appCheck.ReCaptchaEnterpriseProvider(APPCHECK_SITE_KEY),true);
    }
    auth=firebase.auth(); auth.languageCode=LANG;
    db=firebase.firestore(); FB=true;
  }
}catch(e){console.warn('Firebase no disponible:',e.message);}
const INC=n=>firebase.firestore.FieldValue.increment(n);
const fbWarn=e=>console.warn('Firebase:',e&&e.message);

/* Datos cargados de Firebase (se guardan en memoria) */
let DL_CACHE={}, RT_CACHE={}, USER_DOC=null, USERS_COUNT=0, registering=false, pendingWelcome=false;

async function loadStats(){
  if(!FB)return;
  try{
    const [d,r,m]=await Promise.all(['downloads','ratings','meta'].map(n=>db.collection('stats').doc(n).get()));
    DL_CACHE=d.exists?d.data():{}; delete DL_CACHE.last;
    RT_CACHE=r.exists?r.data():{}; delete RT_CACHE.last;
    USERS_COUNT=m.exists?(m.data().users||0):0;
  }catch(e){fbWarn(e);}
}
/* Juegos agregados desde el Panel Admin (colección 'catalog').
   Antes se agregaban solo en memoria y se perdían al recargar la página. */
function prepCustomGame(g){
  g.custom=true; g.screenshots=(g.screenshots||[]).concat(['','','']).slice(0,3);
  g.reqs=g.reqs||[]; g.baseRating=g.rating; return g;
}
async function loadCatalog(){
  if(!FB)return;
  try{
    const snap=await db.collection('catalog').get();
    snap.docs.forEach(d=>{if(!GAMES.find(x=>x.id===d.id))GAMES.push(prepCustomGame({...d.data(),id:d.id}));});
  }catch(e){fbWarn(e);}
}

/* ── STORAGE HELPERS (ahora leen de Firebase) ── */
const getSession =()=>null;
const saveSession=()=>{};
const clearSess  =()=>{if(FB)auth.signOut();USER_DOC=null;};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ── STATS ── */
const getViews    =()=>{try{return JSON.parse(localStorage.getItem('vz_views')||'{}')}catch{return{}}};
const saveViews   =v=>{try{localStorage.setItem('vz_views',JSON.stringify(v))}catch{}};
const getDownloads=()=>DL_CACHE;
const getRatings  =()=>Object.fromEntries(Object.entries(RT_CACHE).map(([k,v])=>[k,{sum:v.s||0,count:v.c||0}]));
const getUserRatings=()=>{
  const o={}, v=(USER_DOC&&USER_DOC.votes)||{};
  if(currentUser)for(const k in v)o[currentUser.id+'_'+k]=v[k];
  return o;
};
const getProfile  =()=>USER_DOC||{};
function saveProfile2(uid,p){
  USER_DOC={...(USER_DOC||{}),...p};
  if(FB&&currentUser)db.collection('users').doc(currentUser.id)
    .update({displayName:p.displayName||'',location:p.location||'',bio:p.bio||'',avatar:p.avatar||''}).catch(fbWarn);
}
const getUserDl   =()=>(USER_DOC&&USER_DOC.dl)||[];
function saveUserDl(uid,d){
  if(USER_DOC)USER_DOC.dl=d;
  if(FB&&currentUser)db.collection('users').doc(currentUser.id).update({dl:d}).catch(fbWarn);
}
/* Guarda un voto: cambia el total de estrellas y el voto del usuario */
function writeRating(key,dSum,dCount,myValue){
  const cur=RT_CACHE[key]||{s:0,c:0};
  RT_CACHE[key]={s:cur.s+dSum,c:cur.c+dCount};
  if(USER_DOC){USER_DOC.votes=USER_DOC.votes||{}; if(myValue)USER_DOC.votes[key]=myValue; else delete USER_DOC.votes[key];}
  if(!FB||!currentUser)return;
  db.collection('stats').doc('ratings').set({[key]:{s:INC(dSum),c:INC(dCount)},last:key},{merge:true}).catch(fbWarn);
  db.collection('users').doc(currentUser.id)
    .update({['votes.'+key]:myValue?myValue:firebase.firestore.FieldValue.delete()}).catch(fbWarn);
}

/* ════════════════════════════════════════════════════
   COMENTARIOS Y REPORTES DE LINKS CAÍDOS (Firebase)
   · comments/{id}/list/{comentario} → comentarios de cada juego/app
   · reports/{id}__{uid}             → reporte de link caído (uno por usuario)
   El {id} es el mismo de las estrellas: 'gta' o 'app_chrome'.
   Solo los usuarios logueados pueden comentar o reportar.
════════════════════════════════════════════════════ */
let COM_CACHE={}, REPORT_GROUPS={}, lastComment=0;
const COM_MAX=500, COM_LIMIT=50;
const comRef=id=>db.collection('comments').doc(id).collection('list');
// Juego o app que se está viendo en el detalle
function curItem(){
  const d=window._detail; if(!d)return null;
  return d.type==='app'?APPS.find(a=>a.id===d.id):GAMES.find(g=>g.id===d.id);
}
// Achica la foto de perfil a 40x40 para guardarla con el comentario (~1-2 KB)
function smallAvatar(src){
  return new Promise(res=>{
    if(!src||!src.startsWith('data:image/'))return res('');
    const im=new Image();
    im.onload=()=>{const c=document.createElement('canvas');c.width=c.height=40;c.getContext('2d').drawImage(im,0,0,40,40);res(c.toDataURL('image/jpeg',.7));};
    im.onerror=()=>res('');
    im.src=src;
  });
}
function avColor(s){let h=0;for(const ch of String(s))h=(h*31+ch.charCodeAt(0))%360;return `hsl(${h},55%,42%)`;}
function avHtml(name,av,uid){
  return av&&av.startsWith('data:image/')
    ?`<div class="com-av"><img src="${esc(av)}" alt=""></div>`
    :`<div class="com-av" style="background:${avColor(uid||name)}">${esc((name||'?').charAt(0).toUpperCase())}</div>`;
}
// "hace 5 minutos" / "5 minutes ago"
function timeAgo(ms){
  const rtf=new Intl.RelativeTimeFormat(LOC(),{numeric:'auto'});
  let v=(ms-Date.now())/1000;
  for(const [n,u] of [[60,'second'],[60,'minute'],[24,'hour'],[30,'day'],[12,'month'],[Infinity,'year']]){
    if(Math.abs(v)<n)return rtf.format(Math.round(v),u);
    v/=n;
  }
}
function renderComForm(){
  const box=document.getElementById('dComForm'); if(!box)return;
  if(!currentUser){
    box.innerHTML=`<div class="com-login"><span>${t('com.loginMsg')}</span><button class="btn-auth btn-login" onclick="openModal('login')">${t('auth.login')}</button><button class="btn-auth btn-register" onclick="openModal('register')">${t('auth.register')}</button></div>`;
    return;
  }
  const prev=(document.getElementById('comText')||{}).value||'';
  box.innerHTML=`<div class="com-form">${avHtml(currentUser.username,getProfile().avatar,currentUser.id)}
    <div class="com-fbody">
      <textarea id="comText" maxlength="${COM_MAX}" placeholder="${t('com.ph')}" oninput="document.getElementById('comChars').textContent=this.value.length+'/${COM_MAX}'">${esc(prev)}</textarea>
      <div class="com-actions">
        <span class="com-chars" id="comChars">${prev.length}/${COM_MAX}</span>
        <button class="com-btn report" onclick="reportLink()">${t('com.report')}</button>
        <button class="com-btn" onclick="postComment()">${t('com.send')}</button>
      </div>
    </div>
  </div>`;
}
function renderComList(id){
  const list=document.getElementById('dComList'), cnt=document.getElementById('dComCount'); if(!list)return;
  const arr=COM_CACHE[id]; cnt.textContent='';
  if(!FB){list.innerHTML=`<p class="com-empty">${t('com.offline')}</p>`;return;}
  if(arr===undefined){list.innerHTML=`<p class="com-empty">${t('com.loading')}</p>`;return;}
  if(arr===null){list.innerHTML=`<p class="com-empty">${t('com.loadFail')}</p>`;return;}
  if(!arr.length){list.innerHTML=`<p class="com-empty">${t('com.empty')}</p>`;return;}
  cnt.textContent=`(${arr.length>=COM_LIMIT?COM_LIMIT+'+':arr.length})`;
  list.innerHTML=arr.map(c=>{
    const canDel=currentUser&&(c.uid===currentUser.id||currentUser.isAdmin);
    return `<div class="com-item${c.report?' report':''}">${avHtml(c.name,c.av,c.uid)}
      <div class="com-body">
        <div class="com-head"><span class="com-name">${esc(c.name)}</span>${c.admin?`<span class="com-tag admin">${t('com.tagAdmin')}</span>`:''}${c.report?`<span class="com-tag">${t('com.tagReport')}</span>`:''}<span class="com-date">${timeAgo(c.created)}</span>${canDel?`<button class="com-del" onclick="deleteComment('${esc(c.id)}')">${t('com.del')}</button>`:''}</div>
        <div class="com-text">${esc(c.text)}</div>
      </div>
    </div>`;
  }).join('');
}
async function loadComments(id){
  if(!FB){renderComList(id);return;}
  try{
    const snap=await comRef(id).orderBy('created','desc').limit(COM_LIMIT).get();
    COM_CACHE[id]=snap.docs.map(d=>{const x=d.data();return {...x,id:d.id,created:x.created&&x.created.toMillis?x.created.toMillis():Date.now()};});
  }catch(e){fbWarn(e);if(COM_CACHE[id]===undefined)COM_CACHE[id]=null;}
  if(window._ratingId===id)renderComList(id);
}
async function comData(text,report){
  return {uid:currentUser.id,name:currentUser.username,admin:currentUser.isAdmin===true,
    av:await smallAvatar(getProfile().avatar),text:text.slice(0,COM_MAX),report,
    created:firebase.firestore.FieldValue.serverTimestamp()};
}
function clearComText(){const ta=document.getElementById('comText');if(ta){ta.value='';document.getElementById('comChars').textContent='0/'+COM_MAX;}}
async function postComment(){
  if(!currentUser){openModal('login');return;}
  const id=window._ratingId, text=((document.getElementById('comText')||{}).value||'').trim();
  if(text.length<2){toast(t('com.short'),'error');return;}
  if(!FB){toast(t('com.offline'),'error');return;}
  if(Date.now()-lastComment<20000){toast(t('com.wait'),'info');return;}
  lastComment=Date.now();
  try{
    await comRef(id).add(await comData(text,false));
    clearComText(); toast(t('com.posted'),'success'); loadComments(id);
  }catch(e){fbWarn(e);lastComment=0;toast(t('com.fail'),'error');}
}
// Reporte de link caído: queda para el admin y se ve como comentario marcado
async function reportLink(){
  if(!currentUser){openModal('login');return;}
  const it=curItem(), id=window._ratingId; if(!it)return;
  if(isPlaceholderLink(it.link)){toast(t('rep.soon'),'info');return;}
  if(!FB){toast(t('com.offline'),'error');return;}
  if(!confirm(t('rep.confirm',{t:it.title})))return;
  const extra=((document.getElementById('comText')||{}).value||'').trim();
  const ref=db.collection('reports').doc(id+'__'+currentUser.id);
  try{
    if((await ref.get()).exists){toast(t('rep.already'),'info');return;}
    const batch=db.batch();
    batch.set(ref,{item:id,title:it.title,uid:currentUser.id,name:currentUser.username,text:extra.slice(0,300),created:firebase.firestore.FieldValue.serverTimestamp()});
    batch.set(comRef(id).doc(),await comData(extra||t('rep.default'),true));
    await batch.commit();
    clearComText(); toast(t('rep.thanks'),'success'); loadComments(id);
  }catch(e){fbWarn(e);toast(t('rep.fail'),'error');}
}
async function deleteComment(cid){
  if(!confirm(t('com.confirmDel')))return;
  const id=window._ratingId;
  try{
    await comRef(id).doc(cid).delete();
    COM_CACHE[id]=(COM_CACHE[id]||[]).filter(c=>c.id!==cid);
    renderComList(id); toast(t('com.deleted'),'info');
  }catch(e){fbWarn(e);toast(t('ad.delFail'),'error');}
}

/* ── SESIÓN (Firebase Auth) ── */
async function loadUser(user){
  try{
    const snap=await db.collection('users').doc(user.uid).get();
    USER_DOC=snap.exists?snap.data():{username:user.email.split('@')[0],email:user.email};
  }catch(e){fbWarn(e);USER_DOC={username:user.email.split('@')[0],email:user.email};}
  currentUser={id:user.uid,username:USER_DOC.username,email:user.email,isAdmin:USER_DOC.isAdmin===true};
  refreshHeader(); refreshHeaderAvatar();
  if(pendingWelcome){pendingWelcome=false;toast(t('m.welcome',{n:USER_DOC.displayName||USER_DOC.username}),'success');}
  refreshDetailUser();
  // Si se recargó la página estando en #perfil, #descargas o #admin, vuelve ahí
  const h=location.hash.slice(1), act=document.querySelector('.page.active');
  if(['perfil','descargas','admin'].includes(h)&&act&&act.id!=='page-'+h)goPageInternal(h);
}
// Detalle abierto: actualiza estrellas, nota de descarga y comentarios al entrar/salir de la cuenta
function refreshDetailUser(){
  if(!document.getElementById('page-game').classList.contains('active')||!window._ratingId)return;
  renderStarRating(window._ratingId); renderDlNote(); renderComForm(); renderComList(window._ratingId);
}
function initAuth(){
  if(!FB)return;
  auth.onAuthStateChanged(user=>{
    if(registering)return;
    if(user){loadUser(user);return;}
    currentUser=null; USER_DOC=null;
    document.getElementById('authBtns').classList.remove('hidden');
    document.getElementById('userArea').classList.add('hidden');
    refreshDetailUser();
  });
}
function authErr(e){
  const m={
    'auth/email-already-in-use':'a.inUse',
    'auth/invalid-email':'e.email',
    'auth/weak-password':'a.weak',
    'auth/user-not-found':'a.notFound',
    'auth/wrong-password':'a.wrong',
    'auth/invalid-credential':'a.cred',
    'auth/invalid-login-credentials':'a.cred',
    'auth/too-many-requests':'a.many',
    'auth/network-request-failed':'a.net',
  };
  return t(m[e&&e.code]||'a.generic');
}
async function resetPassword(){
  clearErrs();
  const email=document.getElementById('lEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fErr('lEmail','lEmailErr',t('e.resetEmail'));return;}
  if(!FB){showGErr(t('e.noServer'));return;}
  try{await auth.sendPasswordResetEmail(email);toast(t('m.resetSent'),'success');}
  catch(e){showGErr(authErr(e));}
}

/* ── TRACK VIEW ── */
function trackView(id){
  const v=getViews(); v[id]=(v[id]||0)+1; saveViews(v);
}

/* ── TRACK DOWNLOAD ── */
function trackDownload(game,type='game'){
  const key=type==='app'?'app_'+game.id:game.id;
  DL_CACHE[key]=(DL_CACHE[key]||0)+1;
  if(FB)db.collection('stats').doc('downloads').set({[key]:INC(1),last:key},{merge:true}).catch(fbWarn);
  if(currentUser){
    const hist=getUserDl(currentUser.id);
    hist.unshift({id:game.id,type,title:game.title,img:game.img||'',cov:game.cov,date:new Date().toISOString()});
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

  document.getElementById('dStarAvg').textContent=avg||'—';
  document.getElementById('dStarCount').textContent=
    data.count>0?t(data.count===1?'r.count1':'r.countN',{n:data.count}):t('r.none');

  const disp=document.getElementById('dStarsDisplay');
  disp.innerHTML='';
  for(let i=1;i<=5;i++){
    const s=document.createElement('span');
    s.className='star'+(avg&&i<=Math.round(parseFloat(avg))?' filled':'');
    s.textContent='★';
    disp.appendChild(s);
  }

  const yr=document.getElementById('dYourRating');
  const rp=document.getElementById('dRatePrompt');
  if(!currentUser){
    yr.innerHTML='';
    rp.innerHTML=`<button onclick="openModal('login')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;font-family:'Barlow',sans-serif;padding:0">${t('r.login')}</button>`;
  } else if(myRating>0){
    yr.innerHTML=`${t('r.yours')} <span>${'★'.repeat(myRating)}${'☆'.repeat(5-myRating)}</span>
      <button onclick="clearMyRating('${gameId}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:.7rem;margin-left:.5rem;font-family:'Barlow',sans-serif">${t('r.remove')}</button>`;
    rp.innerHTML='';
  } else {
    yr.innerHTML=t(gameId.startsWith('app_')?'r.rateApp':'r.rateGame');
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

  if(prev>0){data.sum-=prev;data.count--;}
  data.sum+=value; data.count++;
  userRatings[key]=value;

  writeRating(gameId,value-prev,prev>0?0:1,value);
  renderStarRating(gameId);
  refreshAfterRating(gameId,data);
  toast(t('r.thanks'),'success');
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
  writeRating(gameId,-prev,-1,0);
  renderStarRating(gameId);
  refreshAfterRating(gameId,data);
  toast(t('r.removed'),'info');
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
      <div class="top-thumb ${g.cov}">${g.img?`<img src="${g.img}" alt="${esc(g.title)}" loading="lazy" onerror="this.remove()">`:''}${g.short}</div>
      <div class="top-info">
        <div class="top-name">${g.title}</div>
        <div class="top-meta">${gl(g)} · ${g.year}</div>
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
  const userData=USER_DOC||{};
  const joined=userData.joined?new Date(userData.joined):new Date();

  const ab=document.getElementById('pfAvatarBig');
  if(prof.avatar){ab.innerHTML=`<img src="${prof.avatar}" alt="avatar">`;ab.style.background='none';}
  else{ab.innerHTML=currentUser.username.charAt(0).toUpperCase();ab.style.background='';}

  document.getElementById('pfUsername').textContent=prof.displayName||currentUser.username;
  document.getElementById('pfSince').textContent=t('pf.since',{d:joined.toLocaleDateString(LOC(),{year:'numeric',month:'long'})});
  document.getElementById('pfName').value=prof.displayName||currentUser.username;
  document.getElementById('pfLocation').value=prof.location||'';
  document.getElementById('pfBio').value=prof.bio||'';

  const hist=getUserDl(currentUser.id);
  const rated=Object.keys(getUserRatings()).filter(k=>k.startsWith(currentUser.id+'_')).length;
  document.getElementById('pfStatDl').textContent=hist.length;
  document.getElementById('pfStatRated').textContent=rated;
  document.getElementById('pfStatMember').textContent=joined.getFullYear();
}

function handleAvatarUpload(e){
  const file=e.target.files[0]; e.target.value=''; if(!file)return;   // value='' → se puede volver a elegir la misma foto
  if(file.size>2*1024*1024){toast(t('pf.big'),'error');return;}
  const reader=new FileReader();
  reader.onload=ev=>{
    // Achica la foto a 160x160 para que entre en la base de datos (queda ~10 KB)
    const im=new Image();
    im.onload=()=>{
      const S=160, c=document.createElement('canvas'); c.width=c.height=S;
      const side=Math.min(im.width,im.height);
      c.getContext('2d').drawImage(im,(im.width-side)/2,(im.height-side)/2,side,side,0,0,S,S);
      const small=c.toDataURL('image/jpeg',.82);
      const prof=getProfile(currentUser.id);
      saveProfile2(currentUser.id,{...prof,avatar:small});
      renderPerfil();
      const ab=document.getElementById('avatarBtn');
      ab.innerHTML=`<img src="${small}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      toast(t('pf.photoOk'),'success');
    };
    im.onerror=()=>toast(t('pf.photoErr'),'error');
    im.src=ev.target.result;
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
  toast(t('pf.saved'),'success');
}

/* ── MIS DESCARGAS ── */
function renderDescargas(){
  if(!currentUser){goPage('home');return;}
  const hist=getUserDl(currentUser.id);
  const cont=document.getElementById('dlHistoryContainer');
  if(!hist.length){
    cont.innerHTML=`<div class="descargas-empty"><h3>${t('dl.emptyT')}</h3><p>${t('dl.emptyP')}</p></div>`;
    return;
  }
  cont.innerHTML='<div class="dl-history">'+hist.map(h=>{
    const isApp=h.type==='app';
    const g=(isApp?APPS:GAMES).find(x=>x.id===h.id);
    const dateStr=new Date(h.date).toLocaleDateString(LOC(),{day:'2-digit',month:'short',year:'numeric'});
    // Usa la imagen actual del juego (la guardada en el historial puede haber dejado de existir)
    const img=(g&&g.img)||h.img;
    const thumbHtml=img
      ?`<img src="${img}" alt="${esc(h.title)}" loading="lazy" onerror="this.remove()">`
      :isApp&&g&&g.icon
      ?`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;${appBg(g)}">${appIconHtml(g,'top-app-icon')}</div>`
      :`<div style="width:100%;height:100%;background:var(--card);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:.65rem;color:rgba(255,255,255,.2)" class="${h.cov||''}">${esc(h.title.substring(0,3).toUpperCase())}</div>`;
    return `<div class="dl-hist-item" onclick="${isApp?'showApp':'showGame'}('${h.id}')">
      <div class="dl-hist-thumb">${thumbHtml}</div>
      <div class="dl-hist-info">
        <div class="dl-hist-name">${esc(h.title)}</div>
        <div class="dl-hist-date">${isApp?'App · ':''}${t('dl.on',{d:dateStr})}</div>
      </div>
      ${g&&!isPlaceholderLink(g.link)?`<a href="${g.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="dl-hist-again">${t('dl.again')}</a>`:''}
    </div>`;
  }).join('')+'</div>';
}

/* ── DYNAMIC DATES ── */
function updateDynamicDates(){
  const now=new Date();
  const m=now.toLocaleDateString(LOC(),{month:'long'});
  const mes=m.charAt(0).toUpperCase()+m.slice(1);
  const anio=now.getFullYear();
  const el=document.getElementById('novMes');
  if(el) el.textContent=`${mes} ${anio}`;
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


/* ════════════════════════════════════════════════════
   EFECTOS VISUALES
   · Si la persona tiene activado "reducir animaciones" en su
     sistema, se desactivan (accesibilidad).
════════════════════════════════════════════════════ */
const reduceMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let revealObs=null;
// Aparecer suave al bajar: a todo lo que tenga class="reveal"
function observeReveal(){
  const els=document.querySelectorAll('.reveal:not(.in)');
  if(!revealObs){els.forEach(el=>el.classList.add('in'));return;}
  els.forEach(el=>revealObs.observe(el));
}
function initEffects(){
  // 1) Secciones que aparecen al bajar + números que cuentan
  if('IntersectionObserver' in window&&!reduceMotion()){
    revealObs=new IntersectionObserver(es=>es.forEach(e=>{
      if(!e.isIntersecting)return;
      e.target.classList.add('in'); revealObs.unobserve(e.target);
      e.target.querySelectorAll('.stat-num[data-n]').forEach(countUp);
    }),{threshold:.12});
  } else document.querySelectorAll('.stat-num[data-n]').forEach(el=>{el.dataset.done='1';setStat(el,el.dataset.n,el.dataset.s);});
  observeReveal();

  // 2) Header que se achica al bajar + botón "volver arriba"
  const hdr=document.querySelector('header'), top=document.getElementById('toTop');
  const onScroll=()=>{const y=window.scrollY;hdr.classList.toggle('scrolled',y>40);top.classList.toggle('show',y>700);};
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // 3) Carrusel: avanza cuando termina la barrita del punto activo, se pausa con el mouse, y se puede deslizar con el dedo
  const sl=document.getElementById('heroSlider');
  document.getElementById('hsDots').addEventListener('animationend',()=>slideTo(hsIndex+1));
  let x0=null;
  sl.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;},{passive:true});
  sl.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>45)slideTo(hsIndex+(dx<0?1:-1));x0=null;},{passive:true});

  // 4) Tarjetas 3D: se inclinan siguiendo el mouse y les pega un brillo (solo con mouse)
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduceMotion()){
    let card=null, raf=0, ev=null;
    const reset=c=>{if(c)c.style.transform='';};
    document.addEventListener('pointermove',e=>{
      ev=e; if(raf)return;
      raf=requestAnimationFrame(()=>{
        raf=0;
        const c=ev.target.closest?ev.target.closest('.game-card'):null;
        if(card&&card!==c)reset(card);
        card=c; if(!c)return;
        const r=c.getBoundingClientRect(), x=(ev.clientX-r.left)/r.width, y=(ev.clientY-r.top)/r.height;
        c.style.transform=`perspective(800px) rotateX(${((.5-y)*9).toFixed(2)}deg) rotateY(${((x-.5)*11).toFixed(2)}deg) scale(1.035)`;
        c.style.setProperty('--mx',(x*100).toFixed(1)+'%'); c.style.setProperty('--my',(y*100).toFixed(1)+'%');
      });
    },{passive:true});
    document.documentElement.addEventListener('mouseleave',()=>{reset(card);card=null;});   // el mouse salió de la ventana
  }
}

/* ── INIT ── */
window.addEventListener('DOMContentLoaded',()=>{
  applyLang(); setFilterLabel(); setAppsLabel();
  initEffects();   // primero, así las filas que se dibujan después ya aparecen con animación
  renderSlider(); renderHome(); renderHomeGrid(); renderNovedades(); updateStats();
  updateDynamicDates();
  renderTopDownloaded();
  initAuth();
  // Trae contadores, estrellas y juegos agregados por el admin, y vuelve a dibujar
  Promise.all([loadStats(),loadCatalog()]).then(()=>{
    applySavedRatings(); renderHome(); renderSlider(); renderHomeGrid(); renderNovedades(); renderTopDownloaded(); updateStats();
    const act=document.querySelector('.page.active');
    if(act&&act.id==='page-topdescargas')renderTopDescargasPage();
    if(act&&act.id==='page-apps')renderAppsGrid();
    if(act&&act.id==='page-game'&&window._ratingId)renderStarRating(window._ratingId);
    if(act&&act.id==='page-admin')renderAdmin();
    // Link directo a un juego agregado desde el panel (recién ahora está cargado)
    const hh=decodeURIComponent(location.hash.slice(1));
    if(hh.startsWith('juego-')&&act&&act.id!=='page-game'&&GAMES.find(g=>g.id===hh.slice(6))){
      history.replaceState({page:'game',id:hh.slice(6)},'',location.href); showGameInternal(hh.slice(6));
    }
  });

  // ══════════════════════════════════════════
  // FIX: Flechita ← → del navegador
  // Registra el estado inicial (home) para que haya algo adónde volver
  history.replaceState({page:'home'}, '', location.href);
  // Links directos: si alguien entra con #juego-gta o #app-chrome (o recarga la página)
  // se abre directamente ese juego/app/sección. Útil para compartir en redes.
  const h=decodeURIComponent(location.hash.slice(1));
  if(h.startsWith('juego-') && GAMES.find(g=>g.id===h.slice(6))){
    history.replaceState({page:'game',id:h.slice(6)},'',location.href); showGameInternal(h.slice(6));
  } else if(h.startsWith('app-') && APPS.find(a=>a.id===h.slice(4))){
    history.replaceState({page:'app',id:h.slice(4)},'',location.href); showAppInternal(h.slice(4));
  } else if(h.startsWith('buscar-') && h.length>7){
    history.replaceState({page:'buscar',q:h.slice(7)},'',location.href); showSearchInternal(h.slice(7));
  } else if(['juegos','novedades','apps','topdescargas','contacto','privacidad'].includes(h)){
    history.replaceState({page:h},'',location.href); goPageInternal(h);
  }
  // Escucha cuando el usuario usa la flechita atrás/adelante
  window.addEventListener('popstate', e=>{
    const state=e.state;
    if(!state){ goPageInternal('home'); return; }
    if(state.page==='game' && state.id) showGameInternal(state.id);
    else if(state.page==='app' && state.id) showAppInternal(state.id);
    else if(state.page==='buscar' && state.q) showSearchInternal(state.q);
    else goPageInternal(state.page||'home');
  });
  // ══════════════════════════════════════════

  // Si cambia el tamaño de la ventana y entran más/menos columnas, rearma las páginas
  // (mantiene a la vista las mismas tarjetas que estabas viendo)
  window.addEventListener('resize',()=>{
    clearTimeout(window._rz);
    window._rz=setTimeout(()=>{
      const pp=perPage(); if(!gridPP||pp===gridPP)return;
      homePage=Math.floor((homePage-1)*gridPP/pp)+1; appsPage=Math.floor((appsPage-1)*gridPP/pp)+1;
      renderHomeGrid(); renderAppsGrid();
    },200);
  });

  document.getElementById('searchInput').addEventListener('input',onSearch);
  document.getElementById('searchInput').addEventListener('keydown',e=>{
    if(e.key==='Escape')closeSearch();
    if(e.key==='Enter')goSearch(e.target.value);   // Enter → página con todos los resultados
  });
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
    else if(e.key==='Escape'&&document.getElementById('authModal').classList.contains('open'))closeModal();
  });
});

function updateStats(){
  setStat(document.getElementById('statUsers'),USERS_COUNT);
  setStat(document.getElementById('statGames'),GAMES.length,'+');
  setStat(document.getElementById('statApps'),APPS.length,'+');
  const a=document.getElementById('aStatUsers'),b=document.getElementById('aStatJuegos'),c=document.getElementById('aStatAdmins');
  if(a)a.textContent=USERS_COUNT; if(b)b.textContent=GAMES.length;
}
/* Números del Inicio: cuentan desde 0 cuando aparecen en pantalla (ver initEffects) */
function setStat(el,n,suffix=''){
  if(!el)return;
  el.dataset.n=n; el.dataset.s=suffix;
  if(el.dataset.done||reduceMotion())el.innerHTML=`${n}${suffix?`<span>${suffix}</span>`:''}`;
}
function countUp(el){
  if(el.dataset.done)return; el.dataset.done='1';
  const t0=performance.now(), dur=1300;
  const step=now=>{
    const p=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-p,3), n=+el.dataset.n||0, s=el.dataset.s||'';   // n y s pueden cambiar mientras cuenta
    el.innerHTML=`${Math.round(n*e)}${s?`<span>${s}</span>`:''}`;
    if(p<1)requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── PAGES ── */
// goPageInternal → solo cambia la vista, SIN tocar el historial
// Usada internamente por goPage y por el listener popstate
function goPageInternal(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+name); if(!pg)return;
  pg.classList.add('active');
  if(name!=='game'){document.title=t('doc.title');document.querySelectorAll('#dTrailer video').forEach(v=>v.pause());} // corta el tráiler al salir
  document.documentElement.scrollTop=0; document.body.scrollTop=0;
  // Botones del nav: 0 Inicio · 1 Juegos · 2 Aplicaciones · 3 Más Descargados · 4 Novedades
  const navBtns=document.querySelectorAll('nav button');
  navBtns.forEach(b=>b.classList.remove('active'));
  const navIdx={home:0,juegos:1,apps:2,topdescargas:3,novedades:4}[name];
  if(navIdx!==undefined&&navBtns[navIdx])navBtns[navIdx].classList.add('active');
  if(name==='apps'){renderAppsGrid();}
  if(name==='topdescargas'){renderTopDescargasPage();}
  if(name==='admin'){renderAdmin();}
  if(name==='perfil'){renderPerfil();}
  if(name==='descargas'){renderDescargas();}
}

// goPage → cambia la vista Y registra en el historial (activa la flechita)
function goPage(name){
  history.pushState({page:name}, '', location.pathname+'#'+name);
  goPageInternal(name);
}

/* ── GRID ── */
function renderGrid(games,containerId='gamesGrid'){
  const grid=document.getElementById(containerId); if(!grid)return;
  grid.innerHTML='';
  if(!games.length){grid.innerHTML=`<div class="no-results"><h3>${t('grid.empty')}</h3><p>${t('grid.emptyG')}</p></div>`;return;}
  games.forEach((g,i)=>grid.appendChild(gameCard(g,i)));
}
// Tarjeta de un juego (la usan la grilla, las filas del Inicio, relacionados y búsqueda)
function gameCard(g,i){
  const d=document.createElement('div');
  d.className='game-card'+(g.img?' skel':''); d.style.animationDelay=`${i*.06}s`;   // skel = brillo de "cargando" hasta que baja la portada
  const badge=g.isNew?`<span class="c-badge new">${t('badge.new')}</span>`:g.hot?`<span class="c-badge hot">${t('badge.hot')}</span>`:`<span class="c-badge">${gl(g)}</span>`;
  const coverHtml=g.img?`<img src="${g.img}" alt="${esc(g.title)}" class="cover-img" loading="lazy" onload="this.parentElement.classList.remove('skel')" onerror="this.parentElement.classList.remove('skel');this.style.display='none';this.nextElementSibling.style.display='flex'">`:'' ;
  d.innerHTML=`${coverHtml}<div class="cover-ph ${g.cov}" style="${g.img?'display:none':''}">${esc(g.short)}</div>${badge}<span class="c-rating">★ ${g.rating}</span><div class="c-title-bar"><h2>${esc(g.title)}</h2><div class="c-yr">${g.year} · ${esc(g.dev)}</div></div><div class="c-hover"><h2>${esc(g.title)}</h2><p>${esc(tr(g,'cardDesc'))}</p><span class="c-cta">${t('cta.game')}</span></div>`;
  d.onclick=()=>showGame(g.id);
  return d;
}

/* ── NIVEL DE REQUISITOS (bajo / medio / alto) ──
   Si el juego tiene nivel:'bajo'|'medio'|'alto' se usa ese; si no, se calcula por la RAM. */
const TIER_ICON={bajo:'💻',medio:'⚙️',alto:'🚀'};
function reqTier(g){
  if(TIER_ICON[g.nivel])return g.nivel;
  const r=(g.reqs||[]).find(x=>x.l==='RAM'), m=r&&String(r.v).match(/([\d.]+)\s*(GB|MB)/i);
  if(!m)return 'medio';
  const gb=m[2].toUpperCase()==='MB'?m[1]/1024:+m[1];
  return gb<=2?'bajo':gb<=6?'medio':'alto';
}
const tierBadge=g=>{const l=reqTier(g);return `<span class="m-badge tier t-${l}">${TIER_ICON[l]} ${t('lv.'+l)}</span>`;};

/* ── ORDENAR (catálogo de juegos y de apps) ── */
function sortList(list,mode,isApp){
  const l=[...list], num=x=>parseFloat(x.rating)||0, dl=x=>DL_CACHE[isApp?'app_'+x.id:x.id]||0;
  if(mode==='rating')l.sort((a,b)=>num(b)-num(a));
  else if(mode==='new')l.sort((a,b)=>(b.year||0)-(a.year||0)||num(b)-num(a));
  else if(mode==='az')l.sort((a,b)=>a.title.localeCompare(b.title,LOC()));
  else if(mode==='dl')l.sort((a,b)=>dl(b)-dl(a)||num(b)-num(a));
  return l;   // 'def' = el orden en que están cargados
}

/* ── FILTER ── */
function setFilter(genre,btn){
  currentFilter=genre;
  document.querySelectorAll('#filterBar .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  else document.querySelectorAll('#filterBar .filter-btn').forEach(b=>{if(b.dataset.genre===genre)b.classList.add('active');});
  setFilterLabel();
  homePage=1;
  renderHomeGrid();
  closeSearch();
}
function setTier(tier,btn){
  currentTier=tier; homePage=1;
  document.querySelectorAll('#tierBar .filter-btn').forEach(b=>b.classList.toggle('active',btn?b===btn:b.dataset.tier===tier));
  setFilterLabel(); renderHomeGrid();
}
function setSort(v){currentSort=v; homePage=1; renderHomeGrid();}
// Título de la grilla según el género y los requisitos elegidos (en el idioma actual)
function setFilterLabel(){
  document.getElementById('gridLabel').textContent=t('g.'+currentFilter)+(currentTier!=='todos'?' · '+t('lv.'+currentTier):'');
}

/* ── BOTÓN "INICIO" (menú, logo y pie): vuelve al principio del Inicio ── */
function goInicio(){goPage('home');}

/* ── BOTÓN "JUEGOS" DEL MENÚ: va al catálogo completo, página 1 y sin filtros ──
   Las filas del Inicio lo llaman con un filtro ya puesto: goJuegos({tier:'bajo'}) */
function goJuegos(o={}){
  currentFilter=o.genre||'todos'; currentTier=o.tier||'todos'; currentSort=o.sort||'def'; homePage=1;
  document.querySelectorAll('#filterBar .filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.genre===currentFilter));
  document.querySelectorAll('#tierBar .filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.tier===currentTier));
  const sg=document.getElementById('sortGames'); if(sg)sg.value=currentSort;
  setFilterLabel(); renderHomeGrid(); closeSearch();
  goPage('juegos');
}

/* ── GRILLA DE JUEGOS (página Juegos) CON PAGINACIÓN ── */
function renderHomeGrid(){
  const list=sortList(GAMES.filter(g=>(currentFilter==='todos'||g.genre===currentFilter)&&(currentTier==='todos'||reqTier(g)===currentTier)),currentSort);
  const pp=gridPP=perPage();
  const pages=Math.max(1,Math.ceil(list.length/pp));
  if(homePage>pages)homePage=pages;
  renderGrid(list.slice((homePage-1)*pp,homePage*pp));
  renderPagination('paginacion',list.length,homePage,pp,'changeHomePage','juegos');
}
function changeHomePage(p){
  homePage=p; renderHomeGrid();
  document.getElementById('gridLabel').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ── PAGINACIÓN GENÉRICA ── */
function renderPagination(containerId,total,page,perPage,fnName,itemName){
  const cont=document.getElementById(containerId); if(!cont)return;
  const pages=Math.ceil(total/perPage);
  if(pages<=1){cont.innerHTML='';return;}
  const nums=[];
  for(let i=1;i<=pages;i++){
    if(i===1||i===pages||Math.abs(i-page)<=1)nums.push(i);
    else if(nums[nums.length-1]!=='…')nums.push('…');
  }
  const from=(page-1)*perPage+1, to=Math.min(page*perPage,total);
  cont.innerHTML=`<div class="pag-wrap">
    <button class="pag-btn" ${page===1?'disabled':''} onclick="${fnName}(${page-1})">${t('pag.prev')}</button>
    <div class="pag-nums">${nums.map(n=>n==='…'?'<span class="pag-dots">…</span>':`<button class="pag-num ${n===page?'active':''}" onclick="${fnName}(${n})">${n}</button>`).join('')}</div>
    <button class="pag-btn" ${page===pages?'disabled':''} onclick="${fnName}(${page+1})">${t('pag.next')}</button>
    <div class="pag-info">${t('pag.info',{a:from,b:to,n:total,what:t('pag.'+itemName)})}</div>
  </div>`;
}

/* ── LINKS PENDIENTES ── */
function isPlaceholderLink(link){return !link||link==='LINK_DEL_JUEGO'||link==='LINK_DE_LA_APP';}

/* ── CALIFICACIONES GUARDADAS ──
   Al cargar la página aplica el promedio de votos guardados
   (antes se perdía al recargar y volvía al rating original).
   Los votos son de 1 a 5 ★ y el rating de las tarjetas es de 0 a 10,
   por eso el promedio se multiplica por 2. Sin votos → rating original. */
const voteRating=(d,base)=>d&&d.count>0?(d.sum/d.count*2).toFixed(1):base;
function applySavedRatings(){
  const r=getRatings();
  GAMES.forEach(g=>g.rating=voteRating(r[g.id],g.baseRating));
  APPS.forEach(a=>a.rating=voteRating(r['app_'+a.id],a.baseRating));
}
function refreshAfterRating(ratingId,data){
  const isApp=ratingId.startsWith('app_');
  const x=isApp?APPS.find(a=>'app_'+a.id===ratingId):GAMES.find(g=>g.id===ratingId);
  if(x){
    x.rating=voteRating(data,x.baseRating);
    const mr=document.querySelector('#dMeta .m-rat'); if(mr)mr.textContent='★ '+x.rating;
  }
  if(isApp)renderAppsGrid(); else renderHomeGrid();
}

/* ═══════════ MÁS DESCARGADOS ═══════════ */
function setTopMode(mode,btn){
  topMode=mode; topPage=1;
  document.querySelectorAll('#page-topdescargas .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderTopDescargasPage();
}
function renderTopDescargasPage(){
  const dl=getDownloads();
  const isApps=topMode==='apps';
  const src=isApps?APPS:GAMES;
  const sorted=src.map(x=>({...x,dlCount:dl[isApps?'app_'+x.id:x.id]||0}))
    .sort((a,b)=>b.dlCount-a.dlCount||parseFloat(b.rating)-parseFloat(a.rating));
  const pages=Math.max(1,Math.ceil(sorted.length/TOP_PER_PAGE));
  if(topPage>pages)topPage=pages;
  const start=(topPage-1)*TOP_PER_PAGE;
  const list=document.getElementById('topFullList'); if(!list)return;
  const rankClass=['gold','silver','bronze'];
  list.innerHTML=sorted.slice(start,start+TOP_PER_PAGE).map((x,i)=>{
    const rank=start+i+1;
    const meta=isApps?`${cl(x)} · ${esc(x.dev)}`:`${gl(x)} · ${x.year}`;
    return `<div class="top-item top-item-lg" onclick="${isApps?'showApp':'showGame'}('${x.id}')">
      <div class="top-rank ${rankClass[rank-1]||''}">${rank}</div>
      <div class="top-thumb ${x.cov}" style="${isApps&&!x.img?appBg(x):''}">${x.img?`<img src="${x.img}" alt="${esc(x.title)}" loading="lazy" onerror="this.remove()">`:(isApps&&x.icon?appIconHtml(x,'top-app-icon'):x.short)}</div>
      <div class="top-info"><div class="top-name">${esc(x.title)}</div><div class="top-meta">${meta}</div></div>
      <div class="top-side"><div class="top-rat">★ ${x.rating}</div><div class="top-dl-count">↓ ${x.dlCount} ${t(x.dlCount===1?'top.dl1':'top.dlN')}</div></div>
    </div>`;
  }).join('');
  renderPagination('paginacion-top',sorted.length,topPage,TOP_PER_PAGE,'changeTopPage',isApps?'apps':'juegos');
}
function changeTopPage(p){topPage=p;renderTopDescargasPage();document.documentElement.scrollTop=0;document.body.scrollTop=0;}

/* ═══════════ APLICACIONES ═══════════ */
function setAppsFilter(cat,btn){
  currentAppsFilter=cat; appsPage=1;
  document.querySelectorAll('#page-apps .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  setAppsLabel();
  renderAppsGrid();
}
function setAppsSort(v){appsSort=v; appsPage=1; renderAppsGrid();}
function setAppsLabel(){
  const c=currentAppsFilter;
  document.getElementById('appsGridLabel').textContent=c==='todos'?t('apps.all'):(LANG==='en'?I18N.en['c.'+c]:APP_CATS[c].label);
}
function renderAppsGrid(){
  const grid=document.getElementById('appsGrid'); if(!grid)return;
  const list=sortList(currentAppsFilter==='todos'?APPS:APPS.filter(a=>a.cat===currentAppsFilter),appsSort,true);
  const pp=gridPP=perPage();
  const pages=Math.max(1,Math.ceil(list.length/pp));
  if(appsPage>pages)appsPage=pages;
  grid.innerHTML='';
  if(!list.length){grid.innerHTML=`<div class="no-results"><h3>${t('grid.empty')}</h3><p>${t('grid.emptyA')}</p></div>`;}
  list.slice((appsPage-1)*pp,appsPage*pp).forEach((a,i)=>grid.appendChild(appCard(a,i)));
  renderPagination('paginacion-apps',list.length,appsPage,pp,'changeAppsPage','apps');
}
// Tarjeta de una app (la usan la grilla de apps y "Apps relacionadas")
function appCard(a,i){
  const d=document.createElement('div');
  d.className='game-card app-card'; d.style.animationDelay=`${i*.05}s`;
  const badge=a.isNew?`<span class="c-badge new">${t('badge.new')}</span>`:a.hot?`<span class="c-badge hot">${t('badge.hot')}</span>`:`<span class="c-badge app">${cl(a)}</span>`;
  const coverHtml=a.img?`<img src="${a.img}" alt="${esc(a.title)}" class="cover-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:'';
  const phInner=a.icon?`${appIconHtml(a)}<span class="app-ph-short">${esc(a.short)}</span>`:esc(a.short);
  d.innerHTML=`${coverHtml}<div class="cover-ph ${a.cov}" style="${a.img?'display:none;':''}${appBg(a)}">${phInner}</div>${badge}<span class="c-rating">★ ${a.rating}</span><div class="c-title-bar"><h2>${esc(a.title)}</h2><div class="c-yr">${cl(a)} · ${esc(a.dev)}</div></div><div class="c-hover"><h2>${esc(a.title)}</h2><p>${esc(tr(a,'cardDesc'))}</p><span class="c-cta app">${t('cta.app')}</span></div>`;
  d.onclick=()=>showApp(a.id);
  return d;
}
function changeAppsPage(p){
  appsPage=p; renderAppsGrid();
  document.getElementById('appsGridLabel').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ── DETALLE DE APP (usa la misma página de detalle que los juegos) ── */
// noTrack=true → solo vuelve a dibujar (ej: al cambiar de idioma), no suma una visita
function showAppInternal(id,noTrack){
  const a=APPS.find(x=>x.id===id); if(!a)return;
  if(!noTrack)trackView('app_'+id);
  window._detail={type:'app',id};
  fillDetail(a,{
    ratingId:'app_'+id,
    meta:`<span class="m-badge app">${cl(a)}</span><span class="m-badge b2">${esc(a.dev)}</span><span class="m-rat">★ ${a.rating}</span><span class="m-txt">${tv(a.license)} · Windows</span>`,
    info:[{l:t('i.version'),v:tv(a.version)},{l:t('i.size'),v:a.size},{l:t('i.license'),v:tv(a.license)},{l:t('i.platform'),v:a.platform}],
    reqsTitle:t('d.reqs'),
    boxTitle:t('d.boxApp'),
    back:{label:t('d.backApps'),page:'apps'},
    onDownload:()=>trackDownload(a,'app'),
  });
  // Banner del detalle: logo grande sobre el color de la marca
  if(!a.img&&a.icon){
    const art=document.getElementById('dArt');
    art.innerHTML=appIconHtml(a,'app-icon-big'); art.style.display='';
    document.getElementById('dBg').setAttribute('style',appBg(a));
  }
}
function showApp(id){
  history.pushState({page:'app',id:id},'',location.pathname+'#app-'+id);
  showAppInternal(id);
}

/* ════════════════════════════════════════════════════
   INICIO (vidriera): carrusel de destacados + filas por sección
════════════════════════════════════════════════════ */
const SHELF_MAX=16;   // tarjetas por fila
function homeShelves(){
  const byRating=(a,b)=>(parseFloat(b.rating)||0)-(parseFloat(a.rating)||0);
  const tier=l=>GAMES.filter(g=>reqTier(g)===l).sort(byRating);
  return [
    {id:'hot',  icon:'🔥',title:'sh.hot', sub:'sh.hotSub', items:GAMES.filter(g=>g.hot).sort(byRating)},
    {id:'bajo', icon:'💻',title:'lv.bajo',sub:'sh.bajoSub',items:tier('bajo')},
    {id:'medio',icon:'⚙️',title:'lv.medio',sub:'sh.medioSub',items:tier('medio')},
    {id:'alto', icon:'🚀',title:'lv.alto',sub:'sh.altoSub',items:tier('alto')},
    {id:'new',  icon:'🆕',title:'sh.new', sub:'sh.newSub', items:GAMES.filter(g=>g.isNew)},
    {id:'apps', icon:'📱',title:'sh.apps',sub:'sh.appsSub',items:APPS.filter(a=>a.hot).sort(byRating),app:true},
  ];
}
function renderHome(){
  const box=document.getElementById('homeShelves'); if(!box)return;
  box.innerHTML='';
  homeShelves().forEach(s=>{
    if(!s.items.length)return;
    const sec=document.createElement('section');
    sec.className='shelf reveal';
    sec.innerHTML=`<div class="shelf-head">
        <div><h2 class="shelf-title">${s.icon} ${t(s.title)}</h2><p class="shelf-sub">${t(s.sub)}</p></div>
        <div class="shelf-ctrl">
          <button class="shelf-arrow" onclick="shelfScroll(this,-1)" aria-label="‹">‹</button>
          <button class="shelf-arrow" onclick="shelfScroll(this,1)" aria-label="›">›</button>
          <button class="shelf-all" onclick="shelfAll('${s.id}')">${t('sh.all')}</button>
        </div>
      </div>
      <div class="shelf-track"></div>`;
    const tr=sec.querySelector('.shelf-track');
    s.items.slice(0,SHELF_MAX).forEach((x,i)=>tr.appendChild(s.app?appCard(x,i):gameCard(x,i)));
    box.appendChild(sec);
  });
  observeReveal();
}
// Flechas de cada fila: corre casi una "pantalla" de tarjetas
function shelfScroll(btn,dir){const tr=btn.closest('.shelf').querySelector('.shelf-track');tr.scrollBy({left:dir*tr.clientWidth*.85,behavior:'smooth'});}
// "Ver todos" de cada fila
function shelfAll(id){
  if(id==='new')return goPage('novedades');
  if(id==='apps')return goPage('apps');
  if(TIER_ICON[id])return goJuegos({tier:id});
  goJuegos({sort:'dl'});   // Populares → catálogo ordenado por más descargados
}

/* ── CARRUSEL DE DESTACADOS ──
   Rota solo cuando termina la barrita del punto activo (6 s); se pausa con el
   mouse encima y no rota si el sistema pide menos animaciones. */
let hsIndex=0;
function renderSlider(){
  const track=document.getElementById('hsTrack'), dots=document.getElementById('hsDots'); if(!track)return;
  let list=DESTACADOS.map(id=>GAMES.find(g=>g.id===id)).filter(Boolean);
  if(!list.length)list=GAMES.filter(g=>g.banner).sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating)).slice(0,5);
  if(hsIndex>=list.length)hsIndex=0;
  track.innerHTML=list.map((g,i)=>{
    // Logo transparente de Steam (mismo lugar que el banner); si no existe se muestra el título
    const logo=g.banner&&g.banner.includes('/library_hero.jpg')?g.banner.replace('library_hero.jpg','logo.png'):'';
    return `<div class="hs-slide${i===hsIndex?' active':''}" data-bg="${g.banner||g.img}">
      <div class="hs-bg"></div><div class="hs-shade"></div>
      <div class="hs-content">
        <div class="hs-badges"><span class="m-badge">${gl(g)}</span>${g.isNew?`<span class="m-badge new">${t('badge.new')}</span>`:''}${tierBadge(g)}</div>
        ${logo?`<img class="hs-logo" src="${logo}" alt="${esc(g.title)}" onerror="this.remove()">`:''}
        <h2 class="hs-title">${esc(g.title)}</h2>
        <p class="hs-desc">${esc(tr(g,'cardDesc'))}</p>
        <div class="hs-meta"><span class="m-rat">★ ${g.rating}</span><span class="m-txt">${g.year} · ${esc(g.dev)}</span></div>
        <button class="hs-btn" onclick="showGame('${g.id}')">${t('hs.view')}</button>
      </div>
    </div>`;
  }).join('');
  dots.innerHTML=list.map((g,i)=>`<button class="hs-dot${i===hsIndex?' active':''}" onclick="slideTo(${i},true)" aria-label="${esc(g.title)}"><span></span></button>`).join('');
  slideTo(hsIndex);
}
// Carga la imagen de fondo de una diapositiva recién cuando hace falta (ahorra datos)
function loadSlideBg(i){
  const s=document.querySelectorAll('.hs-slide')[i]; if(!s||s.dataset.loaded)return;
  s.dataset.loaded='1'; s.querySelector('.hs-bg').style.backgroundImage=`url('${s.dataset.bg}')`;
}
function slideTo(i){
  const slides=document.querySelectorAll('.hs-slide'); if(!slides.length)return;
  hsIndex=(i+slides.length)%slides.length;
  slides.forEach((s,k)=>s.classList.toggle('active',k===hsIndex));
  document.querySelectorAll('.hs-dot').forEach((d,k)=>d.classList.toggle('active',k===hsIndex));
  loadSlideBg(hsIndex); loadSlideBg((hsIndex+1)%slides.length);
}

/* ── NOVEDADES ── */
function renderNovedades(){
  const featured=[...GAMES].sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating)).slice(0,3);
  const ng=document.getElementById('novGrid'); if(!ng)return;
  ng.innerHTML='';
  featured.forEach((g,i)=>{
    const d=document.createElement('div');
    d.className='nov-card'+(i===0?' nov-big':'');
    // La tarjeta grande usa el banner horizontal (si hay); las altas, la portada
    const src=i===0?(g.banner||g.img):g.img;
    const imgHtml=src?`<img src="${src}" alt="${esc(g.title)}" loading="lazy" onerror="this.remove()">`: '';
    d.innerHTML=`<div class="nov-cover ${i===0?'':'tall'} ${g.cov}">${imgHtml}<span>${esc(g.short)}</span></div><div class="nov-info"><span class="nov-badge ${g.isNew?'':'upd'}">${t(g.isNew?'nov.new':'nov.feat')}</span><div class="nov-title">${esc(g.title)}</div><div class="nov-desc">${esc(tr(g,'cardDesc'))}</div></div>`;
    d.onclick=()=>showGame(g.id);
    ng.appendChild(d);
  });
  // "Todos los juegos nuevos": solo los marcados como nuevos (con 120 juegos,
  // sumar también los populares llenaba la sección con juegos que no son nuevos)
  const newer=GAMES.filter(g=>g.isNew);
  renderGrid(newer.length?newer:GAMES.filter(g=>g.hot).slice(0,8),'novAllGrid');
}

/* ── GAME DETAIL ── */
// showGameInternal → muestra el juego SIN tocar el historial
// Usada por el listener popstate para no crear entradas duplicadas
function showGameInternal(id,noTrack){
  const g=GAMES.find(x=>x.id===id); if(!g)return;
  if(!noTrack)trackView(id);
  window._detail={type:'game',id};
  fillDetail(g,{
    ratingId:id,
    meta:`<span class="m-badge">${gl(g)}</span>${tierBadge(g)}<span class="m-badge b2">${esc(g.dev)}</span><span class="m-rat">★ ${g.rating}</span><span class="m-txt">${g.year} · PC</span>`,
    info:[{l:t('i.version'),v:tv(g.version)},{l:t('i.size'),v:g.size},{l:t('i.lang'),v:tv(g.lang)},{l:t('i.platform'),v:g.platform}],
    reqsTitle:t('d.reqsMin'),
    boxTitle:t('d.boxGame'),
    back:{label:t('d.backGames'),page:'juegos'},
    onDownload:()=>trackDownload(g),
  });
}

// fillDetail → completa la página de detalle (la usan juegos y apps)
function fillDetail(g,o){
  const id=o.ratingId; window._ratingId=id;
  const back=document.getElementById('dBackBtn');
  if(back){back.textContent=o.back.label;back.onclick=()=>goPage(o.back.page);}
  document.getElementById('dReqsTitle').textContent=o.reqsTitle;
  document.getElementById('dBoxTitle').textContent=o.boxTitle;
  document.title=t('doc.item',{t:g.title});

  document.getElementById('dBg').className=`ghb-bg ${g.cov}`;
  document.getElementById('dBg').removeAttribute('style');
  document.getElementById('dArt').textContent=g.short;
  const ex=document.getElementById('dBannerImg'); if(ex)ex.remove();
  // Banner: imagen horizontal (banner) si existe; si no, la portada
  const bannerSrc=g.banner||g.img;
  if(bannerSrc){
    const img=document.createElement('img');
    img.id='dBannerImg'; img.src=bannerSrc; img.className='ghb-bg-img'+(g.banner?' wide':''); img.alt=g.title;
    img.onerror=()=>{img.remove();document.getElementById('dArt').style.display='';};
    document.getElementById('dBg').appendChild(img);
    document.getElementById('dArt').style.display='none';
  } else { document.getElementById('dArt').style.display=''; }

  document.getElementById('dBread').textContent=g.title;
  document.getElementById('dTitle').textContent=g.title;
  document.getElementById('dDesc').textContent=tr(g,'desc');
  document.getElementById('dMeta').innerHTML=o.meta;
  document.getElementById('dReqs').innerHTML=(g.reqs||[]).map(r=>`<div class="req-item"><div class="req-l">${esc(rl(r.l))}</div><div class="req-v">${esc(tv(r.v))}</div></div>`).join('');
  document.getElementById('dInfo').innerHTML=o.info.map(r=>`<div class="dl-line"><span>${r.l}</span><span>${esc(r.v)}</span></div>`).join('');

  renderStarRating(id);
  renderComForm(); renderComList(id); loadComments(id);
  renderRelated(g,id.startsWith('app_'));
  renderTrailer(g);

  lbImages=(g.screenshots||[]).filter(s=>s&&s.trim()!=='');
  const ssBox=document.getElementById('dScreenshots');
  ssBox.innerHTML='';
  // Si no hay ninguna captura (ej: apps), se oculta la sección entera
  const hasSS=lbImages.length>0;
  ssBox.style.display=hasSS?'':'none';
  const ssT=document.getElementById('dSsTitle'); if(ssT)ssT.style.display=hasSS?'':'none';
  const ssLabels=['Screenshot 1','Screenshot 2','Screenshot 3'];
  (g.screenshots||['','','']).forEach((src,idx)=>{
    const item=document.createElement('div');
    item.className='ss-item';
    if(src&&src.trim()!==''){
      item.classList.add('has-img');
      item.innerHTML=`<img src="${src}" alt="Screenshot ${idx+1}" loading="lazy" onerror="this.parentElement.className='ss-item';this.parentElement.innerHTML='<div class=ss-placeholder><span>🖼️</span>${ssLabels[idx]}</div>'">`;
      const lbIdx=lbImages.indexOf(src);
      item.onclick=()=>openLightbox(lbIdx);
    } else {
      item.innerHTML=`<div class="ss-placeholder"><span>🖼️</span>${ssLabels[idx]}</div>`;
    }
    ssBox.appendChild(item);
  });

  const btn=document.getElementById('dlBtn');
  btn.onclick=null; btn.classList.remove('locked');
  if(!isPlaceholderLink(g.link)){
    btn.href=g.link; btn.target='_blank'; btn.rel='noopener';
    btn.textContent=t('d.dlFree');
    btn.onclick=o.onDownload;
  } else {
    btn.href='#'; btn.removeAttribute('target'); btn.classList.add('locked');
    btn.textContent=t('d.soon');
  }
  // Botón chico del Update (solo si el juego tiene update:'link')
  const upd=document.getElementById('dlUpd');
  if(upd){const ok=g.update&&!isPlaceholderLink(g.update);upd.style.display=ok?'':'none';upd.href=ok?g.update:'#';}
  renderDlNote();

  goPageInternal('game');
}
/* ── TRÁILER ──
   trailer:'256768283' (número de video de Steam), un link a un .mp4 o 'yt:ID' de YouTube.
   En celular usa la versión de 480p de Steam para gastar menos datos. */
function renderTrailer(g){
  const box=document.getElementById('dTrailer'), tt=document.getElementById('dTrTitle'); if(!box)return;
  const v=String(g.trailer||''), poster=(g.screenshots||[]).find(Boolean)||g.banner||g.img||'';
  let html='';
  if(/^\d+$/.test(v)){
    const q=matchMedia('(max-width:768px)').matches?'movie480':'movie_max';
    html=`<video controls preload="none" playsinline poster="${poster}" src="https://cdn.akamai.steamstatic.com/steam/apps/${v}/${q}.mp4"></video>`;
  } else if(v.startsWith('yt:')){
    html=`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.slice(3))}" title="${esc(g.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  } else if(/^https?:\/\//.test(v)){
    html=`<video controls preload="none" playsinline poster="${poster}" src="${esc(v)}"></video>`;
  }
  box.innerHTML=html;
  box.style.display=tt.style.display=html?'':'none';
}

/* ── RELACIONADOS ──
   Al final del detalle: 6 del mismo género (o categoría, si es app) y/o de la
   misma desarrolladora. Suman puntos el género, la desarrolladora y que sean
   de años cercanos; a igual puntaje van primero los de mejor rating. */
function renderRelated(x,isApp){
  const wrap=document.getElementById('dRelatedWrap'); if(!wrap)return;
  const score=y=>isApp
    ?(y.cat===x.cat?3:0)+(y.dev===x.dev?2:0)
    :(y.genre===x.genre?3:0)+(y.dev===x.dev?2:0)+(Math.abs((y.year||0)-(x.year||0))<=3?1:0);
  const list=(isApp?APPS:GAMES).filter(y=>y!==x).map(y=>({y,s:score(y)})).filter(o=>o.s>=2)
    .sort((a,b)=>b.s-a.s||parseFloat(b.y.rating)-parseFloat(a.y.rating)).slice(0,6).map(o=>o.y);
  document.getElementById('dRelatedTitle').textContent=t(isApp?'d.relatedApps':'d.related');
  wrap.style.display=list.length?'':'none';
  if(isApp){const grid=document.getElementById('dRelated');grid.innerHTML='';list.forEach((a,i)=>grid.appendChild(appCard(a,i)));}
  else renderGrid(list,'dRelated');
}

// Nota debajo del botón de descarga + "¿Link caído? Reportalo" (cambia al entrar/salir de la cuenta)
function renderDlNote(){
  const it=curItem(), note=document.getElementById('dlNote'), rep=document.getElementById('dlReport'); if(!it||!note)return;
  const ok=!isPlaceholderLink(it.link);
  note.innerHTML=!ok
    ? `<span style="color:var(--muted)">${t('d.prep')}</span>`
    : currentUser
      ? `${t('d.as')} <strong style="color:var(--text)">${esc(currentUser.username)}</strong>`
      : `<span style="color:var(--green)">${t('d.noReg')}</span>`;
  if(rep)rep.style.display=ok?'':'none';
}

// showGame → muestra el juego Y registra en el historial (activa la flechita)
function showGame(id){
  history.pushState({page:'game', id:id}, '', location.pathname+'#juego-'+id);
  showGameInternal(id);
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
  const raw=document.getElementById('searchInput').value.trim(), q=norm(raw);
  const dd=document.getElementById('searchDD');
  if(!q){dd.classList.remove('open');return;}
  const {games:res,apps:resApps}=searchMatches(raw);
  dd.innerHTML='';
  if(!res.length&&!resApps.length){dd.innerHTML=`<div class="search-empty">${t('s.none')} "<strong>${esc(raw)}</strong>"</div>`;}
  else{
    res.slice(0,6).forEach(g=>{
      const btn=document.createElement('button');
      btn.className='sri';
      btn.innerHTML=`<div class="sri-thumb ${g.cov}">${esc(g.short)}${g.img?`<img src="${g.img}" alt="" loading="lazy" onerror="this.remove()">`:''}</div><div><div class="sri-name">${esc(g.title)}</div><div class="sri-genre">${t('s.game')} · ${gl(g)} · ${g.year}</div></div><span style="color:var(--gold);font-size:.78rem;margin-left:auto">★ ${g.rating}</span>`;
      btn.onclick=()=>{closeSearch();showGame(g.id);};
      dd.appendChild(btn);
    });
    resApps.slice(0,4).forEach(a=>{
      const btn=document.createElement('button');
      btn.className='sri';
      btn.innerHTML=`<div class="sri-thumb ${a.cov}" style="${appBg(a)}">${a.icon?appIconHtml(a,'sri-app-icon'):esc(a.short)}</div><div><div class="sri-name">${esc(a.title)}</div><div class="sri-genre">${t('s.app')} · ${cl(a)}</div></div><span style="color:var(--gold);font-size:.78rem;margin-left:auto">★ ${a.rating}</span>`;
      btn.onclick=()=>{closeSearch();showApp(a.id);};
      dd.appendChild(btn);
    });
    // Si hay más de los que entran en el desplegable → link a la página de resultados
    const total=res.length+resApps.length;
    if(res.length>6||resApps.length>4){
      const all=document.createElement('button');
      all.className='sri-all'; all.textContent=t('sr.all',{n:total});
      all.onclick=()=>goSearch(raw);
      dd.appendChild(all);
    }
  }
  dd.classList.add('open');
}
function closeSearch(){document.getElementById('searchDD').classList.remove('open');document.getElementById('searchInput').value='';}
// Busca sin importar tildes ("accion" encuentra "Acción") y en ambos idiomas
function searchMatches(raw){
  const q=norm(raw.trim()), hit=(...f)=>f.some(s=>norm(s).includes(q));
  return {
    games:GAMES.filter(g=>hit(g.title,g.genreLabel,I18N.en['g.'+g.genre],g.dev)),
    apps:APPS.filter(a=>hit(a.title,a.catLabel,I18N.en['c.'+a.cat],a.dev)),
  };
}
/* ── PÁGINA DE RESULTADOS (Enter en el buscador) ── */
function goSearch(raw){
  const q=String(raw||'').trim(); if(!q)return;
  history.pushState({page:'buscar',q},'',location.pathname+'#buscar-'+encodeURIComponent(q));
  showSearchInternal(q);
}
function showSearchInternal(q){
  const {games,apps}=searchMatches(q), n=games.length+apps.length;
  window._searchQ=q;
  document.getElementById('srTitle').textContent=`“${q}”`;
  document.getElementById('srCount').textContent=t(n===1?'sr.count1':'sr.countN',{n});
  document.getElementById('srGamesWrap').style.display=games.length?'':'none';
  document.getElementById('srAppsWrap').style.display=apps.length?'':'none';
  document.getElementById('srEmpty').style.display=n?'none':'';
  document.getElementById('srGamesLabel').textContent=t('sr.games',{n:games.length});
  document.getElementById('srAppsLabel').textContent=t('sr.apps',{n:apps.length});
  renderGrid(games,'srGames');
  const ga=document.getElementById('srApps'); ga.innerHTML=''; apps.forEach((a,i)=>ga.appendChild(appCard(a,i)));
  closeSearch(); goPageInternal('buscar');
}

/* ── MODAL ── */
function openModal(tab='login'){clearErrs();document.getElementById('mSuccess').classList.remove('show');document.getElementById('fLogin').classList.remove('hidden');document.getElementById('fRegister').classList.add('hidden');document.getElementById('authModal').classList.add('open');switchTab(tab);}
function closeModal(){document.getElementById('authModal').classList.remove('open');clearErrs();['lEmail','lPass','rUser','rEmail','rPass','rPass2'].forEach(id=>{const el=document.getElementById(id);if(el){el.value='';el.classList.remove('err-field');}});document.getElementById('mSuccess').classList.remove('show');}
function switchTab(tab){clearErrs();const isL=tab==='login';document.getElementById('tabL').classList.toggle('active',isL);document.getElementById('tabR').classList.toggle('active',!isL);document.getElementById('fLogin').classList.toggle('hidden',!isL);document.getElementById('fRegister').classList.toggle('hidden',isL);document.getElementById('mSuccess').classList.remove('show');}
function clearErrs(){document.querySelectorAll('.fg-err').forEach(e=>e.classList.remove('show'));document.querySelectorAll('.err-field').forEach(e=>e.classList.remove('err-field'));const ge=document.getElementById('gErr');ge.classList.remove('show');ge.textContent='';}
function showGErr(msg){const ge=document.getElementById('gErr');ge.textContent=msg;ge.classList.add('show');}
function fErr(inputId,errId,msg){document.getElementById(inputId).classList.add('err-field');const e=document.getElementById(errId);if(msg)e.textContent=msg;e.classList.add('show');return true;}
async function doLogin(){
  clearErrs();
  const email=document.getElementById('lEmail').value.trim(),pass=document.getElementById('lPass').value;
  let err=false;
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('lEmail','lEmailErr',t('e.email'));
  if(!pass)err=fErr('lPass','lPassErr',t('e.pass'))||err;
  if(err)return;
  if(!FB){showGErr(t('e.noServer'));return;}
  try{
    pendingWelcome=true;
    await auth.signInWithEmailAndPassword(email,pass);
    closeModal();
  }catch(e){pendingWelcome=false;showGErr(authErr(e));}
}
async function doRegister(){
  clearErrs();
  const username=document.getElementById('rUser').value.trim(),email=document.getElementById('rEmail').value.trim(),pass=document.getElementById('rPass').value,pass2=document.getElementById('rPass2').value;
  let err=false;
  if(!/^[A-Za-z0-9_.-]{3,20}$/.test(username))err=fErr('rUser','rUserErr',t('e.user'));
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('rEmail','rEmailErr',t('e.email'))||err;
  if(pass.length<6)err=fErr('rPass','rPassErr',t('e.pass6'))||err;
  if(pass!==pass2)err=fErr('rPass2','rPass2Err',t('e.match'))||err;
  if(err)return;
  if(!FB){showGErr(t('e.noServer'));return;}
  const lower=username.toLowerCase();
  let cred=null;
  try{
    const taken=await db.collection('usernames').doc(lower).get();
    if(taken.exists){showGErr(t('e.taken'));return;}
    registering=true;
    cred=await auth.createUserWithEmailAndPassword(email,pass);
    const uid=cred.user.uid;
    const batch=db.batch();
    batch.set(db.collection('usernames').doc(lower),{uid});
    batch.set(db.collection('users').doc(uid),{username,email,joined:new Date().toISOString(),isAdmin:false,displayName:username,location:'',bio:'',avatar:'',votes:{},dl:[]});
    await batch.commit();
    db.collection('stats').doc('meta').set({users:INC(1)},{merge:true}).catch(fbWarn);
    USERS_COUNT++; updateStats();
    registering=false;
    await loadUser(cred.user);
    document.getElementById('fRegister').classList.add('hidden');
    document.getElementById('mSuccessMsg').textContent=t('m.created');
    document.getElementById('mSuccessSub').textContent=t('m.welcomeSub',{n:username});
    document.getElementById('mSuccess').classList.add('show');
    setTimeout(()=>{closeModal();toast(t('m.welcome',{n:username}),'success');},1800);
  }catch(e){
    registering=false;
    // Si se creó la cuenta pero falló guardar el perfil, la borramos para no dejarla a medias
    if(cred&&cred.user){try{await cred.user.delete();}catch{}}
    showGErr(e&&e.code&&e.code.startsWith('auth/')?authErr(e):t('e.regFail'));
  }
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
function logout(){const name=currentUser?.username||'';currentUser=null;clearSess();document.getElementById('authBtns').classList.remove('hidden');document.getElementById('userArea').classList.add('hidden');closeDD();toast(t('m.bye',{n:name}),'info');goPage('home');}

/* ── ADMIN ── */
const admMsg=(s,cols)=>`<tr><td colspan="${cols}" style="text-align:center;color:var(--muted);padding:1.5rem">${s}</td></tr>`;
function renderAdmin(){updateStats();renderAdminUsers();renderAdminReports();renderAdminCustom();}
async function renderAdminUsers(){
  const tbody=document.getElementById('adminUsersTbody');if(!tbody)return;
  const msg=s=>admMsg(s,6);
  if(!FB||!currentUser||!currentUser.isAdmin){tbody.innerHTML=msg(t('ad.only'));return;}
  tbody.innerHTML=msg(t('ad.loading'));
  try{
    const snap=await db.collection('users').get();
    const users=snap.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(a.joined||'').localeCompare(b.joined||''));
    tbody.innerHTML=users.map((u,i)=>`<tr><td style="color:var(--muted)">${i+1}</td><td><strong style="color:var(--white)">${esc(u.username)}</strong></td><td>${esc(u.email)}</td><td>${u.joined?new Date(u.joined).toLocaleDateString(LOC()):'—'}</td><td><span class="tbl-badge ${u.isAdmin?'admin':'ok'}">${t(u.isAdmin?'ad.admin':'ad.user')}</span></td><td>${u.isAdmin?'':`<button class="admin-btn danger" onclick="deleteUser('${esc(u.id)}','${esc((u.username||'').toLowerCase())}')">${t('ad.delete')}</button>`}</td></tr>`).join('')||msg(t('ad.noUsers'));
    const a=document.getElementById('aStatUsers'),c=document.getElementById('aStatAdmins');
    if(a)a.textContent=users.length; if(c)c.textContent=users.filter(x=>x.isAdmin).length;
  }catch(e){fbWarn(e);tbody.innerHTML=msg(t('ad.loadFail'));}
}
async function deleteUser(id,uname){
  if(!confirm(t('ad.confirmDel')))return;
  try{
    await db.collection('users').doc(id).delete();
    if(uname)await db.collection('usernames').doc(uname).delete();
    renderAdminUsers();
    toast(t('ad.deleted'),'info');
  }catch(e){fbWarn(e);toast(t('ad.delFail'),'error');}
}
/* Links caídos reportados: agrupados por juego/app, los más reportados primero */
async function renderAdminReports(){
  const tb=document.getElementById('adminReportsTbody'); if(!tb)return;
  const msg=s=>admMsg(s,5), st=document.getElementById('aStatReports');
  if(!FB||!currentUser||!currentUser.isAdmin){tb.innerHTML=msg(t('ad.only'));return;}
  tb.innerHTML=msg(t('ad.loading'));
  try{
    const snap=await db.collection('reports').orderBy('created','desc').limit(500).get();
    REPORT_GROUPS={};
    snap.docs.forEach(d=>{
      const r=d.data(); if(!/^[\w.-]+$/.test(r.item||''))return;
      const g=REPORT_GROUPS[r.item]||(REPORT_GROUPS[r.item]={item:r.item,title:r.title,ids:[],names:[],texts:[],last:0});
      const ms=r.created&&r.created.toMillis?r.created.toMillis():0;
      g.ids.push(d.id); g.names.push(r.name); if(r.text)g.texts.push(r.text); if(ms>g.last)g.last=ms;
    });
    if(st)st.textContent=snap.size;
    const arr=Object.values(REPORT_GROUPS).sort((a,b)=>b.ids.length-a.ids.length||b.last-a.last);
    tb.innerHTML=arr.map(g=>{
      const isApp=g.item.startsWith('app_'), open=isApp?`showApp('${g.item.slice(4)}')`:`showGame('${g.item}')`;
      return `<tr><td><strong style="color:var(--white)">${esc(g.title)}</strong><div style="font-size:.7rem;color:var(--muted)">${isApp?t('s.app'):t('s.game')} · ${esc(g.item)}</div></td>
        <td><span class="tbl-badge admin">${g.ids.length}</span></td>
        <td style="font-size:.78rem">${esc(g.names.slice(0,3).join(', '))}${g.names.length>3?'…':''}${g.texts.length?`<div style="color:var(--muted);margin-top:.2rem">"${esc(g.texts[0])}"</div>`:''}</td>
        <td>${g.last?new Date(g.last).toLocaleDateString(LOC()):'—'}</td>
        <td style="white-space:nowrap"><button class="admin-btn secondary sm" onclick="${open}">${t('ad.view')}</button> <button class="admin-btn danger" onclick="resolveReports('${g.item}')">${t('ad.resolve')}</button></td></tr>`;
    }).join('')||msg(t('ad.noReports'));
  }catch(e){fbWarn(e);tb.innerHTML=msg(t('ad.loadFail'));}
}
// "Resuelto": borra los reportes de ese juego (cuando ya arreglaste el link)
async function resolveReports(item){
  const g=REPORT_GROUPS[item]; if(!g)return;
  try{
    const b=db.batch(); g.ids.forEach(id=>b.delete(db.collection('reports').doc(id))); await b.commit();
    toast(t('ad.resolved'),'success'); renderAdminReports();
  }catch(e){fbWarn(e);toast(t('ad.delFail'),'error');}
}
/* Juegos agregados desde el panel (guardados en Firebase → 'catalog') */
function renderAdminCustom(){
  const tb=document.getElementById('adminCustomTbody'); if(!tb)return;
  tb.innerHTML=GAMES.filter(g=>g.custom).map(g=>`<tr><td><strong style="color:var(--white)">${esc(g.title)}</strong></td><td>${gl(g)}</td><td>${isPlaceholderLink(g.link)?'—':'✓'}</td>
    <td style="white-space:nowrap"><button class="admin-btn secondary sm" onclick="showGame('${g.id}')">${t('ad.view')}</button> <button class="admin-btn danger" onclick="adminDeleteGame('${g.id}')">${t('ad.delete')}</button></td></tr>`).join('')||admMsg(t('ad.noCustom'),4);
}
async function adminDeleteGame(id){
  const g=GAMES.find(x=>x.id===id); if(!g||!g.custom)return;
  if(!confirm(t('ad.confirmDelGame',{t:g.title})))return;
  try{
    await db.collection('catalog').doc(id).delete();
    GAMES.splice(GAMES.indexOf(g),1);
    renderAdminCustom(); updateStats(); renderHomeGrid(); renderHome(); renderNovedades();
    toast(t('ad.gameDeleted'),'info');
  }catch(e){fbWarn(e);toast(t('ad.delFail'),'error');}
}
async function adminAddGame(){
  const val=id=>document.getElementById(id).value.trim();
  const title=val('af-title'),dev=val('af-dev');
  const year=parseInt(val('af-year'))||new Date().getFullYear(),genre=document.getElementById('af-genre').value;
  const version=val('af-version')||'1.0',size=val('af-size')||'N/D';
  const rating=val('af-rating')||'8.0',link=val('af-link')||'LINK_DEL_JUEGO';
  const cardesc=val('af-cardesc'),desc=val('af-desc'),cardescEn=val('af-cardescEn'),descEn=val('af-descEn');
  const img=val('af-img'), shots=val('af-ss').split(/\s+/).filter(u=>/^https?:\/\//.test(u)).slice(0,3);
  if(!title||!dev||!desc){toast(t('ad.fill'),'error');return;}
  const glab={accion:'Acción',fps:'FPS',sandbox:'Sandbox',deportes:'Deportes',terror:'Terror',aventura:'Aventura',rpg:'RPG','conducción':'Conducción',estrategia:'Estrategia',pelea:'Pelea'};
  const cm={accion:'cov-gta',fps:'cov-fps',sandbox:'cov-mc',deportes:'cov-pes',terror:'cov-re',aventura:'cov-aventura',rpg:'cov-rpg','conducción':'cov-conduccion',estrategia:'cov-estrategia',pelea:'cov-pelea'};
  const id=title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'').slice(0,50)+'-'+Date.now();
  const g={title,dev,year,genre,genreLabel:glab[genre]||genre,short:title.substring(0,4).toUpperCase(),rating,size,version,lang:'Español',platform:'PC',cov:cm[genre]||'cov-gta',
    img:/^https?:\/\//.test(img)?img:'',screenshots:shots,desc,descEn,cardDesc:cardesc||desc.substring(0,60)+'...',cardDescEn:cardescEn,link,hot:false,isNew:true,
    added:new Date().toISOString(),reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2 GHz'},{l:'GPU',v:'512 MB'},{l:'Disco',v:size},{l:'SO',v:'Windows 7+'},{l:'DirectX',v:'v11'}]};
  const nivel=document.getElementById('af-tier').value; if(nivel)g.nivel=nivel;   // vacío = automático
  // Se guarda en Firebase para que no se pierda al recargar la página
  if(FB){
    try{await db.collection('catalog').doc(id).set(g);}
    catch(e){fbWarn(e);toast(t('ad.addFail'),'error');return;}
  }
  GAMES.push(prepCustomGame({...g,id}));
  updateStats();renderHomeGrid();renderHome();renderNovedades();renderAdminCustom();
  document.getElementById('adminSuccess').classList.add('show');
  setTimeout(()=>document.getElementById('adminSuccess').classList.remove('show'),3000);
  toast(t('ad.added',{t:title}),'success');clearAdminForm();
}
function clearAdminForm(){['af-title','af-dev','af-year','af-version','af-size','af-rating','af-link','af-img','af-ss','af-cardesc','af-desc','af-cardescEn','af-descEn','af-tier'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});}

/* ── TOAST ── */
function toast(msg,type='info'){
  const c=document.getElementById('toastCont'),el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${{success:'✅',error:'❌',info:'ℹ️'}[type]||'ℹ️'}</span><span></span>`;
  el.lastChild.textContent=msg;   // textContent: nombres de usuario y textos no se interpretan como HTML
  c.appendChild(el);
  setTimeout(()=>{el.style.transition='opacity .4s';el.style.opacity='0';setTimeout(()=>el.remove(),400);},3500);
}