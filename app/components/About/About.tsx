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
                        <p className={styles.descripcion}>
                            Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web dinámicas y funcionales.
                            Mi objetivo es combinar habilidades de frontend y backend para ofrecer soluciones innovadoras e impactantes.
                        </p>
                        <h2 className={styles.apasiona}>¿Qué es lo que más me apasiona?</h2>
                        <p className={styles.descripcion}>
                            Lo que más me apasiona es la resolución de problemas y el aprendizaje continuo. Siempre estoy buscando nuevas tecnologías que me permitan mejorar la experiencia de usuario y optimizar el rendimiento de las aplicaciones. Me encanta colaborar con otros desarrolladores y aprender de sus enfoques y soluciones creativas.
                        </p>
                        <button className={styles.buttonDescargar} role="button">
                            <i className="fa-solid fa-file-pdf"></i><span className={styles.spanButton}>Descargar CV</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
