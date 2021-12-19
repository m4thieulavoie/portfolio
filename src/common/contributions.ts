import vsCodeIcon from "../../images/vscode.png";
import mdnIcon from "../../images/mdn.jpeg";
import braveIcon from "../../images/brave.png";
import gotoIcon from "../../images/goto.png";
import shopifyIcon from "../../images/shopify.png";

interface Contribution {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly link?: string;
}

const contributions: ReadonlyArray<Contribution> = [
  {
    name: "VSCode",
    icon: vsCodeIcon,
    link: "https://github.com/m4thieulavoie?org=microsoft",
    description: "Contributed to FAST, used for the VSCode Design System.",
  },
  {
    name: "MDN Web Docs",
    icon: mdnIcon,
    link: "https://github.com/m4thieulavoie?org=mdn",
    description: "Contributed some bug fixes",
  },
  {
    name: "Brave Browser",
    icon: braveIcon,
    link: "https://github.com/m4thieulavoie?org=brave",
    description: "Helped with a few contributions",
  },
  {
    name: "GoTo App",
    icon: gotoIcon,
    description: "Built the design system for the app",
  },
  {
    name: "Shopify",
    icon: shopifyIcon,
    link: "https://github.com/m4thieulavoie?org=shopify",
    description: "Working in the admin, contributing to Polaris",
  },
];

export default contributions;
