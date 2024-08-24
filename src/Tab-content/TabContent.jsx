import React, { useState } from "react";
import styles from "./Tab.module.css";

const data = [
  { title: "Tab 1", content: "This is content for Tab1" },
  { title: "Tab 2", content: "This is content for Tab2" },
  { title: "Tab 2", content: "This is content for Tab3" },
];

const TabContent = () => {
  const [id, setId] = useState(0);
  return (
    <div className={styles.app}>
      <div className={styles["tab-container"]}>
        {data &&
          data.map((item, i) => (
            <button
              onClick={() => setId(i)}
              key={item.title}
              className={`${styles.btn} ${id === i ? styles.active : ""}`}
            >
              {item.title}
            </button>
          ))}
      </div>
      <div>
        <h2>{data[id].content}</h2>
      </div>
    </div>
  );
};

export default TabContent;
