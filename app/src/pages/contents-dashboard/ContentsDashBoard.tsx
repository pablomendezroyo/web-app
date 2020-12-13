import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Type
import { ContentInterface } from "../../types/types";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import ContentList from "./components/ContentList";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ContentsDashBoard() {
  const [idFromButtonClick, setIdFromButtonClick] = React.useState(0);
  const [contents, setContents] = React.useState<ContentInterface[]>([]);
  const [selectedFile, setSelectedFile] = React.useState<File>();

  const contentNameRef = React.useRef<HTMLInputElement>(null);
  const contentDescriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const contentLinksRef = React.useRef<HTMLInputElement>(null);
  const contentLinkNameRef = React.useRef<HTMLInputElement>(null);
  const contentSubjectRef = React.useRef<HTMLSelectElement>(null);

  React.useEffect(() => {
    apiGetContents()
      .then((res) => setContents(res))
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  function addFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setSelectedFile(fileList[0]);
  }

  function toggleContent(id: string) {
    const newContents = [...contents];
    const content = newContents.find((content) => content.id === id);
    if (content) content.completed = !content.completed;
    setContents(newContents);
  }

  function addContentHandler() {
    if (
      contentNameRef.current &&
      contentDescriptionRef.current &&
      contentLinksRef.current &&
      contentLinkNameRef.current &&
      contentSubjectRef.current
    ) {
      const content: ContentInterface = {
        subject: contentSubjectRef.current.value,
        id: uuidv4(),
        name: contentNameRef.current.value,
        description: contentDescriptionRef.current.value,
        completed: false,
        link: contentLinksRef.current.value,
        linkName: contentLinkNameRef.current.value,
        filePath: selectedFile ? selectedFile.name : "",
      };

      apiSetContent(content);
      contentDescriptionRef.current.value = "";
      contentNameRef.current.value = "";
      if (contentLinksRef.current) {
        contentLinksRef.current.value = "";
        contentLinkNameRef.current.value = "";
      }
      if (selectedFile) apiSetFile();
    }
  }

  // API calls
  async function apiSetFile() {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile, selectedFile.name);
        await axios.post("/api/upload", formData);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function apiGetContents() {
    try {
      const response = await axios.get("/api/get-contents");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async function apiSetContent(content: ContentInterface) {
    try {
      await axios.post("/api/set-content", content);
      setIdFromButtonClick(idFromButtonClick + 1);
    } catch (e) {
      console.log(e);
    }
  }

  async function apiRemoveContents() {
    try {
      await axios.post("/api/remove-completed-contents");
      setIdFromButtonClick(idFromButtonClick + 1);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ContentList contents={contents} toggleContent={toggleContent} />
      <Container>
        <Form>
          <Form.Group controlId="formTitleContent">
            <Form.Label>Asignatura</Form.Label>
            <Form.Control as="select" ref={contentSubjectRef}>
              <option>Lengua Castellana</option>
              <option>Geografía e Historia</option>
              <option>Latín</option>
              <option>Deberes</option>
              <option>Otros</option>{" "}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTitleContent">
            <Form.Label>Titulo del contenido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sintaxis"
              ref={contentNameRef}
            />
          </Form.Group>

          <Form.Group controlId="formDescriptionContent">
            <Form.Label>Descripcion del contenido</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Descripción"
              ref={contentDescriptionRef}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="formLinkContent">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https//:example.com"
                ref={contentLinksRef}
              />
            </Form.Group>
            <Form.Group controlId="formLinkNameContent">
              <Form.Label>Link Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="sintaxis definition"
                ref={contentLinkNameRef}
              />
            </Form.Group>

            <input
              type="file"
              multiple={false}
              onChange={addFileHandler}
            ></input>
          </Form.Row>

          <Button variant="primary" onClick={addContentHandler}>
            Añadir contenido
          </Button>
          <Button variant="secondary" onClick={apiRemoveContents}>
            {`Eliminar ${
              contents.filter((content) => content.completed).length
            } contenidos`}
          </Button>
        </Form>
      </Container>
    </>
  );
}
