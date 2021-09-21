const empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Jorge'
    },
    {
        id: 3,
        nombre: 'Daniel'
    }
];

const salarios = [{
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 1500
    }
];

const userId = 2;

const getEmpleado = (id) => {
    const empleado = empleados.find((e) => e.id === id);

    return promesa = new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    const salario = salarios.find((s) => s.id == id)?.salario;
    
    return promesa = new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject(`No existe salario vinculado al usuario con id ${id}`);
    });
}

//! No recomendable
/* getEmpleado(userId)
    .then(empleado => {
        getSalario(userId)
            .then(salario => console.log(`El salario de ${empleado.nombre} es de ${salario}`))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err)); */

let nombre;
//* Estructura recomendada para promesas en cadena.
getEmpleado(userId)
    .then(empleado =>{
        nombre = empleado;
        return getSalario(userId)})
    .then(salario => console.log(`El salario de ${nombre.nombre} es de ${salario}`))
    .catch(err => console.log(err));
