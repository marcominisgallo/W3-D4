const tombolaNumbers = 90;

const allCellsValue = [];

const oneCellValue = function (tombolaNumbers) {
  for (i = 0; i < tombolaNumbers; i++) {
    cellsContainer = document.getElementById("numbers-cells");

    const cell = document.createElement("div");
    cell.classList.add("cell");

    const h3Cell = document.createElement("h3");
    h3Cell.innerText = i + 1;

    allCellsValue.push([h3Cell.innerText]);

    cell.appendChild(h3Cell);

    cellsContainer.appendChild(cell);
  }
};

console.log(allCellsValue);

oneCellValue(tombolaNumbers);

const extract = function (e) {
  e.preventDefault();

  const randomNumber = Math.floor(Math.random() * 90) + 1;
  const cell = document.querySelectorAll("div.cell h3");

  for (i = 0; i < tombolaNumbers; i++) {
    if (parseInt(cell[i].innerText) === randomNumber) {
      cell[i].parentElement.classList.add(".extractedNumber");
    }
  }
};
