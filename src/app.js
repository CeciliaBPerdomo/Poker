/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  //event.preventDefault();

  function generarCarta() {
    let palos = ["♦", "♥", "♠", "♣"];
    let palo = palos[Math.floor(Math.random() * palos.length)];

    let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numero = numeros[Math.floor(Math.random() * numeros.length)];

    // Palo
    document.getElementById("palo-izq").innerHTML = palo;
    document.getElementById("palo-der").innerHTML = palo;

    // Numero
    document.getElementById("numerocard").innerHTML = numero;

    if (palo == "♥" || palo == "♦") {
      //Se pinta de rojo las cartas de corazon y diamantes
      document.getElementById("palo-izq").style.color = "red";
      document.getElementById("palo-der").style.color = "red";
      document.getElementById("numerocard").style.color = "red";
    }
  }

  generarCarta();

  //Genera la nueva carta con el boton
  document.getElementById("boton").addEventListener("click", generarCarta);

  //Genera una nueva carta en 10 seg
  setTimeout(generarCarta, 10000);

  //Cambia el tamano de la carta
  // document
  //   .getElementById("tamano")
  //   .addEventListener("click", function tamanoCarta() {
  //     Cambia el alto de la carta
  //     console.log(
  //       "Alto:" + parseInt(document.getElementById("carta").style.height)
  //     );
  //     document.getElementById("carta").style.height =
  //       document.getElementById("alto").value + "%";

  //     Cambia el ancho de la carta
  //     console.log(
  //       "Ancho:" + parseInt(document.getElementById("carta").style.width)
  //     );
  //     document.getElementById("carta").style.width =
  //       document.getElementById("ancho").value + "%";
  //   });
};
