import React from "react";
import styless from "../styleP.module.css";

export const Iteracion = ({ i }) => {
    return (
        <div className={styless.iteracion}>
            <h1>ITERACIÓN {i + 1} </h1>
        </div>
    );
};
