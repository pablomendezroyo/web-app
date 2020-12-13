import axios from "axios";
import React from "react";
import { ContentInterface } from "../../../types/types";
import { Button, Card, ToggleButton } from "react-bootstrap";
import { headerColors } from "./headerColors";
import "./contentStyles.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Content({
  content,
  toggleContent,
}: {
  content: ContentInterface;
  toggleContent: Function;
}): JSX.Element {
  function contentClickHandler() {
    toggleContent(content.id);
    apiSetStatusContent(content);
  }

  return (
    <>
      <div className="container-cards d-flex justify-content-center">
        <Card>
          <Card.Header
            style={{
              backgroundColor: headerColors.find(
                (item) => item.subject === content.subject
              )?.color,
            }}
          >
            {content.subject}
          </Card.Header>
          <Card.Title>{content.name}</Card.Title>

          <Card.Body>
            <Card.Text>{content.description}</Card.Text>
            <ToggleButton
              checked={content.completed}
              type="checkbox"
              value={content.completed}
              onChange={contentClickHandler}
            ></ToggleButton>

            {content.link.length > 0 ? (
              <Card.Link href={`${content.link}`}>{content.linkName}</Card.Link>
            ) : null}
            {content.filePath.length > 0 ? (
              <Button onClick={(e) => apiGetFile(content.filePath)}>
                Download
              </Button>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

async function apiGetFile(filePath: string) {
  try {
    const file = await axios.post("/api/download", filePath);
    return file;
  } catch (e) {
    console.log(e);
  }
}

async function apiSetStatusContent(content: ContentInterface) {
  try {
    await axios.post("/api/set-status-content", content);
  } catch (e) {
    console.log(e);
  }
}
