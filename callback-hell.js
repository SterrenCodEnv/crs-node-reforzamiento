const empleados = [
    {id: 1,
    nombre: 'Fernando'},
    {id: 2,
    nombre: 'Jorge'},
    {id: 3,
    nombre: 'Daniel'}
];

const salarios = [
    {id: 1,
    salario: 1500},
    {id: 2,
    salario: 1500}
];

const id = 2;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);
    if(empleado) {
        callback(null, empleado);
    }else{
        callback( `Empleado con id ${id} inexistente`);
    }
}


const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id == id)?.salario;
    
    if(salario){
        callback(null, salario);
    } else{
        callback(`El id ${id} no pertenece al un usuario con salario declarado`, null);
    }
}


getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('Error');
        return console.log(err);
        
    } else{
        getSalario(id, (err, salario) => {
            if(err){
                console.log(err);
            }else{
                console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario}.`);
            }
        });
    }
});

