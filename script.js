const input = document.querySelector(`.value-input`);
const blueCrystals = document.querySelectorAll(".bc");
const pheons = document.querySelectorAll(`.p`);
const bcMulti = [1, 5, 10, 25, 50, 100, 420, 850, 1000];
const pMulti = [1, 5, 10, 15, 20, 25, 35, 100];

function updateResults(value) {
  if (isNaN(value)) {
    alert("Value is not a number");
    input.value = "";
    return;
  }

  let bcOne = input.value / 95;
  bcOne = parseFloat(bcOne.toFixed(2));
  let pOne = (bcOne * 850) / 100;

  blueCrystals.forEach((bc, index) => {
    let bcResult = bcOne * bcMulti[index];
    bc.innerHTML = parseFloat(bcResult.toFixed(2));
  });

  pheons.forEach((p, index) => {
    let pResult = pOne * pMulti[index];
    p.innerHTML = parseFloat(pResult.toFixed(2));
  });
}

input.addEventListener("input", () => updateResults(input.value));

window.addEventListener("load", () => {
  input.value = "";
});
