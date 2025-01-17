class Estudiante {
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.procesosAcademicos = [];
    }

    agregarProcesoAcademico(proceso) {
        this.procesosAcademicos.push(proceso);
    }
}
