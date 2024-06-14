import axios from "axios";

export async function fetchPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Error fetching ${url}: ${error}`);
    return null;
  }
}
