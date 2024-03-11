//archivo para realizar el primer ejericio
function accionesDisponibles(prisioneroDespierto, caballeroDormido, arqueroDormido, perroPresente) {
    let acciones = [];

    if (caballeroDormido) {
        acciones.push("Ataque rápido");
    }

    if (prisioneroDespierto && arqueroDormido) {
        acciones.push("Señalar al prisionero");
    }

    if (prisioneroDespierto && !caballeroDormido && !arqueroDormido) {
        if (perroPresente) {
            acciones.push("Prisionero libre (con perro)");
        } else {
            acciones.push("Prisionero libre (sin perro)");
        }
    }

    if (!caballeroDormido || !arqueroDormido) {
        acciones.push("Espiar");
    }

    return acciones;
}

// Ejemplo de uso:
let prisioneroDespierto = true;
let caballeroDormido = false;
let arqueroDormido = true;
let perroPresente = true;

let acciones = accionesDisponibles(prisioneroDespierto, caballeroDormido, arqueroDormido, perroPresente);
console.log("Acciones disponibles:", acciones);
