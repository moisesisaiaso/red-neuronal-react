import styles from "../style.module.css"; // Módulos CSS cuando importamos la hoja de estilos como un módulo React puede asignar a esos estilos un espacio de nombre propios para que solo apliquen a ese componente evitando colisiones.
//^ colisiones se refiere a que un archivo .css no machaque otro con sus estililos al tener identificadores identicos

import img1 from "../assets/img/Hoja.gif"; // esto se puede hacer sin necesidad de importar solo si las imagenes se encuentran en la carpeta public, e incluso la url relativa será suficiente es decir "img/Hoja.gif"
import img2 from "../assets/img/fondo1.gif";
import img3 from "../assets/img/giphy.gif";

import { Link } from "react-router-dom";
import { Hora } from "./Hora";
import { useEffect, useState } from "react";

export const Home = ({ Wn, BIASn, totalIteracionI, puntos, nCaracteristicas, W, BIAS }) => {
    //* Fondos
    const [fondoo, setFondoo] = useState(img1);

    useEffect(() => {
        const Background = [img1, img2, img3];

        const cambiaFondo = (...fondo) => {
            let numAleatorio = Math.floor(Math.random() * fondo.length);
            let background = fondo[numAleatorio];
            return background;
        };

        setInterval(() => setFondoo(() => cambiaFondo(...Background)), 10000);
    }, []);

    return (
        <>
            <div className={styles.App}>
                <header className={styles.AppHeader} style={{ backgroundImage: `url(${fondoo}) ` }}>
                    <Hora />

                    <div className={styles.card}>
                        <div>
                            <p className={styles.title}>Red Neuronal P</p>
                        </div>
                        <hr />
                        <div className={styles.notification}>
                            <p id={styles.puntos}>
                                {/* //* Puntos */}
                                {puntos.map((P, i) => {
                                    return `P${i + 1}(${Object.entries(P).map(
                                        (propiedadArray, i) => {
                                            if (i < nCaracteristicas) {
                                                return propiedadArray[1];
                                            }
                                        }
                                    )}) T=${P.T}   | `;
                                })}
                                {/* Object.entries(P).map() es una forma de poder iterar un objeto, lo que hace es convertir las propiedades del objeto en un array es decir por cada propiedad nos crear un array donde su indice tiene como nombre la clave de la propiedad y su valor, es decir nos crear una colección de array */}
                            </p>
                            {/* puntos */}
                            <br />
                            <p>
                                {/* imprimo pesos y BIAS */}
                                W({W.join()}) BIAS = {BIAS}
                            </p>
                            {/* pesosBias */}
                            <br />
                            <h3 className={styles.title}>ITERACIÓN {totalIteracionI}</h3>
                            {/* Iteración n */}
                            <p>
                                R = Wn({Wn.join()}) | BIASn = {BIASn}
                            </p>
                            {/* resultado */}
                        </div>
                        <div className={styles.redContainer}>
                            <button>
                                <Link to="proceso"> Proceso</Link>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};
