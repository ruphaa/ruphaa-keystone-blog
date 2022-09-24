import React from 'react';

type ImageProps = {
  imageSrc: string;
  altText: string;
};

export function Image({ imageSrc, altText }: ImageProps) {
  return (
    <figure className="not-prose mt-14 max-w-[50rem]">
      <img src={imageSrc} alt={altText} className="h-auto max-w-full w-full align-middle" />
    </figure>
  );
}
