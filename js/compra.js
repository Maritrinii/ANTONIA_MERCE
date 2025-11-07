// VENTANA MODAL PAGO
const buyButton = document.getElementById("buyFood");
const paymentModal = document.getElementById("paymentModal");
const closeModalBtn = document.querySelector(".closeModal");
const inputs = document.querySelectorAll('input[type="number"]');
const totalPriceElement = document.getElementById("totalPrice");

function resetEntradas() {
  inputs.forEach(input => input.value = 0);
  totalPriceElement.textContent = "0.00 €";
  buyButton.classList.add("disabled");
}

if (buyButton && paymentModal && closeModalBtn) {
  buyButton.addEventListener("click", () => {
    if (!buyButton.classList.contains("disabled")) {
        paymentModal.classList.add("show-modal");
    }
  });

  closeModalBtn.addEventListener("click", () => {
      paymentModal.classList.remove("show-modal");
      resetEntradas();
  });

  window.addEventListener("click", (e) => {
      if (e.target === paymentModal) {
          paymentModal.classList.remove("show-modal");
          resetEntradas();
      }
  });
}

// COMPRA ENTRADAS
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");
    const buyButton = document.getElementById("buyFood");

    function calculateTotalPrice() {
        let totalPrice = 0;
        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value || 0);
            totalPrice += price * quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2) + " €";

        // Habilitar/deshabilitar botón
        if (totalPrice > 0) {
            buyButton.classList.remove("disabled");
        } else {
            buyButton.classList.add("disabled");
        }
    }

    // Evento change en los inputs
    inputs.forEach((input) => {
        input.addEventListener("change", calculateTotalPrice);
    });

    // Botones +
    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input[type="number"]');
            input.value = parseInt(input.value || 0) + 1;
            calculateTotalPrice();
        });
    });

    // Botones -
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input[type="number"]');
            input.value = Math.max(0, parseInt(input.value || 0) - 1);
            calculateTotalPrice();
        });
    });

    calculateTotalPrice();

    // Evitar envío de formulario
    document.getElementById("ticketForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

    // Evitar el envio del formulario si el usuario pulsa enter o el precio es 0
    document.getElementById("ticketForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
