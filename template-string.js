const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' - ' + real;
//Uso de backticks, permite utilizar variables de forma dinamica
const templateString = `${nombre} - ${real}`;

console.log(normal);
console.log(templateString);

// Sensitivo a saltos de linea
const html = `
<h2>Hola Mundo</h2>
<p>Estamos usando Template String</p>
`;

console.log(html);