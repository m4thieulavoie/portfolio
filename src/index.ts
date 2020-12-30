import bootstrap from "axe-browser-reporter";
import styles from "./app.scss";

const styling = document.createElement("style");
styling.innerText = styles;

document.querySelector("head").append(styling);

require("./About/About");
require("./App/App");
require("./avatar/Avatar");
require("./CoffeeButton/CoffeeButton");
require("./Contact/Contact");
require("./Header/Header");
require("./History/History");
require("./Home/Home");
require("./Portfolio/Portfolio");
require("./Post/Post");
require("./Publications/Publications");
require("./Skillz/Skillz");
require("./Terminal/Terminal");
require("./Window/Window");

bootstrap({
  whitelist: ["color-contrast", "frame-tested"],
});
