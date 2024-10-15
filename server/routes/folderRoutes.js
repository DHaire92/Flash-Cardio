const express = require("express");
const { addFolder, getFolder, updateFolder, deleteFolder, fetchFoldersRecursively, getParentPath } = require("../controllers/folderController");

const router = express.Router();

router.post("/addFolder", addFolder);
router.get("/getFolder/:folderPath", getFolder);
router.put("/updateFolder", updateFolder);
router.delete("/deleteFolder/:folderPath", deleteFolder);
router.get('/fetchFoldersRecursively/:folderPath', fetchFoldersRecursively);
router.get('/getParentPath', getParentPath);

module.exports = router;
