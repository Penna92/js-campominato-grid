let yourSelect = document.getElementById("difficulty");
console.log(yourSelect.options[yourSelect.selectedIndex].value);
document.getElementById("button").addEventListener("click", stampareGriglia);

// FUNZIONE CHE STAMPA LA GRIGLIA
function stampareGriglia() {
  //CONDIZIONE CHE STAMPA LA GRIGLIA FACILE
  if (yourSelect.options[yourSelect.selectedIndex].value === "1") {
    let colNumber = 100;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute(
      "class",
      "container h-100 d-flex justify-content-center align-items-center align-content-center"
    );
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute(
      "class",
      "row justify-content-center align-content-center"
    );
    let cols = creaColonne(colNumber);
    row.innerHTML = cols;
    app.append(row);

    function creaColonne(numerocolonne) {
      let cols = "";
      let numeriusati = [];
      let index = 1;
      while (numeriusati.length < numerocolonne) {
        let numeroCella = index;
        if (!numeriusati.includes(numeroCella)) {
          numeriusati.push(numeroCella);
          cols += `
                <div class="size-easy black-border text-center">${numeroCella}</div>
                `;
        }
        index++;
      }
      return cols;
    }
  }

  //CONDIZIONE CHE STAMPA LA GRIGLIA FACILE
  else if (yourSelect.options[yourSelect.selectedIndex].value === "2") {
    let colNumber = 81;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute(
      "class",
      "container h-100 d-flex justify-content-center align-items-center align-content-center"
    );
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute(
      "class",
      "row justify-content-center align-content-center"
    );
    let cols = creaColonne(colNumber);
    row.innerHTML = cols;
    app.append(row);

    function creaColonne(numerocolonne) {
      let cols = "";
      let numeriusati = [];
      let index = 1;
      while (numeriusati.length < numerocolonne) {
        let numeroCella = index;
        if (!numeriusati.includes(numeroCella)) {
          numeriusati.push(numeroCella);
          cols += `
                <div class="size-medium black-border text-center">${numeroCella}</div>
                `;
        }
        index++;
      }
      return cols;
    }
  }

  // CONDIZIONE CHE STAMPA LA GRIGLIA DIFFICILE
  else {
    let colNumber = 49;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute(
      "class",
      "container h-100 d-flex justify-content-center align-items-center align-content-center"
    );
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute(
      "class",
      "row justify-content-center align-content-center"
    );
    let cols = creaColonne(colNumber);
    row.innerHTML = cols;
    app.append(row);

    function creaColonne(numerocolonne) {
      let cols = "";
      let numeriusati = [];
      let index = 1;
      while (numeriusati.length < numerocolonne) {
        let numeroCella = index;
        if (!numeriusati.includes(numeroCella)) {
          numeriusati.push(numeroCella);
          cols += `
                <div class="size-hard black-border text-center">${numeroCella}</div>
                `;
        }
        index++;
      }
      return cols;
    }
  }
}
