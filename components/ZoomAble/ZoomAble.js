// ZoomableImage.js
import React, {useState} from 'react';
import styles from '../../styles/ZoomAble.module.css';


const ZoomAble = ({content, isZoomed, setIsZoomed}) => {

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={isZoomed ? `${styles.zoomed} zoomAble` : `${styles.zoom}`} >

            <div className={styles.wrapContent}>
                <div
                    onClick={handleImageClick}
                    className={styles.close}>
                    X
                </div>
                {
                    content
                }
            </div>
        </div>
    );
};

export default ZoomAble;
