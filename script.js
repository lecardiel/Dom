let representante = {
    nombre: "Nombre del Representante",
    puesto: "Puesto del Representante"
};

const nombreElement = document.getElementById('nombre');
const puestoElement = document.getElementById('puesto');
const editarBtn = document.getElementById('editarBtn');
const mostrarBtn = document.getElementById('mostrarBtn');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar');
const formulario = document.getElementById('formulario');
const nuevoNombreInput = document.getElementById('nuevoNombre');
const nuevoPuestoInput = document.getElementById('nuevoPuesto');

function mostrarTarjeta() {
    nombreElement.textContent = representante.nombre;
    puestoElement.textContent = representante.puesto;
}

function abrirModal() {
    modal.style.display = "block";
    
    nuevoNombreInput.value = representante.nombre;
    nuevoPuestoInput.value = representante.puesto;
}

function cerrarModalFunc() {
    modal.style.display = "none";
}

function manejarFormulario(event) {
    event.preventDefault(); 

    const nuevoNombre = nuevoNombreInput.value.trim();
    const nuevoPuesto = nuevoPuestoInput.value.trim();

    if (nuevoNombre === "" || nuevoPuesto === "") {
        alert("Por favor, complete ambos campos.");
        return;
    }

    representante.nombre = nuevoNombre;
    representante.puesto = nuevoPuesto;

    cerrarModalFunc();
}

editarBtn.addEventListener('click', abrirModal);

cerrarModal.addEventListener('click', cerrarModalFunc);

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        cerrarModalFunc();
    }
});

formulario.addEventListener('submit', manejarFormulario);

mostrarBtn.addEventListener('click', function() {

    for (let key in representante) {
        if (representante.hasOwnProperty(key)) {
            console.log(`${key}: ${representante[key]}`);
        }
    }
    mostrarTarjeta();
});

mostrarTarjeta();
