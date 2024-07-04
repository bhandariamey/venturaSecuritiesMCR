import styles from "./IpoInfo.module.css";
export default function IpoInfo(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div className={styles.wrapper}>
        <h2>IPO details</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <p>Issue size</p>
            <h2>{item.issueSize}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Price range</p>
            <h2>{item.priceRange}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Minimum amount</p>
            <h2>{item.minInvest}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Lot size</p>
            <h2>{item.shares}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Issue dates</p>
            <h2>{item.issueDates}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Listed on</p>
            <h2>{item.endDate}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Listed price</p>
            <h2>{item.listedPrice}</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Listing gains</p>
            <h2>{item.listedGains}{"("}<span className={styles.profit}>{"10.0%"}</span>{")"}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
