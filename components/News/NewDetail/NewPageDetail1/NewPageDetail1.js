import React from 'react';
import styles from '../../../../styles/NewPageDetail1.module.css';
import Image from "next/image";
import iconShare from "../../../../public/imgs/iconShareActive.svg";

const NewPageDetail1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Marco & Polo Go Round is a narrative and cinematic real-time
            </div>
            <div className={styles.wrapContent}>
                <div className={styles.wrapLeft}>
                    <div className={styles.wrapDate}>
                        20 October, 2023
                    </div>
                    <div className={styles.fullName}>
                        <p style={{ color: "#858585" }}>Written by</p>
                        <p>Andrew Junior</p>
                    </div>
                </div>
                <div>
                    <Image src={iconShare} alt="#" />
                </div>
            </div>

        </div>
    );
};

export default NewPageDetail1;
