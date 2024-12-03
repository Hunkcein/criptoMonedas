// Crear estudiantes de ejemplo
const estudiantes = [
    new Estudiante('Juan Pérez', 'A00123456'),
    // ... agregar más estudiantes ...
];

// Función para renderizar la tabla
function renderizarTabla() {
    const tabla = document.getElementById('tablaEstudiantes');
    tabla.innerHTML = '';

    estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.matricula}</td>
            <td>${estudiante.procesosAcademicos.map(proceso => proceso.nombre).join(', ')}</td>
        `;
        tabla.appendChild(fila);
    });
}

// Renderizar la tabla al cargar la página
renderizarTabla();
