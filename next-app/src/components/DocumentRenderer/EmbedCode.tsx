import React from 'react';

type EmbedCodeProps = {
  codeSrc: string;
};

export function EmbedCode({ codeSrc }: EmbedCodeProps) {
  return <div dangerouslySetInnerHTML={{ __html: codeSrc }} />
};

/**
 * Embed ideas:
 * 
 * Codepen embed - using iframe
 * <iframe height="300" style="width: 100%;" scrolling="no" title="Google home page - Neumorphic Design" src="https://codepen.io/ruphaa/embed/wvqejzd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ruphaa/pen/wvqejzd">
  Google home page - Neumorphic Design</a> by Ruphaa Ganesh (<a href="https://codepen.io/ruphaa">@ruphaa</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
 * 
 */