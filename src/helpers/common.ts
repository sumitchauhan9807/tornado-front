import { assetsURL } from "@/src/http-client/axios";

export const appendBaseUrl = (url: string): string => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;

  return assetsURL + url;
};

export function strapiRichTextToText(richText) {
    if (!Array.isArray(richText)) {
        return '';
    }
    return richText.map(block => (block.children || []).map(child => child.text || '').join('')).join('\n');
}
