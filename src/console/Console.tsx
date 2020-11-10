import React, { useState } from "react";
import "./Console.scss";
import { useHistory } from "react-router";
import Emoji from "../emoji/Emoji";
import { navigateToPage } from "../utils";
import { menu } from "../_models/Menu";

function Console() {
  const [command, setCommand] = useState("");
  const history = useHistory();
  const helpCommand = (
    <>
      {"help"}
      <p>Valid commands are</p>
      <ul className="commands-menu">
        {menu.map(({ name }) => (
          <li
            key={name}
            onClick={(e) => navigateToPage(e as any, `/${name}`, history)}
            className="command"
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
  const initialCommands = [
    <span key="hey">
      Hi, I'm Mathieu Lavoie <Emoji emoji="👋"></Emoji>
    </span>,
    `I'm a Senior Software engineer`,
    "",
    "",
    "",
    "",
    "",
    helpCommand,
  ];
  const [commands, setCommands] = useState<(string | JSX.Element | null)[]>(
    initialCommands
  );

  const spiceCommand = (command: string) => {
    if (command.startsWith("sudo")) {
      return (
        <p>
          Why so rude? No need to use <strong>sudo</strong> here!
        </p>
      );
    }

    return command;
  };

  const navigate = () => {
    if (menu.find(({ name }) => name === command)) {
      history.push(`/${command}`);
    }

    if (command === "clear") {
      setCommands([]);
    } else {
      setCommands([
        ...commands,
        command === "help" ? helpCommand : spiceCommand(command),
      ]);
    }

    setCommand("");
  };

  return (
    <div className={"console"}>
      <div className="previous-messages">
        {commands.map(
          (command, i) =>
            command && (
              <div key={`${command.toString()}${i}`}>
                visitor-PC: <span className="machine-name">matmobile.co </span>
                root$ {command}
              </div>
            )
        )}
      </div>
      <div className="text-container">
        <p>
          visitor-PC: <span className="machine-name">matmobile.co </span> root$
        </p>
        {/* <div className={command !== "" ? "not-empty cursor" : "cursor"}></div> */}
        <input
          className="console-input"
          type="text"
          value={command}
          onChange={(event) => {
            setCommand(event.currentTarget.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              navigate();
            }
          }}
          autoFocus
        />
      </div>
    </div>
  );
}

export default Console;
