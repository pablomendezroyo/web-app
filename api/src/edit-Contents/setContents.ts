import fs from "fs";
import { Content } from "../types/types";
import { dataPath } from "../env/paths";

export function setContents(contents: Content[]) {
  fs.writeFileSync(dataPath, JSON.stringify(contents));
}
