const express = require('express');
const admin = require('firebase-admin');

const serviceAccount = require('./keys/flashcardio-594f2-firebase-adminsdk-bxba3-fe9497b258.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/test-server', async (req, res) => {
    try {
        return res.status(200).send('success!');
    } catch (error) {
        return res.status(500).send('failed!');
    }
});

app.post('/update-folder', async (req, res) => {
  const { path, folderStructure } = req.body;

  if (!path || !folderStructure) {
    return res.status(400).json({ error: 'Path and folderStructure are required.' });
  }

  try {
    const folderRef = db.collection('folders').doc(path); // Store folder path as a document ID
    await folderRef.set({ folderStructure }, { merge: true }); // Update folder structure in Firestore

    return res.status(200).json({ message: 'Folder structure updated successfully.' });
  } catch (error) {
    console.error('Error updating folder structure:', error);
    return res.status(500).json({ error: 'Failed to update folder structure.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
