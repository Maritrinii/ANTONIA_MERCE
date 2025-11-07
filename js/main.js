// MENÚ
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
// Seleccionamos tarjetas y modal
const cards = document.querySelectorAll(".card");
const modalWindow = document.querySelector("#modalWindow");
const modalTitle = document.querySelector("#modalWindow h2");
const modalList = document.querySelector("#modalWindow ul");
const btnCloseModal = document.querySelector("#modalWindow .close");
const btnCloseModalAccept = document.querySelector("#modalWindow #closeModalAccept");

// Contenido de cada tarjeta
const titulos = ["ENTRADA NORMAL", "ENTRADA REDUCIDA", "ENTRADA VIP"];
const descripciones = [
    ["Acceso a todas las jornadas.", "Asientos en zona general.", "Participación en todas las actividades."],
    ["Acceso a una jornada.", "Asientos en zona general.", "Participación limitada al día."],
    ["Acceso a todas las jornadas.", "Asientos en zona preferente.", "Acceso al backstage."]
];

// Abrir modal al hacer click en tarjeta
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        modalTitle.textContent = titulos[index];
        modalList.innerHTML = "";
        descripciones[index].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            modalList.appendChild(li);
        });
        modalWindow.classList.add("show-modal");
    });
});

// Cerrar modal
btnCloseModal.addEventListener("click", () => modalWindow.classList.remove("show-modal"));
btnCloseModalAccept.addEventListener("click", () => modalWindow.classList.remove("show-modal"));

// Cerrar modal al hacer click fuera
window.addEventListener("click", (e) => {
    if(e.target === modalWindow) {
        modalWindow.classList.remove("show-modal");
    }
});



//       function openModal(index) {
//         modalTitle.textContent = titulos[index];
//         modalList.innerHTML = "";
      
//         const frases = descripciones[index].split(".");
//         frases.forEach(frase => {
//           if (frase.trim() !== "") {
//             const li = document.createElement("li");
//             li.textContent = frase.trim();
//             modalList.appendChild(li);
//           }
//         });
      
//         modal.classList.add("show-modal");
//       }
      
//       function closeModal() {
//         modal.classList.remove("show-modal");
//       }
      
//       cards.forEach((card, index) => {
//         card.addEventListener("click", () => {
//           openModal(index);
//         });
//       });

//       btnClose.addEventListener("click", closeModal);
//       btnAccept.addEventListener("click", closeModal);
      
//       window.addEventListener("click", (e) => {
//         if (e.target === modal) closeModal();
//       });
// }






