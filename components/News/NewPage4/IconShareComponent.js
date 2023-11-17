import React, {useState} from 'react';
import styles from "../../../styles/NewPage4.module.css";
import Image from "next/image";
import iconShareActive from "../../../public/imgs/iconShareActive.svg";
import iconShareUnActive from "../../../public/imgs/iconShareUnactive.svg";

const IconShareComponent = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave} className={styles.WrapIconShare}>
            {isHovering ? (
                <Image alt="#" src={iconShareActive}/>
            ) : (
                <Image alt="#" src={iconShareUnActive}/>
            )}
        </div>
    );
};

export default IconShareComponent;
