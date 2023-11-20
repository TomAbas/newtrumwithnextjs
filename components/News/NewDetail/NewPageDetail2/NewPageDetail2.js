import React from 'react';
import styles from '../../../../styles/NewPageDetail2.module.css';

const NewPageDetail2 = () => {
    return (<div style={{ marginBottom: '5rem' }}>
        <div className={styles.wrapContent}>
            <div className={styles.contentRight}>
                <div className={styles.titleRight}>
                    The artistic direction
                </div>
                <div className={styles.descRight}>
                    The artistic directions, inspired in part by the style of artist David Hockney, required colossal
                    work in modeling and textures and makes viewers feel like they are inside a three dimension,
                    living,
                    painting. The project features several innovative real-time approaches and technologies,
                    including
                    volumetric capture of actors, motion capture, as well as physics and fluids simulations.
                </div>
            </div>
            <div className={styles.contentLeft}>
                <div>Music</div>
                <div>Andrew</div>
            </div>
        </div>
        <div className={styles.subText}>
            The project features several innovative real-time approaches and technologies, including volumetric
            capture of actors, motion capture, as well as physics and fluids simulations.
        </div>
    </div>);
};

export default NewPageDetail2;
