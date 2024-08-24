import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

const url1 = "https://dummyjson.com/products";

const LoadMore = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  async function fetchProducts(limit = 20) {
    setLoading(true);
    try {
      const res = await fetch(
        `${url1}?limit=${limit}&skip=${count}&select=title,price,thumbnail`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProductList([...productList, ...data.products]);
        setCount(limit + count);
      }
    } catch (e) {
      window.alert("There is an error loading the products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(20, 0);
  }, []);

  function loadMoreHandler() {
    fetchProducts(20);
  }

  return (
    <div className={styles.app}>
      {productList.length && <ProductList list={productList} />}
      {!loading &&
        count &&
        (count < 100 ? (
          <button className={styles.button} onClick={loadMoreHandler}>
            Load More
          </button>
        ) : (
          <p>All the products are loaded. Nothing more to show.☹️</p>
        ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LoadMore;

function ProductList({ list }) {
  console.log(list);
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <div key={item.id} className={styles.product}>
          <img className={styles.image} src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
