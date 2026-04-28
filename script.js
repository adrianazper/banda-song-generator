
const cumbias = ["Popurri Las Feas (DO y Sib)", "Cauhates Pistaches (RE)", "Provocame (RE)", "Tamarindo (FA)", "La Nena ()",
  "Popurri Pa Ya Y Paca ()", "Popurri La Yaquesita ()", "Canchame ()", "La Morena ()", "Que Te Pasa ()", "Cinco De Te ()",
  "La Chica Fresa ()", "Palinos Chinos ()", "Por Ella ()", "Hola Corazon ()", "Si Tu Boquita Fuera ()", "Al Ritmo de la Banda ()",
  "Bailando Y Quebrando ()", "La Peñada ()"
    
];

const rancheras = ["Mi Ranchito (FA)", "Cuanto Me Gusta Este Ranche (FA)", "Por Ese Calle Vive (FA)", "El Tarasco (Sib)",
  "Carta Esther (FA)", "Amor A La Ligera ()", "Suspiros (FA)", "Cielo (DO)", "Popurri 30 Cartas (Sol y FA)", "Sin Fortuna ()",
  "Por Una Mujer Casada ()", "Popurri El Rey ()", "Acábame de Matar ()", "Cuatro Meses ()", "El Chubasco (FA)", "Reproches Al Viento ()",
  "Mi Lindo Nayarit ()", "Caminos De Michoacan ()", "Arboles de la Barranca ()", "Un Puño de Tierra ()", "Por Las Calles De Chihuahua ()",
  "La Novia Del Pajarillo ()", 

]

const corridos = [
  "El Molino (DO)", "Dos Amigos ()", "Corrido de Nayarit ()", "El Centenario ()", "Andamos Mejor ()", "Corrido de Juan Martha ()",
  "El Muchacho Alegre ()"
]

const zapateados = ["La Vaquilla ()", "El Sinaloense ()", "Ilusion 89 ()", "Toro de Once ()", "Toro Viejo ()", "Arriba Pichataro ()",
  "La Varquita ()", "La Rabia ()", "La Cuichi ()", "Pavido Navido ()", "Popurri La Boda Del Huitlacoche ()",
]

const romanticas = ["Amor Maldito ()", "Corazon Duro ()", "Un Rinconcito en el Cielo ()", "En Los Puritos Huesos ()", "La Mejor De Todas ()",
  "Regalo de Dios ()",

]

const categories = {
  Cumbias: cumbias,
  Rancheras: rancheras,
  Corridos: corridos,
  Zapateados: zapateados,
  Romanticas: romanticas
};

document.getElementById("generateBtn").addEventListener("click", function () {
  const selected = document.getElementById("myFilter").value;

  let songs;

  if (selected === "All") {
    songs = [
      ...cumbias,
      ...rancheras,
      ...corridos,
      ...zapateados,
      ...romanticas
    ];
  } else {
    songs = categories[selected];
  }

  const random = Math.floor(Math.random() * songs.length);

  document.getElementById("result").textContent = songs[random];
});