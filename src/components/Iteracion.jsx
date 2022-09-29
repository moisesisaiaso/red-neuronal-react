import React from "react";
import styless from "../styleP.module.css";

export const Iteracion = ({ i }) => {
    return (
        <div className={styless.iteracion}>
            <h1>ITERACIÓN {i} </h1>
        </div>
    );
};
