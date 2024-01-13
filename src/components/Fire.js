import styles from "../css/fire.module.scss";

import React from "react";

const Fire = () => {
    const particleWidth = 8;
    const numParticles = 40;
    const animationDur = 1.2;

    const particles = Array(numParticles)
        .fill()
        .map((_, i) => (
            <div
                className={styles.particle}
                key={i}
                style={{
                    left: `calc(${(100 / numParticles) * i}% - ${particleWidth / 2}rem)`,
                    animationDelay: Math.random() * animationDur + "s",
                }}
            />
        ));

    return (
        <div className={styles["fire-wrapper"]}>
            <div className={styles["wood-pile"]}>
                <div className={styles.wood}></div>
                <div className={styles.wood}></div>
            </div>
            <div
                className={styles.fire}
                style={{ "--particle-width": particleWidth + "rem", "--animation-duration": 1.2 + "s" }}
            >
                {particles}
            </div>
        </div>
    );
};

export default Fire;
