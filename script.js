// Start-Zahl mit Refresh Button aktualisieren
const startZahl = document.getElementById("start-zahl");
const refreshButton = document.getElementById("refresh-button");
const refreshIcon = refreshButton.querySelector("i");

refreshButton.addEventListener("click", function () {
  refreshIcon.classList.add("icon-rotate");

  setTimeout(function () {
    refreshIcon.classList.remove("icon-rotate");
    const neueZahl = Math.floor(Math.random() * 100);
    startZahl.textContent = neueZahl;
  }, 500);
});

// Rechenoperator auswählen
const operatorButtons = document.querySelectorAll(".rechenoperator");

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    operatorButtons.forEach(function (btn) {
      btn.classList.remove("aktiv");
    });
    button.classList.add("aktiv");
  });
});

// Zahl eingeben und rechnen
const inputFeld = document.getElementById("deine-zahl");
const rechnenButton = document.getElementById("rechnen-button");
const rechenErgebnis = document.getElementById("ergebnis");

// Initial deaktivieren
rechnenButton.disabled = true;

inputFeld.addEventListener("input", function () {
  rechnenButton.disabled = inputFeld.value === ""; // prüft ob das Feld leer ist
});

rechnenButton.addEventListener("click", function (event) {
  event.preventDefault();

  const startwert = Number(startZahl.textContent);
  const deineZahl = Number(inputFeld.value);

  // Finde den aktiven Operator
  const aktiverOperator = document.querySelector(".rechenoperator.aktiv");
  let ergebnis;

  if (!aktiverOperator) {
    alert("Bitte Operator wählen! 😊");
  }

  if (aktiverOperator.id === "plus") {
    ergebnis = startwert + deineZahl;
  } else if (aktiverOperator.id === "minus") {
    ergebnis = startwert - deineZahl;
  } else if (aktiverOperator.id === "geteilt") {
    ergebnis = startwert / deineZahl;
  } else if (aktiverOperator.id === "multiplizieren") {
    ergebnis = startwert * deineZahl;
  } else {
    ergebnis = "Ungültiger Operator";
  }

  rechenErgebnis.textContent = "= " + ergebnis.toFixed(0);
});
