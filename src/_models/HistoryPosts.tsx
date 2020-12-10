import React from "react";
import { SocialPost } from "./SocialPost";

export const historyPosts = [
  {
    date: "November 2018 - undefined",
    text: (
      <>
        <p className="status">
          Started working{" "}
          <a
            href="https://www.logmein.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @LogMeIn
          </a>{" "}
          as a Software Developer. I got to work in JavaScript, Typescript,
          Redux, Angular 2+ and React.
        </p>
        <p className="status">
          Since April 2020, I am officially a Senior Software Developer working
          as a Tech Lead in our internal Design System. Hardcore Typescript,
          SASS and HTML are now part of my daily routine.
        </p>
        <p className="status">
          I took advantage of Covid-19 to give a shot at writing blog posts on{" "}
          <a href="" target="_blank" rel="norefferer">
            dev.to
          </a>{" "}
          and contributing to the Open Source community.
        </p>
      </>
    ),
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
          . Been there for roughly 6 months. Coded in Java, JSP and JavaScript.
        </p>
        <iframe
          src="https://giphy.com/embed/JIX9t2j0ZTN9S"
          width="480"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 2"
          allowFullScreen
        ></iframe>
      </>
    ),
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
          about 3 years. Did mostly ASP.NET and a tiny bit of jQuery.
        </p>
        <iframe
          src="https://giphy.com/embed/IpeYSEZshTefe"
          width="480"
          frameBorder="0"
          className="giphy-embed"
          title="Gif 3"
          allowFullScreen
        ></iframe>
      </>
    ),
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
          frameBorder="0"
          className="giphy-embed"
          title="Gif 4"
          allowFullScreen
        ></iframe>
      </>
    ),
  },
] as SocialPost[];
