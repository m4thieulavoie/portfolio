import styles from "./app.scss";

const styling = document.createElement("style");
styling.innerText = styles;

document.querySelector("head").append(styling);

require("./App/App");
require("./Avatar/Avatar");
require("./Header/Header");
require("./Home/Home");
require("./NotFound/NotFound");
require("./Window/Window");
