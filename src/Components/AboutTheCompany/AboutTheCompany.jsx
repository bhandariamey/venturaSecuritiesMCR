import LongText from "./LongText"
import styles from "./AboutTheCompany.module.css"
import { useState } from "react"

export default function AboutTheCompany(){


    return(
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>About the company</h2>
                <div className={styles.body}>
                    <LongText/>
                </div>
            </div>
        </>
    )
}