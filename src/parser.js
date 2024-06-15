import * as cheerio from "cheerio";
import { URL } from "url";

export function parseHTML(html, selectors, baseUrl) {
  const $ = cheerio.load(html);
  const links = [];

  $(selectors.link).each((i, el) => {
    const link = $(el).attr("href");
    let url;

    if (link.slice(0, 1) === "/") {
      // relative link
      url = new URL(link, baseUrl);
    } else if (link.slice(0, 1) === "#") {
      // relative link
      url = new URL(link, baseUrl);
    } else {
      // absolute link
      url = link;
    }

    if (!links.includes(url.toString())) {
      links.push(url.toString());
    }
  });

  return links;
}
