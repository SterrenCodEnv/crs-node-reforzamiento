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

const getEmpleado = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

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

const userId = 2;

const getInfoUser = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de ${empleado} es de ${salario}.`;   
    } catch (error) {
        throw error;
    }
}

getInfoUser(userId)
    .then(msj => {
        console.log(`Mensaje Obtenido`);
        console.log(msj)
    })
    .catch(err => {
        console.log(`Error Obtenido`);
        console.log(err);
    });
