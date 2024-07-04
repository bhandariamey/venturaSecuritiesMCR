
import CompanyName from "../Company/CompanyName"
import DetailsPageHeader from "../DetailsPageHeader/DetailsPageHeader"
import IpoInfo from "../IpoInfo/IpoInfo"
import ProgressBar from "../ProgressBar/ProgressBar"
import AboutTheCompany from "../AboutTheCompany/AboutTheCompany"

export default function IpoDetailsPage(props){

    const {item} = props
    const {setCompany} = props
    const {logo, name, startDate, endDate} = item
    return(
        <>
            <DetailsPageHeader setCompany={setCompany} logo={logo} name={name}/>
            <IpoInfo item={item}/>
            <ProgressBar/>
            <AboutTheCompany/>
        </>
    )
}