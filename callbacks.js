/* setTimeout(() => {
    console.log('Hola Hola!');
}, 1000); */

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Juan'
    }
    setTimeout(() => {
        callback(user);
    }, 1500);

}

getUserById(10, (user) => {
    console.log(user.nombre.toUpperCase());
});