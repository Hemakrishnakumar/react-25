import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AccordianApp from "./Accordian/AccordianApp";
import RandomColor from "./Random-color/RandomColor";
import Circle from "./MoveCircle/Circle";
import Slider from "./image-slider/Slider";
import TreeView from "./Tree-view/TreeView";
import Theme from "./ThemeChange/Theme";
import StarRating from "./StarRating/StarRating";
import StarRating2 from "./StarRating/StarRating2";
import LoadMore from "./Loadmore/LoadMore";
import Scroll from "./Scroll-Indicator/Scroll";
import TabContent from "./Tab-content/TabContent";
import OpenModal from "./OpenModal/OpenModal";
import Game from "./Tic-Tac-Toe/Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
