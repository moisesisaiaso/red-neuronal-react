import React from "react";
import { useState, useEffect } from "react";
import styles from "../style.module.css";

export const Hora = () => {
    const [hora, setHora] = useState(null);

    useEffect(() => {
        const currentTime = () => {
            let date = new Date();
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();

            hh = hh < 10 ? `0${hh}` : hh;
            mm = mm < 10 ? `0${mm}` : mm;
            ss = ss < 10 ? `0${ss}` : ss;

            let time = `${hh}:${mm}:${ss}`;
            return time;
        };
        currentTime();
        setInterval(() => setHora(() => currentTime()), 1000);
    }, []);

    return (
        <>
            <h1 className={styles.el}>{hora}</h1>
        </>
    );
};
