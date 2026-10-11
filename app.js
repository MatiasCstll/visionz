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
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-07.jpg',
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-03.jpg',
      'https://www.gta-growth.com/secciones/gtasa/screenshots/oficiales-android-08.jpg',
    ],
    desc:'GTA San Andreas es uno de los juegos de mundo abierto más icónicos. Seguís la historia de Carl "CJ" Johnson que regresa a Los Santos tras la muerte de su madre. El mapa incluye tres ciudades enormes con libertad total para explorar, cientos de misiones y actividades secundarias.',
    cardDesc:'Mundo abierto épico. Libertad total en Los Santos.',
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
    cardDesc:'Bloques infinitos. Creá, sobreviví, explorá.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core i3-3210 / AMD A8-7600 (o equivalente)'},{l:'GPU',v:'HD Graphics 4000 / AMD Radeon R5 (OpenGL 4.4)'},{l:'Disco',v:'1.5 GB'},{l:'SO',v:'Windows 10/11'},{l:'Java',v:'Java 8+'}]
  },
  {
    id:'cs16', title:'Counter-Strike 1.6', short:'CS',
    genre:'fps', genreLabel:'FPS', year:2000, dev:'Valve Corporation',
    rating:'9.2', size:'600 MB', version:'v48 Completo', lang:'Español', platform:'PC',
    cov:'cov-cs',
    img:'https://e0.pxfuel.com/wallpapers/843/828/desktop-wallpaper-counter-strike-1-6-pc-game-full-version-from-online-to-here-fantastic-this-shooting-video-game-pla-video-game-posters-game-counter-cs-1-6.jpg',
    screenshots:[
      'https://i.ytimg.com/vi/oIoueckSEtU/maxresdefault.jpg',
      'https://images.steamusercontent.com/ugc/938128623125307932/9E80F16DFF36539DE56DCC4212F66565BBD2C25E/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      'https://i.ytimg.com/vi/ipwcpPhc0dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLChzjIl2EWUnBMC1M4G1mb3N30wyQ',
    ],
    desc:'Counter-Strike 1.6 es el shooter táctico más icónico de todos los tiempos. Terroristas contra contraterroristas en mapas clásicos como de_dust2, cs_assault. Un juego que definió el género FPS competitivo.',
    cardDesc:'El shooter táctico que definió una generación.',
    link:'https://exe.io/Count3Strlk316v', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'800 MHz'},{l:'GPU',v:'32 MB'},{l:'Disco',v:'600 MB'},{l:'SO',v:'Windows XP, Vista, 7, 8, 10 o superior'},{l:'Red',v:'Recomendada'}]
  },
  {
    id:'pes2021', title:'PES 2021', short:'PES',
    genre:'deportes', genreLabel:'Deportes', year:2020, dev:'Konami',
    rating:'8.7', size:'8.5 GB', version:'Edición Temporada', lang:'Español', platform:'PC',
    cov:'cov-pes',
    img:'https://e1.pxfuel.com/desktop-wallpaper/761/74/desktop-wallpaper-watch-ubisoft-s-e3-2017-press-conference-livestream-right-here-dualshockers-pes-21.jpg',
    screenshots:[
      'https://d2r9epyceweg5n.cloudfront.net/stores/002/714/093/rte/pes21_05.jpg',
      'https://playmania438.com.ar/wp-content/uploads/2021/05/maxresdefault.jpg',
      'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc8fj6.jpg',
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
      'https://assetsio.gnwcdn.com/-1540566508823.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
      'https://cl2.buscafs.com/www.levelup.com/public/uploads/images/160529.jpg',
      'https://gaming-cdn.com/images/products/6530/screenshot/resident-evil-4-5-6-pack-pc-steam-wallpaper-3.jpg?v=1751027155',
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
      'https://wallpapers.com/images/high/callof-duty-modern-warfare-combat-scene-lx5cd57r1pr9k4o1.webp',
      'https://wallpapers.com/images/high/modern-warfare-eiffel-tower-defense-tm92kksnvfq69izi.webp',
      'https://cdn.mobygames.com/promos/6680579-call-of-duty-4-modern-warfare-screenshot-xbox-360-single-player-.jpg',
    ],
    desc:'Call of Duty 4: Modern Warfare cambió para siempre los shooters en primera persona. Campaña cinematográfica y multijugador competitivo adictivo que marcó una era y sentó las bases de los CoD modernos.',
    cardDesc:'El FPS que cambió todo. Campaña épica y multi brutal.',
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
    cardDesc:'Corré, escapá y convertite en el más buscado.',
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
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg',
    ],
    desc:'The Witcher 3: Wild Hunt es considerado uno de los mejores RPG de la historia. Sos Geralt de Rivia, un cazador de monstruos que busca a su hija adoptiva en un mundo abierto enorme, lleno de decisiones morales, contratos de caza y una historia épica. La edición GOTY incluye las expansiones Hearts of Stone y Blood and Wine.',
    cardDesc:'El RPG definitivo. Geralt en un mundo oscuro y enorme.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i5-2500K / AMD Phenom II X4 940'},{l:'GPU',v:'NVIDIA GTX 660 / AMD Radeon HD 7870'},{l:'Disco',v:'50 GB'},{l:'SO',v:'Windows 7/8/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'skyrim', title:'The Elder Scrolls V: Skyrim', short:'TES',
    genre:'rpg', genreLabel:'RPG', year:2011, dev:'Bethesda',
    rating:'9.5', size:'12 GB', version:'Special Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/489830/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_d64b646612ab1402bdda8e400672aa0dbcb352ea.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_b6bb6f79278505b3f48567f08c21f7a0eb171c68.1920x1080.jpg',
    ],
    desc:'Skyrim es el RPG de mundo abierto por excelencia. Sos el Sangre de Dragón, el único capaz de absorber las almas de los dragones que regresaron a Tamriel. Explorá montañas, mazmorras y ciudades, unite a gremios y armá tu personaje como quieras. Miles de mods disponibles.',
    cardDesc:'Dragones, magia y libertad total en Tamriel.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-750 / AMD Phenom II X4-945'},{l:'GPU',v:'NVIDIA GTX 470 1GB / AMD HD 7870 2GB'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows 7/8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'falloutnv', title:'Fallout: New Vegas', short:'FNV',
    genre:'rpg', genreLabel:'RPG', year:2010, dev:'Obsidian Entertainment',
    rating:'9.3', size:'10 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/22380/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_62f8d0b006935ff6de7fe276f713e7d15e579bc9.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_ec8a28942fcb5cb15718f949ab81124932a5084d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/ss_f703adcb9aa1d718a39288adf7d2e1b4dc0e568a.1920x1080.jpg',
    ],
    desc:'En el desierto de Mojave post-apocalíptico, sos un mensajero al que dieron por muerto. Recorré New Vegas, elegí entre facciones enfrentadas y definí el destino de la región. Una de las mejores historias y sistemas de diálogo de la saga.',
    cardDesc:'Post-apocalipsis en el desierto de Mojave.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Dual Core 2.0 GHz'},{l:'GPU',v:'NVIDIA GeForce 6 / ATI X1300 (256 MB)'},{l:'Disco',v:'10 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'darksouls', title:'Dark Souls Remastered', short:'DS',
    genre:'rpg', genreLabel:'RPG', year:2018, dev:'FromSoftware',
    rating:'9.2', size:'8 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-rpg',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.1920x1080.jpg',
    ],
    desc:'El clásico que creó un género. Dark Souls te lleva a Lordran, un reino en ruinas lleno de enemigos implacables y jefes memorables. Combate exigente, mundo interconectado y una sensación de logro como ningún otro juego. Versión remasterizada a 60 FPS.',
    cardDesc:'Morí, aprendé, volvé a intentarlo. El RPG más desafiante.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i5-2300 / AMD FX-6300'},{l:'GPU',v:'NVIDIA GTX 460 / AMD Radeon HD 6870'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/8.1/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── FPS ── */
  {
    id:'hl2', title:'Half-Life 2', short:'HL2',
    genre:'fps', genreLabel:'FPS', year:2004, dev:'Valve Corporation',
    rating:'9.6', size:'6.5 GB', version:'Completo + Episodios', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/220/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_47b4105b396de408cb8b6b4f358c69e5e2a62dae.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_0e499071a60a20b24149ad65a8edb769250f2921.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220/ss_ffb00abd45012680e4f209355ec81f961b6dd1fb.1920x1080.jpg',
    ],
    desc:'Gordon Freeman vuelve en City 17, una ciudad bajo el control de la Alianza. Half-Life 2 revolucionó los FPS con su motor de física, la Gravity Gun y una narrativa sin cortes. Un clásico obligatorio que sigue vigente.',
    cardDesc:'Gordon Freeman y la Gravity Gun. Un clásico eterno.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'512 MB'},{l:'CPU',v:'1.7 GHz'},{l:'GPU',v:'DirectX 8.1 compatible'},{l:'Disco',v:'6.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.1'}]
  },
  {
    id:'farcry3', title:'Far Cry 3', short:'FC3',
    genre:'fps', genreLabel:'FPS', year:2012, dev:'Ubisoft Montreal',
    rating:'9.0', size:'15 GB', version:'Standard', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/220240/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/91ca9b48ef5a3095281cd7eceb40d2daeffb0454/ss_91ca9b48ef5a3095281cd7eceb40d2daeffb0454.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/d2cc64ad335dd754966a8a41e755be44ecf9d5df/ss_d2cc64ad335dd754966a8a41e755be44ecf9d5df.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/1c4a54582fefd79dbc5fa0bd81d20a5ab66ad4e3/ss_1c4a54582fefd79dbc5fa0bd81d20a5ab66ad4e3.1920x1080.jpg',
    ],
    desc:'Jason Brody queda atrapado en una isla tropical controlada por piratas y el inolvidable Vaas. Mundo abierto, caza, sigilo y acción explosiva en uno de los shooters más queridos de la década.',
    cardDesc:'¿Te dije alguna vez la definición de locura?',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo E6700 / AMD Athlon64 X2 6000+'},{l:'GPU',v:'512 MB DirectX 9.0c'},{l:'Disco',v:'15 GB'},{l:'SO',v:'Windows 7/8/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'bioshock', title:'BioShock Remastered', short:'BIO',
    genre:'fps', genreLabel:'FPS', year:2016, dev:'2K Games',
    rating:'9.4', size:'25 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-fps',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/409710/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_bb9c564381c11357a51f1579c6337fba90ead10f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_fefcc94c6f10da7009cf07cf877e5d5937ebfb45.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/409710/ss_04e04ae694f8b077e7f03906f7fa813823b5fd4e.1920x1080.jpg',
    ],
    desc:'Bajo el océano se esconde Rapture, una utopía que se convirtió en pesadilla. Combiná armas y plásmidos para sobrevivir a los Splicers y los Big Daddies en un FPS con una de las mejores historias jamás contadas.',
    cardDesc:'Rapture te espera bajo el mar. ¿Quisieras...?',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo E4600'},{l:'GPU',v:'NVIDIA GT 240 / AMD HD 4670 (512 MB)'},{l:'Disco',v:'25 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── ACCIÓN ── */
  {
    id:'maxpayne', title:'Max Payne', short:'MP',
    genre:'accion', genreLabel:'Acción', year:2001, dev:'Remedy Entertainment',
    rating:'9.1', size:'800 MB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/12140/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003256.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003257.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12140/0000003258.1920x1080.jpg',
    ],
    desc:'Max Payne es un policía de Nueva York que perdió todo. En una noche de tormenta de nieve se lanza a una venganza contra la mafia y una droga misteriosa. El juego que popularizó el bullet time y la narrativa estilo novela negra.',
    cardDesc:'Bullet time y venganza en Nueva York.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'256 MB'},{l:'CPU',v:'450 MHz'},{l:'GPU',v:'16 MB DirectX 8'},{l:'Disco',v:'800 MB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v8.0'}]
  },
  {
    id:'batmanac', title:'Batman: Arkham City', short:'BAT',
    genre:'accion', genreLabel:'Acción', year:2011, dev:'Rocksteady Studios',
    rating:'9.4', size:'18 GB', version:'Game of the Year', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/200260/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_31e817088eb23c1373410e3ea70a933ffbb8dbab.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_52f74c49e620871e78d09185d22f89a98438cfe4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/ss_8ff38eebd84802a8f9baf8a6be73bb7803f47ee2.1920x1080.jpg',
    ],
    desc:'Arkham City es una prisión gigante en el corazón de Gotham. Batman enfrenta al Joker, Two-Face, el Pingüino y muchos más en un mundo abierto con el sistema de combate freeflow que marcó una época.',
    cardDesc:'Sé Batman. Gotham entera es tu campo de batalla.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 4800+'},{l:'GPU',v:'NVIDIA 8800 / ATI 3850 (512 MB)'},{l:'Disco',v:'18 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'gow', title:'God of War', short:'GOW',
    genre:'accion', genreLabel:'Acción', year:2022, dev:'Santa Monica Studio',
    rating:'9.7', size:'70 GB', version:'PC Edition', lang:'Español', platform:'PC',
    cov:'cov-gta',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg',
    ],
    desc:'Kratos deja atrás su pasado griego y vive en las tierras nórdicas junto a su hijo Atreus. Juntos emprenden un viaje para cumplir la última voluntad de su esposa. Combate brutal con el Hacha Leviatán y una historia emotiva.',
    cardDesc:'Kratos y Atreus en la mitología nórdica.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-2500K / AMD Ryzen 3 1200'},{l:'GPU',v:'NVIDIA GTX 960 4GB / AMD R9 290X 4GB'},{l:'Disco',v:'70 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── AVENTURA ── */
  {
    id:'tombraider', title:'Tomb Raider', short:'TR',
    genre:'aventura', genreLabel:'Aventura', year:2013, dev:'Crystal Dynamics',
    rating:'9.0', size:'12 GB', version:'GOTY Edition', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/203160/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_65861a8ea2efcb01fca8aa4b1233663bb053ab54.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_cd920308517efb19c11b44e251af89e40fb412d5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/ss_8f34a87469f3a0c73049cbd0469bdff6e3d22713.1920x1080.jpg',
    ],
    desc:'El origen de Lara Croft. Tras un naufragio, una joven Lara queda varada en una isla misteriosa y debe convertirse en una sobreviviente. Exploración, tumbas, escalada y combate en un reinicio espectacular de la saga.',
    cardDesc:'El nacimiento de una sobreviviente: Lara Croft.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Dual Core Intel / AMD 1.8 GHz'},{l:'GPU',v:'DirectX 9 (512 MB)'},{l:'Disco',v:'12 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'ac2', title:"Assassin's Creed II", short:'AC2',
    genre:'aventura', genreLabel:'Aventura', year:2009, dev:'Ubisoft Montreal',
    rating:'9.3', size:'8 GB', version:'Deluxe', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/33230/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_dd6a4d319cda32c24a4e16a0a62908e82673f458.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_ef44b9f703f71acfdeb728a497390d397084ee35.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/ss_d3967a58038cc5e59332bb0043ab1ca343112bc6.1920x1080.jpg',
    ],
    desc:'Ezio Auditore da Firenze busca venganza en la Italia del Renacimiento. Recorré Florencia y Venecia, conocé a Leonardo da Vinci y convertite en un maestro asesino. Para muchos, el mejor de toda la saga.',
    cardDesc:'Ezio Auditore y la Italia del Renacimiento.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'1.5 GB'},{l:'CPU',v:'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 64 2.4 GHz'},{l:'GPU',v:'256 MB DirectX 9.0'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows XP/Vista/7/10'},{l:'DirectX',v:'v9.0'}]
  },
  {
    id:'portal2', title:'Portal 2', short:'P2',
    genre:'aventura', genreLabel:'Aventura', year:2011, dev:'Valve Corporation',
    rating:'9.7', size:'8 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-aventura',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/620/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_f3f6787d74739d3b2ec8a484b5c994b3d31ef325.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_6a4f5afdaa98402de9cf0b59fed27bab3256a6f4.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_0cdd90fafc160b52d08b303d205f9fd4e83cf164.1920x1080.jpg',
    ],
    desc:'Chell despierta en los laboratorios de Aperture Science y GLaDOS sigue ahí. Resolvé puzzles con la pistola de portales en una campaña llena de humor y un cooperativo para dos jugadores brillante.',
    cardDesc:'Puzzles con portales y el humor de GLaDOS.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
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
    cardDesc:'Tuning, neones y carreras nocturnas en Bayview.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'256 MB'},{l:'CPU',v:'Pentium III 933 MHz'},{l:'GPU',v:'32 MB DirectX 9'},{l:'Disco',v:'2.5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'nfshp', title:'Need for Speed: Hot Pursuit Remastered', short:'NFSHP',
    genre:'conducción', genreLabel:'Conducción', year:2020, dev:'Criterion Games',
    rating:'8.6', size:'30 GB', version:'Remastered', lang:'Español', platform:'PC',
    cov:'cov-conduccion',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/1328660/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_d4bf9f107a31fd5088f2cfa811381bd00b64310c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_849818f935c563a87dcb8e1468774c9719f8137c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328660/ss_ac6b43bb488664c12101dd0b7bf3b544b508abc1.1920x1080.jpg',
    ],
    desc:'Persecuciones a toda velocidad en Seacrest County. Jugá como corredor o como policía, con autos exóticos, armas de persecución y gráficos remasterizados. Incluye todo el contenido descargable original.',
    cardDesc:'Corredor o policía. Persecuciones a fondo.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'8 GB'},{l:'CPU',v:'Intel i5-3570 / AMD FX-6350'},{l:'GPU',v:'NVIDIA GTX 660 / AMD Radeon HD 7850'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },

  /* ── ESTRATEGIA ── */
  {
    id:'aoe2', title:'Age of Empires II', short:'AOE2',
    genre:'estrategia', genreLabel:'Estrategia', year:2019, dev:'Forgotten Empires',
    rating:'9.5', size:'30 GB', version:'Definitive Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/813780/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_ab2692aa33171bc61378dd59efa89e2ff86e02a6.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_1033024a26f0a7ed277865201aed9bb471b54320.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/ss_83253675c7af3ad5f3f2c1dc2c43c667000e0c4a.1920x1080.jpg',
    ],
    desc:'El rey de la estrategia en tiempo real. Construí tu civilización, recolectá recursos, armá ejércitos y conquistá a tus rivales a lo largo de mil años de historia. La Definitive Edition trae gráficos 4K, nuevas civilizaciones y campañas.',
    cardDesc:'Mil años de historia. Construí, conquistá, dominá.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'4 GB'},{l:'CPU',v:'Intel Core 2 Duo / AMD Athlon 64 X2 5600+'},{l:'GPU',v:'NVIDIA GeForce GT 420 / AMD HD 5450'},{l:'Disco',v:'30 GB'},{l:'SO',v:'Windows 10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'aom', title:'Age of Mythology', short:'AOM',
    genre:'estrategia', genreLabel:'Estrategia', year:2014, dev:'Ensemble Studios',
    rating:'9.1', size:'3 GB', version:'Extended Edition', lang:'Español', platform:'PC',
    cov:'cov-estrategia',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/266840/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_cdd67c84e356692c6304f479a28a111ac207f12d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_8cd2910cdd8001dd5de2c884a85eb27529a6329d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/266840/ss_c4a186273ae304a51f22c6fc4a480a717799f833.1920x1080.jpg',
    ],
    desc:'Estrategia en tiempo real con dioses y criaturas mitológicas. Elegí entre griegos, egipcios, nórdicos y atlantes, invocá poderes divinos y mandá minotauros, cíclopes y titanes a la batalla.',
    cardDesc:'Dioses, titanes y mitología en guerra.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo / AMD 1.8 GHz'},{l:'GPU',v:'DirectX 9 (256 MB)'},{l:'Disco',v:'3 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── PELEA ── */
  {
    id:'tekken7', title:'Tekken 7', short:'T7',
    genre:'pelea', genreLabel:'Pelea', year:2017, dev:'Bandai Namco',
    rating:'9.0', size:'60 GB', version:'Ultimate Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/389730/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_d92a558644ad60ae5814fc4d2bbaebc5abf62fa3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_40faa5ba39563cb899f1ab2ddd2afbf8b451d52f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/ss_ed3246605518907954918eb06e90705249be77d6.1920x1080.jpg',
    ],
    desc:'El final de la saga Mishima. Tekken 7 combina el combate 3D clásico con nuevas mecánicas como Rage Arts y Power Crush. Más de 30 personajes, modo historia cinemático y online competitivo.',
    cardDesc:'La guerra de los Mishima llega a su fin.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'6 GB'},{l:'CPU',v:'Intel Core i3-4160 / AMD equivalente'},{l:'GPU',v:'NVIDIA GTX 660'},{l:'Disco',v:'60 GB'},{l:'SO',v:'Windows 7/8/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'mkx', title:'Mortal Kombat X', short:'MKX',
    genre:'pelea', genreLabel:'Pelea', year:2015, dev:'NetherRealm Studios',
    rating:'8.8', size:'40 GB', version:'XL Edition', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/307780/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_b2030dd6da12f3d366fa076dddf899d2190ea33e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_03f7f4582a1036cbcbca1a4c87e14c7831b5f424.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/ss_1f002ef5eb037c81e92bcbc29306fc91d4b6d26f.1920x1080.jpg',
    ],
    desc:'Peleas brutales, Fatalities y Brutalities. Mortal Kombat X trae tres variantes de combate por personaje, un modo historia con nuevos guerreros y la edición XL con todos los personajes extra como Predator, Alien y Jason.',
    cardDesc:'¡Finish him! Fatalities y combate brutal.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'3 GB'},{l:'CPU',v:'Intel Core i5-750 / AMD Phenom II X4 965'},{l:'GPU',v:'NVIDIA GTX 460 / AMD Radeon HD 5850'},{l:'Disco',v:'40 GB'},{l:'SO',v:'Windows 7/10 (64-bit)'},{l:'DirectX',v:'v11'}]
  },
  {
    id:'sf4', title:'Ultra Street Fighter IV', short:'SF4',
    genre:'pelea', genreLabel:'Pelea', year:2014, dev:'Capcom',
    rating:'8.9', size:'8 GB', version:'Ultra', lang:'Español', platform:'PC',
    cov:'cov-pelea',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/45760/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_28d926b012977ea4aed7bef9455409b6817b4314.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_97b7bc50b6b29616b7eb5be03ae8b83eebfd83c5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45760/ss_387c57ccb3d4b2203df6595f751390b9d95596ee.1920x1080.jpg',
    ],
    desc:'La versión definitiva de Street Fighter IV con 44 luchadores, todos los escenarios y modos. Ryu, Ken, Chun-Li y compañía en el juego de pelea 2D que revivió el género.',
    cardDesc:'Hadouken! 44 luchadores clásicos.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.0 GHz'},{l:'GPU',v:'NVIDIA GeForce 8600 / ATI Radeon HD 3600'},{l:'Disco',v:'8 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },

  /* ── TERROR ── */
  {
    id:'l4d2', title:'Left 4 Dead 2', short:'L4D2',
    genre:'terror', genreLabel:'Terror', year:2009, dev:'Valve Corporation',
    rating:'9.3', size:'13 GB', version:'Completo', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/550/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.1920x1080.jpg',
    ],
    desc:'Cuatro sobrevivientes contra hordas de infectados en el sur de Estados Unidos. Cooperativo para 4 jugadores, infectados especiales, armas cuerpo a cuerpo y el Director IA que hace cada partida distinta.',
    cardDesc:'Cooperativo zombie para 4. Nunca dos partidas iguales.',
    link:'LINK_DEL_JUEGO', hot:true, isNew:false,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Pentium 4 3.0 GHz'},{l:'GPU',v:'DirectX 9 (128 MB)'},{l:'Disco',v:'13 GB'},{l:'SO',v:'Windows 7/10'},{l:'DirectX',v:'v9.0c'}]
  },
  {
    id:'outlast', title:'Outlast', short:'OUT',
    genre:'terror', genreLabel:'Terror', year:2013, dev:'Red Barrels',
    rating:'8.7', size:'5 GB', version:'+ Whistleblower', lang:'Español', platform:'PC',
    cov:'cov-re',
    img:'https://cdn.cloudflare.steamstatic.com/steam/apps/238320/library_600x900.jpg',
    screenshots:[
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_de19e8b1f41d9594bf64d02424a0ec5046c733f5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_1b4cc24b78f404c69fa18d42e5d5b00873c8852f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/ss_c629aed2b6d7751222acb9bef1022338f9bc6b03.1920x1080.jpg',
    ],
    desc:'Un periodista entra al Mount Massive Asylum para investigar a una corporación. Sin armas, solo con una cámara de visión nocturna, tenés que correr y esconderte. Uno de los juegos de terror más intensos que existen.',
    cardDesc:'Sin armas. Solo una cámara y el miedo.',
    link:'LINK_DEL_JUEGO', hot:false, isNew:true,
    reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'Intel Core 2 Duo 2.2 GHz / AMD Athlon X2 2.7 GHz'},{l:'GPU',v:'NVIDIA GeForce 9800 / ATI Radeon HD 3xxx (512 MB)'},{l:'Disco',v:'5 GB'},{l:'SO',v:'Windows XP/7/10'},{l:'DirectX',v:'v9.0c'}]
  },
];

