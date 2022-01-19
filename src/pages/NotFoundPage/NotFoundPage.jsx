import React from "react";
import styles from './NotFound.module.scss'
const NotFoundPage = () => {
    const {sectionNotFound, titleSection} = styles;
    return(
        <section className={sectionNotFound}>
            <h2 className={titleSection}>Error 404 not Found :(</h2>
        </section>
    );
};

export default NotFoundPage;