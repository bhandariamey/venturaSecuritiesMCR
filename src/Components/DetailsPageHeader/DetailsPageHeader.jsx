import styles from './DetailsPageHeader.module.css'
import button from "../../assets/homeButton.png"

import downloadButton from "../../assets/downloadButton.png"
export default function DetailsPageHeader(props){

    const {logo, name, setCompany} = props


    const handleClick = () => {
        setCompany()
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.leftHeader}>
                    <div className={styles.homeButton} onClick={handleClick}>
                        <img src={button} alt="HomeButton" />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={logo} alt={name} />
                    </div>
                    <div>
                        <h2 className={styles.companyName}>{name}</h2>
                        <p className={styles.companyFullName}>{name}</p>
                    </div>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.downloadIcon}>
                        <img src={downloadButton} alt="Download button" />
                    </div>
                    <button className={styles.applyNowButton}>
                        Apply Now
                    </button>
                </div>
            </div>

        </>
    )
}