/* ════════════════════════════════════════════════════
   APLICACIONES — Igual que los juegos:
   img         → logo/portada de la app ('' = placeholder)
   screenshots → 3 capturas ('' = placeholder)
   link        → reemplazá 'LINK_DE_LA_APP' por tu link
   cat         → categoría (navegadores, utilidades,
                 multimedia, seguridad, diseno, desarrollo,
                 comunicacion)
════════════════════════════════════════════════════ */
const APP_CATS={
  navegadores:{label:'Navegadores',cov:'cov-nav'},
  utilidades:{label:'Utilidades',cov:'cov-util'},
  multimedia:{label:'Multimedia',cov:'cov-media'},
  seguridad:{label:'Seguridad',cov:'cov-sec'},
  diseno:{label:'Diseño',cov:'cov-design'},
  desarrollo:{label:'Desarrollo',cov:'cov-dev'},
  comunicacion:{label:'Comunicación',cov:'cov-chat'},
};
// Formato corto: [id, título, abreviatura, categoría, desarrollador, versión, tamaño, rating, descripción, descripción corta, hot, isNew]
let APPS = [
  ['chrome','Google Chrome','CHR','navegadores','Google','Última','120 MB','9.2','El navegador más usado del mundo. Rápido, seguro y sincronizado con tu cuenta de Google: marcadores, contraseñas y extensiones en todos tus dispositivos.','El navegador más usado del mundo.',true,false],
  ['firefox','Mozilla Firefox','FFX','navegadores','Mozilla','Última','90 MB','9.0','Navegador libre y de código abierto enfocado en la privacidad. Bloqueo de rastreadores incluido, miles de extensiones y gran consumo de memoria optimizado.','Libre, rápido y enfocado en tu privacidad.',false,false],
  ['brave','Brave Browser','BRV','navegadores','Brave Software','Última','110 MB','8.9','Navegador basado en Chromium que bloquea anuncios y rastreadores por defecto. Compatible con todas las extensiones de Chrome y más rápido al cargar páginas.','Bloquea anuncios y rastreadores por defecto.',false,false],
  ['operagx','Opera GX','OGX','navegadores','Opera','Última','100 MB','8.8','El navegador pensado para gamers. Limitadores de RAM, CPU y red, integración con Discord y Twitch, y personalización total de colores y sonidos.','El navegador para gamers.',true,false],
  ['winrar','WinRAR','RAR','utilidades','RARLAB','7.x','4 MB','9.1','El compresor de archivos clásico. Abre y crea archivos RAR y ZIP, y descomprime 7Z, ISO, TAR y muchos formatos más. Imprescindible para instalar juegos.','Comprimí y descomprimí RAR, ZIP y más.',true,false],
  ['7zip','7-Zip','7Z','utilidades','Igor Pavlov','24.x','2 MB','9.3','Compresor gratuito y de código abierto con una de las mejores tasas de compresión. Soporta 7z, ZIP, RAR, ISO y decenas de formatos.','Compresor libre con la mejor compresión.',false,false],
  ['ccleaner','CCleaner','CCL','utilidades','Piriform','Free','60 MB','8.3','Limpiá archivos temporales, caché del navegador y programas de inicio para que tu PC funcione más rápido.','Limpiá tu PC y ganá velocidad.',false,false],
  ['cpuz','CPU-Z','CPU','utilidades','CPUID','2.x','3 MB','9.0','Mostrá toda la información de tu procesador, placa madre, memoria RAM y gráfica. Ideal para saber si tu PC cumple los requisitos de un juego.','Conocé el hardware de tu PC al detalle.',false,false],
  ['hwmonitor','HWMonitor','HWM','utilidades','CPUID','1.x','2 MB','8.8','Monitoreá en tiempo real las temperaturas, voltajes y velocidades de ventiladores de tu PC.','Temperaturas y voltajes en tiempo real.',false,false],
  ['afterburner','MSI Afterburner','MSI','utilidades','MSI','4.6','50 MB','9.2','Overclock y monitoreo de tu placa de video. Mostrá FPS, temperatura y uso de GPU en pantalla mientras jugás.','Overclock y FPS en pantalla mientras jugás.',true,false],
  ['vlc','VLC Media Player','VLC','multimedia','VideoLAN','3.x','40 MB','9.4','Reproduce prácticamente cualquier formato de video y audio sin instalar códecs extra. Liviano, gratis y sin publicidad.','Reproduce todo. Sin códecs, sin vueltas.',true,false],
  ['audacity','Audacity','AUD','multimedia','Audacity Team','3.x','30 MB','8.9','Editor de audio gratuito para grabar, cortar, mezclar y aplicar efectos. Ideal para podcasts, música y limpiar ruido de grabaciones.','Grabá y editá audio gratis.',false,false],
  ['obs','OBS Studio','OBS','multimedia','OBS Project','30.x','130 MB','9.5','La herramienta favorita de streamers. Grabá tu pantalla y transmití en vivo a Twitch, YouTube y Kick con escenas, overlays y múltiples fuentes.','Grabá y transmití en vivo como un pro.',true,true],
  ['handbrake','HandBrake','HBK','multimedia','HandBrake Team','1.x','25 MB','8.7','Convertí videos a cualquier formato y comprimilos sin perder calidad. Presets listos para celulares, YouTube y más.','Convertí y comprimí videos fácil.',false,false],
  ['malwarebytes','Malwarebytes','MWB','seguridad','Malwarebytes','Free','250 MB','9.0','Detecta y elimina malware, adware y programas no deseados que los antivirus comunes pasan por alto.','Eliminá malware y adware.',false,false],
  ['avast','Avast Free Antivirus','AVS','seguridad','Avast','Free','300 MB','8.4','Antivirus gratuito con protección en tiempo real, escaneo de red Wi-Fi y modo juego para no interrumpir tus partidas.','Antivirus gratis con modo juego.',false,false],
  ['bitwarden','Bitwarden','BWD','seguridad','Bitwarden Inc.','Última','80 MB','9.2','Gestor de contraseñas gratuito y de código abierto. Guardá todas tus claves cifradas y sincronizalas en todos tus dispositivos.','Todas tus contraseñas, seguras.',false,true],
  ['gimp','GIMP','GMP','diseno','GIMP Team','2.10','300 MB','8.6','Editor de imágenes gratuito y potente, la alternativa libre a Photoshop. Capas, máscaras, filtros y soporte para plugins.','La alternativa gratis a Photoshop.',false,false],
  ['inkscape','Inkscape','INK','diseno','Inkscape Project','1.x','120 MB','8.7','Editor de gráficos vectoriales para crear logos, ilustraciones e íconos. Trabaja con SVG y exporta a PNG y PDF.','Diseño vectorial gratis.',false,false],
  ['canva','Canva','CNV','diseno','Canva','Desktop','200 MB','8.9','Diseñá publicaciones para redes, miniaturas de YouTube, presentaciones y más con miles de plantillas listas.','Miniaturas y posts en minutos.',true,false],
  ['vscode','Visual Studio Code','VSC','desarrollo','Microsoft','Última','95 MB','9.6','El editor de código más popular. Liviano, con resaltado para todos los lenguajes, terminal integrada, Git y miles de extensiones.','El editor de código más popular.',true,false],
  ['git','Git','GIT','desarrollo','Git Project','2.x','60 MB','9.4','Sistema de control de versiones usado en todo el mundo. Guardá el historial de tu código y trabajá en equipo con GitHub.','Control de versiones para tu código.',false,false],
  ['postman','Postman','PMN','desarrollo','Postman Inc.','Última','150 MB','8.8','Probá y documentá APIs con una interfaz simple. Ideal para desarrolladores web y backend.','Probá APIs fácilmente.',false,false],
  ['nodejs','Node.js','NOD','desarrollo','OpenJS Foundation','LTS','30 MB','9.3','Entorno para ejecutar JavaScript fuera del navegador. Base de miles de herramientas web modernas, incluye npm.','JavaScript fuera del navegador.',false,false],
  ['discord','Discord','DSC','comunicacion','Discord Inc.','Última','90 MB','9.3','Chat de voz, video y texto para gamers y comunidades. Creá servidores, compartí pantalla y jugá con amigos.','Voz y chat para jugar con amigos.',true,false],
  ['telegram','Telegram Desktop','TLG','comunicacion','Telegram FZ-LLC','Última','45 MB','9.0','Mensajería rápida y segura con grupos de hasta 200.000 personas, canales y envío de archivos de hasta 2 GB.','Mensajería rápida y sin límites.',false,false],
  ['zoom','Zoom','ZOM','comunicacion','Zoom Video','Última','100 MB','8.5','Videollamadas y reuniones online para trabajo o estudio. Compartí pantalla, grabá y usá fondos virtuales.','Videollamadas para trabajo y estudio.',false,false],
  ['whatsapp','WhatsApp Desktop','WSP','comunicacion','Meta','Última','150 MB','8.7','Usá WhatsApp en tu PC con notificaciones, llamadas y videollamadas. Sincronizado con tu celular.','WhatsApp en la PC.',false,false],
].map(a=>({
  id:a[0], title:a[1], short:a[2], cat:a[3], catLabel:APP_CATS[a[3]].label, dev:a[4],
  version:a[5], size:a[6], rating:a[7], desc:a[8], cardDesc:a[9], hot:a[10], isNew:a[11],
  lang:'Español', platform:'Windows', license:'Gratis', cov:APP_CATS[a[3]].cov,
  img:'', screenshots:['','',''], link:'LINK_DE_LA_APP',
  reqs:[{l:'SO',v:'Windows 10/11'},{l:'RAM',v:'2 GB'},{l:'Disco',v:a[6]},{l:'Licencia',v:'Gratuita'}]
}));
/* Para ponerle imagen o link a una app, agregalo acá abajo así:
   setApp('chrome',{img:'https://...', link:'https://exe.io/...'});  */
