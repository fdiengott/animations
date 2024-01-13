import styles from "../css/fire.module.scss";

import React from "react";

const Fire = () => {
    const particleWidth = 8;
    const numParticles = 40;

    const particles = Array(numParticles)
        .fill()
        .map((_, i) => (
            <div
                className={styles.particle}
                key={i}
                style={{
                    left: `calc(${(100 / numParticles) * i}% - ${particleWidth / 2}rem)`,
                    animationDelay: Math.random() + "s",
                }}
            />
        ));

    return (
        <div className={styles.fire} style={{ "--particle-width": particleWidth + "rem" }}>
            {particles}
        </div>
    );
};

export default Fire;
