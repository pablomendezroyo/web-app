import { Content } from "../types/types";
import { getContents } from "./getContents";
import { setContents } from "./setContents";

export function setContent(content: Content) {
  const contents = getContents();
  contents.push({
    subject: content.subject,
    id: content.id,
    name: content.name,
    description: content.description,
    completed: content.completed,
    link: content.link,
    linkName: content.linkName,
    filePath: content.filePath,
  });
  setContents(contents);
}
