import { hero } from './hero';
import { callout } from './callout';
import { quote } from './quote';
import { code } from './code';
import { tweet } from './tweet';
import { image } from './image';
import { embedCode } from './embed-code';
import { youtubeVideo } from './youtube-video';

// it's important that this file has a named export called componentBlocks
// schema.Post.ui.views import looks for a named export `componentBlocks`
export const componentBlocks = {
  hero,
  image,
  callout,
  quote,
  code,
  tweet,
  youtubeVideo,
  embedCode,
};
