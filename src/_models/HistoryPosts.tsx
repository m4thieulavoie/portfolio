import React from "react";
import { SocialPost } from "./SocialPost";
import Emoji from "../emoji/Emoji";

export const historyPosts = [
  {
    date: "November 2018 - undefined",
    text: (
      <>
        <p className="status">
          Working{" "}
          <a
            href="https://www.logmein.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @LogMeIn
          </a>
          . Since April 2020, I am officially a Senior Software Engineer{" "}
          <Emoji emoji="💪"></Emoji>
        </p>
        <iframe
          src="https://giphy.com/embed/l0Iy7zmLUiALbkna8"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 1"
          allowFullScreen
        ></iframe>
      </>
    )
  },
  {
    date: "May 2018 - November 2018",
    text: (
      <>
        <p className="status">
          New job{" "}
          <a
            href="http://www.lgs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @LGS
          </a>
          . Been there for roughly 6 months
        </p>
        <iframe
          src="https://giphy.com/embed/JIX9t2j0ZTN9S"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 2"
          allowFullScreen
        ></iframe>
      </>
    )
  },
  {
    date: "April 2015 - May 2018",
    text: (
      <>
        <p className="status">
          First job!{" "}
          <a
            href="http://pgsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @PG Solutions
          </a>
          . Started my career there and have been coding as a full stack dev for
          about 3 years
        </p>
        <iframe
          src="https://giphy.com/embed/IpeYSEZshTefe"
          width="480"
          height="344"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 3"
          allowFullScreen
        ></iframe>
      </>
    )
  },
  {
    date: "May 2015",
    text: (
      <>
        <p className="status">
          Done with school! Studied Computer Science{" "}
          <a
            href="https://www.cegep-rimouski.qc.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Cégep de Rimouski
          </a>{" "}
          🎓
        </p>
        <iframe
          src="https://giphy.com/embed/qLHzYjlA2FW8g"
          width="480"
          height="209"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 4"
          allowFullScreen
        ></iframe>
      </>
    )
  }
] as SocialPost[];
