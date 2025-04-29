import React from 'react';
import styles from './cv.module.css';

const CVPage = () => {
    return (
        <div className={styles.cvContainer}>
            <h1 className={styles.title}>Curriculum Vitae</h1>
            <p className={styles.description}>This section contains a detailed overview of my professional qualifications, skills, and experience.</p>
            {/* Additional CV content goes here */}
        </div>
    );
};

export default CVPage;