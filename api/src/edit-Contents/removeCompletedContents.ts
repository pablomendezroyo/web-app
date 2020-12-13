import { getContents } from "./getContents";
import { setContents } from "./setContents";

export function removeCompletedContents() {
  const contents = getContents();
  const contentsToKeep = contents.filter(
    (content) => content.completed === false
  );
  setContents(contentsToKeep);
}
