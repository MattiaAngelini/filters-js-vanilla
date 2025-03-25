const cars = [
      {
        "id": 1,
        "marca": "Fiat",
        "modello": "Panda",
        "anno": 2015,
        "colore": "rosso",
        "prezzo": 5000,
        "carburante": "benzina",
        "cilindrata": 1200
      },
      {
        "id": 2,
        "marca": "Ford",
        "modello": "Focus",
        "anno": 2018,
        "colore": "blu",
        "prezzo": 15000,
        "carburante": "diesel",
        "cilindrata": 1600
      },
      {
        "id": 3,
        "marca": "Volkswagen",
        "modello": "Golf",
        "anno": 2020,
        "colore": "nero",
        "prezzo": 20000,
        "carburante": "benzina",
        "cilindrata": 1400
      },
      {
        "id": 4,
        "marca": "Audi",
        "modello": "A3",
        "anno": 2019,
        "colore": "grigio",
        "prezzo": 25000,
        "carburante": "diesel",
        "cilindrata": 2000
      },
      {
        "id": 5,
        "marca": "BMW",
        "modello": "Serie 1",
        "anno": 2017,
        "colore": "bianco",
        "prezzo": 22000,
        "carburante": "benzina",
        "cilindrata": 1800
      },
      {
        "id": 6,
        "marca": "Mercedes",
        "modello": "Classe A",
        "anno": 2021,
        "colore": "argento",
        "prezzo": 30000,
        "carburante": "diesel",
        "cilindrata": 2200
      },
      {
        "id": 7,
        "marca": "Renault",
        "modello": "Clio",
        "anno": 2016,
        "colore": "verde",
        "prezzo": 8000,
        "carburante": "benzina",
        "cilindrata": 1000
      },
      {
        "id": 8,
        "marca": "Peugeot",
        "modello": "208",
        "anno": 2018,
        "colore": "giallo",
        "prezzo": 12000,
        "carburante": "diesel",
        "cilindrata": 1500
      },
      {
        "id": 9,
        "marca": "Toyota",
        "modello": "Yaris",
        "anno": 2020,
        "colore": "rosso",
        "prezzo": 18000,
        "carburante": "ibrido",
        "cilindrata": 1500
      },
      {
        "id": 10,
        "marca": "Hyundai",
        "modello": "i20",
        "anno": 2019,
        "colore": "blu",
        "prezzo": 14000,
        "carburante": "benzina",
        "cilindrata": 1200
      },
      {
        "id": 11,
        "marca": "Kia",
        "modello": "Rio",
        "anno": 2017,
        "colore": "nero",
        "prezzo": 11000,
        "carburante": "diesel",
        "cilindrata": 1400
      },
      {
        "id": 12,
        "marca": "Opel",
        "modello": "Corsa",
        "anno": 2018,
        "colore": "bianco",
        "prezzo": 13000,
        "carburante": "benzina",
        "cilindrata": 1000
      },
      {
        "id": 13,
        "marca": "Citroen",
        "modello": "C3",
        "anno": 2016,
        "colore": "grigio",
        "prezzo": 9000,
        "carburante": "diesel",
        "cilindrata": 1600
      },
      {
        "id": 14,
        "marca": "Seat",
        "modello": "Ibiza",
        "anno": 2020,
        "colore": "rosso",
        "prezzo": 16000,
        "carburante": "benzina",
        "cilindrata": 1000
      },
      {
        "id": 15,
        "marca": "Skoda",
        "modello": "Fabia",
        "anno": 2019,
        "colore": "verde",
        "prezzo": 15000,
        "carburante": "diesel",
        "cilindrata": 1200
      },
      {
        "id": 16,
        "marca": "Dacia",
        "modello": "Sandero",
        "anno": 2017,
        "colore": "blu",
        "prezzo": 7000,
        "carburante": "benzina",
        "cilindrata": 900
      },
      {
        "id": 17,
        "marca": "Suzuki",
        "modello": "Swift",
        "anno": 2018,
        "colore": "grigio",
        "prezzo": 12000,
        "carburante": "benzina",
        "cilindrata": 1300
      },
      {
        "id": 18,
        "marca": "Mazda",
        "modello": "2",
        "anno": 2020,
        "colore": "rosso",
        "prezzo": 17000,
        "carburante": "diesel",
        "cilindrata": 1500
      },
      {
        "id": 19,
        "marca": "Honda",
        "modello": "Jazz",
        "anno": 2019,
        "colore": "nero",
        "prezzo": 16000,
        "carburante": "ibrido",
        "cilindrata": 1300
      },
      {
        "id": 20,
        "marca": "Volvo",
        "modello": "V40",
        "anno": 2018,
        "colore": "argento",
        "prezzo": 22000,
        "carburante": "diesel",
        "cilindrata": 2000
      }
    ]
  
  const container = document.getElementById('container')
  const button = document.getElementById('btn')

// Funzione per filtrare le auto
function filterCars() {
  // Ottieni i valori inseriti dall'utente
  const modelInput = document.getElementById("model").value.toLowerCase();
  const yearInput = parseInt(document.getElementById("year").value)
  const fuelInput = document.getElementById("fuel").value.toLowerCase();
  const ccInput = parseInt(document.getElementById("cc").value)
  const priceInput = parseInt(document.getElementById("price").value) 

  // Filtra le auto, utilizzo filter()
  const filteredCars = cars.filter((car) => {
    return (
      (modelInput === "" ||
        car.marca.toLowerCase().includes(modelInput) ||
        car.modello.toLowerCase().includes(modelInput)) &&
      (isNaN(yearInput) || car.anno === yearInput) &&
      (fuelInput === "" || car.carburante.toLowerCase() === fuelInput) &&
      (isNaN(ccInput) || car.cilindrata === ccInput) &&
      (isNaN(priceInput) || car.prezzo === priceInput)
    );
  });

  printCards(filteredCars);
}

// Funzione per stampare le auto filtrate
function printCards(arr) {

  container.innerHTML = ""; //* Svuoto il contenitore prima di stampare nuove cards

  arr.forEach((car) => {
    //era meglio creare template con innerHTML***
    const card = document.createElement("div");
    card.classList.add("card", "p-3", "m-2",);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = `${car.marca} ${car.modello}`;
    const year = document.createElement("p");
    year.classList.add("card-text");
    year.textContent = `Anno: ${car.anno}`;
    const fuel = document.createElement("p");
    fuel.classList.add("card-text");
    fuel.textContent = `Carburante: ${car.carburante}`;
    const cc = document.createElement("p");
    cc.classList.add("card-text");
    cc.textContent = `Cilindrata: ${car.cilindrata} cc`;
    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `Prezzo: €${car.prezzo}`;

    // Append elementi alla card
    cardBody.appendChild(title);
    cardBody.appendChild(year);
    cardBody.appendChild(fuel);
    cardBody.appendChild(cc);
    cardBody.appendChild(price);
    card.appendChild(cardBody);
    container.appendChild(card);
  });
}

button.addEventListener("click", filterCars);

   