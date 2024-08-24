import React, { useEffect, useReducer, useState } from "react";
import styles from "./accordian.module.css";
import data from "./data";

const AccordianApp = () => {
  const [selected, setSelected] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  useEffect(() => {
    if (!multiSelection) setSelected([]);
  }, [multiSelection]);

  const handleClick = (index) => {
    if (multiSelection) {
      const indexOfValue = selected.indexOf(index);
      if (indexOfValue === -1) setSelected([...selected, index]);
      else {
        const copy = [...selected];
        copy.splice(indexOfValue, 1);
        setSelected(copy);
      }
    } else setSelected(selected?.[0] === index ? [] : [index]);
  };
  return (
    <div className={styles.app}>
      <button
        className={styles.button}
        onClick={() => setMultiSelection(!multiSelection)}
      >
        {multiSelection ? "Disable" : "Enable"} Multi Selection
      </button>
      <div>
        {data.map((item, i) => (
          <Accordian
            active={selected?.includes(i)}
            key={i}
            item={item}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

function Accordian({ active, item, onClick }) {
  return (
    <div className={styles.accordian}>
      <div onClick={onClick} className={styles.header}>
        <p>{item[0]}</p>
        <span className={styles.accordianButton}>{active ? "-" : "+"}</span>
      </div>
      {active && <p className={styles.text}>{item[1]}</p>}
    </div>
  );
}

export default AccordianApp;
