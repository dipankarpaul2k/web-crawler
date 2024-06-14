// npm i @json2csv/node
import { URL } from "url";
import { Parser } from "json2csv";
import * as fs from "node:fs";

export function buildSearchUrl(baseUrl, path, parameters) {
  const url = new URL(path, baseUrl);

  const query = `${parameters.primaryCategory || ""} ${
    parameters.secondaryCategory || ""
  } ${parameters.geography || ""} ${parameters.dateRange || ""}`.trim();

  if (query) {
    url.searchParams.append("q", query);
  }

  // console.log(url.toString());
  return url.toString();
}

export function saveToCSV(data, filename) {
  const parser = new Parser();
  const csv = parser.parse(data);

  fs.writeFileSync(filename, csv);
  console.log(`Data saved to ${filename}`);
}
