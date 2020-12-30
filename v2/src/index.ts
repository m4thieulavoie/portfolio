import styles from "./app.scss";

const styling = document.createElement("style");
styling.innerText = styles;

document.querySelector("head").append(styling);

require("./About/About");
require("./App/App");
require("./Avatar/Avatar");
require("./Contact/Contact");
require("./Header/Header");
require("./History/History");
require("./Home/Home");
require("./Portfolio/Portfolio");
require("./Post/Post");
require("./Publications/Publications");
require("./Terminal/Terminal");
require("./Window/Window");
