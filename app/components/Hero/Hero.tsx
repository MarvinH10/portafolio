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
    const socialLinks = [
        { tooltip: "Facebook", url: process.env.NEXT_PUBLIC_RED_SOCIAL_URL_FACEBOOK || "#", iconClass: "fab fa-facebook-f", className: styles.facebook },
        { tooltip: "GitHub", url: process.env.NEXT_PUBLIC_RED_SOCIAL_URL_GITHUB || "#", iconClass: "fab fa-github", className: styles.github },
        { tooltip: "Instagram", url: process.env.NEXT_PUBLIC_RED_SOCIAL_URL_INSTAGRAM || "#", iconClass: "fab fa-instagram", className: styles.instagram },
        { tooltip: "Twitter", url: process.env.NEXT_PUBLIC_RED_SOCIAL_URL_X || "#", iconClass: "fab fa-x-twitter", className: styles.x },
    ];

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
                        <i className="fas fa-terminal"></i> Desarrollador Frontend/Backend.
                    </p>
                    <div className={styles.socialLinks}>
                        {socialLinks.map(({ tooltip, url, iconClass, className }, index) => (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={className}
                                data-tooltip={tooltip}
                            >
                                <i className={iconClass}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
