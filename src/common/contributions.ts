import vsCodeIcon from "../../images/vscode.png";
import mdnIcon from "../../images/mdn.jpeg";
import braveIcon from "../../images/brave.png";
import gotoIcon from "../../images/goto.png";
import shopifyIcon from "../../images/shopify.png";

interface Contribution {
  readonly name: string;
  readonly icon: string;
}

const contributions: ReadonlyArray<Contribution> = [
  {
    name: "home",
    icon: vsCodeIcon,
  },
  {
    name: "mdn",
    icon: mdnIcon,
  },
  {
    name: "history",
    icon: braveIcon,
  },
  {
    name: "skillz",
    icon: gotoIcon,
  },
  {
    name: "publications",
    icon: shopifyIcon,
  },
];

export default contributions;
