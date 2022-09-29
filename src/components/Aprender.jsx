import React from "react";
import styless from "../styleP.module.css";

export const Aprender = ({ P, c, T, a, e, wn, biasn }) => {
    let CdosDecimales = Math.round((c + Number.EPSILON) * 100) / 100;
    let wn1 = Math.round((wn[0] + Number.EPSILON) * 100) / 100;
    let wn2 = Math.round((wn[1] + Number.EPSILON) * 100) / 100;
    console.log(wn);
    return (
        <div className={styless.card}>
            <h1 className={styless.titulo}>P{P}</h1>
            <li className={styless.inset + " " + styless.right + " " + styless.H}>
                <b> Hardlims: </b>
                <h3>({CdosDecimales})</h3>
            </li>
            <li className={styless.inset}>
                <div className={styless.right}>
                    <b>T esperado: </b>
                    <h3>{T} </h3>
                </div>
                <div className={styless.right}>
                    <b> resultado a: </b>
                    <h3>{a}</h3>
                </div>
                <h2>APRENDER 🔒</h2>
            </li>
            <li className={styless.inset + " " + styless.right + " " + styless.E}>
                <b>Error: </b>
                <h3>{e}</h3>
            </li>
            <li className={styless.inset}>
                <b>Peso nuevo: </b>
                <h3>
                    Wn({wn1},{wn2})
                </h3>
                <b>Bias nuevo: </b>
                <h3>BIASn = {biasn} </h3>
            </li>
        </div>
    );
};
