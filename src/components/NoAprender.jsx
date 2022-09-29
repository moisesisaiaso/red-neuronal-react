import React from "react";
import styless from "../styleP.module.css";

export const NoAprender = ({ P, c, T, a }) => {
    let CdosDecimales = Math.round((c + Number.EPSILON) * 100) / 100;
    return (
        <div className={styless.card}>
            <h1 className={styless.titulo}>P{P} </h1>
            <li
                className={
                    styless.inset +
                    " " +
                    styless.inset2 +
                    " " +
                    styless.right +
                    " " +
                    styless.H +
                    " " +
                    styless.H2
                }
            >
                <b> Hardlims: </b>
                <h3>({CdosDecimales})</h3>
            </li>
            <li className={styless.inset + " " + styless.inset2}>
                <div className={styless.right}>
                    <b>T esperado: </b>
                    <h3>{T}</h3>
                </div>
                <div className={styless.right}>
                    <b> resultado a: </b>
                    <h3>{a}</h3>
                </div>
                <h2 className={styless.noAprender}>NO APRENDER</h2>
            </li>
            <div>
                <h2 className={styless.emoji3}>🔓</h2>
                <div className={styless.emoji4}>
                    <h2>🚀</h2>
                    <h2>🚀</h2>
                </div>
            </div>
        </div>
    );
};
