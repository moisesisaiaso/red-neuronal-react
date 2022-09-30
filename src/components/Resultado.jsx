import React from "react";
import styless from "../styleP.module.css";

export const Resultado = ({ pesosF, BiasF }) => {
    return (
        <>
            <section className={styless.respuesta}>
                <div className={styless.card}>
                    <h1 className={styless.titulo}>Resultado</h1>
                    <div id={styless.cerebros}>🦾🧠🧠🧠🦾</div>
                    <li id={styless.pesos}>
                        <b>PESOS: </b>
                        <h3>W({pesosF.join(", ")})</h3>
                    </li>
                    <li>
                        <b>BIAS: </b>
                        <h3>BIAS = {BiasF} </h3>
                    </li>
                    <div>
                        <h2 className={styless.emoji3}>🤖</h2>
                        <div className={styless.emoji4}>
                            <h2>🎉</h2>
                            <h2>🎉</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
