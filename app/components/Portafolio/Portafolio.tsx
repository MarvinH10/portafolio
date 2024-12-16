import React from "react";
import styles from "./Portafolio.module.css";

const Portafolio: React.FC = () => {
    const proyectos = [
        {
            id: 1,
            titulo: "Proyecto 1",
            descripcion: "Descripción del Proyecto 1",
            imagen: "/images/proyecto1.png",
        },
        {
            id: 2,
            titulo: "Proyecto 2",
            descripcion: "Descripción del Proyecto 2",
            imagen: "/images/proyecto2.png",
        },
        {
            id: 3,
            titulo: "Proyecto 1",
            descripcion: "Descripción del Proyecto 1",
            imagen: "/images/proyecto1.png",
        },
        {
            id: 4,
            titulo: "Proyecto 2",
            descripcion: "Descripción del Proyecto 2",
            imagen: "/images/proyecto2.png",
        },
        {
            id: 5,
            titulo: "Proyecto 1",
            descripcion: "Descripción del Proyecto 1",
            imagen: "/images/proyecto1.png",
        },
        {
            id: 6,
            titulo: "Proyecto 2",
            descripcion: "Descripción del Proyecto 2",
            imagen: "/images/proyecto2.png",
        },
    ];

    return (
        <section className={styles.portafolio}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>PORTAFOLIO</h2>
                <div className={styles.contenido}>
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.id} className={styles.card}>
                            <img
                                src={proyecto.imagen}
                                alt={proyecto.titulo}
                                className={styles.imagen}
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.cardTitulo}>{proyecto.titulo}</h3>
                                <p className={styles.cardDescripcion}>{proyecto.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portafolio;
