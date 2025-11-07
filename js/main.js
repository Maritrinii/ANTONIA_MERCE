// MENÚ

// let burger = document.querySelector(".burger > i");
// let menu_opt = document.querySelector(".menu");

// burger.addEventListener("click", function(){

//     burger.classList.toggle("fa-bars");
//     burger.classList.toggle("fa-times");
//     menu_opt.classList.toggle("menu-show");

// });

const burger = document.querySelector(".burger i");
if (burger) {
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-xmark");
    nav.classList.toggle("menu-open");
    });
}




// IMAGEN HEADER
const headerImg = document.querySelector('.img-header img');

if (headerImg) {
    function checkWidth() {
        if (window.innerWidth <= 678) {
          headerImg.src = 'img/merce_phone.png';
        } else {
          headerImg.src = 'img/merce_header.png';
        }
      }
      
      window.addEventListener('resize', checkWidth);
      window.addEventListener('load', checkWidth);
      
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




// document.addEventListener("DOMContentLoaded", function () {
//     const inputs = document.querySelectorAll('input[type="number"]');
//     const totalPriceElement = document.getElementById("totalPrice");

//     // Añade a cada input un evento change para calcular el precio total
//     inputs.forEach((input) => {
//         input.addEventListener("change", calculateTotalPrice);
//     });

//     // Función para calcular el precio total
//     function calculateTotalPrice() {
//         let totalPrice = 0;
//         inputs.forEach((input) => {
//             const price = parseFloat(input.dataset.price) || 0;
//             const quantity = parseInt(input.value) || 0;
//             totalPrice += price * quantity;

//             // Si el precio es mayor que 0, se habilita el botón de comprar
//             if (totalPrice > 0) {
//                 document.getElementById("buyTicket").classList.remove("disabled");
//             } else {
//                 document.getElementById("buyTicket").classList.add("disabled");
//             }
//         });
//         totalPriceElement.textContent = totalPrice.toFixed(2) + " €";
//     }

//     // La primera llamada a la función hará el calculo inicial para poner 0.00 €
//     calculateTotalPrice();

//     // BOTONES + -
//     // Botón +
// document.querySelectorAll('.increase').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const input = btn.closest('div').querySelector('input[type="number"]');
//       input.value = parseInt(input.value) + 1;
//       calculateTotalPrice();
//     });
//   });
  
//   // Botón -
//   document.querySelectorAll('.decrease').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const input = btn.closest('div').querySelector('input[type="number"]');
//       if (parseInt(input.value) > 0) input.value = parseInt(input.value) - 1;
//       calculateTotalPrice();
//     });
//   });
  
      
  



    // Evitar el envio del formulario si el usuario pulsa enter o el precio es 0
    document.getElementById("ticketForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });




// FORMULARIO
const formulario = document.querySelector('.formulario-news');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Validación
        if (nombre === '') {
          alert('Por favor ingresa tu nombre.');
          return;
        }
    
        if (!emailRegex.test(correo)) {
          alert('Por favor ingresa un correo válido.');
          return;
        }
    
        alert(`¡Gracias ${nombre}! Tu correo ${correo} ha sido registrado.`);
        
        formulario.reset();
      });
}



// VENTANA MODAL
const cards = document.querySelectorAll(".card");
const modal = document.querySelector("#modalWindow");
const modalTitle = document.querySelector("#modalTitle");
const modalList = document.querySelector("#modalList");
const btnClose = document.querySelector(".close");
const btnAccept = document.querySelector("#closeModalAccept");

if (cards.length && modal && modalTitle && modalList && btnClose && btnAccept) {
    const titulos = [
        "ENTRADA NORMAL",
        "ENTRADA REDUCIDA",
        "ENTRADA VIP"
      ];
      
      const descripciones = [
        "Acceso a todas las jornadas del festival. Asientos en zona general. Participación en todas las actividades abiertas al público.",
      
        "Acceso a una sola jornada del festival (a elegir). Asientos en zona general. Participación en las actividades abiertas del día seleccionado.",
      
        "Acceso a todas las jornadas del festival. Asientos en zona preferente. Acceso al backstage y merchandising exclusivo."
      ];

      function openModal(index) {
        modalTitle.textContent = titulos[index];
        modalList.innerHTML = "";
      
        const frases = descripciones[index].split(".");
        frases.forEach(frase => {
          if (frase.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = frase.trim();
            modalList.appendChild(li);
          }
        });
      
        modal.classList.add("show-modal");
      }
      
      function closeModal() {
        modal.classList.remove("show-modal");
      }
      
      cards.forEach((card, index) => {
        card.addEventListener("click", () => {
          openModal(index);
        });
      });

      btnClose.addEventListener("click", closeModal);
      btnAccept.addEventListener("click", closeModal);
      
      window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
}


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