function setApp(id,data){const a=APPS.find(x=>x.id===id);if(a)Object.assign(a,data);}

/* ── LOGOS DE LAS APPS (automáticos) ──
   [logo de Simple Icons (o '' si no hay), color de la marca, sitio web oficial]
   Si una app no tiene logo en Simple Icons, se usa el ícono de su sitio web. */
const SI='https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
const APP_ICONS={
  chrome:['googlechrome','4285F4','google.com/chrome'], firefox:['firefoxbrowser','FF7139','mozilla.org'],
  brave:['brave','FB542B','brave.com'], operagx:['operagx','EE2950','opera.com'],
  winrar:['','6A2C91','win-rar.com'], '7zip':['7zip','3A3A3A','7-zip.org'], ccleaner:['ccleaner','CB2D29','ccleaner.com'],
  cpuz:['','4A6FA5','cpuid.com'], hwmonitor:['','4A6FA5','cpuid.com'], afterburner:['msi','D41E1E','msi.com'],
  vlc:['vlcmediaplayer','FF8800','videolan.org'], audacity:['audacity','2A4BD7','audacityteam.org'],
  obs:['obsstudio','5A5A6A','obsproject.com'], handbrake:['','C0392B','handbrake.fr'],
  malwarebytes:['malwarebytes','0D3ECC','malwarebytes.com'], avast:['avast','FF7800','avast.com'], bitwarden:['bitwarden','175DDC','bitwarden.com'],
  gimp:['gimp','7A6F55','gimp.org'], inkscape:['inkscape','3A3A3A','inkscape.org'], canva:['canva','00C4CC','canva.com'],
  vscode:['','007ACC','code.visualstudio.com'], git:['git','F05032','git-scm.com'], postman:['postman','FF6C37','postman.com'], nodejs:['nodedotjs','5FA04E','nodejs.org'],
  discord:['discord','5865F2','discord.com'], telegram:['telegram','26A5E4','telegram.org'], zoom:['zoom','0B5CFF','zoom.us'], whatsapp:['whatsapp','25D366','whatsapp.com'],
};
APPS.forEach(a=>{
  const ic=APP_ICONS[a.id]; if(!ic)return;
  a.icon=ic[0]?SI+ic[0]+'.svg':'https://www.google.com/s2/favicons?domain='+ic[2]+'&sz=128';
  a.iconMono=!!ic[0];          // los de Simple Icons son negros → se pintan de blanco
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

/* ── STATE ── */
let currentUser=null, currentFilter='todos', lbImages=[], lbIndex=0;
let homePage=1, appsPage=1, topPage=1, currentAppsFilter='todos', topMode='juegos';
const PER_PAGE=12, TOP_PER_PAGE=15;

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
let FB=false, auth=null, db=null;
try{
  if(typeof firebase!=='undefined'){
    firebase.initializeApp(firebaseConfig);
    auth=firebase.auth(); auth.languageCode='es';
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

/* ── SESIÓN (Firebase Auth) ── */
async function loadUser(user){
  try{
    const snap=await db.collection('users').doc(user.uid).get();
    USER_DOC=snap.exists?snap.data():{username:user.email.split('@')[0],email:user.email};
  }catch(e){fbWarn(e);USER_DOC={username:user.email.split('@')[0],email:user.email};}
  currentUser={id:user.uid,username:USER_DOC.username,email:user.email,isAdmin:USER_DOC.isAdmin===true};
  refreshHeader(); refreshHeaderAvatar();
  if(pendingWelcome){pendingWelcome=false;toast(`¡Bienvenido/a, ${USER_DOC.displayName||USER_DOC.username}! 🎮`,'success');}
  if(document.getElementById('page-game').classList.contains('active')&&window._ratingId)renderStarRating(window._ratingId);
}
function initAuth(){
  if(!FB)return;
  auth.onAuthStateChanged(user=>{
    if(registering)return;
    if(user){loadUser(user);return;}
    currentUser=null; USER_DOC=null;
    document.getElementById('authBtns').classList.remove('hidden');
    document.getElementById('userArea').classList.add('hidden');
  });
}
function authErr(e){
  const m={
    'auth/email-already-in-use':'Ya existe una cuenta con ese email.',
    'auth/invalid-email':'Email inválido.',
    'auth/weak-password':'La contraseña es muy débil (mínimo 6 caracteres).',
    'auth/user-not-found':'No existe cuenta con ese email.',
    'auth/wrong-password':'Contraseña incorrecta.',
    'auth/invalid-credential':'Email o contraseña incorrectos.',
    'auth/invalid-login-credentials':'Email o contraseña incorrectos.',
    'auth/too-many-requests':'Demasiados intentos. Esperá unos minutos.',
    'auth/network-request-failed':'Sin conexión. Revisá tu internet.',
  };
  return m[e&&e.code]||'Ocurrió un error. Probá de nuevo.';
}
async function resetPassword(){
  clearErrs();
  const email=document.getElementById('lEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fErr('lEmail','lEmailErr','Escribí tu email acá y tocá de nuevo.');return;}
  if(!FB){showGErr('Sin conexión con el servidor.');return;}
  try{await auth.sendPasswordResetEmail(email);toast('Te mandamos un email para cambiar la contraseña 📧','success');}
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
    data.count>0?`${data.count} calificaci${data.count===1?'ón':'ones'}`:'Sin calificaciones aún';

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

  if(prev>0){data.sum-=prev;data.count--;}
  data.sum+=value; data.count++;
  userRatings[key]=value;

  const g=GAMES.find(x=>x.id===gameId);
  if(g) g.rating=(data.sum/data.count).toFixed(1);

  writeRating(gameId,value-prev,prev>0?0:1,value);
  renderStarRating(gameId);
  refreshAfterRating(gameId,data);
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
  writeRating(gameId,-prev,-1,0);
  renderStarRating(gameId);
  refreshAfterRating(gameId,data);
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
  const userData=USER_DOC||{};
  const joined=userData.joined?new Date(userData.joined):new Date();

  const ab=document.getElementById('pfAvatarBig');
  if(prof.avatar){ab.innerHTML=`<img src="${prof.avatar}" alt="avatar">`;ab.style.background='none';}
  else{ab.innerHTML=currentUser.username.charAt(0).toUpperCase();ab.style.background='';}

  document.getElementById('pfUsername').textContent=prof.displayName||currentUser.username;
  document.getElementById('pfSince').textContent='Miembro desde '+joined.toLocaleDateString('es-AR',{year:'numeric',month:'long'});
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
  const file=e.target.files[0]; if(!file)return;
  if(file.size>2*1024*1024){toast('La imagen debe ser menor a 2MB.','error');return;}
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
      toast('Foto actualizada ✅','success');
    };
    im.onerror=()=>toast('No se pudo leer la imagen.','error');
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
    const isApp=h.type==='app';
    const g=(isApp?APPS:GAMES).find(x=>x.id===h.id);
    const dateStr=new Date(h.date).toLocaleDateString('es-AR',{day:'2-digit',month:'short',year:'numeric'});
    const thumbHtml=h.img
      ?`<img src="${h.img}" alt="${h.title}">`
      :`<div style="width:100%;height:100%;background:var(--card);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:.65rem;color:rgba(255,255,255,.2)" class="${h.cov||''}">${h.title.substring(0,3).toUpperCase()}</div>`;
    return `<div class="dl-hist-item" onclick="${isApp?'showApp':'showGame'}('${h.id}')">
      <div class="dl-hist-thumb">${thumbHtml}</div>
      <div class="dl-hist-info">
        <div class="dl-hist-name">${h.title}</div>
        <div class="dl-hist-date">${isApp?'App · ':''}Descargado el ${dateStr}</div>
      </div>
      ${g&&!isPlaceholderLink(g.link)?`<a href="${g.link}" target="_blank" onclick="event.stopPropagation()" class="dl-hist-again">↓ Descargar de nuevo</a>`:''}
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
  renderHomeGrid(); renderNovedades(); updateStats();
  updateDynamicDates();
  renderTopDownloaded();
  initAuth();
  // Trae contadores y estrellas de Firebase y vuelve a dibujar
  loadStats().then(()=>{
    applySavedRatings(); renderHomeGrid(); renderNovedades(); renderTopDownloaded(); updateStats();
    const act=document.querySelector('.page.active');
    if(act&&act.id==='page-topdescargas')renderTopDescargasPage();
    if(act&&act.id==='page-apps')renderAppsGrid();
    if(act&&act.id==='page-game'&&window._ratingId)renderStarRating(window._ratingId);
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
  } else if(['novedades','apps','topdescargas'].includes(h)){
    history.replaceState({page:h},'',location.href); goPageInternal(h);
  }
  // Escucha cuando el usuario usa la flechita atrás/adelante
  window.addEventListener('popstate', e=>{
    const state=e.state;
    if(!state){ goPageInternal('home'); return; }
    if(state.page==='game' && state.id) showGameInternal(state.id);
    else if(state.page==='app' && state.id) showAppInternal(state.id);
    else goPageInternal(state.page||'home');
  });
  // ══════════════════════════════════════════

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

function updateStats(){
  document.getElementById('statUsers').textContent=USERS_COUNT;
  document.getElementById('statGames').textContent=GAMES.length+'+';
  const sa=document.getElementById('statApps'); if(sa)sa.textContent=APPS.length+'+';
  const a=document.getElementById('aStatUsers'),b=document.getElementById('aStatJuegos'),c=document.getElementById('aStatAdmins');
  if(a)a.textContent=USERS_COUNT; if(b)b.textContent=GAMES.length;
}

/* ── PAGES ── */
// goPageInternal → solo cambia la vista, SIN tocar el historial
// Usada internamente por goPage y por el listener popstate
function goPageInternal(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+name); if(!t)return;
  t.classList.add('active');
  if(name!=='game')document.title='Visión Z — Descargas de Juegos y Aplicaciones para PC';
  document.documentElement.scrollTop=0; document.body.scrollTop=0;
  // Botones del nav: 0 Inicio · 1 Juegos · 2 Aplicaciones · 3 Más Descargados · 4 Novedades
  const navBtns=document.querySelectorAll('nav button');
  navBtns.forEach(b=>b.classList.remove('active'));
  const navIdx={home:0,apps:2,topdescargas:3,novedades:4}[name];
  if(navIdx!==undefined&&navBtns[navIdx])navBtns[navIdx].classList.add('active');
  if(name==='apps'){renderAppsGrid();}
  if(name==='topdescargas'){renderTopDescargasPage();}
  if(name==='admin'){updateStats();renderAdminUsers();}
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
  document.querySelectorAll('#page-home .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  else document.querySelectorAll('#page-home .filter-btn').forEach(b=>{if(b.dataset.genre===genre)b.classList.add('active');});
  const names={todos:'Todos los juegos',accion:'Acción',sandbox:'Sandbox',fps:'FPS',deportes:'Deportes',terror:'Terror',rpg:'RPG',aventura:'Aventura','conducción':'Conducción',estrategia:'Estrategia',pelea:'Pelea'};
  document.getElementById('gridLabel').textContent=names[genre]||'Juegos';
  homePage=1;
  renderHomeGrid();
  closeSearch();
}

/* ── BOTÓN "JUEGOS" DEL MENÚ: va al catálogo completo ── */
function goJuegos(){
  goPage('home'); setFilter('todos');
  const navBtns=document.querySelectorAll('nav button');
  navBtns.forEach(b=>b.classList.remove('active'));
  if(navBtns[1])navBtns[1].classList.add('active');
  setTimeout(()=>document.getElementById('filterBar').scrollIntoView({behavior:'smooth',block:'start'}),50);
}

/* ── GRILLA HOME CON PAGINACIÓN ── */
function renderHomeGrid(){
  const list=currentFilter==='todos'?GAMES:GAMES.filter(g=>g.genre===currentFilter);
  const pages=Math.max(1,Math.ceil(list.length/PER_PAGE));
  if(homePage>pages)homePage=pages;
  renderGrid(list.slice((homePage-1)*PER_PAGE,homePage*PER_PAGE));
  renderPagination('paginacion',list.length,homePage,PER_PAGE,'changeHomePage','juegos');
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
    <button class="pag-btn" ${page===1?'disabled':''} onclick="${fnName}(${page-1})">‹ Anterior</button>
    <div class="pag-nums">${nums.map(n=>n==='…'?'<span class="pag-dots">…</span>':`<button class="pag-num ${n===page?'active':''}" onclick="${fnName}(${n})">${n}</button>`).join('')}</div>
    <button class="pag-btn" ${page===pages?'disabled':''} onclick="${fnName}(${page+1})">Siguiente ›</button>
    <div class="pag-info">Mostrando ${from}–${to} de ${total} ${itemName}</div>
  </div>`;
}

/* ── LINKS PENDIENTES ── */
function isPlaceholderLink(link){return !link||link==='LINK_DEL_JUEGO'||link==='LINK_DE_LA_APP';}

/* ── CALIFICACIONES GUARDADAS ──
   Al cargar la página aplica el promedio de votos guardados
   (antes se perdía al recargar y volvía al rating original) */
function applySavedRatings(){
  const r=getRatings();
  GAMES.forEach(g=>{const d=r[g.id];if(d&&d.count>0)g.rating=(d.sum/d.count).toFixed(1);});
  APPS.forEach(a=>{const d=r['app_'+a.id];if(d&&d.count>0)a.rating=(d.sum/d.count).toFixed(1);});
}
function refreshAfterRating(ratingId,data){
  if(ratingId.startsWith('app_')){
    const a=APPS.find(x=>'app_'+x.id===ratingId);
    if(a&&data.count>0)a.rating=(data.sum/data.count).toFixed(1);
    renderAppsGrid();
  } else renderHomeGrid();
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
    const meta=isApps?`${x.catLabel} · ${x.dev}`:`${x.genreLabel} · ${x.year}`;
    return `<div class="top-item top-item-lg" onclick="${isApps?'showApp':'showGame'}('${x.id}')">
      <div class="top-rank ${rankClass[rank-1]||''}">${rank}</div>
      <div class="top-thumb ${x.cov}" style="${isApps&&!x.img?appBg(x):''}">${x.img?`<img src="${x.img}" alt="${x.title}" onerror="this.remove()">`:(isApps&&x.icon?appIconHtml(x,'top-app-icon'):x.short)}</div>
      <div class="top-info"><div class="top-name">${x.title}</div><div class="top-meta">${meta}</div></div>
      <div class="top-side"><div class="top-rat">★ ${x.rating}</div><div class="top-dl-count">↓ ${x.dlCount} descarga${x.dlCount===1?'':'s'}</div></div>
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
  document.getElementById('appsGridLabel').textContent=cat==='todos'?'Todas las aplicaciones':APP_CATS[cat].label;
  renderAppsGrid();
}
function renderAppsGrid(){
  const grid=document.getElementById('appsGrid'); if(!grid)return;
  const list=currentAppsFilter==='todos'?APPS:APPS.filter(a=>a.cat===currentAppsFilter);
  const pages=Math.max(1,Math.ceil(list.length/PER_PAGE));
  if(appsPage>pages)appsPage=pages;
  grid.innerHTML='';
  if(!list.length){grid.innerHTML=`<div class="no-results"><h3>Sin resultados</h3><p>No hay aplicaciones en esta categoría.</p></div>`;}
  list.slice((appsPage-1)*PER_PAGE,appsPage*PER_PAGE).forEach((a,i)=>{
    const d=document.createElement('div');
    d.className='game-card app-card'; d.style.animationDelay=`${i*.05}s`;
    const badge=a.isNew?`<span class="c-badge new">Nuevo</span>`:a.hot?`<span class="c-badge hot">Popular</span>`:`<span class="c-badge app">${a.catLabel}</span>`;
    const coverHtml=a.img?`<img src="${a.img}" alt="${a.title}" class="cover-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:'';
    const phInner=a.icon?`${appIconHtml(a)}<span class="app-ph-short">${a.short}</span>`:a.short;
    d.innerHTML=`${coverHtml}<div class="cover-ph ${a.cov}" style="${a.img?'display:none;':''}${appBg(a)}">${phInner}</div>${badge}<span class="c-rating">★ ${a.rating}</span><div class="c-title-bar"><h2>${a.title}</h2><div class="c-yr">${a.catLabel} · ${a.dev}</div></div><div class="c-hover"><h2>${a.title}</h2><p>${a.cardDesc}</p><span class="c-cta app">Ver app →</span></div>`;
    d.onclick=()=>showApp(a.id);
    grid.appendChild(d);
  });
  renderPagination('paginacion-apps',list.length,appsPage,PER_PAGE,'changeAppsPage','apps');
}
function changeAppsPage(p){
  appsPage=p; renderAppsGrid();
  document.getElementById('appsGridLabel').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ── DETALLE DE APP (usa la misma página de detalle que los juegos) ── */
function showAppInternal(id){
  const a=APPS.find(x=>x.id===id); if(!a)return;
  trackView('app_'+id);
  fillDetail(a,{
    ratingId:'app_'+id,
    meta:`<span class="m-badge app">${a.catLabel}</span><span class="m-badge b2">${a.dev}</span><span class="m-rat">★ ${a.rating}</span><span class="m-txt">${a.license} · Windows</span>`,
    info:[{l:'Versión',v:a.version},{l:'Tamaño',v:a.size},{l:'Licencia',v:a.license},{l:'Plataforma',v:a.platform}],
    reqsTitle:'Requisitos',
    boxTitle:'Descargar aplicación',
    back:{label:'← Aplicaciones',page:'apps'},
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
// showGameInternal → muestra el juego SIN tocar el historial
// Usada por el listener popstate para no crear entradas duplicadas
function showGameInternal(id){
  const g=GAMES.find(x=>x.id===id); if(!g)return;
  trackView(id);
  fillDetail(g,{
    ratingId:id,
    meta:`<span class="m-badge">${g.genreLabel}</span><span class="m-badge b2">${g.dev}</span><span class="m-rat">★ ${g.rating}</span><span class="m-txt">${g.year} · PC</span>`,
    info:[{l:'Versión',v:g.version},{l:'Tamaño',v:g.size},{l:'Idioma',v:g.lang},{l:'Plataforma',v:g.platform}],
    reqsTitle:'Requisitos mínimos',
    boxTitle:'Descargar juego',
    back:{label:'← Juegos',page:'home'},
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
  document.title=`${g.title} — Descargar gratis | Visión Z`;

  document.getElementById('dBg').className=`ghb-bg ${g.cov}`;
  document.getElementById('dBg').removeAttribute('style');
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
  document.getElementById('dMeta').innerHTML=o.meta;
  document.getElementById('dReqs').innerHTML=g.reqs.map(r=>`<div class="req-item"><div class="req-l">${r.l}</div><div class="req-v">${r.v}</div></div>`).join('');
  document.getElementById('dInfo').innerHTML=o.info.map(r=>`<div class="dl-line"><span>${r.l}</span><span>${r.v}</span></div>`).join('');

  renderStarRating(id);

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
      item.innerHTML=`<img src="${src}" alt="Screenshot ${idx+1}" onerror="this.parentElement.className='ss-item';this.parentElement.innerHTML='<div class=ss-placeholder><span>🖼️</span>${ssLabels[idx]}</div>'">`;
      const lbIdx=lbImages.indexOf(src);
      item.onclick=()=>openLightbox(lbIdx);
    } else {
      item.innerHTML=`<div class="ss-placeholder"><span>🖼️</span>${ssLabels[idx]}</div>`;
    }
    ssBox.appendChild(item);
  });

  const btn=document.getElementById('dlBtn'), note=document.getElementById('dlNote');
  btn.onclick=null; btn.classList.remove('locked');
  if(!isPlaceholderLink(g.link)){
    btn.href=g.link; btn.target='_blank'; btn.rel='noopener';
    btn.textContent='↓ Descargar gratis';
    btn.onclick=o.onDownload;
    note.innerHTML=currentUser
      ? `Como: <strong style="color:var(--text)">${currentUser.username}</strong>`
      : `<span style="color:var(--green)">✓ Descarga gratuita · Sin registro</span>`;
  } else {
    btn.href='#'; btn.removeAttribute('target'); btn.classList.add('locked');
    btn.textContent='⏳ Próximamente';
    note.innerHTML=`<span style="color:var(--muted)">Link de descarga en preparación</span>`;
  }

  goPageInternal('game');
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
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  const dd=document.getElementById('searchDD');
  if(!q){dd.classList.remove('open');return;}
  const res=GAMES.filter(g=>g.title.toLowerCase().includes(q)||g.genreLabel.toLowerCase().includes(q)||g.dev.toLowerCase().includes(q));
  const resApps=APPS.filter(a=>a.title.toLowerCase().includes(q)||a.catLabel.toLowerCase().includes(q)||a.dev.toLowerCase().includes(q));
  dd.innerHTML='';
  const safeQ=q.replace(/[<>&"]/g,'');
  if(!res.length&&!resApps.length){dd.innerHTML=`<div class="search-empty">Sin resultados para "<strong>${safeQ}</strong>"</div>`;}
  else{
    res.slice(0,6).forEach(g=>{
      const btn=document.createElement('button');
      btn.className='sri';
      btn.innerHTML=`<div class="sri-thumb ${g.cov}">${g.short}</div><div><div class="sri-name">${g.title}</div><div class="sri-genre">Juego · ${g.genreLabel} · ${g.year}</div></div><span style="color:var(--gold);font-size:.78rem;margin-left:auto">★ ${g.rating}</span>`;
      btn.onclick=()=>{closeSearch();showGame(g.id);};
      dd.appendChild(btn);
    });
    resApps.slice(0,4).forEach(a=>{
      const btn=document.createElement('button');
      btn.className='sri';
      btn.innerHTML=`<div class="sri-thumb ${a.cov}">${a.short}</div><div><div class="sri-name">${a.title}</div><div class="sri-genre">App · ${a.catLabel}</div></div><span style="color:var(--gold);font-size:.78rem;margin-left:auto">★ ${a.rating}</span>`;
      btn.onclick=()=>{closeSearch();showApp(a.id);};
      dd.appendChild(btn);
    });
  }
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
async function doLogin(){
  clearErrs();
  const email=document.getElementById('lEmail').value.trim(),pass=document.getElementById('lPass').value;
  let err=false;
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('lEmail','lEmailErr','Email inválido.');
  if(!pass)err=fErr('lPass','lPassErr','Ingresá tu contraseña.')||err;
  if(err)return;
  if(!FB){showGErr('Sin conexión con el servidor. Probá recargar la página.');return;}
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
  if(!/^[A-Za-z0-9_.-]{3,20}$/.test(username))err=fErr('rUser','rUserErr','De 3 a 20 caracteres: letras, números, _ . -');
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))err=fErr('rEmail','rEmailErr','Email inválido.')||err;
  if(pass.length<6)err=fErr('rPass','rPassErr','Mínimo 6 caracteres.')||err;
  if(pass!==pass2)err=fErr('rPass2','rPass2Err','Las contraseñas no coinciden.')||err;
  if(err)return;
  if(!FB){showGErr('Sin conexión con el servidor. Probá recargar la página.');return;}
  const lower=username.toLowerCase();
  let cred=null;
  try{
    const taken=await db.collection('usernames').doc(lower).get();
    if(taken.exists){showGErr('Ese usuario ya está en uso.');return;}
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
    document.getElementById('mSuccessMsg').textContent='¡Cuenta creada!';
    document.getElementById('mSuccessSub').textContent=`Bienvenido/a, ${username} 🎮`;
    document.getElementById('mSuccess').classList.add('show');
    setTimeout(()=>{closeModal();toast(`¡Bienvenido/a, ${username}! 🎮`,'success');},1800);
  }catch(e){
    registering=false;
    // Si se creó la cuenta pero falló guardar el perfil, la borramos para no dejarla a medias
    if(cred&&cred.user){try{await cred.user.delete();}catch{}}
    showGErr(e&&e.code&&e.code.startsWith('auth/')?authErr(e):'No se pudo crear la cuenta. Probá con otro nombre de usuario.');
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
function logout(){const name=currentUser?.username||'';currentUser=null;clearSess();document.getElementById('authBtns').classList.remove('hidden');document.getElementById('userArea').classList.add('hidden');closeDD();toast(`Hasta luego, ${name}! 👋`,'info');goPage('home');}

/* ── ADMIN ── */
async function renderAdminUsers(){
  const tbody=document.getElementById('adminUsersTbody');if(!tbody)return;
  const msg=t=>`<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:1.5rem">${t}</td></tr>`;
  if(!FB||!currentUser||!currentUser.isAdmin){tbody.innerHTML=msg('Solo los administradores pueden ver esta lista.');return;}
  tbody.innerHTML=msg('Cargando usuarios...');
  try{
    const snap=await db.collection('users').get();
    const users=snap.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(a.joined||'').localeCompare(b.joined||''));
    tbody.innerHTML=users.map((u,i)=>`<tr><td style="color:var(--muted)">${i+1}</td><td><strong style="color:var(--white)">${esc(u.username)}</strong></td><td>${esc(u.email)}</td><td>${u.joined?new Date(u.joined).toLocaleDateString('es-AR'):'—'}</td><td><span class="tbl-badge ${u.isAdmin?'admin':'ok'}">${u.isAdmin?'Admin':'Usuario'}</span></td><td>${u.isAdmin?'':`<button class="admin-btn danger" onclick="deleteUser('${esc(u.id)}','${esc((u.username||'').toLowerCase())}')">Eliminar</button>`}</td></tr>`).join('')||msg('No hay usuarios.');
    const a=document.getElementById('aStatUsers'),c=document.getElementById('aStatAdmins');
    if(a)a.textContent=users.length; if(c)c.textContent=users.filter(x=>x.isAdmin).length;
  }catch(e){fbWarn(e);tbody.innerHTML=msg('No se pudo cargar la lista. Revisá las reglas de Firestore.');}
}
async function deleteUser(id,uname){
  if(!confirm('¿Eliminar el perfil de este usuario?'))return;
  try{
    await db.collection('users').doc(id).delete();
    if(uname)await db.collection('usernames').doc(uname).delete();
    renderAdminUsers();
    toast('Perfil eliminado. Para borrar también su login, hacelo desde Firebase → Authentication.','info');
  }catch(e){fbWarn(e);toast('No se pudo eliminar.','error');}
}
function adminAddGame(){
  const title=document.getElementById('af-title').value.trim(),dev=document.getElementById('af-dev').value.trim();
  const year=parseInt(document.getElementById('af-year').value)||2024,genre=document.getElementById('af-genre').value;
  const version=document.getElementById('af-version').value.trim()||'1.0',size=document.getElementById('af-size').value.trim()||'N/D';
  const rating=document.getElementById('af-rating').value.trim()||'8.0',link=document.getElementById('af-link').value.trim()||'LINK_DEL_JUEGO';
  const cardesc=document.getElementById('af-cardesc').value.trim(),desc=document.getElementById('af-desc').value.trim();
  if(!title||!dev||!desc){toast('Completá título, desarrolladora y descripción.','error');return;}
  const gl={accion:'Acción',fps:'FPS',sandbox:'Sandbox',deportes:'Deportes',terror:'Terror',aventura:'Aventura',rpg:'RPG','conducción':'Conducción',estrategia:'Estrategia',pelea:'Pelea'};
  const cm={accion:'cov-gta',fps:'cov-fps',sandbox:'cov-mc',deportes:'cov-pes',terror:'cov-re',aventura:'cov-aventura',rpg:'cov-rpg','conducción':'cov-conduccion',estrategia:'cov-estrategia',pelea:'cov-pelea'};
  GAMES.push({id:title.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')+'-'+Date.now(),title,dev,year,genre,genreLabel:gl[genre]||genre,short:title.substring(0,4).toUpperCase(),rating,size,version,lang:'Español',platform:'PC',cov:cm[genre]||'cov-gta',img:'',screenshots:['','',''],desc:desc||'Descripción no disponible.',cardDesc:cardesc||desc.substring(0,60)+'...',link,hot:false,isNew:true,reqs:[{l:'RAM',v:'2 GB'},{l:'CPU',v:'2 GHz'},{l:'GPU',v:'512 MB'},{l:'Disco',v:size},{l:'SO',v:'Windows 7+'},{l:'DirectX',v:'v11'}]});
  updateStats();renderHomeGrid();renderNovedades();
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