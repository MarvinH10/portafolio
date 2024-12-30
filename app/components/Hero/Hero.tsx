"use client";

import React from "react";
import styles from "./Hero.module.css";
import LgVue from '@meronex/icons/lg/LgVue';
import GrReactjs from '@meronex/icons/gr/GrReactjs';
import LgAngularIcon from '@meronex/icons/lg/LgAngularIcon';
import LgLaravel from '@meronex/icons/lg/LgLaravel';
import LgJavascript from '@meronex/icons/lg/LgJavascript';
import LgTypescriptIcon from '@meronex/icons/lg/LgTypescriptIcon';

const Hero: React.FC = () => {
    const urlFacebook = process.env.NEXT_PUBLIC_RED_SOCIAL_URL_FACEBOOK || "#";
    const urlGitHub = process.env.NEXT_PUBLIC_RED_SOCIAL_URL_GITHUB || "#";
    const urlInstagram = process.env.NEXT_PUBLIC_RED_SOCIAL_URL_INSTAGRAM || "#";
    const urlX = process.env.NEXT_PUBLIC_RED_SOCIAL_URL_X || "#";

    return (
        <div className={styles.hero} id="inicio">
            <div className={styles.content}>
                <div className={styles.profileImageContainer}>
                    <div className={styles.iconContainer}>
                        <LgVue className={`${styles.icon} ${styles.vueIcon}`} />
                        <GrReactjs className={`${styles.icon} ${styles.reactIcon}`} />
                        <LgAngularIcon className={`${styles.icon} ${styles.angularIcon}`} />
                        <LgLaravel className={`${styles.icon} ${styles.laravelIcon}`} />
                        <LgJavascript className={`${styles.icon} ${styles.jsIcon}`} />
                        <LgTypescriptIcon className={`${styles.icon} ${styles.tsIcon}`} />
                    </div>
                    <img
                        alt="Foto de Marvin Campos"
                        src="/images/avatar.png"
                        width={380}
                        height={380}
                        className={styles.circleImage}
                    />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.h1}>
                        Hola, soy <span className={styles.span}>Marvin Campos</span>
                    </h1>
                    <p className={styles.animatedText}>
                        <i className="fas fa-terminal"></i> Desarrollador Frontend de Perú
                    </p>
                    <div className={styles.socialLinks}>
                        <a
                            href={urlFacebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.facebook}
                            data-tooltip="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href={urlGitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.github}
                            data-tooltip="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href={urlInstagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.instagram}
                            data-tooltip="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href={urlX}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.x}
                            data-tooltip="Twitter"
                        >
                            <i className="fab fa-x-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
