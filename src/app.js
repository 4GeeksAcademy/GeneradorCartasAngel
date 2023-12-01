/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadorNumero() {
    let valores = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    let valoresrandom = Math.floor(Math.random() * valores.length);
    return valores[valoresrandom];
  }

  function generadorSimbolo() {
    let simbolo = ["♥", "♦", "♣", "♠"];
    let simbolorandom = Math.floor(Math.random() * simbolo.length);
    return simbolo[simbolorandom];
  }
  let simboloRandom = generadorSimbolo();
  document.querySelector("#top").innerHTML = simboloRandom;
  document.querySelector("#bottom").innerHTML = simboloRandom;
  document.querySelector("#cardNumero").innerHTML = generadorNumero();

  if (simboloRandom == "♥" || simboloRandom == "♦") {
    document.getElementById("top").style.color = "red";
    document.getElementById("bottom").style.color = "red";
  } else {
    document.getElementById("top").style.color = "black";
    document.getElementById("bottom").style.color = "black";
  }
  console.log(simboloRandom);
  console.log(generadorNumero());
};
