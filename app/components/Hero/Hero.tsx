"use client";

import React, { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
    useEffect(() => {
        const createRippleEffect = async () => {
            const loadScripts = async () => {
                await new Promise<void>((resolve, reject) => {
                    const jqueryScript = document.createElement("script");
                    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
                    jqueryScript.onload = () => resolve();
                    jqueryScript.onerror = () => reject(new Error("Failed to load jQuery"));
                    document.body.appendChild(jqueryScript);
                });

                await new Promise<void>((resolve, reject) => {
                    const ripplesScript = document.createElement("script");
                    ripplesScript.src =
                        "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js";
                    ripplesScript.onload = () => resolve();
                    ripplesScript.onerror = () => reject(new Error("Failed to load jquery.ripples"));
                    document.body.appendChild(ripplesScript);
                });

                const heroElement = document.querySelector(`.${styles.hero}`) as HTMLElement;
                if (heroElement) {
                    const $ = window.jQuery;
                    if ($) {
                        $(heroElement).ripples({
                            resolution: 612,
                            dropRadius: 50,
                            perturbance: 0.08,
                        });

                        $(heroElement).on("mousemove", function (e: MouseEvent) {
                            const x = e.clientX;
                            const y = e.clientY;
                            $(heroElement).ripples("drop", x, y, 50, 0.1);
                        });
                    }
                }
            };

            loadScripts().catch((error) => console.error(error));
        };

        createRippleEffect();

        return () => {
            const heroElement = document.querySelector(`.${styles.hero}`) as HTMLElement;
            if (heroElement) {
                const $ = window.jQuery;
                if ($) {
                    $(heroElement).ripples("destroy");
                }
            }
        };
    }, []);

    return (
        <div className={styles.hero}>
            <img
                src="/images/bg.webp"
                alt="Fondo del Hero"
                className={styles.background}
            />
            <div className={styles.content}>
                <div className={styles.profileImage}>
                    <img
                        alt="Foto de Marvin Campos"
                        src="/images/perfil.avif"
                        width={150}
                        height={150}
                        className={styles.circleImage}
                    />
                </div>
                <h1 className={styles.h1}>
                    Hola, soy <span className={styles.span}>Marvin Campos</span>
                </h1>
                <p className={styles.parrafo}>
                    Soy un apasionado desarrollador Full Stack, combinando habilidades de frontend y backend
                    para ofrecer soluciones innovadoras y de alto impacto.
                </p>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
