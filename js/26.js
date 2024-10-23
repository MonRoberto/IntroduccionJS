// This

const reservacion = {
    nombre: 'Mon',
    apellido: 'Quiroz',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pao',
    apellido: 'Sanchez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion();
reservacion2.informacion();