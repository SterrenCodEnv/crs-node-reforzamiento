//! No se debe utilizar (viejo estandard)
//Ambito lobal
var nombreVar = 'Wolverine';

// Se debe usar let sin redeclarar en scope local
let nombreLet = 'Wolverine';

if(true){
    nombreLet = 'Magneto';
}

console.log(`Variable Let: ${nombreLet}`);

// En ambito local se recomienda usar constantes ya que son mas lijeras que le 
const nombreConst = 'Ciclope';

