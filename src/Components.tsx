import { ImgHTMLAttributes } from "react";

// Required for Link targets in markdown
export const MarkdownLink = (props: any) => (
  <a
    href={props.href}
    className="text-purple-400 hover:underline"
    target="_blank"
    rel="noreferrer"
  >
    {props.children}
  </a>
);

export const MarkdownImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={props.src} alt={props.alt} className={props.className} />;
};
