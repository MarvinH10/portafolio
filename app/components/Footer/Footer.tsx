import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.parrafo}>&copy; 2024 Derechos reservados.</p>
        </footer>
    );
};

export default Footer;
