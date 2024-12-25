import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
    return (
        <section className={styles.about} id="acerca">
            <div className={styles.container}>
                <h2 className={styles.titulo}>ACERCA DE MÍ</h2>
                <div className={styles.contenido}>
                    <div className={styles.imagenWrapper}>
                        <img
                            src="/images/me2.jpg"
                            alt="Perfil"
                            className={styles.imagen}
                        />
                    </div>
                    <div className={styles.textoWrapper}>
                        <h3 className={styles.encabezado}>¡Hola! Me llamo Marvin Héctor Campos Deza</h3>
                        <p className={styles.subtitulo}>Desarrollador Full Stack</p>
                        <p className={styles.descripcion}>
                            Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web dinámicas y funcionales.
                            Mi objetivo es combinar habilidades de frontend y backend para ofrecer soluciones innovadoras e impactantes.
                        </p>
                        <ul className={styles.detalles}>
                            <li>
                                <span className={styles.etiqueta}>N° Celular</span>
                                <span className={styles.valor}>: +51 989623418</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Correo</span>
                                <span className={styles.valor}>: marvinhectorcamposdeza@gmail.com</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Idiomas</span>
                                <span className={styles.valor}>: Inglés, Español</span>
                            </li>
                        </ul>
                        <button className={styles.botonDescargar}>
                            Descargar CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
