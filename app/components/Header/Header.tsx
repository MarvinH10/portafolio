"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("inicio");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const irASeccion = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
            const sectionId = href.substring(1);
            setActiveLink(sectionId);
            setMenuOpen(false);
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((event.target as HTMLElement).classList.contains(styles.overlay)) {
            setMenuOpen(false);
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logoContainer}>
                        <a href="#inicio" onClick={irASeccion}>
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className={styles.logo}
                            />
                        </a>
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
                        <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
                        <div className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}></div>
                    </div>
                    <ul className={`${styles.ul} ${menuOpen ? styles.menuOpen : ""}`}>
                        <li>
                            <a
                                className={`${styles.links} ${activeLink === "inicio" ? styles.active : ""}`}
                                href="#inicio"
                                onClick={irASeccion}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${styles.links} ${activeLink === "acerca" ? styles.active : ""}`}
                                href="#acerca"
                                onClick={irASeccion}
                            >
                                Acerca de mí
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${styles.links} ${activeLink === "portafolio" ? styles.active : ""}`}
                                href="#portafolio"
                                onClick={irASeccion}
                            >
                                Portafolio
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${styles.links} ${activeLink === "contacto" ? styles.active : ""}`}
                                href="#contacto"
                                onClick={irASeccion}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {menuOpen && (
                <div className={styles.overlay} onClick={closeMenu}></div>
            )}
        </div>
    );
};

export default Header;
