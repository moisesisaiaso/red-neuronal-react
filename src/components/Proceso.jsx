import styless from "../styleP.module.css";
import React from "react";
import { NoAprender } from "./NoAprender";
import { Aprender } from "./Aprender";
import { Resultado } from "./Resultado";
import atras from "../assets/img/atras2.png";
import { Link } from "react-router-dom";
import { Iteracion } from "./Iteracion";

export const Proceso = ({ respuestaArray, Wn, BIASn }) => {
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
                    if (T != a) {
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
                <Resultado pesosF={Wn.join()} BiasF={BIASn} />
            </section>

            <Link to="/" id={styless.atras}>
                <img src={atras} alt="regresar" />
            </Link>

            <footer>
                <b>Desarrollado por Moisés isaias Ortiz Gracia &copy;</b>
            </footer>
        </>
    );
};
