import { assetsURL } from "@/src/http-client/axios";

export const appendBaseUrl = (url: string): string => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;

  return assetsURL + url;
};

export function strapiRichTextToText(content) {
    if (!Array.isArray(content)) return "";

  const data = content
    .map((block) =>
      (block.children || [])
        .map((child) => child.text || "")
        .join("")
    )
    .join("\n");
    return data
}