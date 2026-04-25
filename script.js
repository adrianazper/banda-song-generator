const songs = [
    "Mi Gusto Es", "Mi Ranchito", "El Tarasco", "Cuanto Me Gusto Este Rancho", "Las Feas", "La Vaquilla",
    "Carta Esther", "Amor A La Ligera", "La Nena", "Provocame", "Pa Ya Y Paca", "El Esquimal", "Dos Amigos", "30 Cartas", "Ilusion 89",
    "Toro De Once", "Arriba Pichataro", "La Rabia", "La Cuichi", "La Morena", "Que Te Pasa", "Canchame", "La Novia Del Pajarillo",
    "Por Una Mujer Casada", "Cielito Lindo", "El Rey", "Tragos De Amargo Licor", "La Mejor De Todas", "Amor Maldito", "Corazon Duro",
    "Regalo De Dios", "Tiburon", "La Yaquesita", "Pavido Navido", "La Iguana", "La Boda Del Huitlacoche", "Por Ese Calle Vive",
    "Andamos Mejor", "Puno De Tierra", "Por Ella", "Arboles De La Barranca", "Un Rinconcito en el Cielo", "Cuatro Meses",
    "El Muchacho Alegre", "El Chubasco", "El Molino", "El Centenario", "Reproches Al Viento", "Corrido De Nayarit", "Mi Lindo Nayarit",
    
];

document.getElementById("generateBtn").addEventListener("click", function () {
  const random = Math.floor(Math.random() * songs.length);
  document.getElementById("result").textContent = songs[random];
});