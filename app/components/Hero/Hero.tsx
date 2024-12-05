"use client";

import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero: React.FC = () => {
    useEffect(() => {
        const createRippleEffect = async () => {
            const jqueryScript = document.createElement("script");
            jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
            jqueryScript.onload = () => {
                const ripplesScript = document.createElement("script");
                ripplesScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js";
                ripplesScript.onload = () => {
                    const heroElement = document.querySelector(`.${styles.hero}`) as HTMLElement;
                    if (heroElement) {
                        $(heroElement).ripples({
                            resolution: 612,
                            dropRadius: 20,
                            perturbance: 0.04,
                        });
                    }
                };
                document.body.appendChild(ripplesScript);
            };
            document.body.appendChild(jqueryScript);
        };

        createRippleEffect();

        return () => {
            const heroElement = document.querySelector(`.${styles.hero}`) as HTMLElement;
            if (heroElement) {
                $(heroElement).ripples("destroy");
            }
        };
    }, []);

    return (
        <div className={styles.hero}>
            <Image
                alt="Fondo del Hero"
                src="/images/bg.webp"
                width={1920}
                height={1080}
                className={styles.background}
                priority={true}
            />
            <div className={styles.content}>
                <h1 className={styles.h1}>¡Hola, soy <span className={styles.span}>Marvin Campos</span></h1>
                <p className={styles.parrafo}>
                    "Soy un apasionado desarrollador Full Stack, experto en crear experiencias web dinámicas y funcionales,
                    combinando habilidades de frontend y backend para ofrecer soluciones innovadoras y de alto impacto." 🌟
                </p>
            </div>
        </div>
    );
};

export default Hero;
