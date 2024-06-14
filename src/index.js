import { crawl } from "./crawler.js";
import { saveToCSV } from "./utils.js";

async function main() {
  const parameters = {
    primaryCategory: "Medical Journal",
    // secondaryCategory: "Orthopedic",
    geography: "India",
    // dateRange: "2022",
  };

  const links = await crawl(parameters);
  if (links && links.length > 0) {
    const data = links.map((link) => ({ URL: link }));
    await saveToCSV(data, "output.csv");
  } else {
    console.log("No links found.");
  }
}

main();
