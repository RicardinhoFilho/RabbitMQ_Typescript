import { Router } from "express";
import multer from "multer";

import { AnexoController } from "../Controllers/AnexoController";
import { authMiddleware } from "../Middlewares/authMiddleware";
import { anexos_folder } from "../utils/path";
import { v4 as uuid } from "uuid";
import path from "path";

let newFileName: string;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, anexos_folder);
  },
  filename: function (req, file, cb) {
    newFileName = uuid() + path.extname(file.originalname.toLowerCase());
    cb(null, newFileName);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    var ext = path.extname(file.originalname.toLowerCase());
    if (
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".gif" &&
      ext !== ".jpeg" &&
      ext !== ".pdf"
    ) {
      return callback(new Error("Arquivo não permitido!"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 10485760, //10MB
  },
});

const router = Router();
const baseUrl = "/anexo";
const controller = new AnexoController();

router.post(`${baseUrl}`, authMiddleware, upload.single("file"), (req, res) => {
  controller.create(req, res, newFileName);
  newFileName = "";
});

export default router;
