"use client"; //ESTO SIRVE PARA CONVERTIR A UN COMPONENTE EN CLIENTE MAS QUE TODO CUANDO HAYA EVENTOS COMO EL ONCLICK U ONCHANGE

import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {

    // EJEMPLO DE COMO PODEMOS SCROLEAR VOLVER AL CAMPO DE INICIO:
    const volverAInicio = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const targetElement = document.getElementById("inicio");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <a href="#inicio" onClick={volverAInicio}>
                            Inicio
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
