import React from 'react';

type CodepenProps = {
  url: string;
  altText: string;
};

export function Codepen({ url, altText = 'Embedded codepen' }: CodepenProps) {
  const embedId = getCodepenEmbedId(url);

  return (
    <div className="w-full">
      <div className="overflow-hidden pb-[56.25%] relative">
      <iframe 
          height="300" 
          style={{width: "100%"}} 
          scrolling="no" 
          title={altText} 
          src={`https://codepen.io/ruphaa/embed/${embedId}?default-tab=result`}
          frameBorder="no" 
          loading="lazy" 
          allowTransparency={true}
          allowFullScreen={true}
      >
        See the Pen <a href={url}>
        Center a DIV!</a> by Ruphaa Ganesh (<a href="https://codepen.io/ruphaa">@ruphaa</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
  );
}

function getCodepenEmbedId(url: string) {
  let embedId: RegExp;
  // const parsedUrl = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  // if (parsedUrl[2] !== undefined) {
  //   // eslint-disable-next-line no-useless-escape
  //   const parsedId = parsedUrl[2].split(/[^0-9a-z_\-]/i);
  //   embedId = parsedId[0];
  // } else {
  //   embedId = url;
  // }
  embedId = /https?.*codepen.io.*pen\/(.*)/gi;

  return embedId;
}
