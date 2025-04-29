import React from 'react';
import styles from './pride.module.css';

const PridePage = () => {
    return (
        <div className={styles.prideContainer}>
            <h1>Pride Groups</h1>
            <p>This section showcases information about LGBTQ+ organizations and initiatives I'm involved with.</p>
            {/* Additional content related to Pride Groups can be added here */}
        </div>
    );
};

export default PridePage;