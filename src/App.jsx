import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Proceso } from "./components/Proceso";
import { procesoRespuesta } from "./script";

//* Entrada de cantidad de puntos
const puntos = [];
let nPuntos = parseInt(prompt("¿Cuantas entradas desea calcular?", 0));

//* entrada de cantidad de caracteristicas
let nCaracteristicas = parseInt(prompt("¿Cuantas caracteristicas se van a evaluar?", 0));

//* entrada de los grupos T
const gruposTArray = [];
for (let i = 1; i <= 2; i++) {
    let grupoT = parseInt(prompt(`T se divide en dos grupos, ingrese el GRUPO ${i}`, 0));

    gruposTArray.push(grupoT);
}

// ^ desestructurando el array de gruposTarray
const [T1, T2] = gruposTArray;

// * Puntos
let arrayPuntoStr = null;
let arrayPuntoNum = null;
let contar = 1;
do {
    //? entrada de puntos por string
    //esto se repite si la longitud de arrayPunto es diferente de 3, esto quiere decir que el array no ha sido obtenido correctamente por mal envio de los datos
    let punto = prompt(`Ingresa las características del punto ${contar} separadas por coma`);
    arrayPuntoStr = punto.split(","); // convirtiendolo a array

    if (arrayPuntoStr.length != nCaracteristicas) {
        arrayPuntoStr = null;
        contar--; // el contador se reinicia si los datos no fueron enviados correctamente, de esta forma no se cuenta esta iteración para añadir un punto al array de objetos
        alert("Ingrese correctamente los datos");
    } else {
        // si los datos se envian correctos se crea un objeto(un punto en el array)
        arrayPuntoNum = arrayPuntoStr.map(Number); // convierte el array string a un array number
        const P = {};

        arrayPuntoNum.forEach((punto, i) => {
            P[`X${i + 1}`] = punto;
        });

        //^ mandando el objeto(P) al array puntos
        let t = parseInt(prompt("¿A qué grupo en T pertenece?", 0));
        P[`T`] = t;
        puntos.push(P);

        gruposTArray.push(t);
    }

    contar++;
} while (contar <= nPuntos);

console.log(puntos);

//*pesos
let arrayPesosStr = null;
let arrayPesosNum = null;
do {
    let Pesos = prompt("Ingrese los pesos separador por coma");
    arrayPesosStr = Pesos.split(",");

    if (arrayPesosStr.length != nCaracteristicas) {
        alert("Ingrese correctamente los datos");
        arrayPesosStr = null;
    } else {
        arrayPesosNum = arrayPesosStr.map(Number);
    }
} while (arrayPesosStr.length != nCaracteristicas);

let W = arrayPesosNum;

//* bias
let biass = parseFloat(prompt("Ingresa el BIAS", 0));
let BIAS = biass;

function App() {
    //^ procesoRespuesta
    /*Respuesta y total iteraciones*/
    let respuestaArray = procesoRespuesta(puntos, nCaracteristicas, W, BIAS, T1, T2);
    const ultimaRespuesta = respuestaArray[respuestaArray.length - 1];

    const { W: Wn, BIAS: BIASn } = ultimaRespuesta;
    const totalIteracionF = respuestaArray.length / nPuntos;
    const totalIteracionI = Math.round(totalIteracionF); // redondea el numero

    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            puntos={puntos}
                            nCaracteristicas={nCaracteristicas}
                            W={W}
                            BIAS={BIAS}
                            Wn={Wn}
                            BIASn={BIASn}
                            totalIteracionI={totalIteracionI}
                        />
                    }
                />
                <Route
                    path="/proceso"
                    element={
                        <Proceso
                            nPuntos={nPuntos}
                            respuestaArray={respuestaArray}
                            Wn={Wn}
                            BIASn={BIASn}
                        />
                    }
                />
            </Routes>
        </HashRouter>
    );
}

export default App;
