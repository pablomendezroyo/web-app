import React from "react";
import Content from "./Content";
import { ContentInterface } from "../../../types/types";
import { CardDeck } from "react-bootstrap";

export default function ContentList({
  contents,
  toggleContent,
}: {
  contents: ContentInterface[];
  toggleContent: Function;
}): JSX.Element {
  return (
    <CardDeck>
      {contents.map((content) => (
        <Content
          key={content.id}
          toggleContent={toggleContent}
          content={content}
        />
      ))}
    </CardDeck>
  );
}
