const express = require("express");
const { addFolder, getFolder, updateFolder, deleteFolder, fetchFoldersRecursively, getParentPath, getCollection } = require("../controllers/folderController");

const router = express.Router();

router.post("/addFolder", addFolder);
router.get("/getFolder/:folderPath", getFolder);
router.get("/getCollection/:path", getCollection);
router.put("/updateFolder", updateFolder);
router.delete("/deleteFolder/:folderPath", deleteFolder);
router.get('/fetchFoldersRecursively/:folderpath', fetchFoldersRecursively);
router.get('/getParentPath', getParentPath);

module.exports = router;
