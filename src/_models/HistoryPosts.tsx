import React from 'react';
import { SocialPost } from './SocialPost';

export const historyPosts = [
    {
      date: "November 2018 - undefined",
      text: <><p className="status">Working <a href="" target="_blank">@LogMeIn</a></p>
      <iframe src="https://giphy.com/embed/l0Iy7zmLUiALbkna8" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </>
    },
    {
      date: "May 2018 - November 2018",
      text: <><p className="status">New job <a href="" target="_blank">@LGS</a></p>
            <iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </>
    },
    {
      date: "April 2015 - May 2018",
      text: <><p className="status">First job! <a href="" target="_blank">@PG Solutions</a></p>
      <iframe src="https://giphy.com/embed/IpeYSEZshTefe" width="480" height="344" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </>
    },
    {
      date: "May 2015",
      text: <>
        <p className="status">Done with school! <a href="" target="_blank">@Cégep de Rimouski</a> 🎓</p>
        <iframe src="https://giphy.com/embed/qLHzYjlA2FW8g" width="480" height="209" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </>
    }
  ] as SocialPost[];