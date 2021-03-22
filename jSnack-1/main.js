// JSNACK 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

// creo array di bici
const biciclette = [
    {
      nome: "Velocipide Morbidelli",
      peso: 0.5,
    },
    {
      nome: "bIkea",
      peso: 0.8,
    },
    {
      nome: "Biciletta Prosciuttelli",
      peso: 0.2,
    },
    {
      nome: "Velox Leggerozzi",
      peso: 0.1,
    },
  ];

  console.log(biciclette);

  // dichiaro una variabile che prenda la prima bici dell'array
  let biciLeggerina = biciclette[0];
  let pesinoMinimino = biciclette[0].peso;

  // col foreach confronto i pesi di tutte le bici, e se il peso risulta minore della variabile allora la sovrascrive
  biciclette.forEach((bici) => {
    if (bici.peso < pesinoMinimino ) {
      pesinoMinimino = bici.peso;
      biciLeggerina = bici.nome;
    }
  });

  console.log("La bici più leggerina è: ", biciLeggerina, "e pesa: ", pesinoMinimino, " chilinilini");

//   // filtro l'array dicendo che la prima bici dell'array, quindi la più òleggera, sovrascriverà la variabile
// const bicina = biciclette.filter((bici) => bici.peso == biciLeggerina);
// console.log(`La bici più leggera è la ${bicina[0].nome} e pesa ${bicina[0].peso}`);
