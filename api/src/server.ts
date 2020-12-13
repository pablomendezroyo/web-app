import express from "express";
import bodyParser from "body-parser";
import { getContents } from "./edit-Contents/getContents";
import { setContent } from "./edit-Contents/setContent";
import { removeCompletedContents } from "./edit-Contents/removeCompletedContents";
import { setStatusTodo } from "./edit-Contents/setStatusContent";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import { filePath } from "./env/paths";

dotenv.config();
const app = express();
app.use(express.json());
// middle ware
app.use(express.static("public")); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(
  fileUpload({
    tempFileDir: filePath,
  })
);

app.post("/api/upload", (req, res) => {
  try {
    if (req.files) {
      const fileName = req.files.file as fileUpload.UploadedFile;
      console.log(fileName);

      //mv(path, CB function(err))
      fileName.mv("./public/files/" + fileName.name, (err) => {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
      });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.post("/api/set-content", (req, res) => {
  try {
    setContent(req.body);

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(401);
  }
});

app.get("/api/get-contents", (req, res) => {
  try {
    const contents = getContents();
    res.send(contents);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

app.post("/api/remove-completed-contents", (req, res) => {
  try {
    removeCompletedContents();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

app.post("/api/set-status-content", (req, res) => {
  try {
    setStatusTodo(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    console.log(req.body);
    res.sendStatus(404);
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
