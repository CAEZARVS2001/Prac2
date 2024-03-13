const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
        )}
//Funcion para determinar cuales de las 4 operaciones estan disponibles
function determinarAccionesDisponibles(caballeroDespierto, arqueroDespierto, pricioneroDespierto, perroPresente){
    const accionesDisponibles=[];
    
//Accion 1: Ataque rapido
    if (!caballeroDespierto) {
        accionesDisponibles.push("Ataque rápido");
    }
    
//Accion 2: Espiar
    if (caballeroDespierto || arqueroDespierto) {
        accionesDisponibles.push("Espiar");
    }
    
 // Accion 3: Señalar al prisionero
  if (prisioneroDespierto && !arqueroDespierto) {
    accionesDisponibles.push("Señalar al prisionero");
  }
    
//Accion 4: Prisionero libre
  if (perroPresente && !arqueroDespierto) {
    accionesDisponibles.push("Prisionero libre");
  } else if (!caballeroDespierto && !arqueroDespierto && prisioneroDespierto) {
    accionesDisponibles.push("Prisionero libre");
  }
    
return accionesDisponibles;
    
// Función para obtener entrada del usuario
function obtenerEntradaUsuario(pregunta) {
  return new Promise(resolve => {
    rl.question(pregunta, respuesta => {
      resolve(respuesta.trim().toLowerCase() === 'true');
    });
  });
}

// Función para generar valores aleatorios
function generarValorAleatorio() {
  return Math.random() < 0.5; // Genera un valor aleatorio true/false
}

// Obtener entrada del usuario
async function main() {
  let caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente;

  // Generar valores aleatorios hasta que haya al menos una acción disponible
  do {
    caballeroDespierto = generarValorAleatorio();
    arqueroDespierto = generarValorAleatorio();
    prisioneroDespierto = generarValorAleatorio();
    perroPresente = generarValorAleatorio();

    const accionesDisponibles = determinarAccionesDisponibles(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);
    if (accionesDisponibles.length > 0) {
      console.log("Estado actual:");
      console.log("Caballero despierto:", caballeroDespierto);
      console.log("Arquero despierto:", arqueroDespierto);
      console.log("Prisionero despierto:", prisioneroDespierto);
      console.log("Perro presente:", perroPresente);
      console.log("Acciones disponibles:", accionesDisponibles);
      rl.close();
      break;
    }
  } while (true);
}

main();
