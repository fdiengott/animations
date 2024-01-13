import styles from "../css/fire2.module.scss";

import React from "react";

const Fire2 = () => {
    const fireHeight = 20;
    const numParticles = 40;
    const animationDur = 1;
    const particleWidth = 8;

    const particles = Array(numParticles)
        .fill()
        .map((_, i) => (
            <div
                className={styles.particle}
                key={i}
                style={{
                    "--particle-left": `${(fireHeight / numParticles) * 2 * i - fireHeight}rem`,
                    "--particle-animation-delay": Math.random() * animationDur + "s",
                    "--particle-animation-duration": 0.6 + Math.random() * 0.7 + "s",
                    "--particle-height": Math.random() * 1.5 + "rem",
                }}
            />
        ));

    return (
        <div className={styles.fire} style={{ "--fire-height": fireHeight + "rem" }}>
            {particles}
        </div>
    );
};

export default Fire2;
