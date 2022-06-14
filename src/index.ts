import bootstrap from "axe-browser-reporter";
import bootstrapDS from "@m4thieulavoie/design-system";
import styles from "./app.scss";

bootstrapDS();

const styling = document.createElement("style");
styling.innerText = styles;

document.querySelector("head").append(styling);

require("./App/App");
require("./Avatar/Avatar");
require("./CoffeeButton/CoffeeButton");
require("./Contact/Contact");
require("./CV/CV");
require("./Footer/Footer");
require("./Header/Header");
require("./Home/Home");
require("./Portfolio/Portfolio");
require("./Post/Post");
require("./Window/Window");

bootstrap({
  allowlist: ["color-contrast", "frame-tested"],
});
