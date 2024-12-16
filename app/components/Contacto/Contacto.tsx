"use client";

import React, { useState } from "react";
import styles from "./Contacto.module.css";

const Contacto: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Datos enviados:", formData);

        setMensajeEnviado(true);

        setFormData({
            nombre: "",
            email: "",
            mensaje: "",
        });
    };

    return (
        <section className={styles.contacto}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>CONTACTO</h2>
                <div className={styles.contenido}>
                    <div className={styles.formWrapper}>
                        <h3 className={styles.encabezado}>
                            ¿Tienes un proyecto en mente? ¡Contáctame!
                        </h3>
                        {mensajeEnviado && (
                            <p className={styles.exito}>
                                ¡Gracias por contactarme! Me pondré en contacto contigo pronto.
                            </p>
                        )}
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="nombre" className={styles.label}>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Tu correo electrónico"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="mensaje" className={styles.label}>
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Tu mensaje"
                                    rows={5}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.boton}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
