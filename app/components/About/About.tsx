import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>ACERCA DE MÍ</h2>
                <div className={styles.contenido}>
                    <div className={styles.imagenWrapper}>
                        <img
                            src="/images/perfil.avif"
                            alt="Perfil"
                            className={styles.imagen}
                        />
                    </div>
                    <div className={styles.textoWrapper}>
                        <h3 className={styles.encabezado}>¡Hola! Me llamo Persona X</h3>
                        <p className={styles.subtitulo}>Desarrollador Full Stack</p>
                        <p className={styles.descripcion}>
                            Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web dinámicas y funcionales.
                            Mi objetivo es combinar habilidades de frontend y backend para ofrecer soluciones innovadoras e impactantes.
                        </p>
                        <ul className={styles.detalles}>
                            <li>
                                <span className={styles.etiqueta}>Cumpleaños</span>
                                <span className={styles.valor}>: 6 de diciembre de 1990</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Teléfono</span>
                                <span className={styles.valor}>: +1 876-369-9009</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Email</span>
                                <span className={styles.valor}>: personx@example.com</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Ubicación</span>
                                <span className={styles.valor}>: Calle Principal 123, Ciudad Ejemplo</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Idiomas</span>
                                <span className={styles.valor}>: Inglés, Español</span>
                            </li>
                            <li>
                                <span className={styles.etiqueta}>Freelance</span>
                                <span className={styles.valor}>: Disponible</span>
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
