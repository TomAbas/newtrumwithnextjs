import React from 'react'
import styles from '../../styles/NewsPage.module.css';
import NewPage1 from './NewPage1/NewPage1';
import NewPage2 from './NewPage2/NewPage2';
import NewPage3 from './NewPage3/NewPage3';
import NewPage4 from "./NewPage4/NewPage4";

const NewPage = () => {
    return (
        <div className={styles.newPageContainer}>
            <NewPage1/>
            <div className={styles.newPageSubContainer}>
                {/*<NewPage2/>*/}
                {/*<NewPage3/>*/}
                <NewPage4/>

            </div>
        </div>
    )
}

export default NewPage