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
  const randomNumber = Math.floor(Math.random() * 90) + 1;
  const cell = document.querySelectorAll("div.cell h3");

  const extractedNumber = document.querySelectorAll(
    "div.cell.extractedNumber h3"
  );
  console.log(extractedNumber);
  for (let i = 0; i < extractedNumber.length; i++) {
    if (randomNumber === parseInt(extractedNumber[i].innerText)) {
      extract();
      console.log("dentro if");
    }
  }
  for (let i = 0; i < tombolaNumbers; i++) {
    if (parseInt(cell[i].innerText) === randomNumber) {
      cell[i].parentElement.classList.add("extractedNumber");
    }
  }

  let lastNumber = document.querySelector("footer p");
  lastNumber.innerText = "ultimo numero estratto: " + randomNumber;
};
