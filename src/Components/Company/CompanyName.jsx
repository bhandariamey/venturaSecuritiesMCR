import React from 'react';
import styles from './CompanyName.module.css'; // Import CSS module

const CompanyName = ({ image, name, startDate, endDate }) => {
    return (
        <div className={styles.company}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.details}>
                <h2 className={styles.companyName}>{name}</h2>
                <p className={styles.companyDate}>{new Date(startDate).getDate()}{"th -"} {new Date(endDate).getDate()}{"th Oct 2022"} </p>
            </div>
        </div>
    );
}

export default CompanyName;
