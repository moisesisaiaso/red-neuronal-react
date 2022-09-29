export const procesoRespuesta = (puntos, nCaracteristicas, W, BIAS, T1, T2) => {
    const procesoArray = [];
    //? aprende
    let aprende = 0;

    console.log(
        "🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠 RED NEURONAL TIPO PERCEPTRÓN 🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠"
    );

    //^ Iterar
    //falta resolver
    let ii = 1;
    while (aprende != puntos.length) {
        // mientras aprender no sea igual a la cantidad de puntos entonces debe seguir iterando, esto por que cuando aprender es igual a 0 significa que el peso y bias no es el indicado osea debe aprender, mientras que si aprende llega a la cantidad de puntos significa que el mismo peso y bias pasó por todos los puntos sin necesidad de aprender
        console.log(`
        /////////////////////////////////////
                    ITERACIÓN ${ii}`);

        for (let i = 0; i < puntos.length; i++) {
            let p = puntos[i];

            //*C
            let c = 0;
            let sumaPW = 0;
            let caracteriArray = Object.entries(p);

            let tDelPuntoObjeto = 0;

            caracteriArray.forEach((propiedadArray, i) => {
                if (i < nCaracteristicas) {
                    sumaPW += propiedadArray[1] * W[i];
                } else {
                    sumaPW += BIAS;
                    tDelPuntoObjeto = propiedadArray[1];
                }
            });

            c = sumaPW;

            // * a HARDLIMS

            let a = 0;

            if (c >= 0) {
                a = T1;
            } else {
                a = T2;
            }

            console.log(`🚀 ---------------- P${i + 1} ----------------- 🤖`);
            console.log(`Hardlims(${c})`);
            console.log("T esperado: " + tDelPuntoObjeto + "    " + "resultado a: ", a);
            //? Comprobar si "a" es igual a "T"
            if (a === tDelPuntoObjeto) {
                console.log("No necesita aprender 🎉😎🤘🦾");
                const datosObjeto = {
                    P: i + 1,
                    c,
                    T: tDelPuntoObjeto,
                    a: a,
                    W,
                    BIAS,
                };

                procesoArray.push(datosObjeto);

                aprende++;
                if (aprende === puntos.length) {
                    break;
                }
            } else {
                console.log(`APRENDE 😥🤔🙄`);
                aprende = 0;

                //^ Error
                let e = tDelPuntoObjeto - a;

                //~ pesos nuevos
                const arrayP = [];
                const pesosNuevo = (e, caracteriArray, ...W) => {
                    caracteriArray.forEach((propiedadArray, i) => {
                        if (i < nCaracteristicas) {
                            arrayP.push(W[i] + e * propiedadArray[1]);
                        }
                    });

                    return arrayP;
                };

                let Wn = pesosNuevo(e, caracteriArray, ...W);

                W = Wn;

                //~ Bias nuevo
                let BIASn = BIAS + e;
                BIAS = BIASn;
                console.log("Error: ", e);
                console.log(`Peso nuevo: (${Wn})`);
                console.log("Bias nuevo:", BIASn);

                const datosObjeto = {
                    P: i + 1,
                    c,
                    T: tDelPuntoObjeto,
                    a,
                    e,
                    Wn,
                    BIASn,
                };

                procesoArray.push(datosObjeto);
            }
        }

        ii++;
    }
    console.log(`
    *************************************
    -                             
    - R = W(${W})    
    -     BIAS = ${BIAS}   
    
    *************************************`);
    /* 
    let ultimaIteracion = ii - 1;

    let ultimaIteracionRes = [ultimaIteracion, W, BIAS];
 */
    return procesoArray;
};
