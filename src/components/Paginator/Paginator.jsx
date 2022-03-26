import React, {useState} from "react";
import styles from "./Paginator.module.css";

function Paginator(props) { 
    
    const [count, setCount] = useState(1)
    let pagesCount = Math.ceil(props.allRecords / props.numberOfRecords);
    let max = 8;         
    let pages = [];
    for (let i = count-5 < 1 ? 1 : count-4; i <= pagesCount; i++) {
      if (pages.length < max) {
        pages.push(i);
      }
    }

    let newPages = pages.map((p) => {
      return (
        <span id={p}
          className={String(count === p && styles.selectedPage)}
          onClick={(e) => {
            props.eventOnClick(p);
            setCount(+e.target.id)
          }}
        >
          {" "}{p}{" "}
        </span>
      );
    });
    return newPages;
    }

    export default Paginator