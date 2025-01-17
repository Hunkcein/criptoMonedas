//variables globales
const criptomonedasSelect = document.querySelector("#criptomonedas");
const formulario = document.querySelector("#formulario");
const monedaSelect = document.querySelector("#moneda");
const resultado = document.querySelector("#resultado");


//objetos
const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

// Crear un promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  formulario.addEventListener("submit", submitFormulario);

  criptomonedasSelect.addEventListener("change", leervalor);

  monedaSelect.addEventListener("change", leervalor);
});

function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

function leervalor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  // Validar
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  //consultar la api con los resultados
  consultarAPI();

}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector(".error");  
  
    if (!existeAlerta) {
      const divAlerta = document.createElement("div");
      divAlerta.classList.add("error");
      divAlerta.textContent = mensaje;
  
      formulario.appendChild(divAlerta);
  
      setTimeout(() => {
        divAlerta.remove();
      }, 3000);
    }
  }
  
function consultarAPI()  {
    const { moneda, criptomoneda } = objBusqueda;
  
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
  
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((cotizacion) => {
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
      });
  };

  function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, CHANGEDAY, CHANGEPCTHOUR, LASTUPDATE,  } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: ${PRICE}`;

    const precioAlta = document.createElement('p');
    precioAlta.classList.add('precio');
    precioAlta.innerHTML = `El precio mas alto del dia es: ${HIGHDAY}`;

    const precioBajo = document.createElement('p'); 
    precioBajo.classList.add('precio');
    precioBajo.innerHTML = `El precio mas bajo del dia es: ${LOWDAY}`;

    const variacion = document.createElement('p');
    variacion.classList.add('precio');
    variacion.innerHTML = `La variacion de la moneda es: <span>${CHANGEPCT24HOUR}%</span>`;

    const variacionDia = document.createElement('p');
    variacionDia.classList.add('precio');
    variacionDia.innerHTML = `La variacion del dia es: <span>${CHANGEDAY}%</span>`;

    const variacionHora = document.createElement('p');
    variacionHora.classList.add('precio');
    variacionHora.innerHTML = `La variacion de la hora es: <span>${CHANGEPCTHOUR}%</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.classList.add('precio');
    ultimaActualizacion.innerHTML = `La ultima actualizacion es: ${LASTUPDATE}`;        

    
    resultado.appendChild(precio);
    resultado.appendChild(precioAlta);
    resultado.appendChild(precioBajo);
    resultado.appendChild(variacion);
    resultado.appendChild(variacionDia);    
    resultado.appendChild(variacionHora);
    resultado.appendChild(ultimaActualizacion);
  }

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }