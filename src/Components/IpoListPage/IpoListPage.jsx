
import styles from "./IpoListPage.module.css"
import companies from '../../assets/IpoData.js'
import CompanyName from '../Company/CompanyName.jsx'
import IpoDetailsPage from "../IpoDetailsPage/IpoDetailsPage.jsx"
import { useState } from "react"

export default function IpoListPage(){

    const [company, setCompany] = useState()

    const handleClick = (item) => {
        setCompany(item)
    }

    return(
        <>
            {!company ? <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Company/Issue Date</th>
                        <th>Issue Size</th>
                        <th>Price Range</th>
                        <th>Min invest/qty</th>
                    </tr>
                </thead>
                    <tbody>
                        {companies.map((item, index)=>
                            <tr key={index} onClick={()=>handleClick(item)}>
                                <td><CompanyName image={item.logo} name={item.name} startDate={item.startDate} endDate={item.endDate}/></td>
                                <td><h2>{item.issueSize}</h2></td>
                                <td><h2>{item.priceRange}</h2></td>
                                <td>
                                    <div className={styles.sharesWrapper}>
                                        <h2 className={styles.minInvest}>{item.minInvest}</h2>
                                        <p className={styles.shares}>{item.shares}</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
            </table>
            
            : <IpoDetailsPage item = {company} setCompany={setCompany}/>
            }

            
        </>
    )
}