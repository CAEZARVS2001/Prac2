// Archivo para desarrollar la práctica2
// Mezclador de jugos

// Inicializar un array de arrays de tamaño 2 que almacena el nombre de la bebida y su tiempo de preparación
let Bebidas = [["Pure Strawberry Joy", 0.5],
               ["Energizer", 1.5],
               ["Green Garden", 1.5],
               ["Tropical Island", 3.0],
               ["All or Nothing", 5.0],
               ["Especiales", 2.5]];

// Función que regresa el tiempo necesario para preparar una bebida
let getTimeMix = (bebida) => {
    for (let beb in Bebidas){
        if (bebida === Bebidas[beb][0]){
            return Bebidas[beb][1];
        }
    }
    return null;
}

// Función para reponer el suministro de rodajas de lima
let calcLimas = (cantRoda, tipoLimas) => {
    let cont = 0, i = 0, cantLimas = 0;
    do{
        switch(tipoLimas[i]){
            case "pequeño":
                cont += 6;
                break;
            case "mediano":
                cont += 8;
                break;
            default:
                cont += 10;
                break;
        }
        cantLimas++;
        i ++;
    }while ((cont < cantRoda) && (i < tipoLimas.length));
    return cantLimas;
}

// Ejemplos 
let bebida = "All or Nothing";
let cantRodajas = 15;
let Limas = ["pequeño", "mediano", "grande"];

// Resultados
console.log(`El tiempo que tarda la bebida ${bebida} es: ${getTimeMix(bebida)} minutos`);
console.log(`La cantidad de limas a cortar es: ${calcLimas(cantRodajas, Limas)}`);