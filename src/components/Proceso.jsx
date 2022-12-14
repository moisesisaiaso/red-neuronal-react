import styless from "../styleP.module.css";
import React from "react";
import { NoAprender } from "./NoAprender";
import { Aprender } from "./Aprender";
import { Resultado } from "./Resultado";
import atras from "../assets/img/atras2.png";
import { Link } from "react-router-dom";
import { Iteracion } from "./Iteracion";

export const Proceso = ({ nPuntos, respuestaArray, Wn, BIASn }) => {
    const WnRedondear = [];
    let valor = 0;

    Wn.forEach((peso) => {
        valor = Math.round((peso + Number.EPSILON) * 100) / 100;
        WnRedondear.push(valor);
    });
    console.log(respuestaArray);
    return (
        <>
            <header>
                <div>
                    <p className={styless.title + " " + styless.titleP}>Red Neuronal P</p>
                </div>
            </header>
            <section>
                {respuestaArray.map((punto, i) => {
                    const { P, c, T, a, e, Wn: wn, BIASn: biasn } = punto;

                    let longitud = i + 1;
                    if (
                        longitud % nPuntos === 0 &&
                        i != 0 &&
                        T != a &&
                        longitud < respuestaArray.length
                    ) {
                        return (
                            <>
                                <Aprender
                                    key={i}
                                    P={P}
                                    c={c}
                                    T={T}
                                    a={a}
                                    e={e}
                                    wn={wn}
                                    biasn={biasn}
                                />
                                <Iteracion key={i} i={longitud / nPuntos} />
                            </>
                        );
                    } else if (
                        longitud % nPuntos === 0 &&
                        i != 0 &&
                        longitud < respuestaArray.length
                    ) {
                        return (
                            <>
                                <NoAprender key={i} P={P} c={c} T={T} a={a} />
                                <Iteracion key={i} i={longitud / nPuntos} />
                            </>
                        );
                    } else if (T != a) {
                        return (
                            <>
                                <Aprender
                                    key={i}
                                    P={P}
                                    c={c}
                                    T={T}
                                    a={a}
                                    e={e}
                                    wn={wn}
                                    biasn={biasn}
                                />
                            </>
                        );
                    } else {
                        return (
                            <>
                                <NoAprender key={i} P={P} c={c} T={T} a={a} />
                            </>
                        );
                    }
                })}

                {/* Echo */}
                <Resultado pesosF={WnRedondear} BiasF={BIASn} />
            </section>

            <Link to="/" id={styless.atras}>
                <img src={atras} alt="regresar" />
            </Link>

            <footer>
                <b>Desarrollado por Mois??s isaias Ortiz Gracia &copy;</b>
            </footer>
        </>
    );
};
