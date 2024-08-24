import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const StarRating2 = ({
  maxRating = 5,
  color = "yellow",
  size = 36,
  curRating = 0,
  messages = [],
}) => {
  const [rating, setRating] = useState(curRating);
  const [tempRating, setTempRating] = useState(0);

  const displayRating = tempRating || rating;

  return (
    <div
      style={{
        display: "flex",
        gap: "",

        alignItems: "center",
      }}
    >
      {[...new Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          color={color}
          num={i + 1}
          size={size}
          fill={tempRating ? i < tempRating : i < rating}
          setTempRating={setTempRating}
          setRating={setRating}
        />
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: size / 2 + "px",
        }}
      >
        <p>
          {messages.length === maxRating
            ? messages[displayRating - 1]
            : displayRating}
        </p>
      </div>
    </div>
  );
};

function Star({ color, size, fill, num, setTempRating, setRating }) {
  return (
    <div
      onMouseEnter={() => setTempRating(num)}
      onMouseLeave={() => setTempRating(0)}
      onClick={() => setRating(num)}
      style={{ color, fontSize: size + "px" }}
    >
      {fill ? (
        <StarIcon fontSize="inherit" />
      ) : (
        <StarBorderOutlinedIcon fontSize="inherit" />
      )}
    </div>
  );
}
export default StarRating2;
