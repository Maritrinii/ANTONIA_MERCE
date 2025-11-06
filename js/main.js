// MENÚ

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

burger.addEventListener("click", function(){

    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");

});


// IMAGEN HEADER
const headerImg = document.querySelector('.img-header img');

function checkWidth() {
  if (window.innerWidth <= 678) {
    headerImg.src = 'img/merce_phone.png';
  } else {
    headerImg.src = 'img/merce_header.png';
  }
}

window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);

// ENTRADAS BOTÓN
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");

    // Añade a cada input un evento change para calcular el precio total
    inputs.forEach((input) => {
        input.addEventListener("change", calculateTotalPrice);
    });

    // Función para calcular el precio total
    function calculateTotalPrice() {
        let totalPrice = 0;
        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value) || 0;
            totalPrice += price * quantity;

            // Si el precio es mayor que 0, se habilita el botón de comprar
            if (totalPrice > 0) {
                document.getElementById("buyFood").classList.remove("disabled");
            } else {
                document.getElementById("buyFood").classList.add("disabled");
            }
        });
        totalPriceElement.textContent = totalPrice.toFixed(2) + " €";
    }

    // La primera llamada a la función hará el calculo inicial para poner 0.00 €
    calculateTotalPrice();

    // Evitar el envio del formulario si el usuario pulsa enter o el precio es 0
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

// VENTANA MODAL

  