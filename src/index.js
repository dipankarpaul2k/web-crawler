import { crawl } from "./crawler.js";
import { saveToCSV } from "./utils.js";
import inquirer from "inquirer";

async function main() {
  const questions = [
    {
      type: "input",
      name: "primaryCategory",
      message: "Enter the primary category:",
      default: "News",
    },
    {
      type: "input",
      name: "secondaryCategory",
      message: "Enter the secondary category:",
      default: "Technology",
    },
    {
      type: "input",
      name: "geography",
      message: "Enter the geography:",
      default: "US",
    },
    {
      type: "input",
      name: "dateRange",
      message: "Enter the date range:",
      default: "2023",
    },
    {
      type: "input",
      name: "output",
      message: "Enter the output CSV file name:",
      default: "output.csv",
    },
  ];

  const options = await inquirer.prompt(questions);

  const parameters = {
    primaryCategory: options.primaryCategory,
    secondaryCategory: options.secondaryCategory,
    geography: options.geography,
    dateRange: options.dateRange,
  };

  console.log("Fetching data...");
  const links = await crawl(parameters);
  if (links && links.length > 0) {
    const data = links.map((link) => ({ URL: link }));
    saveToCSV(data, options.output);
  } else {
    console.log("No links found.");
  }
}

main();
