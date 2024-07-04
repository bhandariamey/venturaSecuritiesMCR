import React, { useState, useEffect } from "react";
import styles from "./LongText.module.css";
const LongText = (props) => {
  const [displayText, setDisplayText] = useState();

  const largerScreen =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ";
  const smallerScreen =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setDisplayText(window.innerWidth);
      } else {
        setDisplayText(window.innerWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="longText">
      {displayText > 500 ? (
        <>
          {<p className={styles.body}>{largerScreen}</p>}
          {<p className={styles.body}>{largerScreen}</p>}
        </>
      ) : (
        <>
          {<p className={styles.body}>{smallerScreen}</p>}
          <span className={styles.ReadMore}>...Read More</span>
        </>
      )}
    </div>
  );
};

export default LongText;
