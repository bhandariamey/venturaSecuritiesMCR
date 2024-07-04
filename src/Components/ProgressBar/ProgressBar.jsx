import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import styles from "./ProgressBar.module.css"

export default function ProgressBar() {
  const step1Content = (
    <div>
      <h2>Bidding starts</h2>
      <p>12 Dec 2023</p>
    </div>  
  );

  const step2Content = (
    <div>
      <h2>Bidding ends</h2>
      <p>15 Dec 2023</p>
    </div>
  );

  const step3Content = (
    <div>
      <h2>Allotment finalization</h2>
      <p>18 Dec 2023</p>
    </div>
  );

  const step4Content = (
    <div>
      <h2>Refund initiation</h2>
      <p>18 Dec 2023</p>
    </div>
  );

  const step5Content = (
    <div>
      <h2>Demat transfer</h2>
      <p>18 Dec 2023</p>
    </div>
  );

  const step6Content = (
    <div>
      <h2>Listing date</h2>
      <p>21 Dec 2023</p>
    </div>
  );

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>IPO Timeline</h2>
       <div className={styles.stepProgressContainer}>
       <StepProgressBar
          startingStep={5} 
          buttonWrapperClass = "buttons"
          steps={[
            {
              
              subtitle: step1Content,
              name: "Bidding starts",
              
            },
            {
              
              subtitle: step2Content,
              name: "step 2",
            },
            {
              
              subtitle: step3Content,
              name: "step 3",
            },{
                
                subtitle: step4Content,
                name: "step 4",
              },{
                
                subtitle: step5Content,
                name: "step 5",
              },{
                
                subtitle: step6Content,
                name: "step 6",
              },
          ]}
        />
       </div>
        
      </div>
    </>
  );
}
