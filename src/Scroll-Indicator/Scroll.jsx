import React, { useEffect, useState } from "react";
import styles from "./Scroll.module.css";

const Scroll = () => {
  const [products, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  function scrollHandler() {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scroll = (scrollTop / windowHeight) * 100;
    setScrollPercentage(scroll.toFixed(1));
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Scroll Indicator</h1>
        <span className={styles.indicator}></span>
        <span
          className={`${styles.active}`}
          style={{ width: scrollPercentage + "%" }}
        ></span>
      </div>
      <div className={styles.container}>
        {products.length &&
          products.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </div>
  );
};

export default Scroll;
