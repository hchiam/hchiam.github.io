import axios from "axios";

export default async function getMockData(pathName: string = "") {
  const data = await axios.get(
    "https://mock-hchiam-site-data.hchiam.workers.dev/" + pathName
  );
  return data.data;
}
