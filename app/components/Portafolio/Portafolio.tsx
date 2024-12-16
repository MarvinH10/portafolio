import React from "react";
import styles from "./Portafolio.module.css";

const Portafolio: React.FC = () => {
    return (
        <section className={styles.portafolio}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>PORTAFOLIO</h2>
                <div className={styles.contenido}>
                    <div className={styles.textoWrapper}>
                        <h3 className={styles.encabezado}>¡Hola! Me llamo Marvin Héctor Campos Deza</h3>
                        <p className={styles.descripcion}>
                            Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web dinámicas y funcionales.
                            Mi objetivo es combinar habilidades de frontend y backend para ofrecer soluciones innovadoras e impactantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portafolio;
