const title = document.querySelector("h1");
const btnInit = document.querySelector(".btn-init");
const numberInput = document.querySelector("#number-input");
const btnSubmit = document.querySelector(".btn-submit");
let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

btnInit.addEventListener("click", () => {
  title.textContent = "Ingresá un número entre 1 y 100";
  btnInit.style.display = "none";
  numberInput.classList.remove("d-none");
  btnSubmit.classList.remove("d-none");
  randomNumber = generateRandomNumber();
});

btnSubmit.addEventListener("click", () => {
  if (+randomNumber === +numberInput.value) {
    alert(
      `El número ${+numberInput.value} es igual al número mágico. Felicitaciones!!`
    );
    title.textContent = "Adiviná el número mágico";
    btnInit.style.display = "block";
    numberInput.classList.add("d-none");
    btnSubmit.classList.add("d-none");
  } else if (+randomNumber > +numberInput.value) {
    alert(`El número ${+randomNumber} es mayor a ${+numberInput.value}.`);
  } else {
    alert(`El número ${+randomNumber} es menor a ${+numberInput.value}.`);
  }
  randomNumber = generateRandomNumber();
  numberInput.value = "";
  numberInput.focus();
});
