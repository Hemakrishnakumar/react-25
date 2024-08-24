import { useEffect, useState } from "react";
import styles from "./slider.module.css";
import classNames from "classnames";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then((res) => res.json())
      .then((res) => setImages(res))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  if (loading) return <h1>Loading</h1>;
  if (!images.length) return <h1>Failed to load the images</h1>;
  return (
    <div className={styles.container}>
      <button
        style={{ left: "6px" }}
        onClick={() =>
          setActiveImage(!activeImage ? images?.length - 1 : activeImage - 1)
        }
        className={styles.arrow}
      >
        &larr;
      </button>
      {images.length ? (
        images.map((image, index) => (
          <img
            className={classNames(styles.image, {
              [styles.active]: activeImage === index,
            })}
            src={image["download_url"]}
            alt="wallpaper"
            key={image.url}
          />
        ))
      ) : (
        <h1>Failed to load the images</h1>
      )}
      <button
        onClick={() =>
          setActiveImage(
            activeImage === images.length - 1 ? 0 : activeImage + 1
          )
        }
        className={styles.arrow}
        style={{ right: "6px" }}
      >
        &rarr;
      </button>
      <span
        style={{
          display: "flex",
          gap: "3px",
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.length &&
          images.map((image, index) => (
            <button
              onClick={() => setActiveImage(index)}
              style={{
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                border: "1px solid #fff",
                background: `${activeImage === index ? "#fff" : "transparent"}`,
              }}
              key={image.url}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default Slider;
