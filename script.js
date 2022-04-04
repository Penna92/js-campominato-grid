// FUNZIONE CHE STAMPA LA GRIGLIA FACILE
function stampareGriglia() {
    let colNumber = 100;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute("class", "container h-100 d-flex justify-content-center align-items-center align-content-center")
    app.innerHTML="";
    let row = document.createElement("div");
    row.setAttribute("class", "row justify-content-center align-content-center");
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
  

//   FUNZIONE CHE STAMPA LA GRIGLIA MEDIA
  function stampareGrigliaSecond() {
    let colNumber = 81;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute("class", "container h-100 d-flex justify-content-center align-items-center align-content-center")
    app.innerHTML="";
    let row = document.createElement("div");
    row.setAttribute("class", "row justify-content-center align-content-center");
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

  // FUNZIONE CHE STAMPA LA GRIGLIA DIFFICILE
   function stampareGrigliaThird() {
    let colNumber = 49;
    let colperRow = Math.sqrt(colNumber);
    let app = document.getElementById("app");
    app.setAttribute("class", "container h-100 d-flex justify-content-center align-items-center align-content-center")
    app.innerHTML="";
    let row = document.createElement("div");
    row.setAttribute("class", "row justify-content-center align-content-center");
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

  //CONDIZIONI PER STABILIRE QUALE GRIGLIA STAMPARE
  if(document.getElementById("difficulty").selectedIndex =="0"){
    document.getElementById("button").addEventListener("click", stampareGriglia);
  }
  else if(document.getElementById("difficulty").selectedIndex =="1"){
    document.getElementById("button").addEventListener("click", stampareGrigliaSecond);
  }
  else if (document.getElementById("difficulty").selectedIndex =="2"){
    document.getElementById("button").addEventListener("click", stampareGrigliaThird);
  }
  