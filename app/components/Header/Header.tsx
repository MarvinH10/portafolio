"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const irASeccion = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <a className={styles.links} href="#inicio" onClick={irASeccion}>
                            Inicio
                        </a>
                        <a className={styles.links} href="#acerca" onClick={irASeccion}>
                            Acerca de mí
                        </a>
                        <a className={styles.links} href="#portafolio" onClick={irASeccion}>
                            Portafolio
                        </a>
                        <a className={styles.links} href="#contacto" onClick={irASeccion}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
