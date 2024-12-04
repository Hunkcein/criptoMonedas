// Crear estudiantes de ejemplo
const estudiantes = [
    {nombre:'Juan Pérez',matrícula:'A00123456',procesoAcadémico:'Apoyo Académico'},
    {nombre:'Luis Araque', matrícula:'A00325313', procesoAcadémico:'Apoyo Integral'},
    // ... agregar más estudiantes ...
];

console.log(estudiantes)

// Función para renderizar la tabla
function renderizarTabla() {
    const tabla = document.getElementById('tablaEstudiantes');
    tabla.innerHTML = '';

    estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.matricula}</td>
            <td>${estudiante.procesosAcademicos}</td>
        `;
        tabla.appendChild(fila);
    });
}

// Renderizar la tabla al cargar la página
renderizarTabla();
