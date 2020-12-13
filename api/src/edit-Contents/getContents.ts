import fs from "fs";
import { Content } from "../types/types";
import { dataPath } from "../env/paths";

export function getContents(): Content[] {
  //console.log(process.cwd());

  try {
    const contents = fs.readFileSync(dataPath, "utf-8");

    console.log(JSON.parse(contents));
    if (!contents) return [];
    return JSON.parse(contents);
  } catch (e) {
    if (e.code === "ENOENT") {
      return [];
    } else {
      throw e;
    }
  }
}
