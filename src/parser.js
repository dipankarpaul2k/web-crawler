import * as cheerio from "cheerio";
import { URL } from "url";

export function parseHTML(html, selectors, baseUrl) {
  const $ = cheerio.load(html);
  const links = [];

  $(selectors.link).each((i, el) => {
    const link = $(el).attr("href");
    if (link.slice(0, 1) === "/") {
      // relative link
      const url = new URL(link, baseUrl);
      links.push(url.toString());
    } else if (link.slice(0, 1) === "#") {
      // relative link
      const url = new URL(link, baseUrl);
      links.push(url.toString());
    } else {
      // absolute link
      links.push(link);
    }
  });

  return links;
}
